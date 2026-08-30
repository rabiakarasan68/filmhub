import {Link} from "react-router-dom";

function FavoriteCard({item}) {
    const isSeries = item.name !== undefined;

    return (
        <Link
            to={isSeries ? `/series/${item.id}` : `/movies/${item.id}`}
            className="movie-card"
        >
            <img
                src={isSeries ? item.image?.medium : item.image}
                alt={isSeries ? item.name : item.title}
            />

            <div className="movie-info">
                <h3>
                    {isSeries ? item.name : item.title}
                </h3>

                <p>
                    ⭐ {" "}
                    {isSeries
                        ? item.rating?.average || "Puan yok"
                        : item.rating || "Puan yok"}
                </p>
            </div>
        </Link>
    );
}

export default FavoriteCard;
