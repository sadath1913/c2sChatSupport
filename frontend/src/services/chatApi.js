const API_URL =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV
        ? "http://localhost:8000"
        : "https://c2schatsupport-1-zo8z.onrender.com");

export async function postChatMessage(
    message,
    sessionId = null,
    moduleId = null
) {

    /*
    =========================================================
    REQUEST BODY

    First request:
    {
        query: "..."
    }

    Next requests:
    {
        query: "...",
        session_id: "..."
    }
    =========================================================
    */

    const requestBody = {
        query: message,
    };


    if (sessionId) {

        requestBody.session_id =
            sessionId;

    }


    if (moduleId !== null && moduleId !== undefined) {

        requestBody.module_id =
            moduleId;

    }


    console.log(
        "CHAT REQUEST:",
        requestBody
    );


    const response = await fetch(
        `${API_URL}/chat/`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(
                requestBody
            ),
        }
    );


    if (!response.ok) {

        const errorText =
            await response.text();

        throw new Error(
            `Chat request failed: ${response.status} ${errorText}`
        );

    }


    const data =
        await response.json();


    console.log(
        "CHAT RESPONSE:",
        data
    );


    return data;
}

export async function deleteChatSession(
    sessionId
) {

    if (!sessionId) {
        return;
    }


    console.log(
        "DELETE CHAT SESSION:",
        sessionId
    );


    const response = await fetch(
        `${API_URL}/chat/${sessionId}`,
        {
            method: "DELETE",
        }
    );


    if (!response.ok) {

        const errorText =
            await response.text();

        throw new Error(
            `Failed to delete chat session: ${response.status} ${errorText}`
        );

    }


    const data =
        await response.json();


    console.log(
        "CHAT SESSION DELETED:",
        data
    );


    return data;
}