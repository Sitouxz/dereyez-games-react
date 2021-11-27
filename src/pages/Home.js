import React from "react";
import Header from "../components/Header";
import Headline from "../components/Headline";
import Games from "../components/Games";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <main>
                <Headline />
                <Header />
                <div>
                    <h3 className="container text-light mt-3 text-sm-center text-xxl-start">
                        Featured Windows
                    </h3>
                    <Games />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
