import React from "react";
import logo from "../assets/dereyez-games-large.png";

const Carousel = () => {
    return (
        <div className="py-5 bg-custom">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="text-center text-white">
                    <img src={logo} class="img-fluid logo-img" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
