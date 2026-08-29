SYNOPSYS_DATA = {
    "module": {
        "name": "Synopsys EDA Tools",
        "description": "Synopsys EDA Tools FAQ"
    },

    "faqs": [

        {
            "question": "How do I see/find my WAN IP address?",
            "answer": """
Check the WAN IP address with Network administrator or check any of the following links:

https://www.showmyip.com/
https://www.ipaddress.my/
https://router-network.com/tools/what-is-my-ip
""",
            "images": []
        },

        {
            "question": "How can I submit a WAN IP address for whitelisting to access EDA tools?",
            "answer": """
Sign in to https://chipin.cdacb.in/

Open a new ticket under "IP whitelisting for EDA tool access under C2S" help topic

Provide your Institute Name and WAN IP details.

Submit the ticket for whitelisting your Institute WAN IPs.
""",
            "images": []
        },

        {
            "question": "How can I verify whether the submitted WAN IP is included in the whitelisted IPs for EDA tools access?",
            "answer": """
Open your system browser and enter the following IP address in the URL bar: 14.139.1.126; Alternatively, you can click on the link:

http://14.139.1.126/

If the IP is whitelisted, a confirmation message will appear, displaying "Congratulations!!! Your IP has been whitelisted for accessing ChipIN EDA tool Academic license".

Please find the message screenshot for your reference.

If a message comes like below attached screenshot, please raise a new ticket as mentioned in question number 2.
""",
            "images": [
                {
                    "image_url": "/assets/m1q3_img1.png",
                    "alt_text": "Whitelist confirmation screenshot",
                    "position": 1
                },
                {
                    "image_url": "/assets/m1q3_img2.png",
                    "alt_text": "Computer screenshot",
                    "position": 2
                }
            ]
        },

        {
            "question": "Can I submit multiple WAN IPs for whitelisting?",
            "answer": """
Multiple WAN IPs can be whitelisted as shown in the example below:

Single IP: 14.139.5.5

Range of IPs: 14.139.1.10 - 14.139.1.25

Subnet: 14.139.1.0/24
""",
            "images": []
        },

        {
            "question": "How can I check the status of my internet connectivity using a ping test?",
            "answer": """
To check the internet connectivity, run following command from your Linux system

In the terminal, type the command "ping 14.139.1.126" and press Enter

This will initiate a ping request to the specified address.

If the connection is successful, you will receive a series of replies indicating the network is reachable as shown below.

If you encounter timeouts or error messages, this may indicate a connectivity issue.
""",
            "images": [
                {
                    "image_url": "/assets/m1q5_ping.png",
                    "alt_text": "Ping command screenshot",
                    "position": 1
                }
            ]
        },

        {
            "question": "How can I check if the Synopsys EDA Tool license server is accessible or not? Or How can I check the Synopsys EDA Tool port connectivity is established or not?",
            "answer": """
Run following command from your Linux system

Open the command terminal on your system.

Use the following commands to check the connectivity to the specific licensing server and its respective ports:

nc -vz 14.139.1.126 27020

nc -vz 14.139.1.126 27021

This command will test the connection to the server and provide feedback on whether the specified port is open and accessible.

If the connection is successful, you will receive a message indicating the port is connected to the licensing server. If not, you may see an error message indicating connection timeout.

Check with your network administrator for port opening if connection timeout issue occurs.
""",
            "images": [
                {
                    "image_url": "/assets/m1q6_ports.png",
                    "alt_text": "Port connectivity screenshot",
                    "position": 1
                }
            ]
        },

        {
            "question": "Which OS is best compatible for Synopsys EDA tools installation and access? What are the recommended hardware specifications for optimal performance of Synopsys EDA tools?",
            "answer": """
Synopsys EDA tools are compatible with subscription-based OS: RHEL 8.4 or Open-Source OS: Rocky Linux 8.4 or Alma Linux 8.4.

For more information, please visit:

https://www.synopsys.com/support/licensing-installation-compute-platforms/compute-platforms/release-specific-support.html

For Hardware compatibility refer to the image below.
""",
            "images": [
                {
                    "image_url": "/assets/m1Synopsys_Q7.png",
                    "alt_text": "Hardware compatibility for Synopsys EDA tools",
                    "position": 1
                }
            ]
        },

        {
            "question": "How do I check my current OS and its version?",
            "answer": """
To verify your operating system version, you can use the following command:

cat /etc/os-release

This command will display details about your current operating system, including the version and distribution.
""",
            "images": []
        },

        {
            "question": "Where can I find the Synopsys EDA Tool binaries for installation?",
            "answer": """
Please find below the Solvnet web-link to download latest Synopsys EDA Tool binaries:

https://solvnet.synopsys.com/DownloadCenter/dc/product.jsp

Please find the ChipIN Cloud web-link below to download the latest commonly used Synopsys EDA Tools binaries:

https://chipin-cloud.cdacb.in/index.php/f/627
""",
            "images": []
        },

        {
            "question": "Where can I find step by step installation procedure for Synopsys EDA Tools?",
            "answer": """
Please find below the cloud web-link for the step-by-step installation procedure video and relevant materials link for Synopsys EDA Tools:

https://chipin-cloud.cdacb.in/index.php/f/71910

This link covers issues related to installing the Synopsys EDA tools, accessing centrally hosted EDA licenses, setting up environment variables, support related, etc.
""",
            "images": []
        },

        {
            "question": "Where can I find step by step checklist document to access Synopsys EDA Tools?",
            "answer": """
Please find below the cloud web-link for the checklist document for the Synopsys EDA Tools:

https://chipin-cloud.cdacb.in/index.php/f/82625
""",
            "images": []
        },

        {
            "question": "How can I create a CSHRC/Bash file for accessing the Synopsys EDA tools?",
            "answer": """
Below is a sample CSHRC file for reference.

Please ensure that the following configurations are properly set for accessing Synopsys EDA tools:

License Path: Verify that the license checkout path is correctly mentioned as per the checklist document provided by ChipIN.

Set Environment Variable: Ensure that the necessary environment variables as per the relevant Synopsys EDA Tools are set.

Set Path: Confirm that the system path is correctly configured to include the installed directories for Synopsys EDA tools.

Proper configuration of these settings is crucial for smooth functionality and access to the required Synopsys EDA tools.
""",
            "images": [
                {
                    "image_url": "/assets/m1image5.png",
                    "alt_text": "CSHRC file sample",
                    "position": 1
                }
            ]
        },

        {
            "question": "After all the licenses check out, if you are still facing issue in invoking the tool or if you are facing the error saying \"User/host not on INCLUDE list for feature\", then how can you verify if the submitted Hostname is included in the whitelist?",
            "answer": """
A.) Follow the steps provided below

Check the Hostname:

Type hostname in the command terminal to display the current system hostname.

Verify Hosts File:

Type gedit /etc/hosts in the command terminal.

Check that the whitelisted hostname is present after localdomain4 in the file.

Verify System Hostname using nmtui:

Type nmtui in the command terminal.

Navigate to Set System Hostname and press Enter.

Ensure that the hostname is consistent across all entries and verify that the submitted Host-ID is correctly listed that is the hostname should match with the ones submitted through "Unique Host ID identifier".
""",
            "images": []
        },

        {
            "question": "What are the tools available under Synopsys EDA and commands to invoke the tools?",
            "answer": """
A.)

Design Vision
Command: design_vision

Design Compiler
Command: dc_shell

VCS
Command: vcs -f <filelist>.f -o simv -full64 -debug_all

Verdi
Command: verdi

ICC2
Command: icc_shell

PrimeTime
Command: pt_shell (GUI: primetime)

Hspice
Command: hspice <filename>.sp

IC Validator
Command: icv -i .gds -c top -vve user.rs

StarRC
Command: starrc_shell -gui

Tcad Sentaurus
Command: sdevice

SpyGlass
Command: sg_shell (GUI: spyglass)

Testmax
Command: dft_shell

Waveview
Command: wv &

Custom Compiler
Command: custom_compiler &

Etc..

For more information, please refer to the following link:

https://c2s.gov.in/pdf//Synopsys%20List%20of%20Products.pdf
""",
            "images": []
        },

        {
            "question": "If the institute is facing the download issue in SolvNet, what to do? The error is \"SolvNet Download Issue: Error in obtaining user's entitlement data\"",
            "answer": """
A.) Raise a ticket in C2S support portal under help topic "Synopsys EDA Tools Related Issues" and put the subject line as "SolvNet Download Issue". Also share the error screenshot. ChipIN will coordinate with Synopsys vendor for resolving the issue.
""",
            "images": []
        },

        {
            "question": "What is the installation procedure for the Synopsys EDA tool?",
            "answer": """
A.)

Download Synopsys Installer from ChipIN Cloud/SolvNet. (Refer Q.9)

Follow the guideline documents for installing the Synopsys Installer. (Refer Q.10)

Install Synopsys tools using the Synopsys Installer (GUI). (Refer Q.10)

Download the required binaries. (Refer Q.9)

Upon successful installation, use the CSHRC or BASHRC files to invoke the tool. (Refer Q.12)
""",
            "images": []
        },

        {
            "question": "Issues faced while invoking any Synopsys tool (specially Sentaurus hanging after invocation)?",
            "answer": """
A.) Check OS as well as hardware compatibility for the tools. Please refer to the FAQs number 7 for more information.
""",
            "images": []
        },

        {
            "question": "How to implement Unique Host-ID(s) at the local or server machine?",
            "answer": """
A.) Refer the below link for implementing Host-IDs:

https://c2s.gov.in/UniqueHost.jsp
""",
            "images": []
        },

        {
            "question": "How to request for whitelisting the implemented Unique Host-ID(s)?",
            "answer": """
A.) Raise a ticket at the ChipIN support portal (https://chipin.cdacb.in/) under the help topic 'Unique Identifier for EDA Tool License Access'
""",
            "images": []
        }
    ],
    
    "checklist": {
        "title": "Check-list for License checkout",
        "description": "ChipIN CDAC Bangalore.",

        "sections": [
            {
                "title": "Check your Internet connectivity and try ping 14.139.1.126",
                "steps": [
                    "Check your Internet connectivity."
                ]
            },

            {
                "title": "Check for whitelisting of your IP from http://14.139.1.126/",
                "steps": [
                    "Create a ticket in ChipIN if not whitelisted."
                ]
            },

            {
                "title": (
                    "Check connectivity to licensing server using "
                    "\"nc -vz <IP> <port>\" of particular license server."
                ),
                "steps": [
                    (
                        "Ask your network administrator to open respective ports "
                        "if license server is not accessible."
                    )
                ]
            },

            {
                "title": "Check for license check out by installing EDA tool binaries.",
                "steps": [
                    "Seek support at https://chipin.cdacb.in/ for any issue."
                ]
            },

            {
                "title": (
                    "Whitelist Institutes IP for accessing ChipIN "
                    "EDA tool academic license."
                ),
                "steps": [
                    "Sign in to https://chipin.cdacb.in/",
                    "Open a new ticket under \"Request EDA tool access\" help topic",
                    "Provide your Institute Name and WAN IP details.",
                    "Create a ticket for whitelisting your Institute WAN IPs."
                ]
            },

            {
                "title": "Institute WAN IPs for single or multiple ISP",
                "steps": [
                    (
                        "Check the WAN IP address with Network administrator or "
                        "check any of the following links"
                    ),
                    "https://www.showmyip.com/",
                    "https://www.ipaddress.my/",
                    "https://router-network.com/tools/what-is-my-ip",
                    "Multiple WAN IPs can be whitelisted as shown example below",
                    "14.139.5.5 (Single IP)",
                    "14.139.1.10 – 14.139.1.25 (Range of IPs)",
                    "14.139.1.0/24 (Subnet)"
                ]
            },

            {
                "title": "Check your WAN IP is whitelisted or not",
                "steps": [
                    "Open the URL http://c2s.cdacb.in/ or http://14.139.1.126/"
                ],
                "images": [
                    {
                        "image_path": "assets/m1_checklist_whitelist.png",
                        "alt_text": "WAN IP whitelist confirmation",
                        "position": 1
                    }
                ]
            },

            {
                "title": "Check the license server is accessible or not",
                "steps": [
                    "Run the following command from your Linux system:",
                    "nc -vz 14.139.1.126 27020 #(for Synopsys EDA tools)"
                ],
                "images": [
                    {
                        "image_path": "assets/m1_checklist_connectivity.png",
                        "alt_text": "License server port connectivity check",
                        "position": 1
                    }
                ]
            },

            {
                "title": "Port Numbers required for the EDA Tools",
                "steps": [
                    (
                        "Following Port numbers to the License server "
                        "14.139.1.126 need to be opened at participating "
                        "Institutions Firewall:"
                    ),
                    "Synopsys EDA tools",
                    "TCP Port: 27020 and 27021"
                ]
            }
        ]
    }
}

