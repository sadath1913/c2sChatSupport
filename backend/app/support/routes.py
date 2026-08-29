from uuid import uuid4

from fastapi import (
    APIRouter,
    File,
    Form,
    HTTPException,
    UploadFile,
    status,
)

from pydantic import BaseModel, Field

from app.database.connection import SessionLocal
from app.support.email_service import (
    send_ticket_email,
)
from app.database.models import (
    Module,
    ResolvedIssue,
    SupportTicket,
)

from app.support.file_service import save_ticket_screenshot


router = APIRouter(
    prefix="/support",
    tags=["Support"], 
)


# =========================================================
# REQUEST MODELS
# =========================================================


class ResolvedIssueRequest(BaseModel):

    institute_name: str = Field(
        ...,
        min_length=1,
        max_length=255,
    )

    module_id: int

    section: str = Field(
        ...,
        min_length=1,
        max_length=255,
    )

    issue: str = Field(
        ...,
        min_length=1,
    )

    resolution_steps: str = Field(
        ...,
        min_length=1,
    )


# =========================================================
# 1. GET ALL MODULES
# =========================================================


@router.get("/modules")
def get_modules():
    """
    Return all available ChipIN modules
    for the frontend dropdown.
    """

    db = SessionLocal()

    try:

        modules = (
            db.query(Module)
            .order_by(Module.name.asc())
            .all()
        )

        return [
            {
                "id": module.id,
                "name": module.name,
                "description": module.description,
            }
            for module in modules
        ]

    finally:

        db.close()


# =========================================================
# 2. STORE RESOLVED ISSUE
# =========================================================


@router.post(
    "/resolved-issues",
    status_code=status.HTTP_201_CREATED,
)
def create_resolved_issue(
    request: ResolvedIssueRequest,
):
    """
    Store information about an issue that
    was successfully resolved.
    """

    db = SessionLocal()

    try:

        # --------------------------------
        # Validate module
        # --------------------------------

        module = (
            db.query(Module)
            .filter(
                Module.id == request.module_id
            )
            .first()
        )

        if not module:

            raise HTTPException(
                status_code=404,
                detail="Selected module was not found.",
            )

        # --------------------------------
        # Create resolved issue
        # --------------------------------

        resolved_issue = ResolvedIssue(

            institute_name=request.institute_name,

            module_id=request.module_id,

            section=request.section,

            issue=request.issue,

            resolution_steps=request.resolution_steps,
        )

        db.add(resolved_issue)

        db.commit()

        db.refresh(resolved_issue)

        return {
            "message": (
                "Resolved issue recorded successfully."
            ),
            "id": resolved_issue.id,
        }

    except HTTPException:

        raise

    except Exception as error:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=str(error),
        )

    finally:

        db.close()


# =========================================================
# 3. CREATE SUPPORT TICKET
# =========================================================


@router.post(
    "/tickets",
    status_code=status.HTTP_201_CREATED,
)
async def create_support_ticket(

    institute_name: str = Form(
        ...,
        min_length=1,
        max_length=255,
    ),

    module_id: int = Form(...),

    section: str = Form(
        ...,
        min_length=1,
        max_length=255,
    ),

    issue: str = Form(
        ...,
        min_length=1,
    ),

    exact_error: str | None = Form(None),

    environment: str | None = Form(None),

    network_license_details: str | None = Form(None),

    steps_tried: str | None = Form(None),

    additional_details: str | None = Form(None),

    screenshot: UploadFile | None = File(None),
):
    """
    Create a new support ticket with
    optional screenshot upload.
    """

    db = SessionLocal()

    screenshot_path = None

    try:

        # --------------------------------
        # 1. Validate module
        # --------------------------------

        module = (
            db.query(Module)
            .filter(
                Module.id == module_id
            )
            .first()
        )

        if not module:

            raise HTTPException(
                status_code=404,
                detail="Selected module was not found.",
            )

        # --------------------------------
        # 2. Generate ticket ID
        # --------------------------------

        ticket_id = (
            f"C2S-{uuid4().hex[:8].upper()}"
        )

        # --------------------------------
        # 3. Save screenshot
        # --------------------------------

        if screenshot:

            screenshot_path = (
                await save_ticket_screenshot(
                    screenshot=screenshot,
                    ticket_id=ticket_id,
                )
            )

        # --------------------------------
        # 4. Create ticket
        # --------------------------------

        ticket = SupportTicket(

            ticket_id=ticket_id,

            institute_name=institute_name,

            module_id=module_id,

            section=section,

            issue=issue,

            exact_error=exact_error,

            environment=environment,

            network_license_details=(
                network_license_details
            ),

            steps_tried=steps_tried,

            additional_details=(
                additional_details
            ),

            screenshot_path=screenshot_path,

            status="open",
        )

        db.add(ticket)

        db.commit()

        db.refresh(ticket)

        # --------------------------------
        # 5. Send ticket notification email
        # --------------------------------

        email_sent = True

        try:

            send_ticket_email(
                ticket=ticket
            )

        except Exception as email_error:

            email_sent = False

            print(
                f"Failed to send ticket email: "
                f"{email_error}"
            )

        # --------------------------------
        # 5. Return ticket response
        # --------------------------------

        return {
            "message": (
                "Support ticket created successfully."
            ),
            "ticket_id": ticket.ticket_id,
            "status": ticket.status,
            "created_at": ticket.created_at,
            "email_sent": email_sent,
        }

    except HTTPException:

        db.rollback()

        raise

    except Exception as error:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=str(error),
        )

    finally:

        db.close()