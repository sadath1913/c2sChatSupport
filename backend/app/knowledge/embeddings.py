from sentence_transformers import SentenceTransformer

model = None


def get_model():
    global model

    if model is None:
        print("Loading embedding model...")
        model = SentenceTransformer(
            "sentence-transformers/all-MiniLM-L6-v2"
        )
        print("Embedding model loaded.")

    return model


def generate_embedding(text: str):
    embedding_model = get_model()

    embedding = embedding_model.encode(
        text,
        normalize_embeddings=True,
    )

    return embedding.tolist()