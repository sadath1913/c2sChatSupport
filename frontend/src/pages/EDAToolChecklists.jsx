import { useEffect } from "react";
import C2SHeader from "../components/home/C2SHeader";
import { Link } from "react-router-dom";
import ChatWidget from "../components/chatbot/ChatWidget";
import { useChat } from "../context/ChatContext";
import {
    Wrench,
    Cpu,
    Shield,
    GraduationCap,
    Activity,
    MessageSquare,
    CircleHelp,
    UserRound,
    House,
    FileText,
    CircuitBoard,
    Zap,
    Server,
    Search,
    ArrowRight
} from "lucide-react";

import "../styles/eda-checklists.css";

function EDAToolChecklists() {

    const sidebarItems = [
        { icon: Wrench, text: "Centralized EDA Tool Access" },
        { icon: CircuitBoard, text: "FPGA Boards & Associated Design S/W" },
        { icon: Shield, text: "MPW Services for Fabrication" },
        { icon: GraduationCap, text: "Training" },
        { icon: Activity, text: "Post Silicon Validation & Testing" },
        { icon: MessageSquare, text: "ChipIN Support Centre", path: "/support" },
        { icon: CircleHelp, text: "FAQ / EDA Tool Checklists", active: true },
        { icon: UserRound, text: "SPoC (SHAKTI / VEGA / AJIT)" },
        { icon: House, text: "SMART Lab at NIELIT Calicut" },
        { icon: FileText, text: "Implementation of Unique Host ID" },
        { icon: CircuitBoard, text: "Access to PRIVTI-ACE at C-DAC Bangalore" },
        { icon: CircuitBoard, text: "Renesas Development Boards" },
        { icon: Zap, text: "OpenPOWER Microwatt Access" },
        { icon: Server, text: "PARAM Utkarsh Facility" },
        { icon: Search, text: "Nanofabrication & Characterization" }
    ];

    const checklistLinks = {
        "Synopsys":
            "https://c2s.gov.in/checklist/01_Synopsys_Checklist/Checklist%20for%20License%20checkout%20issue.pdf",

        "Cadence":
            "https://c2s.gov.in/checklist/02_Cadence_Checklist/Checklist%20for%20Cadence%20License%20checkout%20issue.pdf",
    };
    const modules = [
        "Synopsys",
        "Cadence",
        "Siemens",
        "Ansys",
        "Keysight",
        "Xilinx",
        "Silvaco",
        "Renesas-Altium",
        "Cadre",
        "Compcarta",
        "AsterQuanta",
        "Banashree Systems"
    ];

    const {
        setCurrentModuleId,
    } = useChat();

    useEffect(() => {

        setCurrentModuleId(null);

    }, [setCurrentModuleId]);


    return (
        <div className="eda-checklist-page">

            <C2SHeader />


            {/* BREADCRUMB */}

            <div className="eda-breadcrumb">

                <Link to="/">Home</Link>

                <span>→</span>

                <span>EDA Tool Checklists</span>

            </div>


            {/* PAGE TITLE */}

            <div className="eda-page-title">

                <h1>EDA Tool Checklists</h1>

            </div>


            <div className="eda-layout">


                {/* SIDEBAR */}

                <aside className="eda-sidebar">

                    {sidebarItems.map((item, index) => {

                        const Icon = item.icon;

                        const content = (
                            <>
                                <span className={`eda-sidebar-icon icon-${index}`}>
                                    <Icon size={20} strokeWidth={2.3} />
                                </span>

                                <span className="eda-sidebar-text">
                                    {item.text}
                                </span>
                            </>
                        );


                        if (item.path) {

                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="eda-sidebar-item"
                                >
                                    {content}
                                </Link>
                            );

                        }


                        return (
                            <Link
                                key={index}
                                to={item.active ? "/eda-checklist" : "#"}
                                className={`eda-sidebar-item ${
                                    item.active ? "active" : ""
                                }`}
                            >
                                {content}
                            </Link>
                        );

                    })}

                </aside>


                {/* MAIN CONTENT */}

                <main className="eda-content">


                    <div className="eda-module-list">

                        {modules.map((module, index) => (

                            <div
                                className="eda-module-card"
                                key={module}
                            >

                                <div className="eda-module-name">
                                    {module}
                                </div>


                                <div className="eda-module-action">

                                    <span>
                                        Checklist
                                    </span>

                                    {checklistLinks[module] ? (
                                        <a
                                            href={checklistLinks[module]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="eda-arrow"
                                            aria-label={`${module} checklist`}
                                        >
                                            <ArrowRight size={25} strokeWidth={2.5} />
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            className="eda-arrow"
                                            aria-label={`${module} checklist coming soon`}
                                            disabled
                                        >
                                            <ArrowRight size={25} strokeWidth={2.5} />
                                        </button>
                                    )}

                                </div>


                                <div className="eda-module-action">

                                    <span>
                                        FAQ
                                    </span>

                                    <Link
                                        to={`/faq/${module.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="eda-arrow"
                                        aria-label={`${module} FAQ`}
                                    >
                                        <ArrowRight size={25} strokeWidth={2.5} />
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </main>

            </div>

            {/* CHATBOT */}

            <ChatWidget />
            
            {/* BACK TO TOP */}

            <button
                className="eda-back-to-top"
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
                aria-label="Back to top"
            >
                ↑
            </button>


            {/* FOOTER */}

            <footer className="eda-footer">

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


export default EDAToolChecklists;