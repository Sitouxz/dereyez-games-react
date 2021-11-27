import { Link } from "react-router-dom";

const Games = (props) => {
    return (
        <div className="card m-3">
            <img
                src={props.game.thumbnail}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body card-img-overlay text-light d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.game.title}</h5>
                <Link
                    className=" text-decoration-none text-light"
                    to={`/details/${props.game.id}`}>
                    Click for more details
                </Link>
            </div>
        </div>
    );
};

export default Games;
