import { createContext, useContext, useEffect, useState } from "react";
import movies from "../data/movies";

const FavoritesContext = createContext(); 

export function FavoritesProvider({children}) { 
    const [favorites, setFavorites] = useState(() => { 
        const savedFavorites = localStorage.getItem("favorites"); 

        return savedFavorites ? JSON.parse(savedFavorites) : []; 
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites)); 
    }, [favorites]);

    const addFavorite = (item) => {
        setFavorites((prevFavorites) => { 
            if(prevFavorites.some((favorite) => favorite.id === item.id)) { 
                return prevFavorites; 
            } 
            return [...prevFavorites, item]; 
        });
    };

    const removeFavorite = (itemId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((item) => item.id !== itemId) 
        ); 
    };

    const isFavorite = (itemId) => { 
        return favorites.some((item) => item.id === itemId);
    };

    return (
        <FavoritesContext.Provider 
            value={{
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
