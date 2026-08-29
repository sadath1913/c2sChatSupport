import { useState } from "react";

import { useChat } from "../../context/ChatContext";

import {
    postChatMessage,
} from "../../services/chatApi";


function ChatInput() {

    const [input, setInput] =
        useState("");

    const [isLoading, setIsLoading] =
        useState(false);


    const {
        setMessages,
        sessionId,
        setSessionId,
        currentModuleId,
    } = useChat();


    async function handleSubmit(e) {

        e.preventDefault();


        const trimmedMessage =
            input.trim();


        if (
            !trimmedMessage ||
            isLoading
        ) {

            return;

        }


        /*
        =====================================================
        ADD USER MESSAGE
        =====================================================
        */

        const userMessage = {

            id: Date.now(),

            role: "user",

            content: trimmedMessage,

        };


        setMessages(
            (previousMessages) => [

                ...previousMessages,

                userMessage,

            ]
        );


        setInput("");

        setIsLoading(true);


        try {

            /*
            =================================================
            SEND REQUEST

            First request:
                sessionId = null

            Later requests:
                sessionId = existing UUID
            =================================================
            */

            const data =
                await postChatMessage(
                    trimmedMessage,
                    sessionId,
                    currentModuleId
                );


            /*
            =================================================
            STORE SESSION ID

            Backend creates it on first request.
            =================================================
            */

            if (data?.session_id) {

                setSessionId(
                    data.session_id
                );

            }


            /*
            =================================================
            STRUCTURED RESPONSE
            =================================================
            */

            const assistantResponse =
                data?.response;


            const assistantMessage = {

                id: Date.now() + 1,

                role: "assistant",

                /*
                Keep summary for backward
                compatibility with existing UI.
                */

                content:
                    assistantResponse?.summary ||
                    "I don't have enough information to answer this question.",

                /*
                Keep the COMPLETE backend response.
                */

                response:
                    assistantResponse || null,

            };


            setMessages(
                (previousMessages) => [

                    ...previousMessages,

                    assistantMessage,

                ]
            );

        }


        catch (error) {

            console.error(
                "Chat request failed:",
                error
            );


            const errorMessage = {

                id: Date.now() + 1,

                role: "assistant",

                content:
                    "Sorry, I couldn't connect to the ChipIN Assistant. Please try again.",

            };


            setMessages(
                (previousMessages) => [

                    ...previousMessages,

                    errorMessage,

                ]
            );

        }


        finally {

            setIsLoading(false);

        }

    }


    return (

        <form
            className="chat-input-container"
            onSubmit={handleSubmit}
        >

            <input
                type="text"

                placeholder={
                    isLoading
                        ? "Assistant is thinking..."
                        : "Ask a question..."
                }

                value={input}

                onChange={(e) =>
                    setInput(e.target.value)
                }

                disabled={isLoading}

            />


            <button
                type="submit"

                className="chat-send-button"

                disabled={isLoading}

                aria-label="Send message"
            >

                {isLoading
                    ? "…"
                    : "↑"
                }

            </button>

        </form>

    );

}


export default ChatInput;