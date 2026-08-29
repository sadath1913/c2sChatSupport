KEYSIGHT_DATA = {

    "module": {
        "name": "Keysight EDA Tools",
        "description": "Keysight EDA Tools FAQ"
    },

    "faqs": [

        {
            "question": "How can you verify if the submitted WAN IP is included in the whitelist?",

            "answer": """To verify if the submitted WAN IP is whitelisted, follow these steps:

- Open your system browser and enter this IP address: 14.139.1.126 in the URL bar, or alternatively, click on the provided link http://14.139.1.126/
- If the IP is successfully whitelisted, a confirmation message will appear, displaying "Congratulations!!! Your IP has been whitelisted for accessing ChipIN EDA tool Academic license".
- Please find the screenshot for reference.
- In case the IP is not whitelisted, create a ticket in ChipIN ticketing portal, click on the link provided below,
- https://chipin.cdacb.in/
- This process ensures accurate verification of the submitted IP address against the whitelist.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Keysight/image1.png",
                    "alt_text": "Whitelist confirmation screenshot",
                    "position": 1
                },
                {
                    "image_url": "https://c2s.gov.in/FAQ/Keysight/image2.png",
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
- If you encounter timeouts or error messages, this may indicate a connectivity issue.""",

            "images": [
                {
                    "image_url": "https://c2s.gov.in/FAQ/Keysight/image3.png",
                    "alt_text": "Ping command screenshot",
                    "position": 1
                }
            ]
        },


        {
            "question": "How can you verify connectivity to licensing server (Port connectivity)?",

            "answer": """To verify connectivity to the licensing server, follow these steps:
- Open the command terminal on your system.
- Use the following commands to check the connectivity to the specific licensing server and its respective ports:
  - nc -vz 14.139.1.126 27009
  - nc -vz 14.139.1.126 57551
* If the connection is successful, you will receive a message indicating the port is connected to the licensing server. If not, you may see an error message indicating connection timeout.
* Check with your network administrator for port opening if connection timeout issue occurs.""",

            "images": []
        },


        {
            "question": "How can you verify if the submitted Hostname is included in the whitelist?",

            "answer": """These are the steps provided below.

- Check the Hostname:
  - Type hostname in the command terminal to display the current system hostname.
- Verify Hosts File:
  - Type gedit /etc/hosts in the command terminal.
  - Check that the whitelisted hostname is present after localdomain4 in the file.
- Verify System Hostname using nmtui:
  - Type nmtui in the command terminal.
  - Navigate to Set System Hostname and press Enter.

Ensure that the hostname is consistent across all entries and verify that the submitted Host-ID is correctly listed.""",

            "images": []
        },


        {
            "question": "What are the tools available under Keysight EDA?",

            "answer": """- ADS for RFMW applications
- ADS for HSD applications
- SystemVue Software
- Cliosoft for Virtuoso users
- Cliosoft for Custom compiler users""",

            "images": []
        },


        {
            "question": "What is the installation procedure for the Keysight ADS EDA tool?",

            "answer": """While installing the tool in the last step put 27009@14.139.1.126 in the Network license server name and verify that the Hostname used to access the tool matches with any of the already submitted Hostname.""",

            "images": []
        },


        {
            "question": "What are the steps to be taken if an institute facing error regarding ADS could not be licensed sufficiently?",

            "answer": """Make sure that all the checks from the checklist are passed.

- Accessing hostname is whitelisted from ChipIN side.
- Institute should mention proper Network license server name.""",

            "images": []
        },


        {
            "question": "Do Keysight tools support the Windows operating system?",

            "answer": """Yes, however hostname/hostID nomenclature is different from the linux.

The hints for the nomenclature are as follows:

- Hint1: Max 15 characters are allowed.
- Hint2: Make sure that the institute name (short form/name) is specified within those 15 characters. Don't use '.' In the hostID instead you can use '-'.

For Example: user1-cdacb""",

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
                    "nc -vz 14.139.1.126 27009 #(for Keysight ADS & SystemVue EDA tools)",
                    "nc -vz 14.139.1.126 57551 #(for Keysight ADS & SystemVue EDA tools)",
                    "nc -vz 14.139.1.126 27008 #(for Keysight Cliosoft EDA tools)",
                    "nc -vz 14.139.1.126 57552 #(for Keysight Cliosoft EDA tools)"
                ],

                "images": []
            },


            {
                "title": "Port Numbers required for the Keysight EDA Tools",

                "steps": [
                    "Following Port numbers to the License server 14.139.1.126 need to be opened at participating Institutions Firewall:",
                    "For ADS RFMW Application, ADS HSD Application and SystemVue Keysight EDA Tools:",
                    "TCP Port: 27009 and 57551",
                    "For Cliosoft VDD, Cliosoft SOS for Cadence Virtuoso and Synopsys Custom Compiler Keysight EDA Tools:",
                    "TCP Port: 27008 and 57552"
                ],

                "images": []
            }

        ]
    }

}