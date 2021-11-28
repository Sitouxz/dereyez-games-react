import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Header />
            <div className="container text-light">
                <h1>Dereyez Games</h1>
                <h3>
                    Simple game list website made with ReactJS
                </h3>
                <br/>
                <p>Nama: Ombuh, Yehezkiel Owen</p>
                <p>NIM: 105022010018</p>
                <p>Prodi: Teknik Informatika</p>
            </div>
            <Footer />
        </>
    );
};

export default About;
