import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="home-page">
    <div className="hero-content">
        <span className="hero-eyebrow">
            🎬 Film & Dizi Dünyası
        </span>

        <h1>FilmHub</h1>

        <h2>Filmlerin ve dizilerin dünyasına hoş geldiniz.</h2>

        <p>
            Sevdiğiniz filmleri ve dizileri keşfedin,
            favorilerinize ekleyin ve yeni yapımlar bulun.
        </p>

        <div className="home-buttons">
            <Link to="/movies" className="primary-button">
                Filmleri Keşfet
            </Link>

            <Link to="/series" className="secondary-button">
                Dizileri Keşfet
            </Link>
        </div>
    </div>
</div>
);
}

export default Home;
