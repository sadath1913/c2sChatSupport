def format_chat_history(
    messages: list[dict],
) -> str:
    """
    Convert recent chat messages into a readable
    conversation history for the LLM.
    """

    if not messages:
        return ""

    formatted_messages = []

    for message in messages:

        role = message["role"]
        content = message["content"]

        if role == "user":
            formatted_messages.append(
                f"User: {content}"
            )

        elif role == "assistant":
            formatted_messages.append(
                f"Assistant: {content}"
            )

    return "\n".join(formatted_messages)