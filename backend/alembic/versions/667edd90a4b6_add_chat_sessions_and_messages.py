"""add chat sessions and messages

Revision ID: 667edd90a4b6
Revises: 3981359a26d8
Create Date: 2026-08-27 16:32:16.330705

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "667edd90a4b6"
down_revision: Union[str, Sequence[str], None] = "3981359a26d8"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    # =========================================
    # CHAT SESSIONS
    # =========================================

    op.create_table(
        "chat_sessions",

        sa.Column(
            "id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "session_id",
            sa.String(length=36),
            nullable=False,
        ),

        sa.Column(
            "module_id",
            sa.Integer(),
            nullable=True,
        ),

        sa.Column(
            "conversation_summary",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "status",
            sa.String(length=50),
            nullable=False,
        ),

        sa.Column(
            "created_at",
            sa.DateTime(),
            nullable=False,
        ),

        sa.Column(
            "last_activity_at",
            sa.DateTime(),
            nullable=False,
        ),

        sa.ForeignKeyConstraint(
            ["module_id"],
            ["modules.id"],
            ondelete="SET NULL",
        ),

        sa.PrimaryKeyConstraint(
            "id"
        ),
    )

    op.create_index(
        op.f("ix_chat_sessions_id"),
        "chat_sessions",
        ["id"],
        unique=False,
    )

    op.create_index(
        op.f("ix_chat_sessions_session_id"),
        "chat_sessions",
        ["session_id"],
        unique=True,
    )

    op.create_index(
        op.f("ix_chat_sessions_last_activity_at"),
        "chat_sessions",
        ["last_activity_at"],
        unique=False,
    )

    # =========================================
    # CHAT MESSAGES
    # =========================================

    op.create_table(
        "chat_messages",

        sa.Column(
            "id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "chat_session_id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "role",
            sa.String(length=20),
            nullable=False,
        ),

        sa.Column(
            "content",
            sa.Text(),
            nullable=False,
        ),

        sa.Column(
            "created_at",
            sa.DateTime(),
            nullable=False,
        ),

        sa.ForeignKeyConstraint(
            ["chat_session_id"],
            ["chat_sessions.id"],
            ondelete="CASCADE",
        ),

        sa.PrimaryKeyConstraint(
            "id"
        ),
    )

    op.create_index(
        op.f("ix_chat_messages_id"),
        "chat_messages",
        ["id"],
        unique=False,
    )

    op.create_index(
        op.f("ix_chat_messages_chat_session_id"),
        "chat_messages",
        ["chat_session_id"],
        unique=False,
    )


def downgrade() -> None:
    """Downgrade schema."""

    # =========================================
    # CHAT MESSAGES
    # =========================================

    op.drop_index(
        op.f("ix_chat_messages_chat_session_id"),
        table_name="chat_messages",
    )

    op.drop_index(
        op.f("ix_chat_messages_id"),
        table_name="chat_messages",
    )

    op.drop_table(
        "chat_messages"
    )

    # =========================================
    # CHAT SESSIONS
    # =========================================

    op.drop_index(
        op.f("ix_chat_sessions_last_activity_at"),
        table_name="chat_sessions",
    )

    op.drop_index(
        op.f("ix_chat_sessions_session_id"),
        table_name="chat_sessions",
    )

    op.drop_index(
        op.f("ix_chat_sessions_id"),
        table_name="chat_sessions",
    )

    op.drop_table(
        "chat_sessions"
    )