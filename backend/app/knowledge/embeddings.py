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

    return data["embedding"]