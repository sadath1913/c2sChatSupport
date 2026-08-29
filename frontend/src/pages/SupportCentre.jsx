import { useEffect } from "react";

import { Link } from "react-router-dom";

import C2SHeader from "../components/home/C2SHeader";

import ChatWidget from "../components/chatbot/ChatWidget";

import "../styles/support-centre.css";

import { useChat } from "../context/ChatContext";

function SupportCentre() {

    const menuItems = [
        { icon: "⚙", text: "Centralized EDA Tool Access" },
        { icon: "▣", text: "FPGA Boards & Associated Design S/W" },
        { icon: "⬡", text: "MPW Services for Fabrication" },
        { icon: "🎓", text: "Training" },
        { icon: "✚", text: "Post Silicon Validation & Testing" },
        { icon: "▢", text: "ChipIN Support Centre" },
        { icon: "?", text: "FAQ / EDA Tool Checklists" },
        { icon: "♙", text: "SPoC (SHAKTI / VEGA / AJIT)" },
        { icon: "⌂", text: "SMART Lab at NIELIT Calicut" },
        { icon: "▤", text: "Implementation of Unique Host ID" },
        { icon: "✿", text: "Access to PRIVI-ACE at C-DAC Bangalore" },
        { icon: "▣", text: "Renesas Development Boards" },
        { icon: "ϟ", text: "OpenPOWER Microwatt Access" },
        { icon: "▤", text: "PARAM Utkarsh Facility" },
        { icon: "⌕", text: "Nanofabrication & Characterization" }
    ];
    const {
        setCurrentModuleId,
    } = useChat();

    useEffect(() => {

        setCurrentModuleId(null);

    }, [setCurrentModuleId]);

    return (

        <div className="support-page">

            <C2SHeader />


            {/* BREADCRUMB */}

            <div className="support-breadcrumb">

                <Link to="/">
                    Home
                </Link>

                <span>→</span>

                <span>
                    ChipIN Support Centre
                </span>

            </div>


            {/* PAGE TITLE */}

            <div className="support-title">

                <h1>
                    ChipIN Support Centre
                </h1>

            </div>


            <div className="support-layout">


                {/* SIDEBAR */}

                <aside className="support-sidebar">

                    {menuItems.map((item, index) => {

                        const isSupport =
                            item.text === "ChipIN Support Centre";

                        const isFAQ =
                            item.text === "FAQ / EDA Tool Checklists";

                        if (isSupport) {

                            return (

                                <div
                                    className={`support-menu-item active item-${index}`}
                                    key={index}
                                >

                                    <span className="support-menu-icon">
                                        {item.icon}
                                    </span>

                                    <span>
                                        {item.text}
                                    </span>

                                </div>

                            );

                        }
                        if (isFAQ) {

                            return (

                                <Link
                                    to="/eda-checklist"
                                    className={`support-menu-item item-${index}`}
                                    key={index}
                                >

                                    <span className="support-menu-icon">
                                        {item.icon}
                                    </span>

                                    <span>
                                        {item.text}
                                    </span>

                                </Link>

                            );

                        }


                        return (

                            <button
                                className={`support-menu-item item-${index}`}
                                key={index}
                            >

                                <span className="support-menu-icon">
                                    {item.icon}
                                </span>

                                <span>
                                    {item.text}
                                </span>

                            </button>

                        );

                    })}

                </aside>


                {/* CONTENT */}

                <main className="support-content">

                    <div className="support-text">


                        <p>
                            Participating Institutions under C2S Programme are
                            requested to make use of ChipIN Centre's Support
                            Ticket System, an online ticketing portal designed
                            to streamline and enhance the management of ChipIN
                            support requests, thereby ensuring a more efficient
                            and improved service experience.
                        </p>


                        <p>
                            Upon submission of a support request, the ticketing
                            system automatically assigns a unique ticket number
                            to facilitate easy tracking of progress and online
                            monitoring of responses. This feature empowers you
                            with real-time insights into the resolution status
                            of your inquiries.
                        </p>


                        <p>
                            In addition, for the institute's convenience and to
                            facilitate a comprehensive overview, we provide
                            complete archives and a detailed history of all
                            support requests. This archive serves as a valuable
                            resource, enabling the institute to reference past
                            interactions and resolutions.
                        </p>


                        <p>
                            It is imperative to note that the submission of a
                            support ticket requires the use of valid login
                            credentials, adding a layer of security and
                            confidentiality to your communication with ChipIN
                            Centre. This measure ensures that your support
                            requests are handled with the utmost attention and
                            in adherence to the highest standards.
                        </p>


                        <p>
                            Utilizing ChipIN Centre's Support Ticket System,
                            the institute contributes to optimizing ChipIN
                            support services. This enables us to address the
                            institute's inquiries promptly and efficiently
                            while maintaining a record of our commitment to
                            supporting all C2S institutions.
                        </p>


                        <p className="support-link-text">

                            To access ChipIN Centre's Support Ticket System,
                            please visit:

                            <a
                                href="https://chipin.cdacb.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://chipin.cdacb.in
                            </a>

                        </p>

                    </div>

                </main>

            </div>


            {/* CHATBOT */}

            <ChatWidget />


            {/* BACK TO TOP */}

            <button
                className="support-back-top"
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
            >
                ↑
            </button>


            {/* FOOTER */}

            <footer className="support-footer">

                <div>
                    Content owned by{" "}

                    <strong>
                        Ministry of Electronics and Information Technology
                        (MeitY), Government of India
                    </strong>
                </div>

                <small>
                    Copyright © 2020 - 2026 | All Rights Reserved
                </small>

            </footer>

        </div>

    );

}

export default SupportCentre;