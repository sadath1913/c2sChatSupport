from app.database.connection import SessionLocal
from app.database.models import KnowledgeChunk
from app.knowledge.embeddings import generate_embedding


def generate_embeddings():

    db = SessionLocal()

    try:

        chunks = (
            db.query(KnowledgeChunk)
            .filter(KnowledgeChunk.embedding.is_(None))
            .order_by(KnowledgeChunk.id)
            .all()
        )

        print(f"Found {len(chunks)} chunks without embeddings.")

        for index, chunk in enumerate(chunks, start=1):

            print(
                f"Generating embedding "
                f"{index}/{len(chunks)} "
                f"for chunk ID {chunk.id}"
            )

            embedding = generate_embedding(chunk.content)

            chunk.embedding = embedding

        db.commit()

        print()
        print("All embeddings generated successfully.")

    except Exception as error:

        db.rollback()

        print("Embedding generation failed.")
        print(error)

        raise

    finally:

        db.close()


if __name__ == "__main__":
    generate_embeddings()