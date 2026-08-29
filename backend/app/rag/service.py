import time
import logging

from app.rag.retrieval import retrieve_relevant_chunks
from app.rag.context import build_context
from app.rag.prompt import build_rag_prompt
from app.rag.llm import generate_answer


logger = logging.getLogger(__name__)


def ask_rag(
    query: str,
    module_id: int | None = None,
    chat_history: str = "",
):

    total_start = time.perf_counter()

    # =========================================================
    # 0. DATA RECEIVED FROM HANDLER
    # =========================================================

    logger.info(
        "\n"
        "==================== RAG REQUEST ====================\n"
        "Query: %s\n"
        "Module ID: %s\n"
        "Chat History:\n%s\n"
        "=======================================================",
        query,
        module_id,
        chat_history,
    )

    # =========================================================
    # 1. RETRIEVE RELEVANT CHUNKS
    # =========================================================

    retrieval_start = time.perf_counter()

    chunks = retrieve_relevant_chunks(
        query=query,
        module_id=module_id,
    )

    retrieval_time = (
        time.perf_counter()
        - retrieval_start
    )

    logger.info(
        "Retrieval completed in %.2f seconds",
        retrieval_time,
    )

    logger.info(
        "Retrieved %d chunks",
        len(chunks),
    )

    # =========================================================
    # LOG RETRIEVED CHUNKS
    # =========================================================

    for index, chunk in enumerate(chunks):

        logger.info(
            "\n"
            "------------- RETRIEVED CHUNK %d -------------\n"
            "Source ID: %s\n"
            "Source Type: %s\n"
            "Similarity: %s\n"
            "Content:\n%s\n"
            "----------------------------------------------",
            index + 1,
            chunk.get("source_id"),
            chunk.get("source_type"),
            chunk.get("similarity"),
            chunk.get("content"),
        )

    # =========================================================
    # 2. BUILD CONTEXT
    # =========================================================

    context_start = time.perf_counter()

    if chunks:

        context = build_context(chunks)

    else:

        logger.info(
            "No relevant chunks found for query: %s",
            query,
        )

        # Empty context still allows the LLM
        # to handle greetings/casual conversation
        # or other prompt-defined behavior.

        context = ""

    # =========================================================
    # 3. BUILD RAG PROMPT
    # =========================================================

    prompt = build_rag_prompt(
        query=query,
        context=context,
        chat_history=chat_history,
    )

    context_time = (
        time.perf_counter()
        - context_start
    )

    logger.info(
        "Context and prompt built in %.2f seconds",
        context_time,
    )


    # =========================================================
    # 4. GENERATE LLM ANSWER
    # =========================================================

    llm_start = time.perf_counter()

    answer = generate_answer(prompt)

    llm_time = (
        time.perf_counter()
        - llm_start
    )

    logger.info(
        "LLM response received in %.2f seconds",
        llm_time,
    )

    # =========================================================
    # RAW LLM RESPONSE
    # =========================================================

    logger.info(
        "\n"
        "================ RAW LLM RESPONSE =================\n"
        "%s\n"
        "====================================================",
        answer,
    )

    # =========================================================
    # 5. COLLECT IMAGES
    # =========================================================

    images = []

    used_source_ids = answer.get(
        "source_ids",
        [],
    )

    logger.info(
        "LLM used source IDs: %s",
        used_source_ids,
    )
    logger.info(
        "Retrieved chunks with images:\n%s",
        [
            {
                "source_id": chunk.get("source_id"),
                "source_type": chunk.get("source_type"),
                "images": chunk.get("images", []),
            }
            for chunk in chunks
        ],
    )

    for chunk in chunks:

        if chunk["source_id"] not in used_source_ids:
            continue

        for image in chunk.get("images", []):

            images.append(
                {
                    "image_path": image["image_path"],
                    "alt_text": image.get("alt_text"),
                    "position": image.get("position"),
                    "source_type": chunk["source_type"],
                    "source_id": chunk["source_id"],
                }
            )

    answer["images"] = images
    logger.info(
        "FINAL IMAGES ATTACHED:\n%s",
        images,
    )
    # =========================================================
    # REMOVE INTERNAL SOURCE IDS
    # =========================================================

    answer.pop(
        "source_ids",
        None,
    )

    # =========================================================
    # 6. FINAL RESPONSE SENT TO HANDLER
    # =========================================================

    logger.info(
        "\n"
        "================ FINAL RESPONSE ==================\n"
        "%s\n"
        "===================================================",
        answer,
    )

    # =========================================================
    # TOTAL PIPELINE TIME
    # =========================================================

    total_time = (
        time.perf_counter()
        - total_start
    )

    logger.info(
        "Total RAG pipeline completed in %.2f seconds",
        total_time,
    )

    return answer