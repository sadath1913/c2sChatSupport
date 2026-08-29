import os
import smtplib

from email.message import EmailMessage
from pathlib import Path

from app.database.models import SupportTicket


# --------------------------------
# SMTP configuration
# --------------------------------

SMTP_HOST = os.getenv(
    "SMTP_HOST",
    "smtp.gmail.com",
)

SMTP_PORT = int(
    os.getenv(
        "SMTP_PORT",
        "587",
    )
)

SMTP_USERNAME = os.getenv(
    "SMTP_USERNAME"
)

SMTP_PASSWORD = os.getenv(
    "SMTP_PASSWORD"
)

SUPPORT_EMAILS = os.getenv(
    "SUPPORT_EMAILS",
    "",
)


def send_ticket_email(
    ticket: SupportTicket,
):
    """
    Send a support ticket notification email.

    Includes ticket details and attaches
    the screenshot if one was uploaded.
    """

    # --------------------------------
    # 1. Validate email configuration
    # --------------------------------

    if not SMTP_USERNAME:

        raise ValueError(
            "SMTP_USERNAME is not configured."
        )

    if not SMTP_PASSWORD:

        raise ValueError(
            "SMTP_PASSWORD is not configured."
        )

    # Convert comma-separated emails
    # into a clean list of recipients
    recipients = [
        email.strip()
        for email in SUPPORT_EMAILS.split(",")
        if email.strip()
    ]

    if not recipients:

        raise ValueError(
            "SUPPORT_EMAILS is not configured."
        )

    # --------------------------------
    # 2. Get module name
    # --------------------------------

    module_name = "Unknown"

    if ticket.module:

        module_name = ticket.module.name

    # --------------------------------
    # 3. Build email
    # --------------------------------

    message = EmailMessage()

    message["Subject"] = (
        f"New Support Ticket: {ticket.ticket_id}"
    )

    message["From"] = SMTP_USERNAME

    # Show all support recipients
    message["To"] = ", ".join(
        recipients
    )

    email_body = f"""
A new C2S ChipIN support ticket has been raised.

--------------------------------
TICKET DETAILS
--------------------------------

Ticket ID:
{ticket.ticket_id}

Status:
{ticket.status}

Created At:
{ticket.created_at}

--------------------------------
INSTITUTE DETAILS
--------------------------------

Institute Name:
{ticket.institute_name}

Module:
{module_name}

Section:
{ticket.section}

--------------------------------
ISSUE DETAILS
--------------------------------

Issue:
{ticket.issue}

Exact Error:
{ticket.exact_error or "Not provided"}

Environment:
{ticket.environment or "Not provided"}

Network / License Details:
{ticket.network_license_details or "Not provided"}

Steps Already Tried:
{ticket.steps_tried or "Not provided"}

Additional Details:
{ticket.additional_details or "Not provided"}
"""

    message.set_content(
        email_body
    )

    # --------------------------------
    # 4. Attach screenshot
    # --------------------------------

    if ticket.screenshot_path:

        screenshot_path = Path(
            ticket.screenshot_path
        )

        if screenshot_path.exists():

            file_data = (
                screenshot_path.read_bytes()
            )

            extension = (
                screenshot_path.suffix.lower()
            )

            if extension == ".png":

                maintype = "image"
                subtype = "png"

            elif extension in [
                ".jpg",
                ".jpeg",
            ]:

                maintype = "image"
                subtype = "jpeg"

            else:

                maintype = "application"
                subtype = "octet-stream"

            message.add_attachment(
                file_data,
                maintype=maintype,
                subtype=subtype,
                filename=screenshot_path.name,
            )

    # --------------------------------
    # 5. Send email
    # --------------------------------

    with smtplib.SMTP(
        SMTP_HOST,
        SMTP_PORT,
    ) as server:

        server.starttls()

        server.login(
            SMTP_USERNAME,
            SMTP_PASSWORD,
        )

        server.send_message(
            message
        )