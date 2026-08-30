import MovieCard from "../components/MovieCard";
import movies from "../data/movies";

function Movies() {
    return (
        <div className="movies-page">
            <h1>Filmler</h1>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;
