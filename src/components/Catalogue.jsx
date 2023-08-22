// Catalogue.js

import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Catalogue = () => {
    const [apiData, setApiData] = useState([])

    
    useEffect(() => {
        
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: import.meta.env.VITE_API_KEY, 
                // import.meta.env.VITE_API_KEY,
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                region: 'us',
                page: 1,
                primary_release_year: 1986,
            },

        })
            .then((res) => {
                const movies = res.data.results
                setApiData(movies)
            })

    }, [])

    return (
        <>
            <div className="wrapper">
                <header>
                    <h1>HackFlix</h1>
                </header>
                <ul className="catalogue">
                    {/* Using an implicit return: */}
                    {apiData.map((movie) => (
                        <li key={movie.id} data-key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={`Poster for ${movie.original_title}`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Catalogue;