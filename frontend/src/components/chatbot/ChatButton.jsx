import { useChat } from "../../context/ChatContext";
import botLogo from "../../assets/botlogo.png";

function ChatButton() {

    const {
        isChatOpen,
        setIsChatOpen,
    } = useChat();


    if (isChatOpen) {
        return null;
    }


    return (

        <button
            className="chat-button"
            onClick={() => setIsChatOpen(true)}
            aria-label="Open ChipIN Assistant"
        >

            <img
                src={botLogo}
                alt="ChipIN Assistant"
                className="chat-button-logo"
            />

        </button>

    );
}


export default ChatButton;