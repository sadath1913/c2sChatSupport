import "../../styles/chatbot.css";

import { useChat } from "../../context/ChatContext";

import ChatButton from "./ChatButton";
import ChatPanel from "./ChatPanel";


function ChatWidget() {

    const {
        isChatOpen,
    } = useChat();


    return (

        <div className="chat-widget">

            {isChatOpen && (
                <ChatPanel />
            )}

            <ChatButton />

        </div>

    );

}


export default ChatWidget;