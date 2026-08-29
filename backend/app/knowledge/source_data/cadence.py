CADENCE_DATA = {

    "module": {
        "name": "Cadence EDA Tools",
        "description": "Cadence EDA Tools FAQ"
    },

    "faqs": [

        {
            "question": "How can you verify if the submitted WAN IP is included in the whitelist?",
            "answer": """To verify if the submitted WAN IP is whitelisted, follow these steps:

- Open your system browser and enter this IP address: 14.139.1.126 in the URL bar, or alternatively, click on the provided link [**http://14.139.1.126/**](http://14.139.1.126/)
- If the IP is successfully whitelisted, a confirmation message will appear, displaying "Congratulations!!! Your IP has been whitelisted for accessing ChipIN EDA tool Academic license".
- [Whitelist confirmation screenshot](https://c2s.gov.in/FAQ/Cadence/image1.png)Please find the screenshot for reference.
- In case the IP is not whitelisted, create a ticket in ChipIN ticketing portal, click on the link provided below, [**https://chipin.cdacb.in/**](https://chipin.cdacb.in/)

[Computer screenshot](https://c2s.gov.in/FAQ/Cadence/image2.png)

- This process ensures accurate verification of the submitted IP address against the whitelist.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image1.png",
                    "alt_text": "Whitelist confirmation screenshot",
                    "position": 1
                },
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image2.png",
                    "alt_text": "Computer screenshot",
                    "position": 2
                }
            ]
        },

        {
            "question": "How can you verify the status of your internet (ping) connectivity?",
            "answer": """To check internet connectivity, follow these steps:

- Open the command terminal on your system.
- In the terminal, type the command ping 14.139.1.126 and press Enter.
- This will initiate a ping request to the specified address. If the connection is successful, you will receive a series of replies indicating the network is reachable.

[Ping command screenshot](https://c2s.gov.in/FAQ/Cadence/image3.png)

- If you encounter timeouts or error messages, this may indicate a connectivity issue.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image3.png",
                    "alt_text": "Ping command screenshot",
                    "position": 1
                }
            ]
        },

        {
            "question": "How to find whether the Institute WAN IP is for a single or multiple ISPs?",
            "answer": """- You can check your WAN IP address with your network administrator, or use the following links:

- [**https://www.showmyip.com/**](https://www.showmyip.com/)
- [**https://www.ipaddress.my/**](https://www.ipaddress.my/)
- [**https://router-network.com/tools/what-is-my-ip**](https://router-network.com/tools/what-is-my-ip)

- Multiple WAN IPs can be whitelisted in the following formats:

- **Single IP**: 14.139.5.5
- **Range of IPs**: 14.139.1.10 -- 14.139.1.25
- **Subnet: 14.139.1.0/24**""",

            "images": []
        },

        {
            "question": "What port numbers are required for Cadence EDA Tools?",
            "answer": """The following port numbers to the license server 14.139.1.126 need to be opened at participating institutions' firewalls for Cadence EDA Tools:

- TCP Ports: 5280, 5281, and 5282""",

            "images": []
        },

        {
            "question": "How can you verify connectivity to licensing server (Port connectivity)?",
            "answer": """To verify connectivity to the licensing server, follow these steps:

- Open the command terminal on your system.
- Use the following commands to check the connectivity to the specific licensing server and its respective ports:
  - **nc -vz 14.139.1.126 5280**
  - **nc -vz 14.139.1.126 5281**
  - **nc -vz 14.139.1.126 5282**

[Port connectivity screenshot](https://c2s.gov.in/FAQ/Cadence/image4.png)

- This command will test the connection to the server and provide feedback on whether the specified port is open and accessible.
- If the connection is successful, you will receive a message indicating the port is connected to the licensing server. If not, you may see an error message indicating connection timeout.
- Check with your network administrator for port opening if connection timeout issue occurs.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image4.png",
                    "alt_text": "Port connectivity screenshot",
                    "position": 1
                }
            ]
        },

        {
            "question": "Which OS is supported by Cadence EDA tools?",
            "answer": """Cadence tools are compatible with RHEL 8.7 and above. To verify your operating system version, you can use the following command:

- cat /etc/os-release

- This command will display details about your current operating system, including the version and distribution, allowing you to confirm compatibility with Cadence tools.""",

            "images": []
        },

        {
            "question": "How to access Cadence EDA tool binaries?",
            "answer": """You can access the Cadence EDA tool binaries through the following links:

- Analog Tool Bundle:
  [**Analog Tool Bundle Link**](https://entupletech-my.sharepoint.com/:f:/g/personal/cadence_support_entuple_com/EiwFaJkTP8NCvDrTMUYhIHsBBFUbXHJ_q92y8eeBVGZwmQ?e=2y8UD7)
- Digital Tool Bundle:
  [**Digital Tool Bundle Link**](https://entupletech-my.sharepoint.com/:f:/g/personal/cadence_support_entuple_com/EhG2ForPEbFCgPA3Bug8tqwBhkXEmSbC6TX73-dSnGPdQw?e=UdloQU)
- Individual Cadence Tools:
  [**Individual Cadence Tools Link**](https://entupletech-my.sharepoint.com/:f:/g/personal/cadence_support_entuple_com/EsN0T03syr5Lm6EPLI4ZjIQBxKhhQPDffLY7akJJjzuqqw?e=AS6sXc)""",

            "images": []
        },

        {
            "question": "How can you create a CSHRC file for Cadence tools?",
            "answer": """Below is a sample CSHRC file for your reference. Please ensure that the following configurations are properly set for accessing Cadence tools:

- License Path: Verify that the license path is correctly specified to allow proper access to the Cadence licensing system.
- Set Environment: Ensure that the necessary environment variables are set to enable the correct operation of Cadence tools.
- Set Path: Confirm that the system path is correctly configured to include the directories for Cadence tools.

Proper configuration of these settings is crucial for smooth functionality and access to the required tools.

[CSHRC file sample](https://c2s.gov.in/FAQ/Cadence/image5.png) [CSHRC file sample continuation](https://c2s.gov.in/FAQ/Cadence/image6.png)""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image5.png",
                    "alt_text": "CSHRC file sample",
                    "position": 1
                },
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image6.png",
                    "alt_text": "CSHRC file sample continuation",
                    "position": 2
                }
            ]
        },

        {
            "question": "How can you verify if the submitted Hostname is included in the whitelist?",
            "answer": """These are the steps provided below.

- Check the Hostname:
  - Type **"hostname"** in the command terminal to display the current system hostname.
- Verify Hosts File:
  - Type **gedit /etc/hosts** in the command terminal.
  - Check that the whitelisted hostname is present after localdomain4 in the file.
- Verify System Hostname using nmtui:
  - Type **nmtui** in the command terminal.
  - Navigate to Set System Hostname and press Enter.

Ensure that the hostname is consistent across all entries and verify that the submitted Host-ID is correctly listed.""",

            "images": []
        },

        {
            "question": "What are the tools available under Cadence EDA?",
            "answer": """Cadence provides a comprehensive suite of Electronic Design Automation (EDA) tools, including:

- **Xcelium** -- A high-performance logic simulation tool for functional verification.
- **Incisive** -- A verification platform supporting simulation, formal, and acceleration techniques.
- **Genus** -- A high-capacity RTL synthesis tool optimized for power, performance, and area (PPA).
- **Modus** -- A Design-for-Test (DFT) solution for automatic test pattern generation (ATPG) and compression.
- **Innovus** -- A place-and-route tool for physical design with advanced optimization features.
- **Virtuoso** -- A full-custom design platform for analog, mixed-signal, and RF designs.
- **Tempus** -- A static timing analysis (STA) tool ensuring timing closure and signoff.
- **Voltus** -- A power integrity and power analysis tool for chip and package designs.
- **Conformal** -- A formal verification tool for equivalence checking and ECO validation.
- **Liberate** -- A standard cell and memory characterization tool for library creation.
- **JasperGold** -- A formal verification tool for proving functional correctness using formal methods.
- **Assura** -- A physical verification tool for DRC, LVS, and parasitic extraction in IC designs.
- **Quantus** -- A fast and scalable parasitic extraction tool for accurate post-layout analysis.
- **Spectre** -- A SPICE-based circuit simulator for accurate analog and mixed-signal simulation.

- These tools collectively support various stages of IC design, including verification, synthesis, implementation, and signoff. Additionally, many other tools are available under C2S, which can be accessed through the provided tool list link.

- Cadence Tools list link:
[**Cadence EDA List of Products**](https://c2s.gov.in/pdf/Cadence%20EDA%20List%20of%20Products.pdf)""",

            "images": []
        },

        {
            "question": "What are the commands to launch Cadence EDA tools?",
            "answer": """Below commands are used to invoke respective Cadence EDA tools:

- Xcelium: xrun
- Incisive : irun file_name.v file_test.v-access +rwc-gui
- Genus: genus -gui
- Modus: Modus -legacy_gui
- Innovus: innovus
- Virtuoso: virtuoso
- Tempus: tempus
- Voltus: voltus
- Conformal: lec, lec_auto
- Liberate: liberate""",

            "images": []
        },

        {
            "question": "Where can I access the training material for the EDA tools and design flow training?",
            "answer": """You can access the training materials along with registration information from the C2S Website. The link is given below for your reference.

[**C2S Training Link**](https://c2s.gov.in/Completed_Training.jsp)

The above link includes details on the previously completed sessions comprising of training resources.""",

            "images": []
        },

        {
            "question": "What tools are covered in the training?",
            "answer": """The training covers a wide range of industry-standard EDA tools for different stages of the IC design flow, including tools for simulation, synthesis, PD flow, physical verification, and layout etc. A detailed list of the tools covered can be found on the C2S website.

The link is given below for your reference.

[**C2S Training Link**](https://c2s.gov.in/Completed_Training.jsp)""",

            "images": []
        },

        {
            "question": "How to integrate Calibre with Virtuoso?",
            "answer": """For integrating Calibre with Virtuoso, please follow the procedure provided in the screenshot.

[Calibre-Virtuoso integration](https://c2s.gov.in/FAQ/Cadence/image7.png)""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Cadence/image7.png",
                    "alt_text": "Calibre-Virtuoso integration",
                    "position": 1
                }
            ]
        },

        {
            "question": "How do I integrate Calibre with Virtuoso if I am using SCL-PDK V3?",
            "answer": """If you are using SCL-PDK V3 with the proper setup, Calibre will automatically integrate with Virtuoso. No need to invoke Calibre separatelyâ€”this integration is done automatically when the setup is correctly configured.

Kindly refer the following link for your reference.

[**SCL-PDK and its Integration into the Design Flow**](https://c2s.gov.in/IEP_Materials/2.mp4)""",

            "images": []
        },

        {
            "question": "How do I integrate Calibre with Virtuoso if I am using SCL-PDK V2?",
            "answer": """If you are using SCL-PDK V2, you will need to manually invoke Calibre using the skill command. Additionally, in your cshrc file, ensure that the **CALIBRE_HOME** environment variable is set to the correct directory path where the Calibre Tools are located. Also, make sure you have read access to the directory containing the Calibre Tools.""",

            "images": []
        },

        {
            "question": "Error regarding calibre could not be licensed sufficiently?",
            "answer": """Make sure that the IP address 14.139.1.126 is not blocked and has proper access in the institute's firewall. The IP should be unrestricted and able to connect without any issues. Please check with your network administrator.""",

            "images": []
        }

    ],
    
    "checklist": {
        "title": "Check-list for License checkout issue",
        "description": "ChipIN CDAC Bangalore.\nCheck-list for License checkout.",

        "sections": [

            {
                "title": "1. Check your Internet connectivity and try ping 14.139.1.126",
                "steps": [
                    "Check your Internet connectivity."
                ],
                "images": []
            },

            {
                "title": "2. Check for whitelisting of you IP from http://14.139.1.126/",
                "steps": [
                    "Create a ticket in ChipIN if not whitelisted."
                ],
                "images": []
            },

            {
                "title": "3. Check connectivity to licensing server using “nc -vz <IP> <port>” of particular license server.",
                "steps": [
                    "Ask your network administrator to open respective ports if license server is not accessible."
                ],
                "images": []
            },

            {
                "title": "4. Check for license check out by installing EDA tool binaries.",
                "steps": [
                    "Seek support at https://chipin.cdacb.in/ for any issue."
                ],
                "images": []
            },

            {
                "title": "2. Whitelist Institutes IP for accessing ChipIN EDA tool academic license.",
                "steps": [
                    "Sign in to https://chipin.cdacb.in/",
                    "Open a new ticket under “Request EDA tool access” help topic",
                    "Provide your Institute Name and WAN IP details.",
                    "Create a ticket for whitelisting your Institute WAN IPs."
                ],
                "images": []
            },

            {
                "title": "2. Institute WAN IPs for single of multiple ISP",
                "steps": [
                    "Check the WAN IP address with Network administrator or check any of the following links",
                    "https://www.showmyip.com/",
                    "https://www.ipaddress.my/",
                    "https://router-network.com/tools/what-is-my-ip",
                    "Multiple WAN IPs can be whitelisted as shown example below",
                    "14.139.5.5 (Single IP)",
                    "14.139.1.10 – 14.139.1.25 (Range of IPs)",
                    "14.139.1.0/24 (Subnet)"
                ],
                "images": []
            },

            {
                "title": "2. Check your WAN IP is whitelisted or not.",
                "steps": [
                    "Open the URL http://c2s.cdacb.in/ or http://14.139.1.126/"
                ],
                "images": []
            },

            {
                "title": "3. Check the license server is accessible or not.",
                "steps": [
                    "Run following command from your Linux system:",
                    "For Cadence EDA tools",
                    "nc -vz 14.139.1.126 5280",
                    "nc -vz 14.139.1.126 5281",
                    "nc -vz 14.139.1.126 5282"
                ],
                "images": []
            },

            {
                "title": "Port Numbers required for the Cadence EDA Tools",
                "steps": [
                    "Following Port numbers to the License server 14.139.1.126 need to be opened at participating Institutions Firewall:",
                    "For Cadence EDA Tool:",
                    "TCP Port: 5280, 5281 and 5282"
                ],
                "images": []
            }

        ]
    }
}