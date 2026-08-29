import json

from groq import Groq

from app.config import GROQ_API_KEY


client = Groq(
    api_key=GROQ_API_KEY,
)


def generate_answer(prompt: str) -> dict:
    """
    Send the RAG prompt to the LLM and return
    the structured JSON response.
    """

    try:

        response = client.chat.completions.create(
            model="openai/gpt-oss-20b",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            temperature=0.2,
            response_format={
                "type": "json_object",
            },
        )

        response_text = response.choices[0].message.content

        answer = json.loads(response_text)

        return answer

    except json.JSONDecodeError:

        raise ValueError(
            "LLM returned an invalid JSON response."
        )