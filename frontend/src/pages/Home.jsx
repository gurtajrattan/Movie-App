import MovieCard from "../components/movieCard"
import {useState} from "react";


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_data: "2020"},
        {id: 2, title: "Incredibles", release_data: "2008"},
        {id: 3, title: "The Matrix", release_data: "1990"},
        {id: 3, title: "Rio", release_data: "2011"}
   
    ];

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e => setSearchQuery(e.target.value))} 
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>

    </div>
        
}

export default Home