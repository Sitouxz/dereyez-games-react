import React from "react";

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
                    <a className="navbar-brand" href="./index.html">
                        <img src="./dereyez-games-small.png" alt="" />
                    </a>
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
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link border-end border-primary"
                                    href="./about.html">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <form className="input-group mb-0">
                                    <button className="btn">
                                        <i className="bi bi-search text-light"></i>
                                    </button>
                                    <input
                                        className="form-control search text-light"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </form>
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
