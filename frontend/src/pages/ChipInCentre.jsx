import C2SHeader from "../components/home/C2SHeader";
import chipHome from "../assets/chip_home.png";
import processflow from "../assets/processflow.png";

import "../styles/chipin.css";
import { Link } from "react-router-dom";

function ChipInCentre() {

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
        { icon: "▣", text: "Renasas Development Boards" },
        { icon: "ϟ", text: "OpenPOWER Microwatt Access" },
        { icon: "▤", text: "PARAM Utkarsh Facility" },
        { icon: "⌕", text: "Nanofabrication & Characterization" }
    ];


    return (

        <div className="chipin-page">

            <C2SHeader />


            {/* PAGE TITLE */}

            <div className="chipin-breadcrumb">

                <span>Home</span>

                <span className="arrow">→</span>

                ChipIN Centre

            </div>


            <div className="chipin-title">

                <h1>ChipIN Centre</h1>

            </div>


            <div className="chipin-layout">


                {/* SIDEBAR */}

                <aside className="chipin-sidebar">

                    {menuItems.map((item, index) => {

                        const isSupport = item.text === "ChipIN Support Centre";
                        const isEDAChecklist = item.text === "FAQ / EDA Tool Checklists";

                        if (isSupport) {
                            return (
                                <Link
                                    to="/support"
                                    className={`chipin-menu-item item-${index}`}
                                    key={index}
                                >
                                    <span className="menu-icon">
                                        {item.icon}
                                    </span>

                                    <span>{item.text}</span>
                                </Link>
                            );
                        }

                        if (isEDAChecklist) {
                            return (
                                <Link
                                    to="/eda-checklist"
                                    className={`chipin-menu-item item-${index}`}
                                    key={index}
                                >
                                    <span className="menu-icon">
                                        {item.icon}
                                    </span>

                                    <span>{item.text}</span>
                                </Link>
                            );
                        }

                        return (
                            <button
                                className={`chipin-menu-item item-${index}`}
                                key={index}
                            >
                                <span className="menu-icon">
                                    {item.icon}
                                </span>

                                <span>{item.text}</span>
                            </button>
                        );

                    })}
                </aside>


                {/* MAIN CONTENT */}

                <main className="chipin-content">


                    {/* HERO IMAGE */}

                    <div className="chipin-image-box">

                        <img
                            src={chipHome}
                            alt="ChipIN Centre"
                        />

                    </div>


                    {/* DESCRIPTION */}

                    <div className="chipin-description">

                        <p>

                            Ministry of Electronics and Information Technology
                            (MeitY), Government of India has set up ChipIN Centre
                            at C-DAC Bangalore to dedicate its services to
                            semiconductor design community of the country.

                            The facility acts as one-stop centre to provide
                            semiconductor design tools, fab access, virtual
                            prototyping hardware lab access to fabless chip
                            designers from Startups/MSME and Academia.

                        </p>


                        <p>

                            ChipIN Centre is meant to catalyse chip designing
                            in India by catering to the fabless chip design
                            ecosystem in the country. The facility provides
                            Multi-Project Wafer (MPW) support to Academic
                            Institutions, Startups and MSMEs by enabling access
                            to Indian foundries and overseas foundries.

                        </p>


                        <p>

                            It provides centralized EDA Design Tools for IC
                            design flow and also provides design services like
                            Fab compliance checks, validation, integration of
                            designs, coordinating with identified firm for
                            packaging of fabricated chips and enabling
                            characterization and post-silicon services.

                        </p>

                    </div>


                    <h2 className="process-heading">

                        Process flow - Design Compliance Flow & Reticle Planning to Packaged Chip

                    </h2>


                    {/* PROCESS FLOW */}

                    <div className="process-flow">

                        <img
                            src={processflow}
                            alt="ChipIN Design Compliance Flow, Reticle Planning and Packaged Chip"
                            className="process-flow-image"
                        />

                    </div>
                </main>

            </div>


            {/* BACK TO TOP */}

            <button
                className="back-to-top"
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

            <footer className="chipin-footer">

                <div>

                    Content owned by

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


export default ChipInCentre;