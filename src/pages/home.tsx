import React from "react";
import NavbarHorizontal from "../layouts/navbarHorizontal";
import InfoPanel from "../components/infoPanel.tsx";
import Footer from "../layouts/footer.tsx";
import TripleInfoPanel from "../components/tripleInfoPanel.tsx";
import "./home.css";

const Home = () => {
    return (
        <section>
            <NavbarHorizontal />
            <main className="home">
                <InfoPanel />
                <TripleInfoPanel />
            </main>
            <Footer />
        </section>
    );
};

export default Home;