import { useEffect, useRef } from "react";
import { useChat } from "../../context/ChatContext";

import ChatMessage from "./ChatMessage";
import botlogo from "../../assets/botlogo2.png";


function ChatMessages() {

    const {
        messages,
    } = useChat();

    const messagesEndRef = useRef(null);


    /*
    =========================================================
    AUTO SCROLL TO NEWEST MESSAGE
    =========================================================
    */

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });

    }, [messages]);


    /*
    =========================================================
    WELCOME SCREEN
    =========================================================
    */

    if (messages.length === 0) {

        return (

            <div className="chat-welcome">

                {/* BOT LOGO */}

                <div className="chat-welcome-icon">

                    <img
                        src={botlogo}
                        alt="ChipIN Assistant"
                    />

                </div>


                <h2>
                    Hi, I'm the ChipIN Assistant 👋
                </h2>


                <p>
                    I can help you with ChipIN modules, EDA tools,
                    FAQs, network issues, whitelisting, licensing,
                    and support.
                </p>


                <div className="chat-welcome-hint">
                    Ask me anything about the C2S programme.
                </div>

            </div>

        );

    }


    /*
    =========================================================
    MESSAGES
    =========================================================
    */

    return (

        <div className="chat-messages">

            {messages.map((message) => (

                <ChatMessage
                    key={message.id}
                    message={message}
                />

            ))}


            {/* Invisible scroll target */}

            <div
                ref={messagesEndRef}
                className="chat-scroll-anchor"
            />

        </div>

    );

}


export default ChatMessages;