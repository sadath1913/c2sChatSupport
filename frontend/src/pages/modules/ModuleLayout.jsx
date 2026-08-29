import C2SHeader from "../home/C2SHeader";
import ChatWidget from "../chatbot/ChatWidget";

import "../../styles/module.css";


function ModuleLayout({
    moduleName,
    breadcrumbName,
    children,
}) {

    return (
        <div className="module-page">

            {/* =================================================
                GLOBAL C2S HEADER
            ================================================= */}

            <C2SHeader />


            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <div className="module-breadcrumb">

                <a href="/">
                    Home
                </a>

                <span>→</span>

                <a href="/eda-checklist">
                    EDA Tool Checklists
                </a>

                <span>→</span>

                <span>
                    {breadcrumbName || `${moduleName} EDA Tools FAQ`}
                </span>

            </div>


            {/* =================================================
                PAGE TITLE
            ================================================= */}

            <div className="module-title">

                <h1>
                    {moduleName} EDA Tools FAQ
                </h1>

            </div>


            {/* =================================================
                MAIN PAGE LAYOUT
            ================================================= */}

            <div className="module-layout">

                {/* SIDEBAR */}

                <aside className="module-sidebar">

                    <div className="module-sidebar-inner">

                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-0">
                                ⚙
                            </span>

                            <span>
                                Centralized EDA Tool Access
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-1">
                                ▣
                            </span>

                            <span>
                                FPGA Boards & Associated Design S/W
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-2">
                                ⬡
                            </span>

                            <span>
                                MPW Services for Fabrication
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-3">
                                🎓
                            </span>

                            <span>
                                Training
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-4">
                                ✚
                            </span>

                            <span>
                                Post Silicon Validation & Testing
                            </span>
                        </div>


                        <a
                            href="/support"
                            className="module-sidebar-item"
                        >
                            <span className="module-sidebar-icon icon-5">
                                ▢
                            </span>

                            <span>
                                ChipIN Support Centre
                            </span>
                        </a>


                        <a
                            href="/eda-checklist"
                            className="module-sidebar-item active"
                        >
                            <span className="module-sidebar-icon icon-6">
                                ?
                            </span>

                            <span>
                                FAQ / EDA Tool Checklists
                            </span>
                        </a>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-7">
                                ♙
                            </span>

                            <span>
                                SPoC (SHAKTI / VEGA / AJIT)
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-8">
                                ⌂
                            </span>

                            <span>
                                SMART Lab at NIELIT Calicut
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-9">
                                ▤
                            </span>

                            <span>
                                Implementation of Unique Host ID
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-10">
                                ✿
                            </span>

                            <span>
                                Access to PRIVI-ACE at C-DAC Bangalore
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-11">
                                ▣
                            </span>

                            <span>
                                Renesas Development Boards
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-12">
                                ϟ
                            </span>

                            <span>
                                OpenPOWER Microwatt Access
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-13">
                                ▤
                            </span>

                            <span>
                                PARAM Utkarsh Facility
                            </span>
                        </div>


                        <div className="module-sidebar-item">
                            <span className="module-sidebar-icon icon-14">
                                ⌕
                            </span>

                            <span>
                                Nanofabrication & Characterization
                            </span>
                        </div>

                    </div>

                </aside>


                {/* =================================================
                    MODULE CONTENT
                ================================================= */}

                <main className="module-content">

                    {children}

                </main>

            </div>


            {/* =================================================
                CHATBOT
            ================================================= */}

            <ChatWidget />


            {/* =================================================
                BACK TO TOP
            ================================================= */}

            <button
                className="module-back-top"
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


            {/* =================================================
                FOOTER
            ================================================= */}

            <footer className="module-footer">

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


export default ModuleLayout;