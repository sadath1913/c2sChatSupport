import C2SHeader from "../components/home/C2SHeader";
import C2SHero from "../components/home/C2SHero";
import C2SSections from "../components/home/C2SSections";

import "../styles/c2s-home.css";


function Home() {

    return (

        <div className="c2s-home">

            <C2SHeader />

            <C2SHero />

            <C2SSections />

        </div>

    );

}

export default Home;