import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import ChipInCentre from "./pages/ChipInCentre";
import SupportCentre from "./pages/SupportCentre";
import EDAToolChecklists from "./pages/EDAToolChecklists";

import ModuleFAQ from "./pages/modules/ModuleFAQ";

import { ChatProvider } from "./context/ChatContext";


/*
=========================================================
MODULE CONFIGURATION
=========================================================

All 12 EDA modules use the same common routing system.

FAQ:
    /faq/:module

Module pages:
    /modules/:module

=========================================================
*/

const modules = [
    {
        name: "Synopsys",
        slug: "synopsys",
    },
    {
        name: "Cadence",
        slug: "cadence",
    },
    {
        name: "Siemens",
        slug: "siemens",
    },
    {
        name: "Ansys",
        slug: "ansys",
    },
    {
        name: "Keysight",
        slug: "keysight",
    },
    {
        name: "Xilinx",
        slug: "xilinx",
    },
    {
        name: "Silvaco",
        slug: "silvaco",
    },
    {
        name: "Renesas-Altium",
        slug: "renesas-altium",
    },
    {
        name: "Cadre",
        slug: "cadre",
    },
    {
        name: "Compcarta",
        slug: "compcarta",
    },
    {
        name: "AsterQuanta",
        slug: "asterquanta",
    },
    {
        name: "Banashree Systems",
        slug: "banashree-systems",
    },
];


function App() {

    return (

        <BrowserRouter>

            <ChatProvider>

                <Routes>


                    {/* =================================================
                        C2S HOME
                    ================================================= */}

                    <Route
                        path="/"
                        element={<Home />}
                    />


                    {/* =================================================
                        CHIPIN CENTRE
                    ================================================= */}

                    <Route
                        path="/chipin-centre"
                        element={<ChipInCentre />}
                    />


                    {/* =================================================
                        CHIPIN SUPPORT CENTRE
                    ================================================= */}

                    <Route
                        path="/support"
                        element={<SupportCentre />}
                    />


                    {/* =================================================
                        EDA TOOL CHECKLIST INDEX
                    ================================================= */}

                    <Route
                        path="/eda-checklist"
                        element={<EDAToolChecklists />}
                    />


                    {/* =================================================
                        COMMON FAQ PAGE
                    =================================================

                        Examples:

                        /faq/synopsys
                        /faq/cadence
                        /faq/siemens
                        /faq/ansys
                        /faq/keysight
                        /faq/xilinx
                        /faq/silvaco
                        /faq/renesas-altium
                        /faq/cadre
                        /faq/compcarta
                        /faq/asterquanta
                        /faq/banashree-systems

                    ================================================= */}

                    <Route
                        path="/faq/:module"
                        element={<ModuleFAQ />}
                    />


                    {/* =================================================
                        TEMPORARY MODULE PAGES
                    =================================================

                        These are temporary placeholders.

                        Later we will replace them with ONE common
                        ModulePage component, just like the FAQ system.

                    ================================================= */}

                    {modules.map((module) => (

                        <Route
                            key={module.slug}
                            path={`/modules/${module.slug}`}
                            element={

                                <div className="module-page-placeholder">

                                    <h1>
                                        {module.name}
                                    </h1>

                                    <p>
                                        {module.name} EDA Tools module
                                        page will be implemented here.
                                    </p>

                                </div>

                            }
                        />

                    ))}


                </Routes>

            </ChatProvider>

        </BrowserRouter>

    );

}


export default App;