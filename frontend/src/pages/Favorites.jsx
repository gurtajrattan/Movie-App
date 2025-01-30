import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/movieCard"

function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites) {
        return (
            <div className="favorites">
                <h2>Your Favourites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
                </div>
            </div>
        );
    }

    return <div className="favourites-empty ">
        <h2>No favourites movie yet</h2>
        <p>start adding movies to your favoutires</p>
    </div>
}


export default Favorites