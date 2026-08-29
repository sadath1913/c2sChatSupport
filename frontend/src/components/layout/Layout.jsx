import Header from "./Header";
import Navbar from "./Navbar";

import ChatWidget from "../chatbot/ChatWidget";


function Layout({
    children,
}) {

    return (

        <div className="app-layout">

            <Header />

            <Navbar />

            <main className="main-content">

                {children}

            </main>

            {/* Global Chatbot */}
            <ChatWidget />

        </div>

    );

}


export default Layout;