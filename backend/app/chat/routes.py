from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.rag.service import ask_rag

from app.chat.service import (
    create_chat_session,
    get_active_session,
    save_message,
    get_recent_messages,
    delete_chat_session,
)

from app.chat.history import format_chat_history


router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


# --------------------------------
# Request model
# --------------------------------

class ChatRequest(BaseModel):

    query: str = Field(
        ...,
        min_length=1,
        description="User's question",
    )

    session_id: str | None = None

    module_id: int | None = None


# --------------------------------
# Chat endpoint
# --------------------------------

@router.post("/")
def chat(request: ChatRequest):
    """
    Accept a user question and maintain
    conversation session history.
    """

    try:

        # --------------------------------
        # 1. Create or validate session
        # --------------------------------

        if request.session_id:

            session = get_active_session(
                request.session_id
            )

            if not session:
                raise HTTPException(
                    status_code=404,
                    detail=(
                        "Chat session not found or has expired."
                    ),
                )

        else:

            session = create_chat_session(
                module_id=request.module_id
            )

        # --------------------------------
        # 2. Get previous conversation
        # --------------------------------

        recent_messages = get_recent_messages(
            session_id=session.session_id,
            limit=8,
        )

        chat_history = format_chat_history(
            recent_messages
        )

        # --------------------------------
        # 3. Save current user message
        # --------------------------------

        save_message(
            session_id=session.session_id,
            role="user",
            content=request.query,
        )

        effective_module_id = (
            request.module_id
            if request.module_id is not None
            else session.module_id
        )
        # --------------------------------
        # 4. Generate RAG response
        # --------------------------------

        response = ask_rag(
            query=request.query,
            module_id=effective_module_id,
            chat_history=chat_history,
        )

        # --------------------------------
        # 5. Save assistant response
        # --------------------------------

        # Store the complete structured answer
        # as a JSON string later if needed.
        # For now, save the summary.

        assistant_parts = []

        summary = response.get("summary")

        if summary:
            assistant_parts.append(summary)

        additional_information = response.get(
            "additional_information"
        )

        if additional_information:
            assistant_parts.append(
                f"Additional information: {additional_information}"
            )

        assistant_content = "\n\n".join(
            assistant_parts
        )

        save_message(
            session_id=session.session_id,
            role="assistant",
            content=assistant_content,
        )

        # --------------------------------
        # 6. Return response with session ID
        # --------------------------------

        return {
            "session_id": session.session_id,
            "response": response,
        }

    except HTTPException:
        raise

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=str(error),
        )


# --------------------------------
# Delete chat session
# --------------------------------

@router.delete(
    "/{session_id}",
)
def remove_chat_session(
    session_id: str,
):
    """
    Delete a chat session and all
    related chat messages.
    """

    try:

        deleted = delete_chat_session(
            session_id
        )

        if not deleted:

            raise HTTPException(
                status_code=404,
                detail=(
                    "Chat session not found."
                ),
            )

        return {
            "message": (
                "Chat session deleted successfully."
            )
        }

    except HTTPException:
        raise

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=str(error),
        )