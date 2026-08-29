SIEMENS_DATA = {

    "module": {
        "name": "Siemens EDA Tools",
        "description": "Siemens EDA Tools FAQ"
    },

    "faqs": [

        {
            "question": "Preliminary installation procedure for Siemens EDA Tools?",

            "answer": """Go through the video link provided below to for the installation procedure.

https://chipin-cloud.cdacb.in/index.php/f/71906""",

            "images": []
        },


        {
            "question": "How can you verify if the submitted WAN IP is included in the whitelist?",

            "answer": """To verify if the submitted WAN IP is whitelisted, follow these steps:

Open your system browser and enter this IP address: 14.139.1.126 in the URL bar, or alternatively, click on the provided link http://14.139.1.126/
If the IP is successfully whitelisted, a confirmation message will appear, displaying "Congratulations!!! Your IP has been whitelisted for accessing ChipIN EDA tool Academic license".
Whitelist confirmation screenshotPlease find the screenshot for reference.
In case the IP is not whitelisted, create a ticket in ChipIN ticketing portal, click on the link provided below, https://chipin.cdacb.in/ .
Screen shot provided for your reference.
Computer screenshot
This process ensures accurate verification of the submitted IP address against the whitelist.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image1.png",
                    "alt_text": "Whitelist confirmation screenshot",
                    "position": 1
                },
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image2.png",
                    "alt_text": "Computer screenshot",
                    "position": 2
                }
            ]
        },


        {
            "question": "How can you verify the status of your internet (ping) connectivity?",

            "answer": """To check internet connectivity, follow these steps:

Open the command terminal on your system.
In the terminal, type the command ping 14.139.1.126 and press Enter.
This will initiate a ping request to the specified address. If the connection is successful, you will receive a series of replies indicating the network is reachable.
Ping command screenshot
If you encounter timeouts or error messages, this may indicate a connectivity issue.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image3.png",
                    "alt_text": "Ping command screenshot",
                    "position": 1
                }
            ]
        },


        {
            "question": "How can you verify connectivity to licensing server (Port connectivity)?",

            "answer": """To verify connectivity to the licensing server, follow these steps:

Open the command terminal on your system.
Use the following commands to check the connectivity to the specific licensing server and its respective ports:
nc -vz 14.139.1.126 1717
nc -vz 14.139.1.126 36162
Port connectivity screenshot
This command will test the connection to the server and provide feedback on whether the specified port is open and accessible.
If the connection is successful, you will receive a message indicating the port is connected to the licensing server. If not, you may see an error message indicating connection timeout.
Check with your network administrator for port opening if connection timeout issue occurs.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image4.png",
                    "alt_text": "Port connectivity screenshot",
                    "position": 1
                }
            ]
        },


        {
            "question": "Which OS is supported by Siemens EDA tools?",

            "answer": """Siemens tools are compatible with RHEL 8.6 and above, or CentOS 7/8. To verify your operating system version, you can use the following command:

cat /etc/os-release

This command will display details about your current operating system, including the version and distribution, allowing you to confirm compatibility with Siemens tools.""",

            "images": []
        },


        {
            "question": "What is Siemens EDA tool License Access/Checkout procedure?",

            "answer": """Please find the web-link for license checkout for Siemens EDA Tools licenses hosted centrally at ChipIN: https://chipin-cloud.cdacb.in/index.php/f/93354
Please find below the cloud web-link to access relevant materials and recorded videos by M/s Siemens and ChipIN team covering issues related to installing the EDA tools, accessing centrally hosted EDA licenses, setting up environment variables, support related, etc.
https://chipin-cloud.cdacb.in/index.php/f/71913
Please find the web-link below to download the latest commonly used Siemens EDA Tools binaries.
https://chipin-cloud.cdacb.in/index.php/f/628""",

            "images": []
        },


        {
            "question": "How can you create a CSHRC file for Siemens tools?",

            "answer": """Below is a sample CSHRC file for your reference. Please ensure that the following configurations are properly set for accessing Siemens tools:

License Path: Verify that the license path is correctly specified to allow proper access to the Siemens licensing system.
Set Environment: Ensure that the necessary environment variables are set to enable the correct operation of Siemens tools.
Set Path: Confirm that the system path is correctly configured to include the directories for Siemens tools.
Proper configuration of these settings is crucial for smooth functionality and access to the required tools.

CSHRC file sample""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image5.png",
                    "alt_text": "CSHRC file sample",
                    "position": 1
                }
            ]
        },


        {
            "question": "How can you verify if the submitted Hostname is included in the whitelist?",

            "answer": """These are the steps provided below.

Check the Hostname:
Type hostname in the command terminal to display the current system hostname.
Verify Hosts File:
Type gedit /etc/hosts in the command terminal.
Check that the whitelisted hostname is present after localdomain4 in the file.
Verify System Hostname using nmtui:
Type nmtui in the command terminal.
Navigate to Set System Hostname and press Enter.
Ensure that the hostname is consistent across all entries and verify that the submitted Host-ID is correctly listed.

Please refer below screenshot for gedit /etc/hosts and make sure it is properly implemented

If it is not properly configured, open it from root by typing gedit /etc/hosts in the command terminal, make the necessary changes, and save the file.

Hosts file screenshot""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image6.jpg",
                    "alt_text": "Hosts file screenshot",
                    "position": 1
                }
            ]
        },


        {
            "question": "What are the tools available under SIEMENS EDA?",

            "answer": """A. HEP (Higher Education Programme) Bundle

This bundle includes tools for Analog and Digital Design, Full Flow, along with PCB System Design Solutions.

IC Nanometer Design Bundle
Includes the following tools for IC design:
Tanner S-Edit: Tool for schematic entry and layout in custom IC design.
L-Edit: Custom layout editor for IC design, integrated with Tanner S-Edit.
T-Spice: A simulator used for analog and mixed-signal design verification.
Eldo: Analog simulation tool for IC design verification.
Questa ADMS: Advanced digital/mixed-signal simulator for high-performance verification.
Nitro-SoC: A toolset for building and simulating systems on a chip (SoC).
Oasys-RTL: RTL synthesis tool for digital design.
Calibre: Tool for physical verification, DRC, LVS, and design for manufacturing.
Design Verification Test Bundle
Includes tools for verification and testing of digital designs:
Catapult Ultra: High-level synthesis tool for converting C/C++ to RTL.
Vista: Simulation and verification tool for digital systems.
ReqTracer: Requirements traceability tool for ensuring design specifications are met.
Questa (including ModelSim): Advanced verification toolset for RTL design, simulation, and debugging.
Oasys-RTL: RTL synthesis tool for digital design.
Precision Synthesis: Synthesis tool that converts RTL to gate-level netlists.
Leonardo Spectrum ASIC: ASIC synthesis tool for converting RTL into gate-level designs.
Tessent Silicon Test: Tool for ensuring silicon chips meet testing requirements.
System Vision: Design and simulation tool for embedded systems.
PCB System Design and Analysis
Includes tools for PCB design and analysis:
PADS Professional: PCB design software with a comprehensive set of tools for schematic capture and PCB layout.
HyperLynx: Tools for signal integrity (SI), power integrity (PI), and thermal analysis of PCBs.
B. On-Demand Training (Online Training) Bundle

This bundle includes lab content and materials for various Mentor Technologies.
IC Logic Design
Tools for digital logic design:
HDL Designer: Tool for designing hardware using HDL (VHDL/Verilog).
Req Tracer: Tool for managing and tracing design requirements.
Design Languages: VHDL, Verilog, SystemVerilog (SV), UVM for verification.
IC Logic Verification
Tools for the verification of digital designs:
Questa: A toolset for RTL simulation, functional verification, and debugging.
Verification Tools (CDC, Formal, Lint, etc.): Tools for clock domain crossing (CDC) checks, formal verification, and linting (coding checks).
Hardware Assisted Verification - Emulation
Veloce: Hardware emulation platform used for verifying complex digital designs.
High-Level Synthesis (HLS)
Catapult: A tool for high-level synthesis that converts C/C++ designs into RTL.
IC Analog / Mixed-Signal Verification
Eldo/AFS/Questa ADMS: Tools for analog and mixed-signal simulation and verification.
Physical Verification
Calibre: Tool for physical design verification (DRC, LVS, and rule checking).
Design for Test (DFT)
Tessent: DFT tools for generating test patterns and ensuring testability.
Analog and Custom Layout Solution
Tanner: Custom analog design tool with full-flow support for schematic entry and layout.
PCB Solutions
PADS and Xpedition: PCB design tools with powerful features for layout, simulation, and validation.
Analysis Solution - SI/PI/Thermal
HyperLynx Solutions: Tools for signal integrity, power integrity, and thermal analysis in PCB designs.
Valor NPI - DFM Solution
Valor NPI: Design for manufacturability (DFM) solution for PCB designs to ensure they can be efficiently manufactured.
IC Packaging
Xpedition ICP: Tool for designing and analyzing IC packages.""",

            "images": []
        },


        {
            "question": "What are the commands to launch Siemens EDA tools?",

            "answer": """Below are the commands to invoke Siemens EDA tools:

Tanner:
sedit: Launches the schematic entry tool for designing circuits.
ledit: Launches the layout editor for custom IC design.
Calibre:
Calibre -gui: Opens the Calibre physical verification tool with a graphical user interface (GUI) for design rule checks (DRC), layout versus schematic (LVS), and other physical verification tasks.
Quest:
vsim: Invokes the Questa simulation tool for RTL design verification, including both digital and mixed-signal designs.
Tessent:
tessent -shell: Launches the Tessent tool suite with a command-line interface (CLI) for design-for-test (DFT) tasks and test pattern generation.
Oasys:
oasys: Starts the Oasys RTL synthesis tool for digital design.
start_gui: Launches the graphical user interface for Oasys to perform RTL synthesis tasks interactively.
Nitro:
nitro: Launches the Nitro-SoC tool for advanced SoC design and simulation.
start_gui: Opens the Nitro-SoC GUI for interactive system-on-chip design and analysis.
Precision RTL Synthesis:
precision: Invokes the Precision tool for RTL synthesis, optimizing digital designs and preparing them for gate-level implementation.
Catapult:
catapult: Starts the Catapult high-level synthesis tool to convert C/C++ code into RTL for efficient hardware design.
These commands are used to launch the respective tools, either through a command-line interface or a graphical interface, depending on the tool's configuration.""",

            "images": []
        },


        {
            "question": "What is the installation procedure for the Tanner EDA tool?",

            "answer": """Tanner EDA Tool Installation Procedure

Folder Creation:
Create a new folder (Name: MentorGraphics).
Create new folders tanner and calibre inside the /home/MentorGraphics folder.
Tanner Installation:
Copy the Tanner setup file to /home/MentorGraphics/tanner.
Use the command: chmod 777 -R tanner-2018_3u4-rhel6.bin
(Run this from /home/MentorGraphics/tanner).
Use the command: ./tanner-2018_3u4-rhel6.bin
(Run this from /home/MentorGraphics/tanner).
Type /home/MentorGraphics/tanner as the path for installation.
Package Install:
Use the command: yum install ld-linux.so.2
Use the command: yum install libXScrnSaver
Press Enter.
Type y to confirm.
Press Enter.""",

            "images": []
        },


        {
            "question": "How to integrate Calibre with Virtuoso?",

            "answer": """For integrating Calibre with Virtuoso, please follow the procedure provided in the screenshot.

Calibre-Virtuoso integration""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Siemens/image7.png",
                    "alt_text": "Calibre-Virtuoso integration",
                    "position": 1
                }
            ]
        },


        {
            "question": "How to access Calibre in Virtuoso tool for SCL PDK v2.0?",

            "answer": """After invoking Virtuoso tool, in CIW window type the below command,
load( strcat( getShellEnvVar("CALIBRE_HOME") "/lib/calibre.skl" ))
Make sure in the cshrc file, CALIBRE_HOME environment is set to the correct path of the directory where the Calibre Tools are situated. Also ensure you have read access to the directory where the Calibre Tools are situated.""",

            "images": []
        },


        {
            "question": "Issue in Integrating Calibre with Virtuoso for SCL PDK v3.0?",

            "answer": """If using SCL PDK v3 with proper setup then Calibre will be integrated with Virtuoso automatically, no need to invoke Calibre separately.
Make sure in the cshrc file, CALIBRE_HOME environment is set to the correct path of the directory where the Calibre Tools are situated. Also ensure you have read access to the directory where the Calibre Tools are situated.""",

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
                    "Open a new ticket under “IP whitelisting for EDA tool access under C2S” help topic",
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
                    "For Siemens EDA tools",
                    "nc -vz 14.139.1.126 1717",
                    "nc -vz 14.139.1.126 36162"
                ],

                "images": []
            },


            {
                "title": "Port Numbers required for the Siemens EDA Tools",

                "steps": [
                    "Following Port numbers to the License server 14.139.1.126 need to be opened at participating Institutions Firewall:",
                    "For Siemens EDA Tools:",
                    "TCP Port: 1717 and 36162"
                ],

                "images": []
            }

        ]
    }

}