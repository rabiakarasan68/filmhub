import { Link } from "react-router-dom";
import FavoriteCard from "../components/FavoriteCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
    const {favorites} = useFavorites(); 
    return (
        <div className="movies-page">
            <h1>Favoriler</h1>

            {favorites.length === 0 ? (
                <div>
                    <p>Henüz favori film eklemediniz.</p>

                    <Link to="/series">
                        Dizileri Keşfet
                    </Link>
                </div>
            ) : (
                <div className="movie-grid">
                    {favorites.map((item) => (
                        <FavoriteCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
