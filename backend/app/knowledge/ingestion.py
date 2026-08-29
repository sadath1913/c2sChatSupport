from app.database.connection import SessionLocal
from app.database.models import (
    Module,
    FAQ,
    FAQImage,
    Checklist,
    ChecklistSection,
    ChecklistStep,
    ChecklistImage,
    KnowledgeChunk,
)
from app.knowledge.chunking import (
    create_faq_chunk,
    create_checklist_section_chunk,
)

def ingest_module(data):
    db = SessionLocal()

    try:
        # --------------------------------
        # 1. Check if module already exists
        # --------------------------------

        existing_module = (
            db.query(Module)
            .filter(
                Module.name == data["module"]["name"]
            )
            .first()
        )

        if existing_module:
            print(
                f"Module '{data['module']['name']}' already exists. "
                "Skipping ingestion."
            )
            return

        # --------------------------------
        # 2. Create Module
        # --------------------------------

        module = Module(
            name=data["module"]["name"],
            description=data["module"].get("description"),
        )

        db.add(module)
        db.flush()

        print(f"Created module: {module.name}")

        # --------------------------------
        # 3. Create FAQs
        # --------------------------------

        for faq_data in data.get("faqs", []):

            faq = FAQ(
                module_id=module.id,
                question=faq_data["question"],
                answer=faq_data["answer"],
            )

            db.add(faq)
            db.flush()

            # ----------------------------
            # Create FAQ Images
            # ----------------------------

            for image_data in faq_data.get("images", []):

                faq_image = FAQImage(
                    faq_id=faq.id,
                    image_url=image_data["image_url"],
                    alt_text=image_data.get("alt_text"),
                    position=image_data.get("position", 1),
                )

                db.add(faq_image)

        # --------------------------------
        # 4. Create Checklist
        # --------------------------------

        checklist_data = data.get("checklist")

        if checklist_data:

            checklist = Checklist(
                module_id=module.id,
                title=checklist_data["title"],
                description=checklist_data.get("description"),
            )

            db.add(checklist)
            db.flush()

            print(f"Created checklist: {checklist.title}")

            # ----------------------------
            # Create Checklist Sections
            # ----------------------------

            for section_position, section_data in enumerate(
                checklist_data.get("sections", []),
                start=1,
            ):

                section = ChecklistSection(
                    checklist_id=checklist.id,
                    title=section_data["title"],
                    position=section_position,
                )

                db.add(section)
                db.flush()

                # ------------------------
                # Create Checklist Steps
                # ------------------------

                for step_position, step_content in enumerate(
                    section_data.get("steps", []),
                    start=1,
                ):

                    step = ChecklistStep(
                        section_id=section.id,
                        content=step_content,
                        position=step_position,
                    )

                    db.add(step)

                # ------------------------
                # Create Checklist Images
                # ------------------------

                for image_position, image_data in enumerate(
                    section_data.get("images", []),
                    start=1,
                ):

                    checklist_image = ChecklistImage(
                        section_id=section.id,
                        image_path=image_data["image_path"],
                        alt_text=image_data.get("alt_text"),
                        position=image_data.get(
                            "position",
                            image_position,
                        ),
                    )

                    db.add(checklist_image)

        # --------------------------------
        # 5. Save everything
        # --------------------------------

        db.commit()

        print()
        print("Synopsys data ingested successfully.")

    except Exception as error:

        db.rollback()

        print("Ingestion failed.")
        print(error)

        raise

    finally:

        db.close()

#Ingestion of chunks for RAG (Retrieval-Augmented Generation) from the database models

def ingest_knowledge_chunks(module_id: int):
    db = SessionLocal()

    try:
        # --------------------------------
        # Check existing chunks
        # --------------------------------

        existing_chunks = (
            db.query(KnowledgeChunk)
            .filter(
                KnowledgeChunk.module_id == module_id
            )
            .first()
        )

        if existing_chunks:
            print(
                f"Knowledge chunks already exist "
                f"for module ID {module_id}."
            )
            return

        # --------------------------------
        # Get FAQs
        # --------------------------------

        faqs = (
            db.query(FAQ)
            .filter(
                FAQ.module_id == module_id
            )
            .all()
        )

        for faq in faqs:

            chunk_data = create_faq_chunk(faq)

            chunk = KnowledgeChunk(
                module_id=chunk_data["module_id"],
                source_type=chunk_data["source_type"],
                source_id=chunk_data["source_id"],
                content=chunk_data["content"],
                chunk_index=chunk_data["chunk_index"],
            )

            db.add(chunk)

        # --------------------------------
        # Get Checklist Sections
        # --------------------------------

        sections = (
            db.query(ChecklistSection)
            .join(Checklist)
            .filter(
                Checklist.module_id == module_id
            )
            .all()
        )

        for section in sections:

            chunk_data = create_checklist_section_chunk(
                section
            )

            chunk = KnowledgeChunk(
                module_id=chunk_data["module_id"],
                source_type=chunk_data["source_type"],
                source_id=chunk_data["source_id"],
                content=chunk_data["content"],
                chunk_index=chunk_data["chunk_index"],
            )

            db.add(chunk)

        # --------------------------------
        # Save chunks
        # --------------------------------

        db.commit()

        print(
            f"Knowledge chunks created successfully "
            f"for module ID {module_id}."
        )

    except Exception as error:

        db.rollback()

        print("Knowledge chunk ingestion failed.")
        print(error)

        raise

    finally:

        db.close()