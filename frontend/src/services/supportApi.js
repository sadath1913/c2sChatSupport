const API_URL =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV
        ? "http://localhost:8000"
        : "https://c2schatsupport-1-zo8z.onrender.com");


// =========================================================
// GET ALL MODULES
// =========================================================

export async function getModules() {

    const response = await fetch(
        `${API_URL}/support/modules`
    );


    if (!response.ok) {

        const errorText =
            await response.text();

        throw new Error(
            `Failed to fetch modules: ${response.status} ${errorText}`
        );

    }


    const data =
        await response.json();


    console.log(
        "SUPPORT MODULES:",
        data
    );


    return data;
}


// =========================================================
// CREATE RESOLVED ISSUE
// =========================================================

export async function createResolvedIssue({
    instituteName,
    moduleId,
    section,
    issue,
    resolutionSteps,
}) {

    const requestBody = {

        institute_name: instituteName,

        module_id: moduleId,

        section,

        issue,

        resolution_steps: resolutionSteps,

    };


    console.log(
        "RESOLVED ISSUE REQUEST:",
        requestBody
    );


    const response = await fetch(
        `${API_URL}/support/resolved-issues`,
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
            `Failed to create resolved issue: ${response.status} ${errorText}`
        );

    }


    const data =
        await response.json();


    console.log(
        "RESOLVED ISSUE RESPONSE:",
        data
    );


    return data;
}


// =========================================================
// CREATE SUPPORT TICKET
// =========================================================

export async function createSupportTicket({
    instituteName,
    moduleId,
    section,
    issue,
    exactError,
    environment,
    networkLicenseDetails,
    stepsTried,
    additionalDetails,
    screenshot,
}) {

    const formData =
        new FormData();


    formData.append(
        "institute_name",
        instituteName
    );

    formData.append(
        "module_id",
        String(moduleId)
    );

    formData.append(
        "section",
        section
    );

    formData.append(
        "issue",
        issue
    );


    if (exactError) {

        formData.append(
            "exact_error",
            exactError
        );

    }


    if (environment) {

        formData.append(
            "environment",
            environment
        );

    }


    if (networkLicenseDetails) {

        formData.append(
            "network_license_details",
            networkLicenseDetails
        );

    }


    if (stepsTried) {

        formData.append(
            "steps_tried",
            stepsTried
        );

    }


    if (additionalDetails) {

        formData.append(
            "additional_details",
            additionalDetails
        );

    }


    if (screenshot) {

        formData.append(
            "screenshot",
            screenshot
        );

    }


    console.log(
        "SUPPORT TICKET REQUEST:",
        {
            instituteName,
            moduleId,
            section,
            issue,
            exactError,
            environment,
            networkLicenseDetails,
            stepsTried,
            additionalDetails,
            screenshot,
        }
    );


    const response = await fetch(
        `${API_URL}/support/tickets`,
        {
            method: "POST",

            body: formData,
        }
    );


    if (!response.ok) {

        const errorText =
            await response.text();

        throw new Error(
            `Failed to create support ticket: ${response.status} ${errorText}`
        );

    }


    const data =
        await response.json();


    console.log(
        "SUPPORT TICKET RESPONSE:",
        data
    );


    return data;
}