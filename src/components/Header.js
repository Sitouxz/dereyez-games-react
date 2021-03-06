import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/dereyez-games-small.png'

const Header = () => {
    return (
        <header className="m-3 bg-my-primary px-md-5 mx-lg-5">
            <nav
                className="
                    container-fluid
                    navbar navbar-expand-md navbar-dark
                    border-top border-bottom border-primary
                "
                aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample04"
                        aria-controls="navbarsExample04"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-0 mb-md-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <form>
                            <ul
                                className="
                                    navbar-nav
                                    me-auto
                                    mb-0 mb-md-0
                                    d-none d-md-flex
                                    flex-row
                                ">
                                <li className="nav-item">
                                    <a
                                        href="https://www.facebook.com/YehezkielOO"
                                        className="nav-link">
                                        <i className="fa-brands fa-facebook fs-3"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://github.com/Sitouxz"
                                        className="nav-link">
                                        <i className="fa-brands fa-github fs-3"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.instagram.com/sitouxz/"
                                        className="nav-link">
                                        <i className="fa-brands fa-instagram fs-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
