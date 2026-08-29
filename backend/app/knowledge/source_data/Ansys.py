ANSYS_DATA = {

    "module": {
        "name": "Ansys EDA Tools",
        "description": "Ansys EDA Tools FAQ"
    },

    "faqs": [

        {
            "question": "What are the OS and system requirements for Ansys Tools?",

            "answer": """Operating System:

- RHEL: 7.8/7.9, 8.1--8.7
- SuSE: 12
- CentOS: 7.8/7.9
- Ubuntu LTS: 20.04

System Requirements:

- Multi-CPU machines
  - Minimum 8 cores
  - 10--20 GB RAM (minimum)
- Scalability
  - Additional machines/CPUs can be added for improved performance and handling of large test cases.""",

            "images": []
        },


        {
            "question": "What are the software tools that are available under Ansys Bundle?",

            "answer": """- The following software tools are available under Ansys:
  - RedHawk
  - PowerArtist
  - Helic
  - Totem
  - SeaScape (RedHawk-SC)

For more details, refer to the below link:

https://c2s.gov.in/pdf//Ansys%20List%20of%20Products_Updated.pdf""",

            "images": []
        },


        {
            "question": "How to install PowerArtist?",

            "answer": """Steps to Install:

- Download & Extract the Bundle:
  - Download the tool to your desired path:
    <your-tool-path>
  - Navigate to the directory:
    cd <your-tool-path>
  - Extract the downloaded bundle:
    tar --zxvf <downloaded tool bundle>
- Set Path to the Installed Software Binary Directory:
  - Set the environment variable:
    setenv POWERARTIST_ROOT <your-tool-path>
  - Update the system path:
    set path = ($POWERARTIST_ROOT/bin $path)
- Invoke the Shell:
  - Run the following command:
    pa_shell
- Invoke the GUI:
  - Run the following command to launch PowerArtist:
    PowerArtist &""",

            "images": []
        },


        {
            "question": "How to install Helic Tools?",

            "answer": """Steps to Install:

- Download & Extract the Tool Bundle:
  - Download the tool to your desired path:
    <your-tool-path>
  - Navigate to the directory:
    cd <your-tool-path>
  - Extract the downloaded bundle:
    tar --zxvf <downloaded tool bundle>
- Download & Extract the Training Test Case:
  - Download the test case to your desired path:
    <your-testcase-path>
  - Navigate to the directory:
    cd <your-testcase-path>
  - Extract the downloaded test case bundle:
    tar --zxvf <downloaded testcase bundle>
- Set Environment Variables:
  - Set the HELIC_ROOT variable to the installed software binary directory:
    setenv HELIC_ROOT <your-tool-path>/helic_<version>
  - Set the HELIC_PDK_ROOT variable to the training test case's tech files:
    setenv HELIC_PDK_ROOT <your-testcasepath>/RaptorX/design_data/PDK
- Invoke the GUI:
  - Run the following command to launch Helic Tools:
    $HELIC_ROOT/tools/bin/helicCentral &""",

            "images": []
        },


        {
            "question": "How to install Totem?",

            "answer": """Steps to Install:

- Download & Extract the Bundle:
  - Download the tool to your desired path:
    <your-tool-path>
  - Navigate to the directory:
    cd <your-tool-path>
  - Extract the downloaded bundle:
    tar --xvf <downloaded tool bundle>
- Set Path to the Installed Software Binary Directory:
  - Set the environment variable:
    setenv APACHEROOT <your-tool-path>
  - Update the system path:
    set path = ($APACHEROOT/bin $path)
- Invoke the GUI:
  - Run the following command to launch Totem:
    totem &""",

            "images": []
        },


        {
            "question": "How to install RedHawk-SC?",

            "answer": """Steps to Install:

- Download & Extract the Bundle:
  - Download the tool to your desired path:
    <your-tool-path>
  - Navigate to the directory:
    cd <your-tool-path>
  - Extract the downloaded bundle:
    tar --xvf <downloaded tool bundle>
- Set the License File Path:
  - Configure the license environment variable:
    setenv LM_LICENSE_FILE 1055@<IP Address or Hostname>
- Invoke the GUI:
  - Run the following command to launch RedHawk-SC:
    <your-tool-path>/seascape_release/<toolversion>/linux_x86_64_rhel7/bin/redhawk_sc &

Note: <tool version> corresponds to 2023_R2.0.p1 for the transferred bundle.""",

            "images": []
        },


        {
            "question": "How to Set the License Path (Common for all Software's)?",

            "answer": """To configure the license path for all Ansys software tools, use the following command:

setenv LM_LICENSE_FILE 1055@14.139.1.126""",

            "images": []
        },


        {
            "question": "How to Set the Environment Variable List for All Four Software Tools?",

            "answer": """Steps to Create and Set Environment Variables:

- Create a Configuration File:
  - Create a new file to store the environment variables.
  - Example file name: envlist
  - File with shell extension: envlist.cshrc
- Add the Following Environment Variables to envlist.cshrc:
  - # RedHawk-SC
    setenv APACHEROOT <Your-Tool PATH>/seascape_linux_x86_64_rhel7_2023_R2.0.p1_RedHawk-SC_bundle/seascape_release/2023_R2.0.p1/linux_x86_64_rhel7
  - # Totem
    setenv APACHEROOT <Your-Tool-PATH>/Totem_Linux64e7_V2023R2.1p1
    set path = ($APACHEROOT/bin $path)
  - # PowerArtist
    setenv POWERARTIST_ROOT <Your-Tool-PATH>/PowerArtist_linux-x86_64_rhel7_2023R2.1
    set path = ($POWERARTIST_ROOT/bin $path)
  - # Helic Tools
    setenv HELIC_ROOT <Your-Tool-PATH>/helic_2023.R2
    setenv HELIC_PDK_ROOT <Your-Tool-PATH>/RaptorX/design_data/PDK
- Execute the Configuration File:
  - After adding the above variables, execute the file using the following command:
    source envlist.cshrc""",

            "images": []
        },


        {
            "question": "What are the Port Numbers that are required for Accessing Ansys Tools?",

            "answer": """To access Ansys tools, the following port numbers must be opened in the firewall of participating institutions:

- TCP Port: 1055 and 1056""",

            "images": []
        },


        {
            "question": "How to Troubleshoot License Checkout Issues?",

            "answer": """If you are facing issues with license checkout, follow these steps:

- Check your internet connection
  - Verify that your system has an active internet connection.
  - Try pinging the license server:
    ping 14.139.1.126
- Check for whitelisting of your IP
  - Check if your IP is whitelisted by visiting: http://14.139.1.126/
- Make sure that your system is connected to the licensing server
  - Run the following commands from your Linux system to test the connection:
    nc -vz 14.139.1.126 1055
    nc -vz 14.139.1.126 1056

* The above-mentioned commands will test the connection to the server and provide feedback on whether the specified ports are open and accessible.
* If the connection is successful, you will receive a message indicating the port is connected to the licensing server. If not, you may see an error message indicating connection timeout.
* Check with your network administrator for port opening if connection timeout issue occurs.""",

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
                    "nc -vz 14.139.1.126 1055",
                    "nc -vz 14.139.1.126 1056"
                ],

                "images": []
            },


            {
                "title": "3. Port Numbers required for the EDA Tools",

                "steps": [
                    "Following Port numbers to the License server 14.139.1.126 need to be opened at participating Institutions Firewall:",
                    "Ansys EDA tools",
                    "TCP Port: 1055 and 1056"
                ],

                "images": []
            }

        ]
    }

}