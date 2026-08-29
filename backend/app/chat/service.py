from datetime import datetime, timedelta
from uuid import uuid4

from app.database.connection import SessionLocal
from app.database.models import ChatSession, ChatMessage


SESSION_TIMEOUT_MINUTES = 15


def create_chat_session(
    module_id: int | None = None,
):
    """
    Create a new chat session.
    """

    db = SessionLocal()

    try:
        session = ChatSession(
            session_id=str(uuid4()),
            module_id=module_id,
            status="active",
            conversation_summary=None,
        )

        db.add(session)
        db.commit()
        db.refresh(session)

        return session

    finally:
        db.close()


def get_active_session(
    session_id: str,
):
    """
    Get an active chat session.

    Returns None if the session does not exist,
    is inactive, or has expired.
    """

    db = SessionLocal()

    try:
        session = (
            db.query(ChatSession)
            .filter(
                ChatSession.session_id == session_id,
                ChatSession.status == "active",
            )
            .first()
        )

        if not session:
            return None

        expiration_time = (
            datetime.utcnow()
            - timedelta(
                minutes=SESSION_TIMEOUT_MINUTES
            )
        )

        # Session expired
        if session.last_activity_at < expiration_time:

            db.delete(session)

            db.commit()

            return None

        return session

    finally:
        db.close()


def save_message(
    session_id: str,
    role: str,
    content: str,
):
    """
    Save a user or assistant message.
    """

    db = SessionLocal()

    try:
        session = (
            db.query(ChatSession)
            .filter(
                ChatSession.session_id == session_id
            )
            .first()
        )

        if not session:
            return None

        message = ChatMessage(
            chat_session_id=session.id,
            role=role,
            content=content,
        )

        db.add(message)

        # Update session activity
        session.last_activity_at = datetime.utcnow()

        db.commit()
        db.refresh(message)

        return message

    finally:
        db.close()


def get_recent_messages(
    session_id: str,
    limit: int = 8,
):
    """
    Get the most recent messages from a chat session.
    """

    db = SessionLocal()

    try:
        session = (
            db.query(ChatSession)
            .filter(
                ChatSession.session_id == session_id
            )
            .first()
        )

        if not session:
            return []

        messages = (
            db.query(ChatMessage)
            .filter(
                ChatMessage.chat_session_id == session.id
            )
            .order_by(
                ChatMessage.created_at.desc()
            )
            .limit(limit)
            .all()
        )

        # Reverse so messages are returned
        # in chronological order.
        messages.reverse()

        return [
            {
                "role": message.role,
                "content": message.content,
            }
            for message in messages
        ]

    finally:
        db.close()

def delete_chat_session(
    session_id: str,
):
    """
    Delete a chat session.

    Related chat messages are automatically
    deleted through the database relationship.
    """

    db = SessionLocal()

    try:

        session = (
            db.query(ChatSession)
            .filter(
                ChatSession.session_id == session_id
            )
            .first()
        )

        if not session:

            return False

        db.delete(session)

        db.commit()

        return True

    except Exception:

        db.rollback()

        raise

    finally:

        db.close()