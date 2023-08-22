// MovieDetails.js
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'


const MovieDetails = () => {

    const {movieID} = useParams();
    const [movie, setMovie] = useState({});
    const { original_title, tagline, overview, poster_path } = movie;



    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: import.meta.env.VITE_API_KEY
            },
        }).then((res) => {
            setMovie(res.data);
            
        })
    }, []);

    return (

        <>
            <div className="poster">
                <div className="description">
                    <h2>{original_title}</h2>
                    <h3>{tagline}</h3>
                    <p>{overview}</p>
                </div>
                <div className="poster-image">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={`Movie poster for ${original_title}`}
                    />
                </div>
            </div>
        </>

    );

}

export default MovieDetails;