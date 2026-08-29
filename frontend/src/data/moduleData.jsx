const moduleData = {

    /* =========================================================
       SYNOPSYS
    ========================================================= */

    synopsys: {

        name: "Synopsys",

        title: "Synopsys EDA Tools FAQ",

        faqs: [

            /* =================================================
               Q1
            ================================================= */

            {
                id: 1,

                question:
                    "Q.1) How do I see/find my WAN IP address?",

                answer: (
                    <>
                        <p>
                            Check the WAN IP address with Network administrator
                            or check any of the following links:
                        </p>

                        <ul>

                            <li>
                                <a
                                    href="https://www.showmyip.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://www.showmyip.com/
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.ipaddress.my/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://www.ipaddress.my/
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://router-network.com/tools/what-is-my-ip"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://router-network.com/tools/what-is-my-ip
                                </a>
                            </li>

                        </ul>
                    </>
                ),
            },


            /* =================================================
               Q2
            ================================================= */

            {
                id: 2,

                question:
                    "Q.2) How can I submit a WAN IP address for whitelisting to access EDA tools?",

                answer: (
                    <>
                        <ul>

                            <li>
                                Sign in to{" "}

                                <a
                                    href="https://chipin.cdacb.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://chipin.cdacb.in/
                                </a>
                            </li>

                            <li>
                                Open a new ticket under
                                <strong>
                                    {" "}“IP whitelisting for EDA tool access under C2S”
                                </strong>
                                {" "}help topic.
                            </li>

                            <li>
                                Provide your Institute Name and WAN IP details.
                            </li>

                            <li>
                                Submit the ticket for whitelisting your Institute WAN IPs.
                            </li>

                        </ul>
                    </>
                ),
            },


            /* =================================================
               Q3
            ================================================= */

            {
                id: 3,

                question:
                    "Q.3) How can I verify whether the submitted WAN IP is included in the whitelisted IPs for EDA tools access?",

                answer: (
                    <>
                        <ul>

                            <li>
                                Open your system browser and enter the following
                                IP address in the URL bar:

                                <div className="module-code-block">
                                    14.139.1.126
                                </div>

                                Alternatively, you can click on the link:

                                <a
                                    href="http://14.139.1.126/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    http://14.139.1.126/
                                </a>
                            </li>

                            <li>
                                If the IP is whitelisted, a confirmation message
                                will appear, displaying:

                                <p>
                                    <strong>
                                        "Congratulations!!! Your IP has been
                                        whitelisted for accessing ChipIN EDA
                                        tool Academic license".
                                    </strong>
                                </p>
                            </li>

                        </ul>

                        <p>
                            Please find the message screenshot for your reference.
                        </p>

                        <img
                            src="https://c2s.gov.in/FAQ/Synopsys/q3_img1.png"
                            alt="Whitelist confirmation screenshot"
                            className="module-faq-image"
                        />

                        <p>
                            If a message comes like below attached screenshot,
                            please raise a new ticket as mentioned in question
                            number 2.
                        </p>

                        <img
                            src="https://c2s.gov.in/FAQ/Synopsys/q3_img2.png"
                            alt="Computer screenshot"
                            className="module-faq-image"
                        />
                    </>
                ),
            },


            /* =================================================
               Q4
            ================================================= */

            {
                id: 4,

                question:
                    "Q.4) Can I submit multiple WAN IPs for whitelisting?",

                answer: (
                    <>
                        <p>
                            Multiple WAN IPs can be whitelisted as shown in the
                            example below:
                        </p>

                        <ul>

                            <li>
                                <strong>Single IP:</strong> 14.139.5.5
                            </li>

                            <li>
                                <strong>Range of IPs:</strong> 14.139.1.10 - 14.139.1.25
                            </li>

                            <li>
                                <strong>Subnet:</strong> 14.139.1.0/24
                            </li>

                        </ul>
                    </>
                ),
            },


            /* =================================================
               Q5
            ================================================= */

            {
                id: 5,

                question:
                    "Q.5) How can I check the status of my internet connectivity using a ping test?",

                answer: (
                    <>
                        <p>
                            To check the internet connectivity, run following
                            command from your Linux system.
                        </p>

                        <ul>

                            <li>
                                In the terminal, type the command:

                                <div className="module-code-block">
                                    ping 14.139.1.126
                                </div>

                                and press Enter.
                            </li>

                            <li>
                                This will initiate a ping request to the specified
                                address.
                            </li>

                            <li>
                                If the connection is successful, you will receive
                                a series of replies indicating the network is
                                reachable as shown below.
                            </li>

                        </ul>

                        <img
                            src="https://c2s.gov.in/FAQ/Synopsys/q5_ping.png"
                            alt="Ping command screenshot"
                            className="module-faq-image"
                        />

                        <p>
                            If you encounter timeouts or error messages, this may
                            indicate a connectivity issue.
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q6
            ================================================= */

            {
                id: 6,

                question:
                    "Q.6) How can I check if the Synopsys EDA Tool license server is accessible or not? Or How can I check the Synopsys EDA Tool port connectivity is established or not?",

                answer: (
                    <>
                        <p>
                            Run following command from your Linux system.
                        </p>

                        <ul>

                            <li>
                                Open the command terminal on your system.
                            </li>

                            <li>
                                Use the following commands to check the
                                connectivity to the specific licensing server
                                and its respective ports:

                                <div className="module-code-block">
                                    nc -vz 14.139.1.126 27020
                                </div>

                                <div className="module-code-block">
                                    nc -vz 14.139.1.126 27021
                                </div>
                            </li>

                            <li>
                                This command will test the connection to the
                                server and provide feedback on whether the
                                specified port is open and accessible.
                            </li>

                        </ul>

                        <img
                            src="https://c2s.gov.in/FAQ/Synopsys/q6_ports.png"
                            alt="Port connectivity screenshot"
                            className="module-faq-image"
                        />

                        <ul>

                            <li>
                                If the connection is successful, you will receive
                                a message indicating the port is connected to
                                the licensing server. If not, you may see an
                                error message indicating connection timeout.
                            </li>

                            <li>
                                Check with your network administrator for port
                                opening if connection timeout issue occurs.
                            </li>

                        </ul>
                    </>
                ),
            },


            /* =================================================
               Q7
            ================================================= */

            {
                id: 7,

                question:
                    "Q.7) Which OS is best compatible for Synopsys EDA tools installation and access? What are the recommended hardware specifications for optimal performance of Synopsys EDA tools?",

                answer: (
                    <>
                        <p>
                            Synopsys EDA tools are compatible with subscription-based
                            OS: RHEL 8.4 or Open-Source OS: Rocky Linux 8.4 or
                            Alma Linux 8.4.
                        </p>

                        <p>
                            For more information, please visit:
                        </p>

                        <p>
                            <a
                                href="https://www.synopsys.com/support/licensing-installation-compute-platforms/compute-platforms/release-specific-support.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                Synopsys Compute Platform Support
                            </a>
                        </p>

                        <p>
                            For Hardware compatibility refer to the image below.
                        </p>

                        <img
                            src="https://c2s.gov.in/FAQ/Synopsys/Synopsys_Q7.png"
                            alt="Hardware compatibility for Synopsys EDA tools"
                            className="module-faq-image"
                        />
                    </>
                ),
            },


            /* =================================================
               Q8
            ================================================= */

            {
                id: 8,

                question:
                    "Q.8) How do I check my current OS and its version?",

                answer: (
                    <>
                        <p>
                            To verify your operating system version, you can use
                            the following command:
                        </p>

                        <div className="module-code-block">
                            cat /etc/os-release
                        </div>

                        <p>
                            This command will display details about your current
                            operating system, including the version and
                            distribution.
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q9
            ================================================= */

            {
                id: 9,

                question:
                    "Q.9) Where can I find the Synopsys EDA Tool binaries for installation?",

                answer: (
                    <>
                        <p>
                            Please find below the Solvnet web-link to download
                            latest Synopsys EDA Tool binaries:
                        </p>

                        <p>
                            <a
                                href="https://solvnet.synopsys.com/DownloadCenter/dc/product.jsp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://solvnet.synopsys.com/DownloadCenter/dc/product.jsp
                            </a>
                        </p>

                        <p>
                            Please find the ChipIN Cloud web-link below to
                            download the latest commonly used Synopsys EDA
                            Tools binaries:
                        </p>

                        <p>
                            <a
                                href="https://chipin-cloud.cdacb.in/index.php/f/627"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://chipin-cloud.cdacb.in/index.php/f/627
                            </a>
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q10
            ================================================= */

            {
                id: 10,

                question:
                    "Q.10) Where can I find step by step installation procedure for Synopsys EDA Tools?",

                answer: (
                    <>
                        <p>
                            Please find below the cloud web-link for the
                            step-by-step installation procedure video and
                            relevant materials link for Synopsys EDA Tools:
                        </p>

                        <p>
                            <a
                                href="https://chipin-cloud.cdacb.in/index.php/f/71910"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://chipin-cloud.cdacb.in/index.php/f/71910
                            </a>
                        </p>

                        <p>
                            This link covers issues related to installing the
                            Synopsys EDA tools, accessing centrally hosted EDA
                            licenses, setting up environment variables, support
                            related, etc.
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q11
            ================================================= */

            {
                id: 11,

                question:
                    "Q.11) Where can I find step by step checklist document to access Synopsys EDA Tools?",

                answer: (
                    <>
                        <p>
                            Please find below the cloud web-link for the
                            checklist document for the Synopsys EDA Tools:
                        </p>

                        <p>
                            <a
                                href="https://chipin-cloud.cdacb.in/index.php/f/82625"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://chipin-cloud.cdacb.in/index.php/f/82625
                            </a>
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q12
            ================================================= */

            {
                id: 12,

                question:
                    "Q.12) How can I create a CSHRC/Bash file for accessing the Synopsys EDA tools?",

                answer: (
                    <>
                        <p>
                            Below is a sample CSHRC file for reference.
                        </p>

                        <img
                            src="https://c2s.gov.in/FAQ/Synopsys/image5.png"
                            alt="CSHRC file sample"
                            className="module-faq-image"
                        />

                        <p>
                            Please ensure that the following configurations are
                            properly set for accessing Synopsys EDA tools:
                        </p>

                        <ul>

                            <li>
                                <strong>License Path:</strong> Verify that the
                                license checkout path is correctly mentioned
                                as per the checklist document provided by
                                ChipIN.
                            </li>

                            <li>
                                <strong>Set Environment Variable:</strong> Ensure
                                that the necessary environment variables as per
                                the relevant Synopsys EDA Tools are set.
                            </li>

                            <li>
                                <strong>Set Path:</strong> Confirm that the
                                system path is correctly configured to include
                                the installed directories for Synopsys EDA
                                tools.
                            </li>

                        </ul>

                        <p>
                            Proper configuration of these settings is crucial
                            for smooth functionality and access to the required
                            Synopsys EDA tools.
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q13
            ================================================= */

            {
                id: 13,

                question:
                    'Q.13) After all the licenses check out, if you are still facing issue in invoking the tool or if you are facing the error saying "User/host not on INCLUDE list for feature", then how can you verify if the submitted Hostname is included in the whitelist?',

                answer: (
                    <>
                        <p>
                            <strong>A.) Follow the steps provided below</strong>
                        </p>

                        <ul>

                            <li>
                                <strong>Check the Hostname:</strong>

                                <p>
                                    Type{" "}
                                    <span className="module-code">
                                        hostname
                                    </span>
                                    {" "}in the command terminal to display
                                    the current system hostname.
                                </p>
                            </li>

                            <li>
                                <strong>Verify Hosts File:</strong>

                                <p>
                                    Type{" "}
                                    <span className="module-code">
                                        gedit /etc/hosts
                                    </span>
                                    {" "}in the command terminal.
                                </p>

                                <p>
                                    Check that the whitelisted hostname is
                                    present after localdomain4 in the file.
                                </p>
                            </li>

                            <li>
                                <strong>
                                    Verify System Hostname using nmtui:
                                </strong>

                                <p>
                                    Type{" "}
                                    <span className="module-code">
                                        nmtui
                                    </span>
                                    {" "}in the command terminal.
                                </p>

                                <p>
                                    Navigate to Set System Hostname and press
                                    Enter.
                                </p>
                            </li>

                        </ul>

                        <p>
                            Ensure that the hostname is consistent across all
                            entries and verify that the submitted Host-ID is
                            correctly listed that is the hostname should match
                            with the ones submitted through "Unique Host ID
                            identifier".
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q14
            ================================================= */

            {
                id: 14,

                question:
                    "Q.14) What are the tools available under Synopsys EDA and commands to invoke the tools?",

                answer: (
                    <>
                        <p>
                            <strong>A.)</strong>
                        </p>

                        <ul>

                            <li>
                                <strong>Design Vision</strong>

                                <div className="module-code-block">
                                    design_vision
                                </div>
                            </li>

                            <li>
                                <strong>Design Compiler</strong>

                                <div className="module-code-block">
                                    dc_shell
                                </div>
                            </li>

                            <li>
                                <strong>VCS</strong>

                                <div className="module-code-block">
                                    vcs -f &lt;filelist&gt;.f -o simv -full64 -debug_all
                                </div>
                            </li>

                            <li>
                                <strong>Verdi</strong>

                                <div className="module-code-block">
                                    verdi
                                </div>
                            </li>

                            <li>
                                <strong>ICC2</strong>

                                <div className="module-code-block">
                                    icc_shell
                                </div>
                            </li>

                            <li>
                                <strong>PrimeTime</strong>

                                <div className="module-code-block">
                                    pt_shell
                                </div>

                                <span>
                                    GUI:{" "}
                                    <span className="module-code">
                                        primetime
                                    </span>
                                </span>
                            </li>

                            <li>
                                <strong>Hspice</strong>

                                <div className="module-code-block">
                                    hspice &lt;filename&gt;.sp
                                </div>
                            </li>

                            <li>
                                <strong>IC Validator</strong>

                                <div className="module-code-block">
                                    icv -i .gds -c top -vve user.rs
                                </div>
                            </li>

                            <li>
                                <strong>StarRC</strong>

                                <div className="module-code-block">
                                    starrc_shell -gui
                                </div>
                            </li>

                            <li>
                                <strong>Tcad Sentaurus</strong>

                                <div className="module-code-block">
                                    sdevice
                                </div>
                            </li>

                            <li>
                                <strong>SpyGlass</strong>

                                <div className="module-code-block">
                                    sg_shell
                                </div>

                                <span>
                                    GUI:{" "}
                                    <span className="module-code">
                                        spyglass
                                    </span>
                                </span>
                            </li>

                            <li>
                                <strong>Testmax</strong>

                                <div className="module-code-block">
                                    dft_shell
                                </div>
                            </li>

                            <li>
                                <strong>Waveview</strong>

                                <div className="module-code-block">
                                    wv &
                                </div>
                            </li>

                            <li>
                                <strong>Custom Compiler</strong>

                                <div className="module-code-block">
                                    custom_compiler &
                                </div>
                            </li>

                        </ul>

                        <p>
                            Etc..
                        </p>

                        <p>
                            For more information, please refer to the following
                            link:
                        </p>

                        <p>
                            <a
                                href="https://c2s.gov.in/pdf//Synopsys%20List%20of%20Products.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                Synopsys List of Products
                            </a>
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q15
            ================================================= */

            {
                id: 15,

                question:
                    'Q.15) If the institute is facing the download issue in SolvNet, what to do? The error is "SolvNet Download Issue: Error in obtaining user\'s entitlement data"',

                answer: (
                    <>
                        <p>
                            <strong>A.)</strong> Raise a ticket in C2S support
                            portal under help topic
                            <strong>
                                {" "}“Synopsys EDA Tools Related Issues”
                            </strong>
                            {" "}and put the subject line as
                            <strong>
                                {" "}“SolvNet Download Issue”.
                            </strong>
                        </p>

                        <p>
                            Also share the error screenshot. ChipIN will
                            coordinate with Synopsys vendor for resolving
                            the issue.
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q16
            ================================================= */

            {
                id: 16,

                question:
                    "Q.16) What is the installation procedure for the Synopsys EDA tool?",

                answer: (
                    <>
                        <p>
                            <strong>A.)</strong>
                        </p>

                        <ul>

                            <li>
                                Download Synopsys Installer from ChipIN
                                Cloud/SolvNet. (Refer Q.9)
                            </li>

                            <li>
                                Follow the guideline documents for installing
                                the Synopsys Installer. (Refer Q.10)
                            </li>

                            <li>
                                Install Synopsys tools using the Synopsys
                                Installer (GUI). (Refer Q.10)
                            </li>

                            <li>
                                Download the required binaries. (Refer Q.9)
                            </li>

                            <li>
                                Upon successful installation, use the CSHRC or
                                BASHRC files to invoke the tool. (Refer Q.12)
                            </li>

                        </ul>
                    </>
                ),
            },


            /* =================================================
               Q17
            ================================================= */

            {
                id: 17,

                question:
                    "Q.17) Issues faced while invoking any Synopsys tool (specially Sentaurus hanging after invocation)?",

                answer: (
                    <>
                        <p>
                            <strong>A.)</strong> Check OS as well as hardware
                            compatibility for the tools. Please refer to the
                            FAQs number 7 for more information.
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q18
            ================================================= */

            {
                id: 18,

                question:
                    "Q.18) How to implement Unique Host-ID(s) at the local or server machine?",

                answer: (
                    <>
                        <p>
                            <strong>A.)</strong> Refer the below link for
                            implementing Host-IDs.
                        </p>

                        <p>
                            <a
                                href="https://c2s.gov.in/UniqueHost.jsp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://c2s.gov.in/UniqueHost.jsp
                            </a>
                        </p>
                    </>
                ),
            },


            /* =================================================
               Q19
            ================================================= */

            {
                id: 19,

                question:
                    "Q.19) How to request for whitelisting the implemented Unique Host-ID(s)?",

                answer: (
                    <>
                        <p>
                            <strong>A.)</strong> Raise a ticket at the ChipIN
                            support portal:

                            {" "}

                            <a
                                href="https://chipin.cdacb.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://chipin.cdacb.in/
                            </a>

                            {" "}under the help topic
                            <strong>
                                {" "}‘Unique Identifier for EDA Tool License Access’
                            </strong>
                        </p>
                    </>
                ),
            },

        ],
    },


    /* =========================================================
       OTHER MODULES
       
       These are intentionally empty for now.
       We will add their actual FAQ content here later.
    ========================================================= */

    cadence: {
        name: "Cadence",
        title: "Cadence EDA Tools FAQ",

        faqs: [

            {
                id: 1,

                question:
                    "Q.1) How can you verify if the submitted WAN IP is included in the whitelist?",

                answer: (
                    <>
                        <p>
                            A.) To verify if the submitted WAN IP is whitelisted,
                            follow these steps:
                        </p>

                        <ul>
                            <li>
                                Open your system browser and enter this IP address:
                                {" "}
                                <strong>14.139.1.126</strong>
                                {" "}
                                in the URL bar, or alternatively, click on the
                                provided link{" "}
                                <a
                                    href="http://14.139.1.126/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    http://14.139.1.126/
                                </a>
                            </li>

                            <li>
                                If the IP is successfully whitelisted, a
                                confirmation message will appear, displaying
                                {" "}
                                <strong>
                                    "Congratulations!!! Your IP has been
                                    whitelisted for accessing ChipIN EDA tool
                                    Academic license"
                                </strong>
                            </li>

                            <li>
                                Whitelist confirmation screenshot:
                                <img
                                    src="https://c2s.gov.in/FAQ/Cadence/image1.png"
                                    alt="Cadence whitelist confirmation"
                                    className="module-faq-image"
                                />
                            </li>

                            <li>
                                In case the IP is not whitelisted, create a ticket
                                in ChipIN ticketing portal:
                                {" "}
                                <a
                                    href="https://chipin.cdacb.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://chipin.cdacb.in/
                                </a>
                            </li>
                        </ul>

                        <img
                            src="https://c2s.gov.in/FAQ/Cadence/image2.png"
                            alt="Cadence computer screenshot"
                            className="module-faq-image"
                        />

                        <p>
                            This process ensures accurate verification of the
                            submitted IP address against the whitelist.
                        </p>
                    </>
                )
            },


            {
                id: 2,

                question:
                    "Q.2) How can you verify the status of your internet (ping) connectivity?",

                answer: (
                    <>
                        <p>
                            A.) To check internet connectivity, follow these steps:
                        </p>

                        <ul>
                            <li>
                                Open the command terminal on your system.
                            </li>

                            <li>
                                In the terminal, type the command{" "}
                                <code className="module-code">
                                    ping 14.139.1.126
                                </code>
                                {" "}and press Enter.
                            </li>

                            <li>
                                This will initiate a ping request to the specified
                                address. If the connection is successful, you will
                                receive a series of replies indicating the network
                                is reachable.
                            </li>
                        </ul>

                        <img
                            src="https://c2s.gov.in/FAQ/Cadence/image3.png"
                            alt="Cadence ping command screenshot"
                            className="module-faq-image"
                        />

                        <p>
                            If you encounter timeouts or error messages, this may
                            indicate a connectivity issue.
                        </p>
                    </>
                )
            },


            {
                id: 3,

                question:
                    "Q.3) How to find whether the Institute WAN IP is for a single or multiple ISPs?",

                answer: (
                    <>
                        <p>
                            You can check your WAN IP address with your network
                            administrator, or use the following links:
                        </p>

                        <ul>
                            <li>
                                <a
                                    href="https://www.showmyip.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://www.showmyip.com/
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.ipaddress.my/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://www.ipaddress.my/
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://router-network.com/tools/what-is-my-ip"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    https://router-network.com/tools/what-is-my-ip
                                </a>
                            </li>
                        </ul>

                        <p>
                            Multiple WAN IPs can be whitelisted in the following
                            formats:
                        </p>

                        <ul>
                            <li>
                                <strong>Single IP:</strong> 14.139.5.5
                            </li>

                            <li>
                                <strong>Range of IPs:</strong>{" "}
                                14.139.1.10 -- 14.139.1.25
                            </li>

                            <li>
                                <strong>Subnet:</strong> 14.139.1.0/24
                            </li>
                        </ul>
                    </>
                )
            },


            {
                id: 4,

                question:
                    "Q.4) What port numbers are required for Cadence EDA Tools?",

                answer: (
                    <>
                        <p>
                            A.) The following port numbers to the license server
                            {" "}
                            <strong>14.139.1.126</strong>
                            {" "}
                            need to be opened at participating institutions'
                            firewalls for Cadence EDA Tools:
                        </p>

                        <ul>
                            <li>
                                <strong>TCP Ports:</strong>{" "}
                                5280, 5281, and 5282
                            </li>
                        </ul>
                    </>
                )
            },


            {
                id: 5,

                question:
                    "Q.5) How can you verify connectivity to licensing server (Port connectivity)?",

                answer: (
                    <>
                        <p>
                            A.) To verify connectivity to the licensing server,
                            follow these steps:
                        </p>

                        <ul>
                            <li>
                                Open the command terminal on your system.
                            </li>

                            <li>
                                Use the following commands to check the connectivity
                                to the specific licensing server and its respective
                                ports:
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <code className="module-code">
                                    nc -vz 14.139.1.126 5280
                                </code>
                            </li>

                            <li>
                                <code className="module-code">
                                    nc -vz 14.139.1.126 5281
                                </code>
                            </li>

                            <li>
                                <code className="module-code">
                                    nc -vz 14.139.1.126 5282
                                </code>
                            </li>
                        </ul>

                        <img
                            src="https://c2s.gov.in/FAQ/Cadence/image4.png"
                            alt="Cadence port connectivity screenshot"
                            className="module-faq-image"
                        />

                        <ul>
                            <li>
                                This command will test the connection to the server
                                and provide feedback on whether the specified port
                                is open and accessible.
                            </li>

                            <li>
                                If the connection is successful, you will receive
                                a message indicating the port is connected to the
                                licensing server. If not, you may see an error
                                message indicating connection timeout.
                            </li>

                            <li>
                                Check with your network administrator for port
                                opening if connection timeout issue occurs.
                            </li>
                        </ul>
                    </>
                )
            },


            {
                id: 6,

                question:
                    "Q.6) Which OS is supported by Cadence EDA tools?",

                answer: (
                    <>
                        <p>
                            A.) Cadence tools are compatible with{" "}
                            <strong>RHEL 8.7 and above.</strong>
                        </p>

                        <p>
                            To verify your operating system version, you can use
                            the following command:
                        </p>

                        <p>
                            <code className="module-code">
                                cat /etc/os-release
                            </code>
                        </p>

                        <p>
                            This command will display details about your current
                            operating system, including the version and
                            distribution, allowing you to confirm compatibility
                            with Cadence tools.
                        </p>
                    </>
                )
            },


            {
                id: 7,

                question:
                    "Q.7) How to access Cadence EDA tool binaries?",

                answer: (
                    <>
                        <p>
                            A.) You can access the Cadence EDA tool binaries
                            through the following links:
                        </p>

                        <ul>
                            <li>
                                <strong>Analog Tool Bundle:</strong>{" "}
                                <a
                                    href="https://entupletech-my.sharepoint.com/:f:/g/personal/cadence_support_entuple_com/EiwFaJkTP8NCvDrTMUYhIHsBBFUbXHJ_q92y8eeBVGZwmQ?e=2y8UD7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    Analog Tool Bundle Link
                                </a>
                            </li>

                            <li>
                                <strong>Digital Tool Bundle:</strong>{" "}
                                <a
                                    href="https://entupletech-my.sharepoint.com/:f:/g/personal/cadence_support_entuple_com/EhG2ForPEbFCgPA3Bug8tqwBhkXEmSbC6TX73-dSnGPdQw?e=UdloQU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    Digital Tool Bundle Link
                                </a>
                            </li>

                            <li>
                                <strong>Individual Cadence Tools:</strong>{" "}
                                <a
                                    href="https://entupletech-my.sharepoint.com/:f:/g/personal/cadence_support_entuple_com/EsN0T03syr5Lm6EPLI4ZjIQBxKhhQPDffLY7akJJjzuqqw?e=AS6sXc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="module-faq-link"
                                >
                                    Individual Cadence Tools Link
                                </a>
                            </li>
                        </ul>
                    </>
                )
            },


            {
                id: 8,

                question:
                    "Q.8) How can you create a CSHRC file for Cadence tools?",

                answer: (
                    <>
                        <p>
                            A.) Below is a sample CSHRC file for your reference.
                            Please ensure that the following configurations are
                            properly set for accessing Cadence tools:
                        </p>

                        <ul>
                            <li>
                                <strong>License Path:</strong> Verify that the
                                license path is correctly specified to allow
                                proper access to the Cadence licensing system.
                            </li>

                            <li>
                                <strong>Set Environment:</strong> Ensure that the
                                necessary environment variables are set to enable
                                the correct operation of Cadence tools.
                            </li>

                            <li>
                                <strong>Set Path:</strong> Confirm that the system
                                path is correctly configured to include the
                                directories for Cadence tools.
                            </li>
                        </ul>

                        <p>
                            Proper configuration of these settings is crucial for
                            smooth functionality and access to the required tools.
                        </p>

                        <img
                            src="https://c2s.gov.in/FAQ/Cadence/image5.png"
                            alt="Cadence CSHRC file sample"
                            className="module-faq-image"
                        />

                        <img
                            src="https://c2s.gov.in/FAQ/Cadence/image6.png"
                            alt="Cadence CSHRC file sample continuation"
                            className="module-faq-image"
                        />
                    </>
                )
            },


            {
                id: 9,

                question:
                    "Q.9) How can you verify if the submitted Hostname is included in the whitelist?",

                answer: (
                    <>
                        <p>
                            A.) These are the steps provided below.
                        </p>

                        <ul>
                            <li>
                                <strong>Check the Hostname:</strong>
                                <ul>
                                    <li>
                                        Type{" "}
                                        <code className="module-code">
                                            hostname
                                        </code>
                                        {" "}
                                        in the command terminal to display the
                                        current system hostname.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>Verify Hosts File:</strong>
                                <ul>
                                    <li>
                                        Type{" "}
                                        <code className="module-code">
                                            gedit /etc/hosts
                                        </code>
                                        {" "}
                                        in the command terminal.
                                    </li>

                                    <li>
                                        Check that the whitelisted hostname is
                                        present after localdomain4 in the file.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <strong>
                                    Verify System Hostname using nmtui:
                                </strong>
                                <ul>
                                    <li>
                                        Type{" "}
                                        <code className="module-code">
                                            nmtui
                                        </code>
                                        {" "}
                                        in the command terminal.
                                    </li>

                                    <li>
                                        Navigate to Set System Hostname and press
                                        Enter.
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <p>
                            Ensure that the hostname is consistent across all
                            entries and verify that the submitted Host-ID is
                            correctly listed.
                        </p>
                    </>
                )
            },


            {
                id: 10,

                question:
                    "Q.10) What are the tools available under Cadence EDA?",

                answer: (
                    <>
                        <p>
                            A.) Cadence provides a comprehensive suite of
                            Electronic Design Automation (EDA) tools, including:
                        </p>

                        <ul>
                            <li>
                                <strong>Xcelium</strong> -- A high-performance
                                logic simulation tool for functional verification.
                            </li>

                            <li>
                                <strong>Incisive</strong> -- A verification
                                platform supporting simulation, formal, and
                                acceleration techniques.
                            </li>

                            <li>
                                <strong>Genus</strong> -- A high-capacity RTL
                                synthesis tool optimized for power, performance,
                                and area (PPA).
                            </li>

                            <li>
                                <strong>Modus</strong> -- A Design-for-Test (DFT)
                                solution for automatic test pattern generation
                                (ATPG) and compression.
                            </li>

                            <li>
                                <strong>Innovus</strong> -- A place-and-route tool
                                for physical design with advanced optimization
                                features.
                            </li>

                            <li>
                                <strong>Virtuoso</strong> -- A full-custom design
                                platform for analog, mixed-signal, and RF designs.
                            </li>

                            <li>
                                <strong>Tempus</strong> -- A static timing analysis
                                (STA) tool ensuring timing closure and signoff.
                            </li>

                            <li>
                                <strong>Voltus</strong> -- A power integrity and
                                power analysis tool for chip and package designs.
                            </li>

                            <li>
                                <strong>Conformal</strong> -- A formal verification
                                tool for equivalence checking and ECO validation.
                            </li>

                            <li>
                                <strong>Liberate</strong> -- A standard cell and
                                memory characterization tool for library creation.
                            </li>

                            <li>
                                <strong>JasperGold</strong> -- A formal verification
                                tool for proving functional correctness using
                                formal methods.
                            </li>

                            <li>
                                <strong>Assura</strong> -- A physical verification
                                tool for DRC, LVS, and parasitic extraction in IC
                                designs.
                            </li>

                            <li>
                                <strong>Quantus</strong> -- A fast and scalable
                                parasitic extraction tool for accurate post-layout
                                analysis.
                            </li>

                            <li>
                                <strong>Spectre</strong> -- A SPICE-based circuit
                                simulator for accurate analog and mixed-signal
                                simulation.
                            </li>
                        </ul>

                        <p>
                            These tools collectively support various stages of IC
                            design, including verification, synthesis,
                            implementation, and signoff. Additionally, many other
                            tools are available under C2S, which can be accessed
                            through the provided tool list link.
                        </p>

                        <p>
                            Cadence Tools list link:
                            {" "}
                            <a
                                href="https://c2s.gov.in/pdf/Cadence%20EDA%20List%20of%20Products.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                Cadence EDA List of Products
                            </a>
                        </p>
                    </>
                )
            },


            {
                id: 11,

                question:
                    "Q.11) What are the commands to launch Cadence EDA tools?",

                answer: (
                    <>
                        <p>
                            A.) Below commands are used to invoke respective
                            Cadence EDA tools:
                        </p>

                        <ul>
                            <li>
                                <strong>Xcelium:</strong>{" "}
                                <code className="module-code">
                                    xrun
                                </code>
                            </li>

                            <li>
                                <strong>Incisive:</strong>{" "}
                                <code className="module-code">
                                    irun file_name.v file_test.v-access +rwc-gui
                                </code>
                            </li>

                            <li>
                                <strong>Genus:</strong>{" "}
                                <code className="module-code">
                                    genus -gui
                                </code>
                            </li>

                            <li>
                                <strong>Modus:</strong>{" "}
                                <code className="module-code">
                                    Modus -legacy_gui
                                </code>
                            </li>

                            <li>
                                <strong>Innovus:</strong>{" "}
                                <code className="module-code">
                                    innovus
                                </code>
                            </li>

                            <li>
                                <strong>Virtuoso:</strong>{" "}
                                <code className="module-code">
                                    virtuoso
                                </code>
                            </li>

                            <li>
                                <strong>Tempus:</strong>{" "}
                                <code className="module-code">
                                    tempus
                                </code>
                            </li>

                            <li>
                                <strong>Voltus:</strong>{" "}
                                <code className="module-code">
                                    voltus
                                </code>
                            </li>

                            <li>
                                <strong>Conformal:</strong>{" "}
                                <code className="module-code">
                                    lec, lec_auto
                                </code>
                            </li>

                            <li>
                                <strong>Liberate:</strong>{" "}
                                <code className="module-code">
                                    liberate
                                </code>
                            </li>
                        </ul>
                    </>
                )
            },


            {
                id: 12,

                question:
                    "Q.12) Where can I access the training material for the EDA tools and design flow training?",

                answer: (
                    <>
                        <p>
                            A.) You can access the training materials along with
                            registration information from the C2S Website. The
                            link is given below for your reference.
                        </p>

                        <p>
                            <a
                                href="https://c2s.gov.in/Completed_Training.jsp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                C2S Training Link
                            </a>
                        </p>

                        <p>
                            The above link includes details on the previously
                            completed sessions comprising of training resources.
                        </p>
                    </>
                )
            },


            {
                id: 13,

                question:
                    "Q.13) What tools are covered in the training?",

                answer: (
                    <>
                        <p>
                            A.) The training covers a wide range of industry-
                            standard EDA tools for different stages of the IC
                            design flow, including tools for simulation,
                            synthesis, PD flow, physical verification, and layout
                            etc. A detailed list of the tools covered can be found
                            on the C2S website.
                        </p>

                        <p>
                            The link is given below for your reference.
                        </p>

                        <p>
                            <a
                                href="https://c2s.gov.in/Completed_Training.jsp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                C2S Training Link
                            </a>
                        </p>
                    </>
                )
            },


            {
                id: 14,

                question:
                    "Q.14) How to integrate Calibre with Virtuoso?",

                answer: (
                    <>
                        <p>
                            A.) For integrating Calibre with Virtuoso, please
                            follow the procedure provided in the screenshot.
                        </p>

                        <img
                            src="https://c2s.gov.in/FAQ/Cadence/image7.png"
                            alt="Calibre Virtuoso integration"
                            className="module-faq-image"
                        />
                    </>
                )
            },


            {
                id: 15,

                question:
                    "Q.15) How do I integrate Calibre with Virtuoso if I am using SCL-PDK V3?",

                answer: (
                    <>
                        <p>
                            A.) If you are using SCL-PDK V3 with the proper setup,
                            Calibre will automatically integrate with Virtuoso.
                            No need to invoke Calibre separately—this integration
                            is done automatically when the setup is correctly
                            configured.
                        </p>

                        <p>
                            Kindly refer the following link for your reference:
                        </p>

                        <p>
                            <a
                                href="https://c2s.gov.in/IEP_Materials/2.mp4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                SCL-PDK and its Integration into the Design Flow
                            </a>
                        </p>
                    </>
                )
            },


            {
                id: 16,

                question:
                    "Q.16) How do I integrate Calibre with Virtuoso if I am using SCL-PDK V2?",

                answer: (
                    <>
                        <p>
                            A.) If you are using SCL-PDK V2, you will need to
                            manually invoke Calibre using the skill command.
                            Additionally, in your cshrc file, ensure that the
                            <strong> CALIBRE_HOME </strong>
                            environment variable is set to the correct directory
                            path where the Calibre Tools are located. Also, make
                            sure you have read access to the directory containing
                            the Calibre Tools.
                        </p>
                    </>
                )
            },


            {
                id: 17,

                question:
                    "Q.17) Error regarding calibre could not be licensed sufficiently?",

                answer: (
                    <>
                        <p>
                            A.) Make sure that the IP address{" "}
                            <strong>14.139.1.126</strong>
                            {" "}
                            is not blocked and has proper access in the
                            institute's firewall.
                        </p>

                        <p>
                            The IP should be unrestricted and able to connect
                            without any issues. Please check with your network
                            administrator.
                        </p>
                    </>
                )
            }

        ]
    },

    siemens: {
    name: "Siemens",
    title: "Siemens EDA Tools FAQ",

    faqs: [

        {
            id: 1,
            question:
                "Q.1) Preliminary installation procedure for Siemens EDA Tools?",

            answer: (
                <>
                    <p>
                        A.) Go through the video link provided below for the
                        installation procedure.
                    </p>

                    <p>
                        <a
                            href="https://chipin-cloud.cdacb.in/index.php/f/71906"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="module-faq-link"
                        >
                            https://chipin-cloud.cdacb.in/index.php/f/71906
                        </a>
                    </p>
                </>
            )
        },


        {
            id: 2,
            question:
                "Q.2) How can you verify if the submitted WAN IP is included in the whitelist?",

            answer: (
                <>
                    <p>
                        A.) To verify if the submitted WAN IP is whitelisted,
                        follow these steps:
                    </p>

                    <ul>
                        <li>
                            Open your system browser and enter this IP address:
                            {" "}
                            <strong>14.139.1.126</strong>
                            {" "}
                            in the URL bar, or alternatively, click on:
                            {" "}
                            <a
                                href="http://14.139.1.126/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                http://14.139.1.126/
                            </a>
                        </li>

                        <li>
                            If the IP is successfully whitelisted, a
                            confirmation message will appear, displaying:
                            {" "}
                            <strong>
                                "Congratulations!!! Your IP has been
                                whitelisted for accessing ChipIN EDA tool
                                Academic license"
                            </strong>
                        </li>

                        <li>
                            Whitelist confirmation screenshot:
                            <img
                                src="https://c2s.gov.in/FAQ/Siemens/image1.png"
                                alt="Siemens whitelist confirmation"
                                className="module-faq-image"
                            />
                        </li>

                        <li>
                            In case the IP is not whitelisted, create a ticket
                            in the ChipIN ticketing portal:
                            {" "}
                            <a
                                href="https://chipin.cdacb.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                https://chipin.cdacb.in/
                            </a>
                        </li>
                    </ul>

                    <img
                        src="https://c2s.gov.in/FAQ/Siemens/image2.png"
                        alt="Siemens computer screenshot"
                        className="module-faq-image"
                    />

                    <p>
                        This process ensures accurate verification of the
                        submitted IP address against the whitelist.
                    </p>
                </>
            )
        },


        {
            id: 3,
            question:
                "Q.3) How can you verify the status of your internet (ping) connectivity?",

            answer: (
                <>
                    <p>
                        A.) To check internet connectivity, follow these steps:
                    </p>

                    <ul>
                        <li>
                            Open the command terminal on your system.
                        </li>

                        <li>
                            In the terminal, type the command{" "}
                            <code className="module-code">
                                ping 14.139.1.126
                            </code>
                            {" "}and press Enter.
                        </li>

                        <li>
                            This will initiate a ping request to the specified
                            address. If the connection is successful, you will
                            receive a series of replies indicating the network
                            is reachable.
                        </li>
                    </ul>

                    <img
                        src="https://c2s.gov.in/FAQ/Siemens/image3.png"
                        alt="Siemens ping command screenshot"
                        className="module-faq-image"
                    />

                    <p>
                        If you encounter timeouts or error messages, this may
                        indicate a connectivity issue.
                    </p>
                </>
            )
        },


        {
            id: 4,
            question:
                "Q.4) How can you verify connectivity to licensing server (Port connectivity)?",

            answer: (
                <>
                    <p>
                        A.) To verify connectivity to the licensing server,
                        follow these steps:
                    </p>

                    <ul>
                        <li>
                            Open the command terminal on your system.
                        </li>

                        <li>
                            Use the following commands to check connectivity
                            to the specific licensing server and its respective
                            ports:
                        </li>
                    </ul>

                    <ol>
                        <li>
                            <code className="module-code">
                                nc -vz 14.139.1.126 1717
                            </code>
                        </li>

                        <li>
                            <code className="module-code">
                                nc -vz 14.139.1.126 36162
                            </code>
                        </li>
                    </ol>

                    <img
                        src="https://c2s.gov.in/FAQ/Siemens/image4.png"
                        alt="Siemens port connectivity screenshot"
                        className="module-faq-image"
                    />

                    <ul>
                        <li>
                            This command will test the connection to the server
                            and provide feedback on whether the specified port
                            is open and accessible.
                        </li>

                        <li>
                            If the connection is successful, you will receive
                            a message indicating the port is connected to the
                            licensing server. If not, you may see an error
                            message indicating connection timeout.
                        </li>

                        <li>
                            Check with your network administrator for port
                            opening if connection timeout issue occurs.
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 5,
            question:
                "Q.5) Which OS is supported by Siemens EDA tools?",

            answer: (
                <>
                    <p>
                        A.) Siemens tools are compatible with{" "}
                        <strong>
                            RHEL 8.6 and above, or CentOS 7/8.
                        </strong>
                    </p>

                    <p>
                        To verify your operating system version, you can use
                        the following command:
                    </p>

                    <p>
                        <code className="module-code">
                            cat /etc/os-release
                        </code>
                    </p>

                    <p>
                        This command will display details about your current
                        operating system, including the version and
                        distribution, allowing you to confirm compatibility
                        with Siemens tools.
                    </p>
                </>
            )
        },


        {
            id: 6,
            question:
                "Q.6) What is Siemens EDA tool License Access/Checkout procedure?",

            answer: (
                <>
                    <ul>
                        <li>
                            Please find the web-link for license checkout for
                            Siemens EDA Tools licenses hosted centrally at
                            ChipIN:
                            {" "}
                            <a
                                href="https://chipin-cloud.cdacb.in/index.php/f/93354"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                Siemens EDA License Checkout
                            </a>
                        </li>

                        <li>
                            Please find the cloud web-link to access relevant
                            materials and recorded videos by M/s Siemens and
                            ChipIN team covering issues related to installing
                            the EDA tools, accessing centrally hosted EDA
                            licenses, setting up environment variables,
                            support related, etc.
                            {" "}
                            <a
                                href="https://chipin-cloud.cdacb.in/index.php/f/71913"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                Siemens EDA Materials and Videos
                            </a>
                        </li>

                        <li>
                            Please find the web-link to download the latest
                            commonly used Siemens EDA Tools binaries:
                            {" "}
                            <a
                                href="https://chipin-cloud.cdacb.in/index.php/f/628"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="module-faq-link"
                            >
                                Siemens EDA Tools Binaries
                            </a>
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 7,
            question:
                "Q.7) How can you create a CSHRC file for Siemens tools?",

            answer: (
                <>
                    <p>
                        A.) Below is a sample CSHRC file for your reference.
                        Please ensure that the following configurations are
                        properly set for accessing Siemens tools:
                    </p>

                    <ul>
                        <li>
                            <strong>License Path:</strong>{" "}
                            Verify that the license path is correctly specified
                            to allow proper access to the Siemens licensing
                            system.
                        </li>

                        <li>
                            <strong>Set Environment:</strong>{" "}
                            Ensure that the necessary environment variables are
                            set to enable the correct operation of Siemens
                            tools.
                        </li>

                        <li>
                            <strong>Set Path:</strong>{" "}
                            Confirm that the system path is correctly configured
                            to include the directories for Siemens tools.
                        </li>
                    </ul>

                    <p>
                        Proper configuration of these settings is crucial for
                        smooth functionality and access to the required tools.
                    </p>

                    <img
                        src="https://c2s.gov.in/FAQ/Siemens/image5.png"
                        alt="Siemens CSHRC file sample"
                        className="module-faq-image"
                    />
                </>
            )
        },


        {
            id: 8,
            question:
                "Q.8) How can you verify if the submitted Hostname is included in the whitelist?",

            answer: (
                <>
                    <p>
                        A.) These are the steps provided below.
                    </p>

                    <ul>
                        <li>
                            <strong>Check the Hostname:</strong>
                            <ol>
                                <li>
                                    Type{" "}
                                    <code className="module-code">
                                        hostname
                                    </code>
                                    {" "}
                                    in the command terminal to display the
                                    current system hostname.
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>Verify Hosts File:</strong>
                            <ol>
                                <li>
                                    Type{" "}
                                    <code className="module-code">
                                        gedit /etc/hosts
                                    </code>
                                    {" "}
                                    in the command terminal.
                                </li>

                                <li>
                                    Check that the whitelisted hostname is
                                    present after localdomain4 in the file.
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>
                                Verify System Hostname using nmtui:
                            </strong>
                            <ol>
                                <li>
                                    Type{" "}
                                    <code className="module-code">
                                        nmtui
                                    </code>
                                    {" "}
                                    in the command terminal.
                                </li>

                                <li>
                                    Navigate to{" "}
                                    <strong>Set System Hostname</strong>
                                    {" "}and press{" "}
                                    <strong>Enter.</strong>
                                </li>
                            </ol>
                        </li>
                    </ul>

                    <p>
                        Ensure that the hostname is consistent across all
                        entries and verify that the submitted Host-ID is
                        correctly listed.
                    </p>

                    <p>
                        Please refer below screenshot for{" "}
                        <strong>gedit /etc/hosts</strong> and make sure it is
                        properly implemented.
                    </p>

                    <p>
                        If it is not properly configured, open it from root by
                        typing{" "}
                        <code className="module-code">
                            gedit /etc/hosts
                        </code>
                        {" "}
                        in the command terminal, make the necessary changes,
                        and save the file.
                    </p>

                    <img
                        src="https://c2s.gov.in/FAQ/Siemens/image6.jpg"
                        alt="Siemens hosts file screenshot"
                        className="module-faq-image"
                    />
                </>
            )
        },


        {
            id: 9,
            question:
                "Q.9) What are the tools available under SIEMENS EDA?",

            answer: (
                <>
                    <p>
                        A.) <strong>A. HEP (Higher Education Programme) Bundle</strong>
                    </p>

                    <p>
                        This bundle includes tools for Analog and Digital
                        Design, Full Flow, along with PCB System Design
                        Solutions.
                    </p>

                    <h3>IC Nanometer Design Bundle</h3>

                    <ul>
                        <li>
                            <strong>Tanner S-Edit:</strong>{" "}
                            Tool for schematic entry and layout in custom IC
                            design.
                        </li>

                        <li>
                            <strong>L-Edit:</strong>{" "}
                            Custom layout editor for IC design, integrated with
                            Tanner S-Edit.
                        </li>

                        <li>
                            <strong>T-Spice:</strong>{" "}
                            A simulator used for analog and mixed-signal design
                            verification.
                        </li>

                        <li>
                            <strong>Eldo:</strong>{" "}
                            Analog simulation tool for IC design verification.
                        </li>

                        <li>
                            <strong>Questa ADMS:</strong>{" "}
                            Advanced digital/mixed-signal simulator for
                            high-performance verification.
                        </li>

                        <li>
                            <strong>Nitro-SoC:</strong>{" "}
                            A toolset for building and simulating systems on a
                            chip (SoC).
                        </li>

                        <li>
                            <strong>Oasys-RTL:</strong>{" "}
                            RTL synthesis tool for digital design.
                        </li>

                        <li>
                            <strong>Calibre:</strong>{" "}
                            Tool for physical verification, DRC, LVS, and
                            design for manufacturing.
                        </li>
                    </ul>


                    <h3>Design Verification Test Bundle</h3>

                    <ul>
                        <li>
                            <strong>Catapult Ultra:</strong>{" "}
                            High-level synthesis tool for converting C/C++ to
                            RTL.
                        </li>

                        <li>
                            <strong>Vista:</strong>{" "}
                            Simulation and verification tool for digital
                            systems.
                        </li>

                        <li>
                            <strong>ReqTracer:</strong>{" "}
                            Requirements traceability tool for ensuring design
                            specifications are met.
                        </li>

                        <li>
                            <strong>Questa (including ModelSim):</strong>{" "}
                            Advanced verification toolset for RTL design,
                            simulation, and debugging.
                        </li>

                        <li>
                            <strong>Oasys-RTL:</strong>{" "}
                            RTL synthesis tool for digital design.
                        </li>

                        <li>
                            <strong>Precision Synthesis:</strong>{" "}
                            Synthesis tool that converts RTL to gate-level
                            netlists.
                        </li>

                        <li>
                            <strong>Leonardo Spectrum ASIC:</strong>{" "}
                            ASIC synthesis tool for converting RTL into
                            gate-level designs.
                        </li>

                        <li>
                            <strong>Tessent Silicon Test:</strong>{" "}
                            Tool for ensuring silicon chips meet testing
                            requirements.
                        </li>

                        <li>
                            <strong>System Vision:</strong>{" "}
                            Design and simulation tool for embedded systems.
                        </li>
                    </ul>


                    <h3>PCB System Design and Analysis</h3>

                    <ul>
                        <li>
                            <strong>PADS Professional:</strong>{" "}
                            PCB design software with tools for schematic
                            capture and PCB layout.
                        </li>

                        <li>
                            <strong>HyperLynx:</strong>{" "}
                            Tools for signal integrity (SI), power integrity
                            (PI), and thermal analysis of PCBs.
                        </li>
                    </ul>


                    <p>
                        <strong>
                            B. On-Demand Training (Online Training) Bundle
                        </strong>
                    </p>

                    <p>
                        This bundle includes lab content and materials for
                        various Mentor Technologies.
                    </p>

                    <h3>IC Logic Design</h3>

                    <ul>
                        <li>
                            <strong>HDL Designer:</strong>{" "}
                            Tool for designing hardware using HDL
                            (VHDL/Verilog).
                        </li>

                        <li>
                            <strong>Req Tracer:</strong>{" "}
                            Tool for managing and tracing design requirements.
                        </li>

                        <li>
                            <strong>Design Languages:</strong>{" "}
                            VHDL, Verilog, SystemVerilog (SV), UVM for
                            verification.
                        </li>
                    </ul>


                    <h3>IC Logic Verification</h3>

                    <ul>
                        <li>
                            <strong>Questa:</strong>{" "}
                            Toolset for RTL simulation, functional verification,
                            and debugging.
                        </li>

                        <li>
                            <strong>
                                Verification Tools (CDC, Formal, Lint, etc.):
                            </strong>{" "}
                            Tools for clock domain crossing (CDC) checks,
                            formal verification, and linting.
                        </li>
                    </ul>


                    <h3>Hardware Assisted Verification - Emulation</h3>

                    <ul>
                        <li>
                            <strong>Veloce:</strong>{" "}
                            Hardware emulation platform used for verifying
                            complex digital designs.
                        </li>
                    </ul>


                    <h3>High-Level Synthesis (HLS)</h3>

                    <ul>
                        <li>
                            <strong>Catapult:</strong>{" "}
                            High-level synthesis tool that converts C/C++
                            designs into RTL.
                        </li>
                    </ul>


                    <h3>IC Analog / Mixed-Signal Verification</h3>

                    <ul>
                        <li>
                            <strong>Eldo/AFS/Questa ADMS:</strong>{" "}
                            Tools for analog and mixed-signal simulation and
                            verification.
                        </li>
                    </ul>


                    <h3>Physical Verification</h3>

                    <ul>
                        <li>
                            <strong>Calibre:</strong>{" "}
                            Tool for physical design verification (DRC, LVS,
                            and rule checking).
                        </li>
                    </ul>


                    <h3>Design for Test (DFT)</h3>

                    <ul>
                        <li>
                            <strong>Tessent:</strong>{" "}
                            DFT tools for generating test patterns and ensuring
                            testability.
                        </li>
                    </ul>


                    <h3>Analog and Custom Layout Solution</h3>

                    <ul>
                        <li>
                            <strong>Tanner:</strong>{" "}
                            Custom analog design tool with full-flow support for
                            schematic entry and layout.
                        </li>
                    </ul>


                    <h3>PCB Solutions</h3>

                    <ul>
                        <li>
                            <strong>PADS and Xpedition:</strong>{" "}
                            PCB design tools with powerful features for layout,
                            simulation, and validation.
                        </li>
                    </ul>


                    <h3>Analysis Solution - SI/PI/Thermal</h3>

                    <ul>
                        <li>
                            <strong>HyperLynx Solutions:</strong>{" "}
                            Tools for signal integrity, power integrity, and
                            thermal analysis in PCB designs.
                        </li>
                    </ul>


                    <h3>Valor NPI - DFM Solution</h3>

                    <ul>
                        <li>
                            <strong>Valor NPI:</strong>{" "}
                            Design for manufacturability (DFM) solution for
                            PCB designs to ensure they can be efficiently
                            manufactured.
                        </li>
                    </ul>


                    <h3>IC Packaging</h3>

                    <ul>
                        <li>
                            <strong>Xpedition ICP:</strong>{" "}
                            Tool for designing and analyzing IC packages.
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 10,
            question:
                "Q.10) What are the commands to launch Siemens EDA tools?",

            answer: (
                <>
                    <p>
                        A.) Below are the commands to invoke Siemens EDA tools:
                    </p>

                    <ul>
                        <li>
                            <strong>Tanner:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        sedit
                                    </code>
                                    {" "}-- Launches the schematic entry tool
                                    for designing circuits.
                                </li>

                                <li>
                                    <code className="module-code">
                                        ledit
                                    </code>
                                    {" "}-- Launches the layout editor for
                                    custom IC design.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Calibre:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        Calibre -gui
                                    </code>
                                    {" "}-- Opens the Calibre physical
                                    verification tool with a graphical user
                                    interface (GUI).
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Quest:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        vsim
                                    </code>
                                    {" "}-- Invokes the Questa simulation
                                    tool for RTL design verification.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Tessent:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        tessent -shell
                                    </code>
                                    {" "}-- Launches the Tessent tool suite
                                    with a command-line interface.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Oasys:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        oasys
                                    </code>
                                    {" "}-- Starts the Oasys RTL synthesis
                                    tool.
                                </li>

                                <li>
                                    <code className="module-code">
                                        start_gui
                                    </code>
                                    {" "}-- Launches the graphical user
                                    interface for Oasys.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Nitro:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        nitro
                                    </code>
                                    {" "}-- Launches the Nitro-SoC tool.
                                </li>

                                <li>
                                    <code className="module-code">
                                        start_gui
                                    </code>
                                    {" "}-- Opens the Nitro-SoC GUI.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Precision RTL Synthesis:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        precision
                                    </code>
                                    {" "}-- Invokes the Precision tool for
                                    RTL synthesis.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Catapult:</strong>
                            <ul>
                                <li>
                                    <code className="module-code">
                                        catapult
                                    </code>
                                    {" "}-- Starts the Catapult high-level
                                    synthesis tool.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <p>
                        These commands are used to launch the respective tools,
                        either through a command-line interface or a graphical
                        interface, depending on the tool's configuration.
                    </p>
                </>
            )
        },


        {
            id: 11,
            question:
                "Q.11) What is the installation procedure for the Tanner EDA tool?",

            answer: (
                <>
                    <h3>Tanner EDA Tool Installation Procedure</h3>

                    <ul>
                        <li>
                            <strong>Folder Creation:</strong>
                            <ul>
                                <li>
                                    Create a new folder named{" "}
                                    <strong>MentorGraphics</strong>.
                                </li>

                                <li>
                                    Create new folders{" "}
                                    <strong>tanner</strong> and{" "}
                                    <strong>calibre</strong> inside the
                                    <strong> /home/MentorGraphics </strong>
                                    folder.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Tanner Installation:</strong>
                            <ul>
                                <li>
                                    Copy the Tanner setup file to{" "}
                                    <strong>
                                        /home/MentorGraphics/tanner
                                    </strong>.
                                </li>

                                <li>
                                    Use the command:
                                    <br />
                                    <code className="module-code">
                                        chmod 777 -R tanner-2018_3u4-rhel6.bin
                                    </code>
                                </li>

                                <li>
                                    Run this from{" "}
                                    <strong>
                                        /home/MentorGraphics/tanner
                                    </strong>.
                                </li>

                                <li>
                                    Use the command:
                                    <br />
                                    <code className="module-code">
                                        ./tanner-2018_3u4-rhel6.bin
                                    </code>
                                </li>

                                <li>
                                    Run this from{" "}
                                    <strong>
                                        /home/MentorGraphics/tanner
                                    </strong>.
                                </li>

                                <li>
                                    Type{" "}
                                    <strong>
                                        /home/MentorGraphics/tanner
                                    </strong>
                                    {" "}as the path for installation.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Package Install:</strong>
                            <ul>
                                <li>
                                    Use the command:
                                    <br />
                                    <code className="module-code">
                                        yum install ld-linux.so.2
                                    </code>
                                </li>

                                <li>
                                    Use the command:
                                    <br />
                                    <code className="module-code">
                                        yum install libXScrnSaver
                                    </code>
                                </li>

                                <li>
                                    Press Enter.
                                </li>

                                <li>
                                    Type <strong>y</strong> to confirm.
                                </li>

                                <li>
                                    Press Enter.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 12,
            question:
                "Q.12) How to integrate Calibre with Virtuoso?",

            answer: (
                <>
                    <p>
                        A.) For integrating Calibre with Virtuoso, please
                        follow the procedure provided in the screenshot.
                    </p>

                    <img
                        src="https://c2s.gov.in/FAQ/Siemens/image7.png"
                        alt="Calibre Virtuoso integration"
                        className="module-faq-image"
                    />
                </>
            )
        },


        {
            id: 13,
            question:
                "Q.13) How to access Calibre in Virtuoso tool for SCL PDK v2.0?",

            answer: (
                <>
                    <ul>
                        <li>
                            After invoking Virtuoso tool, in CIW window type
                            the below command:
                            <br />
                            <code className="module-code">
                                load( strcat( getShellEnvVar("CALIBRE_HOME") "/lib/calibre.skl" ))
                            </code>
                        </li>

                        <li>
                            Make sure in the cshrc file,{" "}
                            <strong>CALIBRE_HOME</strong>
                            {" "}environment is set to the correct path of
                            the directory where the Calibre Tools are
                            situated.
                        </li>

                        <li>
                            Also ensure you have read access to the directory
                            where the Calibre Tools are situated.
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 14,
            question:
                "Q.14) Issue in Integrating Calibre with Virtuoso for SCL PDK v3.0?",

            answer: (
                <>
                    <ul>
                        <li>
                            If using SCL PDK v3 with proper setup then Calibre
                            will be integrated with Virtuoso automatically,
                            no need to invoke Calibre separately.
                        </li>

                        <li>
                            Make sure in the cshrc file,{" "}
                            <strong>CALIBRE_HOME</strong>
                            {" "}environment is set to the correct path of
                            the directory where the Calibre Tools are
                            situated.
                        </li>

                        <li>
                            Also ensure you have read access to the directory
                            where the Calibre Tools are situated.
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 15,
            question:
                "Q.15) Error regarding calibre could not be licensed sufficiently?",

            answer: (
                <>
                    <p>
                        A.) Make sure that the IP address{" "}
                        <strong>14.139.1.126</strong>
                        {" "}is not blocked and has proper access in the
                        institute's firewall.
                    </p>

                    <p>
                        The IP should be unrestricted and able to connect
                        without any issues. Please check with your network
                        administrator.
                    </p>
                </>
            )
        }

    ]
},

    ansys: {
    name: "Ansys",
    title: "Ansys EDA Tools FAQ",

    faqs: [

        {
            id: 1,
            question:
                "Q1: What are the OS and system requirements for Ansys Tools?",

            answer: (
                <>
                    <p>
                        A.) The following operating systems and system
                        requirements are supported for Ansys Tools.
                    </p>

                    <h3>Operating System</h3>

                    <ul>
                        <li>
                            <strong>RHEL:</strong> 7.8/7.9, 8.1–8.7
                        </li>

                        <li>
                            <strong>SuSE:</strong> 12
                        </li>

                        <li>
                            <strong>CentOS:</strong> 7.8/7.9
                        </li>

                        <li>
                            <strong>Ubuntu LTS:</strong> 20.04
                        </li>
                    </ul>

                    <h3>System Requirements</h3>

                    <ul>
                        <li>
                            Multi-CPU machines
                        </li>

                        <li>
                            Minimum 8 cores
                        </li>

                        <li>
                            10–20 GB RAM (minimum)
                        </li>
                    </ul>

                    <h3>Scalability</h3>

                    <p>
                        Additional machines/CPUs can be added for improved
                        performance and handling of large test cases.
                    </p>
                </>
            )
        },


        {
            id: 2,
            question:
                "Q2: What are the software tools that are available under Ansys Bundle?",

            answer: (
                <>
                    <p>
                        A.) The following software tools are available under
                        Ansys:
                    </p>

                    <ul>
                        <li>RedHawk</li>
                        <li>PowerArtist</li>
                        <li>Helic</li>
                        <li>Totem</li>
                        <li>SeaScape (RedHawk-SC)</li>
                    </ul>

                    <p>
                        For more details, refer to the below link:
                    </p>

                    <p>
                        <a
                            href="https://c2s.gov.in/pdf//Ansys%20List%20of%20Products_Updated.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="module-faq-link"
                        >
                            Ansys List of Products
                        </a>
                    </p>
                </>
            )
        },


        {
            id: 3,
            question:
                "Q3: How to install PowerArtist?",

            answer: (
                <>
                    <p>
                        A.) Steps to Install:
                    </p>

                    <h3>Download & Extract the Bundle</h3>

                    <p>
                        Download the tool to your desired path:
                    </p>

                    <p>
                        <code className="module-code">
                            &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Navigate to the directory:
                    </p>

                    <p>
                        <code className="module-code">
                            cd &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Extract the downloaded bundle:
                    </p>

                    <p>
                        <code className="module-code">
                            tar --zxvf &lt;downloaded tool bundle&gt;
                        </code>
                    </p>

                    <h3>
                        Set Path to the Installed Software Binary Directory
                    </h3>

                    <p>
                        Set the environment variable:
                    </p>

                    <p>
                        <code className="module-code">
                            setenv POWERARTIST_ROOT &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Update the system path:
                    </p>

                    <p>
                        <code className="module-code">
                            set path = ($POWERARTIST_ROOT/bin $path)
                        </code>
                    </p>

                    <h3>Invoke the Shell</h3>

                    <p>
                        Run the following command:
                    </p>

                    <p>
                        <code className="module-code">
                            pa_shell
                        </code>
                    </p>

                    <h3>Invoke the GUI</h3>

                    <p>
                        Run the following command to launch PowerArtist:
                    </p>

                    <p>
                        <code className="module-code">
                            PowerArtist &
                        </code>
                    </p>
                </>
            )
        },


        {
            id: 4,
            question:
                "Q4: How to install Helic Tools?",

            answer: (
                <>
                    <p>
                        A.) Steps to Install:
                    </p>

                    <h3>Download & Extract the Tool Bundle</h3>

                    <p>
                        Download the tool to your desired path:
                    </p>

                    <p>
                        <code className="module-code">
                            &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Navigate to the directory:
                    </p>

                    <p>
                        <code className="module-code">
                            cd &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Extract the downloaded bundle:
                    </p>

                    <p>
                        <code className="module-code">
                            tar --zxvf &lt;downloaded tool bundle&gt;
                        </code>
                    </p>

                    <h3>
                        Download & Extract the Training Test Case
                    </h3>

                    <p>
                        Download the test case to your desired path:
                    </p>

                    <p>
                        <code className="module-code">
                            &lt;your-testcase-path&gt;
                        </code>
                    </p>

                    <p>
                        Navigate to the directory:
                    </p>

                    <p>
                        <code className="module-code">
                            cd &lt;your-testcase-path&gt;
                        </code>
                    </p>

                    <p>
                        Extract the downloaded test case bundle:
                    </p>

                    <p>
                        <code className="module-code">
                            tar --zxvf &lt;downloaded testcase bundle&gt;
                        </code>
                    </p>

                    <h3>Set Environment Variables</h3>

                    <p>
                        Set the HELIC_ROOT variable to the installed software
                        binary directory:
                    </p>

                    <p>
                        <code className="module-code">
                            setenv HELIC_ROOT &lt;your-tool-path&gt;/helic_&lt;version&gt;
                        </code>
                    </p>

                    <p>
                        Set the HELIC_PDK_ROOT variable to the training test
                        case's tech files:
                    </p>

                    <p>
                        <code className="module-code">
                            setenv HELIC_PDK_ROOT &lt;your-testcasepath&gt;/RaptorX/design_data/PDK
                        </code>
                    </p>

                    <h3>Invoke the GUI</h3>

                    <p>
                        Run the following command to launch Helic Tools:
                    </p>

                    <p>
                        <code className="module-code">
                            $HELIC_ROOT/tools/bin/helicCentral &
                        </code>
                    </p>
                </>
            )
        },


        {
            id: 5,
            question:
                "Q5: How to install Totem?",

            answer: (
                <>
                    <p>
                        A.) Steps to Install:
                    </p>

                    <h3>Download & Extract the Bundle</h3>

                    <p>
                        Download the tool to your desired path:
                    </p>

                    <p>
                        <code className="module-code">
                            &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Navigate to the directory:
                    </p>

                    <p>
                        <code className="module-code">
                            cd &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Extract the downloaded bundle:
                    </p>

                    <p>
                        <code className="module-code">
                            tar --xvf &lt;downloaded tool bundle&gt;
                        </code>
                    </p>

                    <h3>
                        Set Path to the Installed Software Binary Directory
                    </h3>

                    <p>
                        Set the environment variable:
                    </p>

                    <p>
                        <code className="module-code">
                            setenv APACHEROOT &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Update the system path:
                    </p>

                    <p>
                        <code className="module-code">
                            set path = ($APACHEROOT/bin $path)
                        </code>
                    </p>

                    <h3>Invoke the GUI</h3>

                    <p>
                        Run the following command to launch Totem:
                    </p>

                    <p>
                        <code className="module-code">
                            totem &
                        </code>
                    </p>
                </>
            )
        },


        {
            id: 6,
            question:
                "Q6: How to install RedHawk-SC?",

            answer: (
                <>
                    <p>
                        A.) Steps to Install:
                    </p>

                    <h3>Download & Extract the Bundle</h3>

                    <p>
                        Download the tool to your desired path:
                    </p>

                    <p>
                        <code className="module-code">
                            &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Navigate to the directory:
                    </p>

                    <p>
                        <code className="module-code">
                            cd &lt;your-tool-path&gt;
                        </code>
                    </p>

                    <p>
                        Extract the downloaded bundle:
                    </p>

                    <p>
                        <code className="module-code">
                            tar --xvf &lt;downloaded tool bundle&gt;
                        </code>
                    </p>

                    <h3>Set the License File Path</h3>

                    <p>
                        Configure the license environment variable:
                    </p>

                    <p>
                        <code className="module-code">
                            setenv LM_LICENSE_FILE 1055@&lt;IP Address or Hostname&gt;
                        </code>
                    </p>

                    <h3>Invoke the GUI</h3>

                    <p>
                        Run the following command to launch RedHawk-SC:
                    </p>

                    <p>
                        <code className="module-code">
                            &lt;your-tool-path&gt;/seascape_release/&lt;toolversion&gt;/linux_x86_64_rhel7/bin/redhawk_sc &
                        </code>
                    </p>

                    <p>
                        <strong>Note:</strong> &lt;tool version&gt;
                        corresponds to{" "}
                        <strong>2023_R2.0.p1</strong>
                        {" "}for the transferred bundle.
                    </p>
                </>
            )
        },


        {
            id: 7,
            question:
                "Q7: How to Set the License Path (Common for all Software's)?",

            answer: (
                <>
                    <p>
                        A.) To configure the license path for all Ansys
                        software tools, use the following command:
                    </p>

                    <p>
                        <code className="module-code">
                            setenv LM_LICENSE_FILE 1055@14.139.1.126
                        </code>
                    </p>
                </>
            )
        },


        {
            id: 8,
            question:
                "Q8: How to Set the Environment Variable List for All Four Software Tools?",

            answer: (
                <>
                    <p>
                        A.) Steps to Create and Set Environment Variables:
                    </p>

                    <h3>Create a Configuration File</h3>

                    <p>
                        Create a new file to store the environment variables.
                    </p>

                    <p>
                        Example file name:
                        {" "}
                        <strong>envlist</strong>
                    </p>

                    <p>
                        File with shell extension:
                        {" "}
                        <strong>envlist.cshrc</strong>
                    </p>

                    <h3>
                        Add the Following Environment Variables to
                        envlist.cshrc
                    </h3>

                    <p>
                        <strong>RedHawk-SC</strong>
                    </p>

                    <p>
                        <code className="module-code">
                            setenv APACHEROOT &lt;Your-Tool PATH&gt;/seascape_linux_x86_64_rhel7_2023_R2.0.p1_RedHawk-SC_bundle/seascape_release/2023_R2.0.p1/linux_x86_64_rhel7
                        </code>
                    </p>

                    <p>
                        <strong>Totem</strong>
                    </p>

                    <p>
                        <code className="module-code">
                            setenv APACHEROOT &lt;Your-Tool-PATH&gt;/Totem_Linux64e7_V2023R2.1p1
                        </code>
                    </p>

                    <p>
                        <code className="module-code">
                            set path = ($APACHEROOT/bin $path)
                        </code>
                    </p>

                    <p>
                        <strong>PowerArtist</strong>
                    </p>

                    <p>
                        <code className="module-code">
                            setenv POWERARTIST_ROOT &lt;Your-Tool-PATH&gt;/PowerArtist_linux-x86_64_rhel7_2023R2.1
                        </code>
                    </p>

                    <p>
                        <code className="module-code">
                            set path = ($POWERARTIST_ROOT/bin $path)
                        </code>
                    </p>

                    <p>
                        <strong>Helic Tools</strong>
                    </p>

                    <p>
                        <code className="module-code">
                            setenv HELIC_ROOT &lt;Your-Tool-PATH&gt;/helic_2023.R2
                        </code>
                    </p>

                    <p>
                        <code className="module-code">
                            setenv HELIC_PDK_ROOT &lt;Your-Tool-PATH&gt;/RaptorX/design_data/PDK
                        </code>
                    </p>

                    <h3>Execute the Configuration File</h3>

                    <p>
                        After adding the above variables, execute the file
                        using the following command:
                    </p>

                    <p>
                        <code className="module-code">
                            source envlist.cshrc
                        </code>
                    </p>
                </>
            )
        },


        {
            id: 9,
            question:
                "Q9: What are the Port Numbers that are required for Accessing Ansys Tools?",

            answer: (
                <>
                    <p>
                        A.) To access Ansys tools, the following port numbers
                        must be opened in the firewall of participating
                        institutions:
                    </p>

                    <ul>
                        <li>
                            <strong>TCP Port:</strong> 1055 and 1056
                        </li>
                    </ul>
                </>
            )
        },


        {
            id: 10,
            question:
                "Q10: How to Troubleshoot License Checkout Issues?",

            answer: (
                <>
                    <p>
                        A.) If you are facing issues with license checkout,
                        follow these steps:
                    </p>

                    <h3>Check your internet connection</h3>

                    <p>
                        Verify that your system has an active internet
                        connection.
                    </p>

                    <p>
                        Try pinging the license server:
                    </p>

                    <p>
                        <code className="module-code">
                            ping 14.139.1.126
                        </code>
                    </p>

                    <h3>Check for whitelisting of your IP</h3>

                    <p>
                        Check if your IP is whitelisted by visiting:
                        {" "}
                        <a
                            href="http://14.139.1.126/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="module-faq-link"
                        >
                            http://14.139.1.126/
                        </a>
                    </p>

                    <h3>
                        Make sure that your system is connected to the
                        licensing server
                    </h3>

                    <p>
                        Run the following commands from your Linux system to
                        test the connection:
                    </p>

                    <ul>
                        <li>
                            <code className="module-code">
                                nc -vz 14.139.1.126 1055
                            </code>
                        </li>

                        <li>
                            <code className="module-code">
                                nc -vz 14.139.1.126 1056
                            </code>
                        </li>
                    </ul>

                    <p>
                        The above-mentioned commands will test the connection
                        to the server and provide feedback on whether the
                        specified ports are open and accessible.
                    </p>

                    <p>
                        If the connection is successful, you will receive a
                        message indicating the port is connected to the
                        licensing server. If not, you may see an error message
                        indicating connection timeout.
                    </p>

                    <p>
                        Check with your network administrator for port opening
                        if connection timeout issue occurs.
                    </p>
                </>
            )
        }

    ]
},

    keysight: {
        name: "Keysight",
        title: "Keysight EDA Tools FAQ",
        faqs: [],
    },

    xilinx: {
        name: "Xilinx",
        title: "Xilinx EDA Tools FAQ",
        faqs: [],
    },

    silvaco: {
        name: "Silvaco",
        title: "Silvaco EDA Tools FAQ",
        faqs: [],
    },

    "renesas-altium": {
        name: "Renesas-Altium",
        title: "Renesas-Altium EDA Tools FAQ",
        faqs: [],
    },

    cadre: {
        name: "Cadre",
        title: "Cadre EDA Tools FAQ",
        faqs: [],
    },

    compcarta: {
        name: "Compcarta",
        title: "Compcarta EDA Tools FAQ",
        faqs: [],
    },

    asterquanta: {
        name: "AsterQuanta",
        title: "AsterQuanta EDA Tools FAQ",
        faqs: [],
    },

    "banashree-systems": {
        name: "Banashree Systems",
        title: "Banashree Systems EDA Tools FAQ",
        faqs: [],
    },

};


export default moduleData;