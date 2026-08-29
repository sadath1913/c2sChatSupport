import { useEffect, useState } from "react";

import {
    getModules,
    createResolvedIssue,
} from "../../services/supportApi";

import { useChat } from "../../context/ChatContext";


function ResolvedIssue({
    issue,
    resolutionSteps,
}) {

    const {
        currentModuleId,
        endChat,
    } = useChat();


    // =========================================================
    // FORM DATA
    // =========================================================

    const [formData, setFormData] = useState({

        instituteName: "",

        moduleId:
            currentModuleId
                ? String(currentModuleId)
                : "",

        section: "",

        issue:
            issue || "",

        resolutionSteps:
            resolutionSteps || "",

    });


    // =========================================================
    // MODULES
    // =========================================================

    const [modules, setModules] =
        useState([]);


    const [isLoadingModules, setIsLoadingModules] =
        useState(true);


    const [moduleError, setModuleError] =
        useState("");


    // =========================================================
    // SUBMIT
    // =========================================================

    const [isSubmitting, setIsSubmitting] =
        useState(false);


    const [submitError, setSubmitError] =
        useState("");


    // =========================================================
    // LOAD MODULES
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
    // SET CURRENT MODULE
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
    // UPDATE INPUT
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
    // SUBMIT RESOLVED ISSUE
    // =========================================================

    async function handleSubmit(e) {

        e.preventDefault();


        setSubmitError("");


        // -----------------------------------------------------
        // VALIDATION
        // -----------------------------------------------------

        if (!formData.instituteName.trim()) {

            setSubmitError(
                "Please enter your institute name."
            );

            return;

        }


        if (!formData.moduleId) {

            setSubmitError(
                "Please select a module."
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
                "Please enter the issue."
            );

            return;

        }


        if (!formData.resolutionSteps.trim()) {

            setSubmitError(
                "Please enter the resolution steps."
            );

            return;

        }


        setIsSubmitting(true);


        // -----------------------------------------------------
        // API
        // -----------------------------------------------------

        try {

            const response =
                await createResolvedIssue({

                    instituteName:
                        formData.instituteName.trim(),

                    moduleId:
                        Number(formData.moduleId),

                    section:
                        formData.section.trim(),

                    issue:
                        formData.issue.trim(),

                    resolutionSteps:
                        formData.resolutionSteps.trim(),

                });


            console.log(
                "RESOLVED ISSUE CREATED:",
                response
            );


            /*
            -----------------------------------------------------
            Issue has been successfully recorded.

            End the chatbot session.

            This will:

                DELETE backend session
                ↓
                clear current messages
                ↓
                clear session ID
                ↓
                close chatbot
            -----------------------------------------------------
            */

            await endChat();


        } catch (error) {

            console.error(
                "Failed to record resolved issue:",
                error
            );


            setSubmitError(
                error.message ||
                "Failed to record the resolved issue. Please try again."
            );

        } finally {

            setIsSubmitting(false);

        }

    }


    // =========================================================
    // UI
    // =========================================================

    return (

        <div className="resolved-issue">


            {/* =================================================
                HEADER
            ================================================= */}

            <div className="resolved-issue-header">

                <h2>
                    Issue Resolved
                </h2>

                <p>
                    Tell us a little about the issue that was
                    successfully resolved.
                </p>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
                className="resolved-issue-form"
                onSubmit={handleSubmit}
            >


                {/* =================================================
                    INSTITUTE
                ================================================= */}

                <div className="resolved-issue-field">

                    <label htmlFor="resolved-instituteName">

                        Institute Name

                        <span>
                            *
                        </span>

                    </label>


                    <input
                        id="resolved-instituteName"
                        name="instituteName"
                        type="text"
                        value={
                            formData.instituteName
                        }
                        onChange={handleChange}
                        placeholder="Enter your institute name"
                        disabled={isSubmitting}
                        required
                    />

                </div>


                {/* =================================================
                    MODULE
                ================================================= */}

                <div className="resolved-issue-field">

                    <label htmlFor="resolved-moduleId">

                        Module

                        <span>
                            *
                        </span>

                    </label>


                    <select
                        id="resolved-moduleId"
                        name="moduleId"
                        value={
                            formData.moduleId
                        }
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

                        <small className="resolved-issue-error">

                            {moduleError}

                        </small>

                    )}

                </div>


                {/* =================================================
                    SECTION
                ================================================= */}

                <div className="resolved-issue-field">

                    <label htmlFor="resolved-section">

                        Section

                        <span>
                            *
                        </span>

                    </label>


                    <input
                        id="resolved-section"
                        name="section"
                        type="text"
                        value={
                            formData.section
                        }
                        onChange={handleChange}
                        placeholder="Example: EDA Tools"
                        disabled={isSubmitting}
                        required
                    />

                </div>


                {/* =================================================
                    ISSUE
                ================================================= */}

                <div className="resolved-issue-field">

                    <label htmlFor="resolved-issue">

                        Issue

                        <span>
                            *
                        </span>

                    </label>


                    <textarea
                        id="resolved-issue"
                        name="issue"
                        value={
                            formData.issue
                        }
                        onChange={handleChange}
                        placeholder="Describe the issue"
                        rows={4}
                        disabled={isSubmitting}
                        required
                    />

                </div>


                {/* =================================================
                    RESOLUTION
                ================================================= */}

                <div className="resolved-issue-field">

                    <label htmlFor="resolved-resolutionSteps">

                        Resolution Steps

                        <span>
                            *
                        </span>

                    </label>


                    <textarea
                        id="resolved-resolutionSteps"
                        name="resolutionSteps"
                        value={
                            formData.resolutionSteps
                        }
                        onChange={handleChange}
                        placeholder="Describe how the issue was resolved"
                        rows={5}
                        disabled={isSubmitting}
                        required
                    />

                </div>


                {/* =================================================
                    ERROR
                ================================================= */}

                {submitError && (

                    <div className="resolved-issue-submit-error">

                        {submitError}

                    </div>

                )}


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                    type="submit"
                    className="resolved-issue-submit"
                    disabled={
                        isSubmitting ||
                        isLoadingModules
                    }
                >

                    {isSubmitting
                        ? "Saving..."
                        : "Submit"
                    }

                </button>

            </form>

        </div>

    );

}


export default ResolvedIssue;