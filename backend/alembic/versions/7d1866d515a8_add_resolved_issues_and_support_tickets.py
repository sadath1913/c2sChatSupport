"""add resolved issues and support tickets

Revision ID: 7d1866d515a8
Revises: 667edd90a4b6
Create Date: 2026-08-27 18:57:06.172511

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "7d1866d515a8"
down_revision: Union[str, Sequence[str], None] = "667edd90a4b6"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    # =========================================
    # RESOLVED ISSUES
    # =========================================

    op.create_table(
        "resolved_issues",

        sa.Column(
            "id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "institute_name",
            sa.String(length=255),
            nullable=False,
        ),

        sa.Column(
            "module_id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "section",
            sa.String(length=255),
            nullable=False,
        ),

        sa.Column(
            "issue",
            sa.Text(),
            nullable=False,
        ),

        sa.Column(
            "resolution_steps",
            sa.Text(),
            nullable=False,
        ),

        sa.Column(
            "created_at",
            sa.DateTime(),
            nullable=False,
        ),

        sa.ForeignKeyConstraint(
            ["module_id"],
            ["modules.id"],
            ondelete="RESTRICT",
        ),

        sa.PrimaryKeyConstraint(
            "id"
        ),
    )

    op.create_index(
        op.f("ix_resolved_issues_id"),
        "resolved_issues",
        ["id"],
        unique=False,
    )

    op.create_index(
        op.f("ix_resolved_issues_module_id"),
        "resolved_issues",
        ["module_id"],
        unique=False,
    )


    # =========================================
    # SUPPORT TICKETS
    # =========================================

    op.create_table(
        "support_tickets",

        sa.Column(
            "id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "ticket_id",
            sa.String(length=50),
            nullable=False,
        ),

        sa.Column(
            "institute_name",
            sa.String(length=255),
            nullable=False,
        ),

        sa.Column(
            "module_id",
            sa.Integer(),
            nullable=False,
        ),

        sa.Column(
            "section",
            sa.String(length=255),
            nullable=False,
        ),

        sa.Column(
            "issue",
            sa.Text(),
            nullable=False,
        ),

        sa.Column(
            "exact_error",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "environment",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "network_license_details",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "steps_tried",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "additional_details",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "screenshot_path",
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
            "updated_at",
            sa.DateTime(),
            nullable=False,
        ),

        sa.ForeignKeyConstraint(
            ["module_id"],
            ["modules.id"],
            ondelete="RESTRICT",
        ),

        sa.PrimaryKeyConstraint(
            "id"
        ),
    )

    op.create_index(
        op.f("ix_support_tickets_id"),
        "support_tickets",
        ["id"],
        unique=False,
    )

    op.create_index(
        op.f("ix_support_tickets_ticket_id"),
        "support_tickets",
        ["ticket_id"],
        unique=True,
    )

    op.create_index(
        op.f("ix_support_tickets_module_id"),
        "support_tickets",
        ["module_id"],
        unique=False,
    )

    op.create_index(
        op.f("ix_support_tickets_status"),
        "support_tickets",
        ["status"],
        unique=False,
    )


def downgrade() -> None:
    """Downgrade schema."""

    # =========================================
    # SUPPORT TICKETS
    # =========================================

    op.drop_index(
        op.f("ix_support_tickets_status"),
        table_name="support_tickets",
    )

    op.drop_index(
        op.f("ix_support_tickets_module_id"),
        table_name="support_tickets",
    )

    op.drop_index(
        op.f("ix_support_tickets_ticket_id"),
        table_name="support_tickets",
    )

    op.drop_index(
        op.f("ix_support_tickets_id"),
        table_name="support_tickets",
    )

    op.drop_table(
        "support_tickets"
    )


    # =========================================
    # RESOLVED ISSUES
    # =========================================

    op.drop_index(
        op.f("ix_resolved_issues_module_id"),
        table_name="resolved_issues",
    )

    op.drop_index(
        op.f("ix_resolved_issues_id"),
        table_name="resolved_issues",
    )

    op.drop_table(
        "resolved_issues"
    )