from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from app.database.connection import Base
from pgvector.sqlalchemy import Vector

# =========================================================
# MODULE
# =========================================================

class Module(Base):
    __tablename__ = "modules"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False,
        unique=True
    )

    description = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    faqs = relationship(
        "FAQ",
        back_populates="module",
        cascade="all, delete-orphan"
    )

    checklists = relationship(
        "Checklist",
        back_populates="module",
        cascade="all, delete-orphan"
    )

    knowledge_chunks = relationship(
        "KnowledgeChunk",
        back_populates="module",
        cascade="all, delete-orphan",
    )

    resolved_issues = relationship(
        "ResolvedIssue",
        back_populates="module",
        cascade="all, delete-orphan",
    )

    support_tickets = relationship(
        "SupportTicket",
        back_populates="module",
    )

# =========================================================
# FAQ
# =========================================================

class FAQ(Base):
    __tablename__ = "faqs"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    module_id = Column(
        Integer,
        ForeignKey("modules.id", ondelete="CASCADE"),
        nullable=False
    )

    question = Column(
        Text,
        nullable=False
    )

    answer = Column(
        Text,
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    module = relationship(
        "Module",
        back_populates="faqs"
    )

    images = relationship(
        "FAQImage",
        back_populates="faq",
        cascade="all, delete-orphan"
    )


# =========================================================
# FAQ IMAGE
# =========================================================

class FAQImage(Base):
    __tablename__ = "faq_images"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    faq_id = Column(
        Integer,
        ForeignKey("faqs.id", ondelete="CASCADE"),
        nullable=False
    )

    image_url = Column(
        Text,
        nullable=False
    )

    alt_text = Column(
        Text,
        nullable=True
    )

    position = Column(
        Integer,
        default=0,
        nullable=False
    )

    faq = relationship(
        "FAQ",
        back_populates="images"
    )


# =========================================================
# CHECKLIST
# =========================================================

class Checklist(Base):
    __tablename__ = "checklists"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    module_id = Column(
        Integer,
        ForeignKey("modules.id", ondelete="CASCADE"),
        nullable=False
    )

    title = Column(
        String(255),
        nullable=False
    )

    description = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    module = relationship(
        "Module",
        back_populates="checklists"
    )

    sections = relationship(
        "ChecklistSection",
        back_populates="checklist",
        cascade="all, delete-orphan"
    )


# =========================================================
# CHECKLIST SECTION
# =========================================================

class ChecklistSection(Base):
    __tablename__ = "checklist_sections"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    checklist_id = Column(
        Integer,
        ForeignKey("checklists.id", ondelete="CASCADE"),
        nullable=False
    )

    title = Column(
        Text,
        nullable=False
    )

    position = Column(
        Integer,
        default=0,
        nullable=False
    )

    checklist = relationship(
        "Checklist",
        back_populates="sections"
    )

    steps = relationship(
        "ChecklistStep",
        back_populates="section",
        cascade="all, delete-orphan"
    )
    images = relationship(
        "ChecklistImage",
        back_populates="section",
        cascade="all, delete-orphan"
    )


# =========================================================
# CHECKLIST STEP
# =========================================================

class ChecklistStep(Base):
    __tablename__ = "checklist_steps"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    section_id = Column(
        Integer,
        ForeignKey(
            "checklist_sections.id",
            ondelete="CASCADE"
        ),
        nullable=False
    )

    content = Column(
        Text,
        nullable=False
    )

    position = Column(
        Integer,
        default=0,
        nullable=False
    )

    section = relationship(
        "ChecklistSection",
        back_populates="steps"
    )

class ChecklistImage(Base):
    __tablename__ = "checklist_images"

    id = Column(Integer, primary_key=True, index=True)

    section_id = Column(
        Integer,
        ForeignKey("checklist_sections.id", ondelete="CASCADE"),
        nullable=False
    )

    image_path = Column(Text, nullable=False)
    alt_text = Column(Text, nullable=True)
    position = Column(Integer, nullable=False)

    section = relationship(
        "ChecklistSection",
        back_populates="images"
    )

class KnowledgeChunk(Base):
    __tablename__ = "knowledge_chunks"

    id = Column(Integer, primary_key=True, index=True)

    module_id = Column(
        Integer,
        ForeignKey("modules.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    source_type = Column(
        String(50),
        nullable=False,
    )

    source_id = Column(
        Integer,
        nullable=False,
    )

    content = Column(
        Text,
        nullable=False,
    )

    embedding = Column(
        Vector(384),
        nullable=True,
    )

    chunk_index = Column(
        Integer,
        nullable=False,
        default=1,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    module = relationship(
        "Module",
        back_populates="knowledge_chunks",
    )

# =========================================================
# CHAT SESSION
# =========================================================

class ChatSession(Base):
    __tablename__ = "chat_sessions"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    session_id = Column(
        String(36),
        unique=True,
        nullable=False,
        index=True,
    )

    module_id = Column(
        Integer,
        ForeignKey(
            "modules.id",
            ondelete="SET NULL",
        ),
        nullable=True,
    )

    conversation_summary = Column(
        Text,
        nullable=True,
    )

    status = Column(
        String(50),
        nullable=False,
        default="active",
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    last_activity_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
        index=True,
    )

    module = relationship(
        "Module",
    )

    messages = relationship(
        "ChatMessage",
        back_populates="session",
        cascade="all, delete-orphan",
    )


# =========================================================
# CHAT MESSAGE
# =========================================================

class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    chat_session_id = Column(
        Integer,
        ForeignKey(
            "chat_sessions.id",
            ondelete="CASCADE",
        ),
        nullable=False,
        index=True,
    )

    role = Column(
        String(20),
        nullable=False,
    )

    content = Column(
        Text,
        nullable=False,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    session = relationship(
        "ChatSession",
        back_populates="messages",
    )

# =========================================================
# RESOLVED ISSUE
# =========================================================

class ResolvedIssue(Base):
    __tablename__ = "resolved_issues"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    institute_name = Column(
        String(255),
        nullable=False,
    )

    module_id = Column(
        Integer,
        ForeignKey(
            "modules.id",
            ondelete="RESTRICT",
        ),
        nullable=False,
        index=True,
    )

    section = Column(
        String(255),
        nullable=False,
    )

    issue = Column(
        Text,
        nullable=False,
    )

    resolution_steps = Column(
        Text,
        nullable=False,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    module = relationship(
        "Module",
        back_populates="resolved_issues",
    )

# =========================================================
# SUPPORT TICKET
# =========================================================

class SupportTicket(Base):
    __tablename__ = "support_tickets"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    ticket_id = Column(
        String(50),
        nullable=False,
        unique=True,
        index=True,
    )

    institute_name = Column(
        String(255),
        nullable=False,
    )

    module_id = Column(
        Integer,
        ForeignKey(
            "modules.id",
            ondelete="RESTRICT",
        ),
        nullable=False,
        index=True,
    )

    section = Column(
        String(255),
        nullable=False,
    )

    issue = Column(
        Text,
        nullable=False,
    )

    exact_error = Column(
        Text,
        nullable=True,
    )

    environment = Column(
        Text,
        nullable=True,
    )

    network_license_details = Column(
        Text,
        nullable=True,
    )

    steps_tried = Column(
        Text,
        nullable=True,
    )

    additional_details = Column(
        Text,
        nullable=True,
    )

    screenshot_path = Column(
        Text,
        nullable=True,
    )

    status = Column(
        String(50),
        nullable=False,
        default="open",
    )
    email_status = Column(
        String(50),
        nullable=False,
        default="pending",
    )
    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )

    module = relationship(
        "Module",
        back_populates="support_tickets",
    )