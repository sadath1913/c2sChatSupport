import { useChat } from "../../context/ChatContext";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import SupportTicket from "./SupportTicket";
import ResolvedIssue from "./ResolvedIssue";

import botlogo from "../../assets/botlogo2.png";


function ChatPanel() {

    const {
        setIsChatOpen,
        isTicketOpen,
        isResolvedIssueOpen,
        endChat,
        closeTicketForm,
        closeResolvedIssueForm,
    } = useChat();


    /*
    =========================================================
    MINIMIZE CHAT
    =========================================================

    Only hides the chatbot.

    Session and messages remain untouched.
    =========================================================
    */

    function handleMinimize() {

        setIsChatOpen(false);

    }


    /*
    =========================================================
    END CHAT
    =========================================================

    ChatContext handles:

    1. Delete backend session
    2. Clear current conversation
    3. Close chatbot

    =========================================================
    */

    async function handleEndChat() {

        try {

            await endChat();

        } catch (error) {

            console.error(
                "Failed to end chat:",
                error
            );

        }

    }


    /*
    =========================================================
    DETERMINE CURRENT VIEW
    =========================================================
    */

    const isSpecialView =
        isTicketOpen ||
        isResolvedIssueOpen;


    return (

        <aside
            className="chat-panel"
            aria-label="ChipIN Assistant"
        >

            {/* =====================================================
                CHAT HEADER
            ===================================================== */}

            <header className="chat-header">

                <div className="chat-header-title">

                    <span className="assistant-icon">

                        <img
                            src={botlogo}
                            alt="ChipIN Assistant"
                        />

                    </span>

                    <span>
                        ChipIN Assistant
                    </span>

                </div>


                {/* =================================================
                    HEADER ACTIONS
                ================================================= */}

                <div className="chat-header-actions">

                    {/* MINIMIZE */}

                    <button
                        type="button"
                        className="chat-minimize-button"
                        onClick={handleMinimize}
                        aria-label="Minimize ChipIN Assistant"
                        title="Minimize"
                    >
                        −
                    </button>


                    {/* END CHAT */}

                    <button
                        type="button"
                        className="chat-close-button"
                        onClick={handleEndChat}
                        aria-label="End Chat"
                        title="End Chat"
                    >
                        ×
                    </button>

                </div>

            </header>


            {/* =====================================================
                DISCLAIMER
            ===================================================== */}

            <div className="chat-disclaimer">

                Responses are generated using AI and may contain
                mistakes.

            </div>


            {/* =====================================================
                CHAT CONTENT
            ===================================================== */}

            <div className="chat-panel-content">


                {/* =================================================
                    RESOLVED ISSUE
                ================================================= */}

                {isResolvedIssueOpen ? (

                    <ResolvedIssue />

                )


                /* =================================================
                    SUPPORT TICKET
                =================================================
                */

                : isTicketOpen ? (

                    <SupportTicket />

                )


                /* =================================================
                    NORMAL CHAT
                =================================================
                */

                : (

                    <ChatMessages />

                )}

            </div>


            {/* =====================================================
                INPUT
            =====================================================

            Do not show chat input while ticket/resolved form
            is open.
            ===================================================== */}

            {!isSpecialView && (

                <ChatInput />

            )}


            {/* =====================================================
                RESOLVED ISSUE BACK BUTTON
            ===================================================== */}

            {isResolvedIssueOpen && (

                <button
                    type="button"
                    className="support-ticket-back-button"
                    onClick={closeResolvedIssueForm}
                >
                    ← Back to Chat
                </button>

            )}


            {/* =====================================================
                SUPPORT TICKET BACK BUTTON
            ===================================================== */}

            {isTicketOpen && (

                <button
                    type="button"
                    className="support-ticket-back-button"
                    onClick={closeTicketForm}
                >
                    ← Back to Chat
                </button>

            )}

        </aside>

    );

}


export default ChatPanel;