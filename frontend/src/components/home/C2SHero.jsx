import modi from "../../assets/modi.png";

function C2SHero() {

    return (

        <section className="c2s-hero" id="home">

            {/* ANIMATED CIRCUIT BACKGROUND */}

            <div className="circuit-background">

                {/* Moving grid */}
                <div className="circuit-grid"></div>

                {/* Circuit paths */}
                <div className="circuit-path path-1">
                    <span className="signal signal-1"></span>
                </div>

                <div className="circuit-path path-2">
                    <span className="signal signal-2"></span>
                </div>

                <div className="circuit-path path-3">
                    <span className="signal signal-3"></span>
                </div>

                <div className="circuit-path path-4">
                    <span className="signal signal-4"></span>
                </div>

                <div className="circuit-path path-5">
                    <span className="signal signal-5"></span>
                </div>

                <div className="circuit-path path-6">
                    <span className="signal signal-6"></span>
                </div>


                {/* Existing circuit lines */}

                <span className="circuit-line line-1"></span>
                <span className="circuit-line line-2"></span>
                <span className="circuit-line line-3"></span>
                <span className="circuit-line line-4"></span>
                <span className="circuit-line line-5"></span>


                {/* Glowing circuit nodes */}

                <span className="circuit-node node-1"></span>
                <span className="circuit-node node-2"></span>
                <span className="circuit-node node-3"></span>
                <span className="circuit-node node-4"></span>
                <span className="circuit-node node-5"></span>
                <span className="circuit-node node-6"></span>

                <span className="circuit-node node-7"></span>
                <span className="circuit-node node-8"></span>
                <span className="circuit-node node-9"></span>
                <span className="circuit-node node-10"></span>


                {/* Floating particles */}

                <span className="tech-particle particle-1"></span>
                <span className="tech-particle particle-2"></span>
                <span className="tech-particle particle-3"></span>
                <span className="tech-particle particle-4"></span>
                <span className="tech-particle particle-5"></span>
                <span className="tech-particle particle-6"></span>
                <span className="tech-particle particle-7"></span>
                <span className="tech-particle particle-8"></span>

            </div>


            <div className="hero-content">

                {/* LEFT TEXT */}

                <div className="hero-text">

                    <h1>
                        Fostering Next Generation Capabilities Among
                        <span> Chip Designers </span>
                        For Making India Self-Reliant
                        In Electronics System Design
                    </h1>

                </div>


                {/* MODI IMAGE */}

                <div className="hero-image">

                    <img
                        src={modi}
                        alt="Prime Minister"
                    />

                </div>

            </div>

        </section>

    );

}

export default C2SHero;