import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="logo">
                FilmHub
            </NavLink>

            <div className="nav-links">
                <NavLink to="/">Ana Sayfa</NavLink>
                <NavLink to="/movies">Filmler</NavLink>
                <NavLink to="/series">Diziler</NavLink>
                <NavLink to="/favorites">Favoriler</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
