import React from "react";
import NavbarHorizontal from "../layouts/navbarHorizontal";
import InfoPanel from "../components/infoPanel.tsx";
import Footer from "../layouts/footer.tsx";

const Home = () => {
    return (
        <section>
            <NavbarHorizontal />
            <InfoPanel />
            <Footer />
        </section>
    );
};

export default Home;