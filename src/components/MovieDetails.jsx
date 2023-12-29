import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '6275ff62c216e0d575843f8efbbe5c76';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovieDetails(null);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    title,
    vote_average,
    overview,
    genres,
    release_date,
    runtime,
    poster_path,
  } = movieDetails;

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <h2>{title}</h2>
      <img src={posterUrl} alt={`${title} Poster`} />
      <p>User Score: {vote_average * 10}%</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
      <p>Release Date: {release_date}</p>
      <p>Runtime: {runtime} minutes</p>

      <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
      <br />
      <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
    </div>
  );
};

export default MovieDetails;
