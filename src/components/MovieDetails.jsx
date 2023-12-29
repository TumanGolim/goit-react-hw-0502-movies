
import React, { useState, useEffect } from 'react';
import { getMovieDetails } from './api'; 

function MovieDetails({ match }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(match.params.movieId);
      setMovieDetails(details);
    };

    fetchMovieDetails();
  }, [match.params.movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
