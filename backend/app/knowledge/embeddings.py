import os
import httpx


HF_TOKEN = os.getenv("HF_TOKEN")

HF_EMBEDDING_URL = (
    "https://router.huggingface.co/hf-inference/models/"
    "sentence-transformers/all-MiniLM-L6-v2"
    "/pipeline/feature-extraction"
)


def generate_embedding(text: str):

    if not HF_TOKEN:
        raise RuntimeError(
            "HF_TOKEN environment variable is not set."
        )

    response = httpx.post(
        HF_EMBEDDING_URL,
        headers={
            "Authorization": f"Bearer {HF_TOKEN}",
            "Content-Type": "application/json",
        },
        json={
            "inputs": text,
        },
        timeout=60.0,
    )

    response.raise_for_status()

    embedding = response.json()

    return embedding



''' For Local use this FUNCTION and Comment Above the Func
import os
import httpx


EMBEDDING_SERVICE_URL = os.getenv(
    "EMBEDDING_SERVICE_URL"
)


def generate_embedding(text: str):

    if not EMBEDDING_SERVICE_URL:
        raise RuntimeError(
            "EMBEDDING_SERVICE_URL environment variable is not set."
        )

    response = httpx.post(
        f"{EMBEDDING_SERVICE_URL}/embed",
        json={
            "text": text
        },
        timeout=60.0,
    )

    response.raise_for_status()

    data = response.json()

    return data["embedding"] '''