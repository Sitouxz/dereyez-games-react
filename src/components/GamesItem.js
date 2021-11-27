const Games = (props) => {
    let imageUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${JSON.stringify(
        props.game.id
    )}/capsule_616x353.jpg`;

    return (
        <div className="card m-3">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body card-img-overlay text-light d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.game.name}</h5>
                <h6 className="card-title">Click for more details</h6>
            </div>
        </div>
    );
};

export default Games;
