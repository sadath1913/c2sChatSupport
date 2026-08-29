import { useEffect, useState } from "react";

import {
    getModules,
    createSupportTicket,
} from "../../services/supportApi";

import { useChat } from "../../context/ChatContext";


function SupportTicket() {

    const {
        currentModuleId,
        endChat,
    } = useChat();


    // =========================================================
    // FORM STATE
    // =========================================================

    const [formData, setFormData] = useState({

        instituteName: "",

        moduleId:
            currentModuleId
                ? String(currentModuleId)
                : "",

        section: "",

        issue: "",

        exactError: "",

        environment: "",

        networkLicenseDetails: "",

        stepsTried: "",

        additionalDetails: "",

    });


    const [screenshot, setScreenshot] =
        useState(null);


    // =========================================================
    // MODULE STATE
    // =========================================================

    const [modules, setModules] =
        useState([]);


    const [isLoadingModules, setIsLoadingModules] =
        useState(true);


    const [moduleError, setModuleError] =
        useState("");


    // =========================================================
    // SUBMIT STATE
    // =========================================================

    const [isSubmitting, setIsSubmitting] =
        useState(false);


    const [submitError, setSubmitError] =
        useState("");


    const [ticketResponse, setTicketResponse] =
        useState(null);


    // =========================================================
    // FETCH MODULES
    // =========================================================

    useEffect(() => {

        async function loadModules() {

            try {

                setIsLoadingModules(true);

                setModuleError("");


                const data =
                    await getModules();


                setModules(
                    Array.isArray(data)
                        ? data
                        : []
                );


            } catch (error) {

                console.error(
                    "Failed to load modules:",
                    error
                );

                setModuleError(
                    "Unable to load modules. Please try again."
                );

            } finally {

                setIsLoadingModules(false);

            }

        }


        loadModules();

    }, []);


    // =========================================================
    // SET MODULE FROM CHAT CONTEXT
    // =========================================================

    useEffect(() => {

        if (currentModuleId) {

            setFormData(
                (previous) => ({
                    ...previous,
                    moduleId:
                        String(currentModuleId),
                })
            );

        }

    }, [currentModuleId]);


    // =========================================================
    // HANDLE INPUT
    // =========================================================

    function handleChange(e) {

        const {
            name,
            value,
        } = e.target;


        setFormData(
            (previous) => ({
                ...previous,
                [name]: value,
            })
        );


        if (submitError) {

            setSubmitError("");

        }

    }


    // =========================================================
    // HANDLE SCREENSHOT
    // =========================================================

    function handleScreenshotChange(e) {

        const file =
            e.target.files?.[0] || null;


        setScreenshot(file);


        if (submitError) {

            setSubmitError("");

        }

    }


    // =========================================================
    // SUBMIT TICKET
    // =========================================================

    async function handleSubmit(e) {

        e.preventDefault();


        setSubmitError("");


        if (!formData.moduleId) {

            setSubmitError(
                "Please select a module."
            );

            return;

        }


        if (!formData.instituteName.trim()) {

            setSubmitError(
                "Please enter your institute name."
            );

            return;

        }


        if (!formData.section.trim()) {

            setSubmitError(
                "Please enter the section."
            );

            return;

        }


        if (!formData.issue.trim()) {

            setSubmitError(
                "Please describe your issue."
            );

            return;

        }


        setIsSubmitting(true);


        try {

            const response =
                await createSupportTicket({

                    instituteName:
                        formData.instituteName.trim(),

                    moduleId:
                        Number(formData.moduleId),

                    section:
                        formData.section.trim(),

                    issue:
                        formData.issue.trim(),

                    exactError:
                        formData.exactError.trim(),

                    environment:
                        formData.environment.trim(),

                    networkLicenseDetails:
                        formData.networkLicenseDetails.trim(),

                    stepsTried:
                        formData.stepsTried.trim(),

                    additionalDetails:
                        formData.additionalDetails.trim(),

                    screenshot,

                });


            console.log(
                "TICKET CREATED:",
                response
            );


            setTicketResponse(
                response
            );


        } catch (error) {

            console.error(
                "Failed to create support ticket:",
                error
            );


            setSubmitError(
                error.message ||
                "Failed to create support ticket. Please try again."
            );

        } finally {

            setIsSubmitting(false);

        }

    }


    // =========================================================
    // SUCCESS SCREEN
    // =========================================================

    if (ticketResponse) {

        return (

            <div className="support-ticket">

                <div className="support-ticket-success">

                    <div className="support-ticket-success-icon">
                        ✓
                    </div>


                    <h2>
                        Support Ticket Created
                    </h2>


                    <p>
                        Your support request has been
                        submitted successfully.
                    </p>


                    {ticketResponse.ticket_id && (

                        <div className="support-ticket-number">

                            <span>
                                Ticket ID
                            </span>

                            <strong>
                                {ticketResponse.ticket_id}
                            </strong>

                        </div>

                    )}


                    <button
                        type="button"
                        className="support-ticket-back-button"
                        onClick={async () => {

                            try {

                                await endChat();

                            } catch (error) {

                                console.error(
                                    "Failed to end chat after ticket creation:",
                                    error
                                );

                            }

                        }}
                    >
                        Close
                    </button>

                </div>

            </div>

        );

    }


    // =========================================================
    // TICKET FORM
    // =========================================================

    return (

        <div className="support-ticket">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="support-ticket-top">

                <div>

                    <h2>
                        Raise a Support Ticket
                    </h2>

                    <p>
                        Provide the details below so the
                        ChipIN support team can assist you.
                    </p>

                </div>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
                className="support-ticket-form"
                onSubmit={handleSubmit}
            >


                {/* =================================================
                    INSTITUTE
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="instituteName">
                        Institute Name
                        <span>*</span>
                    </label>


                    <input
                        id="instituteName"
                        name="instituteName"
                        type="text"
                        value={formData.instituteName}
                        onChange={handleChange}
                        placeholder="Enter your institute name"
                        required
                    />

                </div>


                {/* =================================================
                    MODULE
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="moduleId">
                        Module
                        <span>*</span>
                    </label>


                    <select
                        id="moduleId"
                        name="moduleId"
                        value={formData.moduleId}
                        onChange={handleChange}
                        disabled={
                            isLoadingModules ||
                            isSubmitting
                        }
                        required
                    >

                        <option value="">
                            {isLoadingModules
                                ? "Loading modules..."
                                : "Select module"
                            }
                        </option>


                        {modules.map((module) => (

                            <option
                                key={module.id}
                                value={module.id}
                            >
                                {module.name}
                            </option>

                        ))}

                    </select>


                    {moduleError && (

                        <small className="support-ticket-error">
                            {moduleError}
                        </small>

                    )}

                </div>


                {/* =================================================
                    SECTION
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="section">
                        Section
                        <span>*</span>
                    </label>


                    <input
                        id="section"
                        name="section"
                        type="text"
                        value={formData.section}
                        onChange={handleChange}
                        placeholder="Example: EDA Tools"
                        required
                    />

                </div>


                {/* =================================================
                    ISSUE
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="issue">
                        Issue
                        <span>*</span>
                    </label>


                    <textarea
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        placeholder="Describe the issue you are facing"
                        rows={4}
                        required
                    />

                </div>


                {/* =================================================
                    EXACT ERROR
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="exactError">
                        Exact Error
                    </label>


                    <textarea
                        id="exactError"
                        name="exactError"
                        value={formData.exactError}
                        onChange={handleChange}
                        placeholder="Enter the exact error message, if any"
                        rows={3}
                    />

                </div>


                {/* =================================================
                    ENVIRONMENT
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="environment">
                        Environment
                    </label>


                    <textarea
                        id="environment"
                        name="environment"
                        value={formData.environment}
                        onChange={handleChange}
                        placeholder="Operating system, setup, tool version, etc."
                        rows={3}
                    />

                </div>


                {/* =================================================
                    NETWORK / LICENSE
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="networkLicenseDetails">
                        Network / License Details
                    </label>


                    <textarea
                        id="networkLicenseDetails"
                        name="networkLicenseDetails"
                        value={
                            formData.networkLicenseDetails
                        }
                        onChange={handleChange}
                        placeholder="Provide relevant network or license details"
                        rows={3}
                    />

                </div>


                {/* =================================================
                    STEPS TRIED
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="stepsTried">
                        Steps Tried
                    </label>


                    <textarea
                        id="stepsTried"
                        name="stepsTried"
                        value={formData.stepsTried}
                        onChange={handleChange}
                        placeholder="Describe the troubleshooting steps you already tried"
                        rows={4}
                    />

                </div>


                {/* =================================================
                    ADDITIONAL DETAILS
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="additionalDetails">
                        Additional Details
                    </label>


                    <textarea
                        id="additionalDetails"
                        name="additionalDetails"
                        value={
                            formData.additionalDetails
                        }
                        onChange={handleChange}
                        placeholder="Anything else that may help the support team"
                        rows={4}
                    />

                </div>


                {/* =================================================
                    SCREENSHOT
                ================================================= */}

                <div className="support-ticket-field">

                    <label htmlFor="screenshot">
                        Screenshot
                    </label>


                    <input
                        id="screenshot"
                        name="screenshot"
                        type="file"
                        accept="image/*"
                        onChange={
                            handleScreenshotChange
                        }
                    />


                    {screenshot && (

                        <small>
                            Selected: {screenshot.name}
                        </small>

                    )}

                </div>


                {/* =================================================
                    ERROR
                ================================================= */}

                {submitError && (

                    <div className="support-ticket-submit-error">

                        {submitError}

                    </div>

                )}


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                    type="submit"
                    className="support-ticket-submit"
                    disabled={
                        isSubmitting ||
                        isLoadingModules
                    }
                >

                    {isSubmitting
                        ? "Submitting..."
                        : "Submit Support Ticket"
                    }

                </button>

            </form>

        </div>

    );

}


export default SupportTicket;