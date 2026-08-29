import {
    createContext,
    useContext,
    useState,
} from "react";

import {
    deleteChatSession,
} from "../services/chatApi";


const ChatContext = createContext();


export function ChatProvider({
    children,
}) {

    /*
    =========================================================
    CHAT WINDOW
    =========================================================
    */

    const [
        isChatOpen,
        setIsChatOpen,
    ] = useState(false);


    /*
    =========================================================
    CURRENT MODULE
    =========================================================

    null
        → General chatbot
        → Support + EDA Checklist

    number
        → Specific EDA module

    =========================================================
    */

    const [
        currentModuleId,
        setCurrentModuleId,
    ] = useState(null);


    /*
    =========================================================
    ALL CHAT CONVERSATIONS
    =========================================================

    Example:

    {
        general: {
            sessionId: "...",
            messages: [...]
        },

        "module:1": {
            sessionId: "...",
            messages: [...]
        },

        "module:2": {
            sessionId: "...",
            messages: [...]
        }
    }

    =========================================================
    */

    const [
        conversations,
        setConversations,
    ] = useState({});

    /*
    =========================================================
    RESOLVED ISSUE FORM
    =========================================================
    */

    const [
        isResolvedIssueOpen,
        setIsResolvedIssueOpen,
    ] = useState(false);

    /*
    =========================================================
    SUPPORT TICKET FORM
    =========================================================
    */

    const [
        isTicketOpen,
        setIsTicketOpen,
    ] = useState(false);
    /*
    =========================================================
    CURRENT CHAT CONTEXT KEY
    =========================================================

    Support + Checklist:
        general

    Module:
        module:<moduleId>

    =========================================================
    */

    const chatContextKey =
        currentModuleId === null ||
        currentModuleId === undefined
            ? "general"
            : `module:${currentModuleId}`;


    /*
    =========================================================
    CURRENT CONVERSATION
    =========================================================
    */

    const currentConversation =
        conversations[chatContextKey] || {
            sessionId: null,
            messages: [],
        };


    /*
    =========================================================
    CURRENT SESSION ID
    =========================================================
    */

    const sessionId =
        currentConversation.sessionId;


    /*
    =========================================================
    CURRENT MESSAGES
    =========================================================
    */

    const messages =
        currentConversation.messages;


    /*
    =========================================================
    UPDATE CURRENT MESSAGES
    =========================================================
    */

    function setMessages(
        messagesOrUpdater
    ) {

        setConversations(
            (previousConversations) => {

                const previousConversation =
                    previousConversations[
                        chatContextKey
                    ] || {
                        sessionId: null,
                        messages: [],
                    };


                const newMessages =
                    typeof messagesOrUpdater === "function"
                        ? messagesOrUpdater(
                            previousConversation.messages
                        )
                        : messagesOrUpdater;


                return {

                    ...previousConversations,

                    [chatContextKey]: {

                        ...previousConversation,

                        messages: newMessages,

                    },

                };

            }
        );

    }


    /*
    =========================================================
    UPDATE CURRENT SESSION ID
    =========================================================
    */

    function setSessionId(
        newSessionId
    ) {

        setConversations(
            (previousConversations) => {

                const previousConversation =
                    previousConversations[
                        chatContextKey
                    ] || {
                        sessionId: null,
                        messages: [],
                    };


                return {

                    ...previousConversations,

                    [chatContextKey]: {

                        ...previousConversation,

                        sessionId:
                            newSessionId,

                    },

                };

            }
        );

    }


    /*
    =========================================================
    START NEW CHAT
    =========================================================

    Clears ONLY the currently active
    conversation.

    It does NOT delete the backend session.

    It does NOT affect other module
    conversations.

    =========================================================
    */

    function startNewChat() {

        setConversations(
            (previousConversations) => ({

                ...previousConversations,

                [chatContextKey]: {

                    sessionId: null,

                    messages: [],

                },

            })
        );

    }

    /*
    =========================================================
    OPEN RESOLVED ISSUE FORM
    =========================================================
    */

    function openResolvedIssueForm() {

        setIsResolvedIssueOpen(true);

    }


    /*
    =========================================================
    CLOSE RESOLVED ISSUE FORM
    =========================================================
    */

    function closeResolvedIssueForm() {

        setIsResolvedIssueOpen(false);

    }

    /*
    =========================================================
    OPEN SUPPORT TICKET FORM
    =========================================================
    */

    function openTicketForm() {

        setIsTicketOpen(true);

    }   

    /*
    =========================================================
    CLOSE SUPPORT TICKET FORM
    =========================================================
    */

    function closeTicketForm() {

        setIsTicketOpen(false);

    }


    /*
    =========================================================
    END CURRENT CHAT
    =========================================================

    This completely ends the currently active
    chatbot conversation.

    1. Delete backend session.
    2. Clear current frontend conversation.
    3. Close chatbot.

    Only the CURRENT context is deleted.

    Example:

        general
            → Session A

        module:1
            → Session B

        module:2
            → Session C

    If user ends module:1:

        module:1 → deleted

        general  → untouched
        module:2 → untouched

    =========================================================
    */

    

        /*
        ---------------------------------------------------------
        Clear ONLY current conversation
        ---------------------------------------------------------
        */

      async function endChat() {

        /*
        =========================================================
        DELETE BACKEND SESSION
        =========================================================
        */

        const currentSessionId =
            conversations[chatContextKey]?.sessionId;

        if (currentSessionId) {

            await deleteChatSession(
                currentSessionId
            );

        }


        /*
        =========================================================
        CLEAR CURRENT CONVERSATION
        =========================================================
        */

        setConversations(
            (previousConversations) => ({

                ...previousConversations,

                [chatContextKey]: {

                    sessionId: null,
                    messages: [],

                },

            })
        );


        /*
        =========================================================
        CLOSE SPECIAL FORMS
        =========================================================
        */

        setIsTicketOpen(false);

        setIsResolvedIssueOpen(false);


        /*
        =========================================================
        CLOSE CHAT WINDOW
        =========================================================
        */

        setIsChatOpen(false);

    }



    /*
    =========================================================
    PROVIDER
    =========================================================
    */

    return (

        <ChatContext.Provider
            value={{

                /*
                Chat window
                */

                isChatOpen,
                setIsChatOpen,


                /*
                Current context
                */

                currentModuleId,
                setCurrentModuleId,

                chatContextKey,


                /*
                Current conversation
                */

                sessionId,
                setSessionId,

                messages,
                setMessages,


                /*
                All conversations
                */

                conversations,


                /*
                Chat lifecycle
                */

                startNewChat,
                endChat,


                /*
                Resolved issue
                */

                isResolvedIssueOpen,
                setIsResolvedIssueOpen,

                openResolvedIssueForm,
                closeResolvedIssueForm,

                /*
                =========================================================
                SUPPORT TICKET
                =========================================================
                */

                isTicketOpen,
                setIsTicketOpen,

                openTicketForm,
                closeTicketForm,

            }}
        >

            {children}

        </ChatContext.Provider>

    );

}


export function useChat() {

    return useContext(
        ChatContext
    );

}