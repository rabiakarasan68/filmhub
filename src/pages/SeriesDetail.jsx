import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFavorites} from "../context/FavoritesContext";

function SeriesDetail() {
    const {id} = useParams(); 
    const {favorites, addFavorite, removeFavorite, isFavorite} = useFavorites();

    const [show, setShow] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    const [episodes, setEpisodes] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState(1); 

    useEffect(() => { 
        fetch(`https://api.tvmaze.com/shows/${id}`) 
            .then((response) => { 
                if(!response.ok) {
                    throw new Error("Dizi bulunamadı."); 
                }

                return response.json(); 
            })
            .then((data) => {
                setShow(data); 
            })
            .catch((error) => {
                setError(error.message); 
            })
            .finally(() => {
                setLoading(false); 
            });

            fetch(`https://api.tvmaze.com/shows/${id}/episodes`) 
                .then((response) => response.json())
                .then((data) => {
                    setEpisodes(data);
                });
    }, [id]); 

    if(loading) {
        return <h1>Dizi yükleniyor...</h1>; 
    }
    if(error) {
        return <h1>{error}</h1> 
    }

    const favorite = isFavorite(show.id);

    const seasons = [...new Set( 
        episodes.map((episode) => episode.season) 
    )];

    return ( 
        <div className="series-detail" style={{"--series-background":`url(${show.image?.original})`}}>
            <div className="series-detail-main">
                <div className="series-poster">
                    {show.image && ( 
                        <img 
                            src={show.image.original} 
                            alt={show.name}
                        />
                    )}
                </div>

                <div className="series-info">
                    <h1>{show.name}</h1>

                    <div className="series-rating">
                        ⭐ {show.rating.average || "Puan yok"} 
                    </div>

                    <p>
                        <strong>Tür:</strong>{" "}
                        {show.genres.join(", ")}
                    </p>

                    <p>
                        <strong>Dil:</strong>{" "}
                        {show.language || "Bilinmiyor"} 
                    </p>

                    <div className="series-summary"
                    dangerouslySetInnerHTML={{ 
                        __html: show.summary 
                    }}
                    />

                    <button
                        className="favorite-button"
                        onClick={() => {
                            if(favorite) {
                                removeFavorite(show.id);
                            }else {
                                addFavorite(show);
                            }
                        }}
                    >
                        {favorite ? "💔 Favorilerden Çıkar" : "❤️ Favorilere Ekle"}
                    </button>
                </div>
            </div>

            <section className="seasons-section">
                <h2>Sezonlar</h2>

                <div className="season-buttons">
                    {seasons.map((season) => (
                        <button
                            key={season}
                            className={selectedSeason === season ? "active-season" : ""} 
                            onClick={() => setSelectedSeason(season)}
                        >
                            Sezon {season}
                        </button>
                    ))}
                </div>
                
            </section>

            <section className="episodes-section">

                <h2>Sezon {selectedSeason} Bölümleri</h2>

            <div className="episodes">
                {episodes
                    .filter((episode) => episode.season === selectedSeason)
                    .map((episode) => (
                        <div
                            className="episode-card"
                            key={episode.id}
                        >

                            {episode.image && (
                                <img
                                    src={episode.image.medium}
                                    alt={episode.name}
                                />
                            )}

                            <div className="episode-info">

                                <h3>
                                    S{episode.season} E {episode.number}
                                </h3>

                                <h4>{episode.name}</h4>

                                <p>
                                    Yayın tarihi:{" "}
                                    {episode.airdate || "Bilinmiyor"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>

            <Link to="/series"> 
                ← Dizilere Dön
            </Link>
            </div>
    );
}

export default SeriesDetail; 
