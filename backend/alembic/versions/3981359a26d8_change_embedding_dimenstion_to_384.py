"""change Embedding Dimenstion to 384

Revision ID: 3981359a26d8
Revises: 4d731063b7de
Create Date: 2026-08-27 10:39:24.948721

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from pgvector.sqlalchemy import Vector

# revision identifiers, used by Alembic.
revision: str = '3981359a26d8'
down_revision: Union[str, Sequence[str], None] = '4d731063b7de'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.alter_column(
        "knowledge_chunks",
        "embedding",
        existing_type=Vector(1536),
        type_=Vector(384),
        existing_nullable=True,
    )


def downgrade() -> None:
    op.alter_column(
        "knowledge_chunks",
        "embedding",
        existing_type=Vector(384),
        type_=Vector(1536),
        existing_nullable=True,
    )