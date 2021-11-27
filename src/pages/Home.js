import React from "react";
import Header from "../components/Header";
import Headline from "../components/Headline";
import Games from "../components/Games";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Headline />
            <Header />
            <Games />
            <Footer />
        </>
    );
};

export default Home;
