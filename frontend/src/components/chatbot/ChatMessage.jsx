import botlogo from "../../assets/botlogo2.png";

import { useChat } from "../../context/ChatContext";


function ChatMessage({ message }) {

    const isUser =
        message.role === "user";


    const {
        openTicketForm,
        openResolvedIssueForm,
    } = useChat();


    /*
    =========================================================
    USER MESSAGE
    =========================================================
    */

    if (isUser) {

        return (

            <div className="chat-message user-message">

                <div className="message-content">
                    {message.content}
                </div>

            </div>

        );

    }


    const response =
        message.response;


    /*
    =========================================================
    SIMPLE ASSISTANT MESSAGE
    =========================================================
    */

    if (!response) {

        return (

            <div className="chat-message assistant-message">

                <div className="message-avatar">

                    <img
                        src={botlogo}
                        alt="ChipIN Assistant"
                    />

                </div>

                <div className="message-content">

                    {message.content}

                </div>

            </div>

        );

    }


    /*
    =========================================================
    LINK HELPER
    =========================================================
    */

    function getLinkData(link) {

        if (!link) {
            return null;
        }


        const markdownMatch =
            typeof link === "string"
                ? link.match(
                    /^\[([^\]]+)\]\(([^)]+)\)$/
                )
                : null;


        if (markdownMatch) {

            return {
                text: markdownMatch[1],
                url: markdownMatch[2],
            };

        }


        return {
            text: "Open link",
            url: link,
        };

    }


    /*
    =========================================================
    OPEN LINK
    =========================================================
    */

    function openLink(link) {

        const linkData =
            getLinkData(link);


        if (!linkData?.url) {
            return;
        }


        window.open(
            linkData.url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /*
    =========================================================
    RENDER
    =========================================================
    */

    return (

        <div className="chat-message assistant-message">


            {/* =================================================
                BOT AVATAR
            ================================================= */}

            <div className="message-avatar">

                <img
                    src={botlogo}
                    alt="ChipIN Assistant"
                />

            </div>


            {/* =================================================
                RESPONSE
            ================================================= */}

            <div className="message-content">


                {/* =================================================
                    SUMMARY
                ================================================= */}

                {response.summary && (

                    <div className="chat-summary">

                        {response.summary}

                    </div>

                )}


                {/* =================================================
                    STEPS
                ================================================= */}

                {Array.isArray(response.steps) &&
                    response.steps.length > 0 && (

                    <div className="chat-steps">

                        <div className="chat-section-title">
                            Steps
                        </div>


                        <div className="chat-step-list">

                            {response.steps.map(
                                (step, index) => {


                                    /*
                                    ---------------------------------
                                    Plain text step
                                    ---------------------------------
                                    */

                                    if (
                                        typeof step === "string"
                                    ) {

                                        return (

                                            <div
                                                key={index}
                                                className="chat-step"
                                            >

                                                <div className="chat-step-number">
                                                    {index + 1}
                                                </div>

                                                <div className="chat-step-body">

                                                    {step}

                                                </div>

                                            </div>

                                        );

                                    }


                                    return (

                                        <div
                                            key={index}
                                            className="chat-step"
                                        >

                                            {/* STEP NUMBER */}

                                            <div className="chat-step-number">

                                                {index + 1}

                                            </div>


                                            <div className="chat-step-body">


                                                {/* TITLE */}

                                                {step.title && (

                                                    <div className="chat-step-title">

                                                        {step.title}

                                                    </div>

                                                )}


                                                {/* INSTRUCTION */}

                                                {step.instruction && (

                                                    <div className="chat-step-instruction">

                                                        {step.instruction}

                                                    </div>

                                                )}


                                                {/* COMMANDS */}

                                                {Array.isArray(
                                                    step.commands
                                                ) &&
                                                step.commands.length > 0 && (

                                                    <div className="chat-step-commands">

                                                        {step.commands.map(
                                                            (
                                                                command,
                                                                commandIndex
                                                            ) => (

                                                                <code
                                                                    key={
                                                                        commandIndex
                                                                    }
                                                                    className="chat-command"
                                                                >

                                                                    {command}

                                                                </code>

                                                            )
                                                        )}

                                                    </div>

                                                )}


                                                {/* LINKS */}

                                                {Array.isArray(
                                                    step.links
                                                ) &&
                                                step.links.length > 0 && (

                                                    <div className="chat-step-links">

                                                        {step.links.map(
                                                            (
                                                                link,
                                                                linkIndex
                                                            ) => {

                                                                const linkData =
                                                                    getLinkData(
                                                                        link
                                                                    );


                                                                if (
                                                                    !linkData
                                                                ) {
                                                                    return null;
                                                                }


                                                                return (

                                                                    <button
                                                                        key={
                                                                            linkIndex
                                                                        }
                                                                        type="button"
                                                                        className="chat-response-link"
                                                                        onClick={() =>
                                                                            openLink(
                                                                                link
                                                                            )
                                                                        }
                                                                    >

                                                                        <span className="chat-link-icon">
                                                                            ↗
                                                                        </span>

                                                                        <span>
                                                                            {
                                                                                linkData.text
                                                                            }
                                                                        </span>

                                                                    </button>

                                                                );

                                                            }
                                                        )}

                                                    </div>

                                                )}


                                                {/* EXPECTED RESULT */}

                                                {step.expected_result && (

                                                    <div className="chat-step-result">

                                                        <span className="chat-result-label">
                                                            Expected result
                                                        </span>

                                                        <span>
                                                            {
                                                                step.expected_result
                                                            }
                                                        </span>

                                                    </div>

                                                )}


                                                {/* WARNING */}

                                                {step.warning && (

                                                    <div className="chat-step-warning">

                                                        <span>
                                                            ⚠
                                                        </span>

                                                        <span>
                                                            {step.warning}
                                                        </span>

                                                    </div>

                                                )}

                                            </div>

                                        </div>

                                    );

                                }
                            )}

                        </div>

                    </div>

                )}


                {/* =================================================
                    ADDITIONAL INFORMATION
                ================================================= */}

                {response.additional_information && (

                    <div className="chat-additional-information">

                        <div className="chat-section-title">
                            Additional Information
                        </div>

                        <div>
                            {
                                response.additional_information
                            }
                        </div>

                    </div>

                )}


                {/* =================================================
                    IMAGES
                ================================================= */}

                {Array.isArray(response.images) &&
                    response.images.length > 0 && (

                    <div className="chat-reference-images">

                        {response.images.map(
                            (image, index) => {

                                if (
                                    !image?.image_path
                                ) {

                                    return null;

                                }


                                return (

                                    <button
                                        key={index}
                                        type="button"
                                        className="chat-image-button"
                                        onClick={() =>
                                            window.open(
                                                image.image_path,
                                                "_blank",
                                                "noopener,noreferrer"
                                            )
                                        }
                                    >

                                        <span className="chat-image-icon">
                                            ▣
                                        </span>

                                        <span>

                                            {image.alt_text ||
                                                `View reference image ${
                                                    index + 1
                                                }`
                                            }

                                        </span>

                                        <span className="chat-image-arrow">
                                            ↗
                                        </span>

                                    </button>

                                );

                            }
                        )}

                    </div>

                )}


                {/* =================================================
                    FOLLOW-UP
                ================================================= */}

                {response.follow_up_question && (

                    <div className="chat-follow-up">

                        {response.follow_up_question}

                    </div>

                )}


                {/* =================================================
                    SUPPORT ACTIONS
                ================================================= */}

                {!response.needs_clarification &&
                    response.summary && (

                    <div className="chat-support-actions">

                        <div className="chat-support-question">

                            Is your issue resolved?

                        </div>


                        <div className="chat-support-buttons">

                            {/* ISSUE RESOLVED */}
                            <button
                                type="button"
                                className="chat-resolved-button"
                                onClick={openResolvedIssueForm}
                            >
                                ✓ Issue Resolved
                            </button>


                            {/* RAISE TICKET */}

                            <button
                                type="button"
                                className="chat-ticket-button"
                                onClick={openTicketForm}
                            >

                                🎫 Raise a Ticket

                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

}


export default ChatMessage;