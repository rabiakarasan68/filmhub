import { BrowserRouter, Routes, Route} from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import SeriesDetail from "./pages/SeriesDetail";

import Navbar from "./components/Navbar";

import Home from "./pages/Home"; 
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter> 
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<MovieDetail />} /> 
          <Route path="/series/:id" element={<SeriesDetail />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App; 
