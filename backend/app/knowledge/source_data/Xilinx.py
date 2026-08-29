XILINX_AMD_DATA = {

    "module": {
        "name": "Xilinx/AMD FPGA Boards",
        "description": "Xilinx/AMD FPGA Boards FAQ"
    },

    "faqs": [

        {
            "question": "What FPGA Boards and their Associated Design Software Tools Are Available?",

            "answer": """The following FPGA boards and their associated design software tools are available:

FPGA Boards:

- Pynq Z2
- Pmod KYPD: 16-button Keypad
- Pmod OLEDrgb: 96 x 64 RGB OLED Display
- Pmod DA2: Two 12-bit D/A Outputs
- Pmod TPH2: 12-pin Test Point Header
- Boolean Board
- Urbana Board
- Arty A7-100T
- Kria KR-260
- Kria KV (Video)
- Pynq ZU
- Zynq UltraScale+ MPSoC ZCU104

Associated Design Software Tools:

- UEF-VIVADO-ENTER-25 (2 bundles)
- UEF-MATSIM-ADDON-25 (2 bundles)

For more details and datasheet, refer to the below link:

https://c2s.gov.in/FPGA.jsp""",

            "images": []
        },


        {
            "question": "What FPGA Boards are Centrally Hosted at the ChipIN Centre?",

            "answer": """The following FPGA boards are centrally hosted at the ChipIN Centre:

- Versal VCK5000
- Alveo U55C

Associated Design Software Tools:

- UEF-VIVADO-ENTER-25 (2 bundles)
- UEF-MATSIM-ADDON-25 (2 bundles)

For more details and datasheet, refer to the below link:

https://c2s.gov.in/FPGA.jsp""",

            "images": []
        },


        {
            "question": "What is the procedure for accessing Centrally Hosted FPGA Boards at the ChipIN Centre?",

            "answer": """Refer the following link (https://c2s.gov.in/FPGA.jsp) and raise a ticket at the ChipIN support portal (https://chipin.cdacb.in/) under the help topic 'Centralized Access to AMD/Xilinx Advanced FPGA Boards'""",

            "images": []
        },


        {
            "question": "How to Access Alveo U55C or Versal VCK5000 AMD/Xilinx Development Boards?",

            "answer": """To access the Alveo U55C or Versal VCK5000 development boards, follow the steps below:

Prerequisite:

- Install an SSH client such as MobaXterm before proceeding.

Username: xyz (Say)

Steps to Access the Boards:

Access Alveo U55C

Run the following command in the terminal:

ssh -x -p 53422 xyz@14.139.1.126

Access Versal VCK5000

Run the following command in the terminal:

ssh -x -p 51422 xyz@14.139.1.126

Sourcing and Opening Vivado:

Once logged in, execute the following commands to set up Vivado:

source /home/cdac/Xilinx/Vivado/2023.2/settings64.sh
export LM_LICENSE_FILE=2100@14.139.1.126
export XILINXD_LICENSE_FILE=2100@14.139.1.126
vivado &""",

            "images": []
        }

    ],


    "checklist": {

        "title": "Check-list for License checkout issue",

        "description": """ChipIN CDAC Bangalore.
Check-list for License checkout.""",

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
                    "Open a new ticket under “IP whitelisting for EDA Tool access under C2S” help topic",
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
                    "nc -vz 14.139.1.126 2100",
                    "nc -vz 14.139.1.126 49829"
                ],

                "images": []
            },


            {
                "title": "3. Port Numbers required for the XILINX EDA Tools",

                "steps": [
                    "Following Port numbers to the License server 14.139.1.126 need to be opened at participating Institutions Firewall:",
                    "TCP Port: 2100 & 49829"
                ],

                "images": []
            }

        ]
    }

}