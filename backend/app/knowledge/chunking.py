from app.database.models import (
    FAQ,
    ChecklistSection,
)


def create_faq_chunk(faq: FAQ) -> dict:
    """
    Convert one FAQ into a RAG chunk.
    """

    content = f"""
Module: {faq.module.name}

Question:
{faq.question}

Answer:
{faq.answer}
""".strip()

    return {
        "module_id": faq.module_id,
        "source_type": "faq",
        "source_id": faq.id,
        "content": content,
        "chunk_index": 1,
    }


def create_checklist_section_chunk(
    section: ChecklistSection,
) -> dict:
    """
    Convert one checklist section and its steps
    into a RAG chunk.
    """

    steps_text = "\n".join(
        f"{step.position}. {step.content}"
        for step in sorted(
            section.steps,
            key=lambda step: step.position,
        )
    )

    content = f"""
Module: {section.checklist.module.name}

Checklist: {section.checklist.title}

Section:
{section.title}

Steps:
{steps_text}
""".strip()

    return {
        "module_id": section.checklist.module_id,
        "source_type": "checklist_section",
        "source_id": section.id,
        "content": content,
        "chunk_index": 1,
    }