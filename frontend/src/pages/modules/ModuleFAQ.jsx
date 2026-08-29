import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import C2SHeader from "../../components/home/C2SHeader";
import ChatWidget from "../../components/chatbot/ChatWidget";
import { useChat } from "../../context/ChatContext";
import moduleData from "../../data/moduleData.jsx";

import "../../styles/module.css";


function ModuleFAQ() {

    const { module } = useParams();

    const data = moduleData[module];

    const {
        setCurrentModuleId,
    } = useChat();


    /* =========================================================
       SET CHATBOT MODULE ID
    ========================================================= */

    useEffect(() => {

        async function loadModuleId() {

            try {

                const API_URL =
                    import.meta.env.VITE_API_URL ||
                    "http://localhost:8000";


                const response = await fetch(
                    `${API_URL}/support/modules`
                );


                if (!response.ok) {

                    throw new Error(
                        "Failed to fetch modules"
                    );

                }


                const modules =
                    await response.json();


                const matchedModule =
                    modules.find(
                        (item) =>
                            item.name.toLowerCase() ===
                            data?.name?.toLowerCase()
                    );


                if (matchedModule) {

                    setCurrentModuleId(
                        matchedModule.id
                    );


                    console.log(
                        "CHATBOT MODULE:",
                        matchedModule.name,
                        "ID:",
                        matchedModule.id
                    );

                } else {

                    setCurrentModuleId(null);


                    console.warn(
                        "Module not found in backend:",
                        data?.name
                    );

                }

            } catch (error) {

                console.error(
                    "Failed to load module ID:",
                    error
                );


                setCurrentModuleId(null);

            }

        }


        if (data) {

            loadModuleId();

        } else {

            setCurrentModuleId(null);

        }

    }, [
        module,
        data,
        setCurrentModuleId,
    ]);

    /* =========================================================
       MODULE NOT FOUND
    ========================================================= */

    if (!data) {

        return (

            <div className="module-page">

                <C2SHeader />

                <main className="module-error">

                    <h1>
                        Module Not Found
                    </h1>

                    <p>
                        The requested EDA module could not be found.
                    </p>

                    <Link to="/eda-checklist">
                        ← Back to EDA Tool Checklists
                    </Link>

                </main>

            </div>

        );

    }


    /* =========================================================
       SIDEBAR ITEMS
    ========================================================= */

    const sidebarItems = [
        {
            icon: "⚙",
            text: "Centralized EDA Tool Access"
        },
        {
            icon: "▣",
            text: "FPGA Boards & Associated Design S/W"
        },
        {
            icon: "⬡",
            text: "MPW Services for Fabrication"
        },
        {
            icon: "🎓",
            text: "Training"
        },
        {
            icon: "✚",
            text: "Post Silicon Validation & Testing"
        },
        {
            icon: "▢",
            text: "ChipIN Support Centre",
            path: "/support"
        },
        {
            icon: "?",
            text: "FAQ / EDA Tool Checklists",
            path: "/eda-checklist",
            active: true
        },
        {
            icon: "♙",
            text: "SPoC (SHAKTI / VEGA / AJIT)"
        },
        {
            icon: "⌂",
            text: "SMART Lab at NIELIT Calicut"
        },
        {
            icon: "▤",
            text: "Implementation of Unique Host ID"
        },
        {
            icon: "✿",
            text: "Access to PRIVI-ACE at C-DAC Bangalore"
        },
        {
            icon: "▣",
            text: "Renesas Development Boards"
        },
        {
            icon: "ϟ",
            text: "OpenPOWER Microwatt Access"
        },
        {
            icon: "▤",
            text: "PARAM Utkarsh Facility"
        },
        {
            icon: "⌕",
            text: "Nanofabrication & Characterization"
        }
    ];


    return (

        <div className="module-page">

            {/* =================================================
                C2S HEADER
            ================================================= */}

            <C2SHeader />


            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <div className="module-breadcrumb">

                <Link to="/">
                    Home
                </Link>

                <span>
                    →
                </span>

                <Link to="/eda-checklist">
                    EDA Tool Checklists
                </Link>

                <span>
                    →
                </span>

                <span>
                    {data.name}
                </span>

            </div>


            {/* =================================================
                PAGE TITLE
            ================================================= */}

            <div className="module-title">

                <h1>
                    {data.title}
                </h1>

            </div>


            {/* =================================================
                MAIN LAYOUT
            ================================================= */}

            <div className="module-layout">


                {/* =================================================
                    SIDEBAR
                ================================================= */}

                <aside className="module-sidebar">

                    <div className="module-sidebar-inner">

                        {sidebarItems.map((item, index) => {

                            const content = (

                                <>

                                    <span
                                        className={
                                            `module-sidebar-icon icon-${index}`
                                        }
                                    >
                                        {item.icon}
                                    </span>

                                    <span>
                                        {item.text}
                                    </span>

                                </>

                            );


                            if (item.path) {

                                return (

                                    <Link
                                        key={index}
                                        to={item.path}
                                        className={
                                            `module-sidebar-item ${
                                                item.active
                                                    ? "active"
                                                    : ""
                                            }`
                                        }
                                    >

                                        {content}

                                    </Link>

                                );

                            }


                            return (

                                <button
                                    key={index}
                                    type="button"
                                    className="module-sidebar-item"
                                >

                                    {content}

                                </button>

                            );

                        })}

                    </div>

                </aside>


                {/* =================================================
                    FAQ CONTENT
                ================================================= */}

                <main className="module-content">


                    <h2 className="module-content-title">

                        {data.name} EDA Tools FAQ

                    </h2>


                    <div className="module-faq-list">

                        {data.faqs.map((faq) => (

                            <article
                                className="module-faq-card"
                                key={faq.id}
                            >

                                <h2 className="module-faq-question">

                                    {faq.question}

                                </h2>


                                <div className="module-faq-answer">

                                    {faq.answer}

                                </div>

                            </article>

                        ))}


                        {data.faqs.length === 0 && (

                            <div className="module-empty">

                                <h2>
                                    {data.name} EDA Tools FAQ
                                </h2>

                                <p>
                                    FAQ content for this module will
                                    be added soon.
                                </p>

                            </div>

                        )}

                    </div>

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


export default ModuleFAQ;