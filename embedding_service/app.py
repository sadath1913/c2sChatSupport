from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer


app = FastAPI(title="C2S Embedding Service")


MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

model = None


def get_model():
    global model

    if model is None:
        print("Loading embedding model...")
        model = SentenceTransformer(MODEL_NAME)
        print("Embedding model loaded.")

    return model


class EmbeddingRequest(BaseModel):
    text: str


@app.get("/")
def health_check():
    return {
        "status": "ok",
        "service": "C2S Embedding Service",
    }


@app.post("/embed")
def generate_embedding(request: EmbeddingRequest):

    embedding_model = get_model()

    embedding = embedding_model.encode(
        request.text,
        normalize_embeddings=True,
    )

    return {
        "embedding": embedding.tolist()
    }