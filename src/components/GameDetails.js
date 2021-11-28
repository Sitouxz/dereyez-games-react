import React from "react";
import { Link } from "react-router-dom";

const GameDetails = (props) => {
    // console.log(props);
    return (
        <div className="container text-light fw-lighter">
            <Link className="text-decoration-none text-light" to="/">Back</Link>
            <h1>{props.game.title}
            </h1>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <div className="mb-3">
                        <img
                            src={props.game.screenshots[0].image}
                            className="img-fluid w-100"
                            alt={props.game.screenshots[1].image}
                        />
                    </div>
                    <div className="fs-4">
                        <p>{props.game.description}</p>
                        <p>
                            <h4> Minimum system requirements </h4>
                            <ul>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        os:
                                    </span>
                                    {props.game.minimum_system_requirements.os}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        processor:
                                    </span>
                                    {props.game.minimum_system_requirements.processor}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        memory:
                                    </span>
                                    {props.game.minimum_system_requirements.memory}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        graphics:
                                    </span>
                                    {props.game.minimum_system_requirements.graphics}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        storage:
                                    </span>
                                    {props.game.minimum_system_requirements.storage}
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img
                        src={props.game.thumbnail}
                        className="img-fluid d-none d-lg-block mb-3"
                        alt=""
                    />
                    <div className="fs-">
                        <h6>Short description:</h6>
                        <p>{props.game.short_description}</p>
                        <span>platform</span>
                        <h5>{props.game.platform}</h5>
                        <p>genre: {props.game.genre}</p>
                        <p>publisher: {props.game.publisher}</p>
                        <p>developer: {props.game.developer}</p>
                        <p>release date: {props.game.release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
