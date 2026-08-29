from sqlalchemy import text

from app.database.connection import SessionLocal
from app.database.models import FAQImage, ChecklistImage
from app.knowledge.embeddings import generate_embedding


def retrieve_relevant_chunks(
    query: str,
    module_id: int | None = None,
    top_k: int = 5,
    similarity_threshold: float = 0.45,
):
    """
    Convert the user query into an embedding and retrieve
    the most semantically relevant knowledge chunks along
    with their related images.
    """

    db = SessionLocal()

    try:
        # --------------------------------
        # 1. Generate query embedding
        # --------------------------------

        query_embedding = generate_embedding(query)

        # --------------------------------
        # 2. Build similarity search query
        # --------------------------------

        sql = """
            SELECT
                id,
                module_id,
                source_type,
                source_id,
                content,
                chunk_index,
                1 - (embedding <=> CAST(:embedding AS vector)) AS similarity
            FROM knowledge_chunks
            WHERE embedding IS NOT NULL
        """

        params = {
            "embedding": query_embedding,
            "top_k": top_k,
            "similarity_threshold": similarity_threshold,
        }

        # --------------------------------
        # 3. Optional module filtering
        # --------------------------------

        if module_id is not None:

            sql += """
                AND module_id = :module_id
            """

            params["module_id"] = module_id

        # --------------------------------
        # 4. Apply similarity threshold
        # --------------------------------

        sql += """
            AND (
                1 - (embedding <=> CAST(:embedding AS vector))
            ) >= :similarity_threshold
        """

        # --------------------------------
        # 5. Sort by relevance
        # --------------------------------

        sql += """
            ORDER BY embedding <=> CAST(:embedding AS vector)
            LIMIT :top_k
        """

        result = db.execute(
            text(sql),
            params,
        )

        chunks = []

        # --------------------------------
        # 6. Build chunks with images
        # --------------------------------

        for row in result.mappings():

            images = []

            # ----------------------------
            # FAQ Images
            # ----------------------------

            if row["source_type"] == "faq":

                faq_images = (
                    db.query(FAQImage)
                    .filter(
                        FAQImage.faq_id == row["source_id"]
                    )
                    .order_by(FAQImage.position)
                    .all()
                )

                for image in faq_images:

                    images.append(
                        {
                            "image_path": image.image_url,
                            "alt_text": image.alt_text,
                            "position": image.position,
                        }
                    )

            # ----------------------------
            # Checklist Images
            # ----------------------------

            elif row["source_type"] == "checklist_section":

                checklist_images = (
                    db.query(ChecklistImage)
                    .filter(
                        ChecklistImage.section_id
                        == row["source_id"]
                    )
                    .order_by(ChecklistImage.position)
                    .all()
                )

                for image in checklist_images:

                    images.append(
                        {
                            "image_path": image.image_path,
                            "alt_text": image.alt_text,
                            "position": image.position,
                        }
                    )

            # ----------------------------
            # Add chunk
            # ----------------------------

            chunks.append(
                {
                    "id": row["id"],
                    "module_id": row["module_id"],
                    "source_type": row["source_type"],
                    "source_id": row["source_id"],
                    "content": row["content"],
                    "chunk_index": row["chunk_index"],
                    "similarity": float(row["similarity"]),
                    "images": images,
                }
            )

        return chunks

    finally:
        db.close()