import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`} className="movie-card">
            <img src={movie.image} alt={movie.title} />

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <p>⭐ {movie.rating}</p>
            </div>
        </Link>
    );
}

export default MovieCard;
