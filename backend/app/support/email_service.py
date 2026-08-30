import os
import smtplib

import resend

from email.message import EmailMessage
from pathlib import Path

from app.database.models import SupportTicket


# --------------------------------
# Resend API configuration
# --------------------------------

RESEND_API_KEY = os.getenv(
    "RESEND_API_KEY"
)

RESEND_FROM_EMAIL = os.getenv(
    "RESEND_FROM_EMAIL",
    "onboarding@resend.dev",
)


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

    Primary:
        Resend API

    Fallback:
        SMTP

    Includes ticket details and attaches
    the screenshot if one was uploaded.
    """

    # --------------------------------
    # 1. Validate recipients
    # --------------------------------

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
    # 3. Build email content
    # --------------------------------

    subject = (
        f"New Support Ticket: {ticket.ticket_id}"
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

    # ================================================
    # 4. TRY RESEND API FIRST
    # ================================================

    if RESEND_API_KEY:

        try:

            resend.api_key = RESEND_API_KEY

            params = {
                "from": RESEND_FROM_EMAIL,
                "to": recipients,
                "subject": subject,
                "text": email_body,
            }

            # --------------------------------
            # Attach screenshot if available
            # --------------------------------

            if ticket.screenshot_path:

                screenshot_path = Path(
                    ticket.screenshot_path
                )

                if screenshot_path.exists():

                    import base64

                    file_data = (
                        screenshot_path.read_bytes()
                    )

                    encoded_file = (
                        base64.b64encode(
                            file_data
                        ).decode("utf-8")
                    )

                    params["attachments"] = [
                        {
                            "filename": screenshot_path.name,
                            "content": encoded_file,
                        }
                    ]

            resend.Emails.send(
                params
            )

            print(
                "Ticket email sent successfully using Resend API."
            )

            return

        except Exception as e:

            print(
                f"Resend email failed: {e}"
            )

            print(
                "Falling back to SMTP..."
            )

    else:

        print(
            "RESEND_API_KEY not configured. "
            "Falling back to SMTP..."
        )

    # ================================================
    # 5. FALLBACK TO SMTP
    # ================================================

    if not SMTP_USERNAME:

        raise ValueError(
            "SMTP_USERNAME is not configured."
        )

    if not SMTP_PASSWORD:

        raise ValueError(
            "SMTP_PASSWORD is not configured."
        )

    message = EmailMessage()

    message["Subject"] = subject

    message["From"] = SMTP_USERNAME

    message["To"] = ", ".join(
        recipients
    )

    message.set_content(
        email_body
    )

    # --------------------------------
    # Attach screenshot
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
    # Send using SMTP
    # --------------------------------

    try:

        with smtplib.SMTP(
            SMTP_HOST,
            SMTP_PORT,
            timeout=10,
        ) as server:

            server.starttls()

            server.login(
                SMTP_USERNAME,
                SMTP_PASSWORD,
            )

            server.send_message(
                message
            )

        print(
            "Ticket email sent successfully using SMTP."
        )

    except Exception as e:

        print(
            f"SMTP email failed: {e}"
        )

        raise