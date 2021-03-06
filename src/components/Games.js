import React, { useState, useEffect } from "react";
import GamesItem from "./GamesItem";

const Games = () => {
    const [games, setGames] = useState([]);
    const [oriGames, setOriGames] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetch("https://api.allorigins.win/get?url=https://www.freetogame.com/api/games")
            .then((response) => response.json())
            .then((data) => {
                setGames(JSON.parse(data.contents));
                setOriGames(JSON.parse(data.contents));
            });

        // eslint-disable-next-line
    }, []);
                // console.log(games)

    const gamesJsx = games.map((game) => (
        <GamesItem key={game.id} game={game} />
    ));

    const handleSubmit = (e) => {
        e.preventDefault();

        setGames(oriGames);
        const newResults = oriGames.filter((games) =>
            games.title.toLowerCase().includes(text.toLowerCase())
        );
        setGames(newResults);

        setText("");
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <div className="container w-50">
                <h5 className="text-light text-center">Search Game</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control search border-bottom border-secondary text-light"
                        placeholder="Search game here..."
                        onChange={handleChange}
                        value={text}
                    />
                </form>
            </div>
            <div className="container d-flex justify-content-center flex-wrap">
                {gamesJsx}
            </div>
        </div>
    );
};

export default Games;
