import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getShows } from "../services/tvmaze"; 

function Series() {
    const [shows, setShows] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    const [search, setSearch] = useState(""); 
    const [searchQuery, setSearchQuery] = useState(""); 
    const [searchLoading, setSearchLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        if(search.trim() === "") {
            getShows() 
                .then((data) => {
                    setShows(data); 
                });

            setSearchQuery(""); 
            setSearchLoading(false); 
            setHasSearched(false);

            return;
        }

        setSearchLoading(true); 
        setSearchQuery(search); 
        setHasSearched(true);
    };

    useEffect(() => {
        getShows()
            .then((data) => {
                setShows(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    useEffect(() => {
        if(searchQuery.trim() === "") {
            return;
        }

        fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Diziler alınırken bir hata oluştu.");
                }
                return response.json();
            })
            .then((data) => {
                const results = data.map((item) => item.show); 
                setShows(results);
            })
            .catch((error) => {
                setError(error.message); 
            })
            .finally(() => {
                setSearchLoading(false);
            });
    }, [searchQuery]); 

    if (loading) {
        return <h1>Diziler yükleniyor...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className="series-page">
            <h1>Diziler</h1>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Dizi Ara..."
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />

                <button onClick={handleSearch}>
                    Ara
                </button>
            </div>

            {searchLoading && <p>Diziler aranıyor...</p>}

            {!searchLoading && hasSearched && shows.length === 0 ? (
                <p>Dizi bulunamadı.</p>
            ) : (
                <div className="series-grid">
                    {shows.map((show) => (
                    <Link
                        to={`/series/${show.id}`}
                        className="series-card"
                        key={show.id}
                    >
                        {show.image && ( 
                            <img
                                src={show.image.medium}
                                alt={show.name}
                            />
                        )}

                        <h2>{show.name}</h2> 

                        <p>
                            ⭐ {show.rating.average || "Puan yok"}
                        </p>
                    </Link>
                ))}
            </div>
        )}

        </div>
    );
}

export default Series;
