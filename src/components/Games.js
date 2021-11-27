import React, { useState, useEffect } from "react";
import GamesItem from "./GamesItem";

const Games = () => {
    const [games, setGames] = useState({ featured_win: [] });

    useEffect(() => {
        fetch("https://store.steampowered.com/api/featured")
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);

    return (
        <div>
            <div className="container d-flex justify-content-center flex-wrap">
                {games.featured_win.map((game) => (
                    <GamesItem key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default Games;
