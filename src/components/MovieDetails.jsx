import React, { useEffect, useState } from 'react';
import { Route, Link, Switch, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(async () => {
    try {
      const detailsResponse = await fetch(
        `/movies/get-movie-details?movie_id=${movieId}&api_key=6275ff62c216e0d575843f8efbbe5c76`
      );
      const detailsData = await detailsResponse.json();
      setMovieDetails(detailsData);

      const castResponse = await fetch(
        `/movies/${movieId}/cast?api_key=6275ff62c216e0d575843f8efbbe5c76`
      );
      const castData = await castResponse.json();
      setCast(castData.cast);

      const reviewsResponse = await fetch(
        `/movies/${movieId}/reviews?api_key=6275ff62c216e0d575843f8efbbe5c76`
      );
      const reviewsData = await reviewsResponse.json();
      setReviews(reviewsData.results);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

        <Route path={`/movies/${movieId}/cast`}>
          <Cast cast={cast} />
        </Route>
        <Route path={`/movies/${movieId}/reviews`}>
          <Reviews reviews={reviews} />
        </Route>
    </div>
  );
};

const Cast = ({ cast }) => (
  <div>
    <h3>Cast</h3>
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  </div>
);

const Reviews = ({ reviews }) => (
  <div>
    <h3>Reviews</h3>
    <ul>
      {reviews.map(review => (
        <li key={review.id}>{review.content}</li>
      ))}
    </ul>
  </div>
);

export default MovieDetails;
