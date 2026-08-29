def build_context(chunks):
    """
    Combine retrieved knowledge chunks into a single
    context string for the LLM.

    Include source_id and source_type so the LLM can
    correctly identify which knowledge sources it used.
    """

    if not chunks:
        return ""

    context_parts = []

    for index, chunk in enumerate(chunks, start=1):

        context_parts.append(
            f"""
--- Relevant Knowledge {index} ---

Source ID: {chunk["source_id"]}
Source Type: {chunk["source_type"]}

{chunk["content"]}
"""
        )

    return "\n".join(context_parts)