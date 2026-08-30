import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";
import { useFavorites } from "../context/FavoritesContext";

function MovieDetail() {
    const { id } = useParams();
  
    const movie = movies.find((movie) => movie.id === Number(id));

    const {
        addFavorite,
        removeFavorite,
        isFavorite
    } = useFavorites();

    if(!movie) {
        return (
            <div>
                <h1>Film bulunamadı.</h1>
                <Link to="/movies">← Filmlere Dön</Link>
            </div>
        );
    }

    const favorite = isFavorite(movie.id);

    const handleFavorite = () => {
        if(favorite) {
            removeFavorite(movie.id);
        }else {
            addFavorite(movie);
        }
    };

    return (
        <div className="movie-detail">
            <img src={movie.image} alt={movie.title} />

            <div>
                <h1>{movie.title}</h1>
                <p>Yıl: {movie.year}</p>
                <p>⭐ {movie.rating}</p>
                <p>{movie.description}</p>

                <button onClick={handleFavorite}>
                    {favorite
                        ? "💔 Favorilerden Çıkar"
                        : "❤️ Favorilere Ekle"}
                </button>

                <br />

                <Link to="/movies">← Filmlere Dön</Link>
            </div>
        </div>
    );
}

export default MovieDetail;
