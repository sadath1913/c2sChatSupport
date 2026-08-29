"""add email status to support tickets

Revision ID: 9336cb7952de
Revises: 7d1866d515a8
Create Date: 2026-08-27 19:23:25.687715

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9336cb7952de'
down_revision: Union[str, Sequence[str], None] = '7d1866d515a8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:

    op.add_column(
        "support_tickets",
        sa.Column(
            "email_status",
            sa.String(length=50),
            nullable=False,
            server_default="pending",
        ),
    )

    op.alter_column(
        "support_tickets",
        "email_status",
        server_default=None,
    )


def downgrade() -> None:

    op.drop_column(
        "support_tickets",
        "email_status",
    )