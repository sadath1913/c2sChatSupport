import emblem from "../../assets/emblem.png";
import { Link } from "react-router-dom";
function C2SHeader() {
    return (
        <header className="c2s-header">

            {/* TOP BRANDING */}

            <div className="c2s-branding">

                <div className="ministry-brand">

                    <img
                        src={emblem}
                        alt="Government of India"
                        className="india-emblem"
                    />

                    <div className="ministry-text">

                        <div className="meity-title">
                            Ministry of Electronics and Information Technology (MeitY)
                        </div>

                        <div className="chips-brand">

                            <span className="chips-text">
                                Chips to
                            </span>

                            <span className="startup-text">
                                Startup
                            </span>

                            <span className="c2s-badge">
                                C2S
                            </span>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="header-right">

                    <div className="date-time">
                        28 Aug 2026, 11:00:49 am (IST)
                    </div>

                    <div className="programme-logo">

                        <img
                            src="https://c2s.gov.in/nlogo/psd-5--unscreen.gif"
                            alt="Chips to Startup Programme"
                            className="programme-logo-gif"
                        />

                    </div>

                </div>

            </div>


            {/* NAVBAR */}

            <nav className="c2s-navbar">

                <Link to="/">
                    <span>⌂</span> HOME
                </Link>

                <a href="#about">
                    ⓘ ABOUT
                </a>

                <a href="#resources">
                    ▣ RESOURCES
                </a>

                <Link to="/chipin-centre">
                    ⚙ ChipIN CENTRE
                </Link>

                <a href="#internships">
                    ♟ INTERNSHIPS
                </a>

                <a href="#call">
                    ▣ CALL FOR PROPOSAL
                </a>

                <a href="#hackathons">
                    ▣ HACKATHONS
                </a>

                <a href="#challenge">
                    🏆 GRAND CHALLENGE
                </a>

                <button className="login-button">
                    LOGIN
                </button>

            </nav>

        </header>
    );
}

export default C2SHeader;