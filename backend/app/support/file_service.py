from pathlib import Path
from uuid import uuid4

from fastapi import HTTPException, UploadFile


# --------------------------------
# Upload configuration
# --------------------------------

UPLOAD_DIRECTORY = Path(
    "app/assets/tickets"
)

MAX_FILE_SIZE = 5 * 1024 * 1024  # 5 MB


ALLOWED_CONTENT_TYPES = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
}


async def save_ticket_screenshot(
    screenshot: UploadFile,
    ticket_id: str,
) -> str:
    """
    Validate and save a ticket screenshot.

    Returns the saved file path.
    """

    # --------------------------------
    # 1. Validate content type
    # --------------------------------

    if screenshot.content_type not in ALLOWED_CONTENT_TYPES:

        raise HTTPException(
            status_code=400,
            detail=(
                "Invalid screenshot format. "
                "Only PNG and JPG images are allowed."
            ),
        )

    # --------------------------------
    # 2. Read file
    # --------------------------------

    file_content = await screenshot.read()

    # --------------------------------
    # 3. Validate file size
    # --------------------------------

    if len(file_content) > MAX_FILE_SIZE:

        raise HTTPException(
            status_code=400,
            detail=(
                "Screenshot size must not exceed 5 MB."
            ),
        )

    # --------------------------------
    # 4. Create upload directory
    # --------------------------------

    UPLOAD_DIRECTORY.mkdir(
        parents=True,
        exist_ok=True,
    )

    # --------------------------------
    # 5. Generate safe filename
    # --------------------------------

    extension = ALLOWED_CONTENT_TYPES[
        screenshot.content_type
    ]

    unique_id = uuid4().hex[:12]

    filename = (
        f"{ticket_id}_{unique_id}{extension}"
    )

    file_path = (
        UPLOAD_DIRECTORY / filename
    )

    # --------------------------------
    # 6. Save file
    # --------------------------------

    with open(
        file_path,
        "wb",
    ) as file:

        file.write(file_content)

    # --------------------------------
    # 7. Close uploaded file
    # --------------------------------

    await screenshot.close()

    return str(file_path)