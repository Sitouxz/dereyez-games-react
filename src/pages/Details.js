import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GameDetails from "../components/GameDetails";

const Details = () => {
    const [game, setGame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${gameId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(game);
                setGame(data);
            });

        // eslint-disable-next-line
    }, []);
    console.log(game);
    return (
        <>
            <Header />
            <GameDetails game={game} />
            <Footer />
        </>
    );
};

export default Details;
