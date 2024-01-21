import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const API_KEY = '6275ff62c216e0d575843f8efbbe5c76';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState('');

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

  const fetchMovieCast = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      setCast(response.data.cast);
      setActiveTab('cast');
    } catch (error) {
      console.error('Error fetching movie cast:', error);
      setCast([]);
    }
  };

  const fetchMovieReviews = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      setReviews(response.data.results);
      setActiveTab('reviews');
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
      setReviews([]);
    }
  };

  const goBack = () => {
    const previousPath = localStorage.getItem('previousPath') || '/';

    // Удаляем информацию о запросе из URL
    const newPreviousPath = previousPath.replace(/\?query=.*/, '');

    localStorage.setItem('previousPath', newPreviousPath);

    // Проверяем, с какой страницы был выполнен предыдущий переход
    const isMoviesPage = previousPath.includes('/movies');
    const isHomePage = previousPath === '/' || previousPath === '/movies';

    if (isMoviesPage) {
      navigate(newPreviousPath, { replace: true });
    } else if (isHomePage) {
      navigate(-1); // Возврат на предыдущую страницу в истории
    } else {
      navigate('/');
    }
  };

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
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : null;

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <button onClick={goBack}>Go back</button>
      <h2>{title}</h2>
      {posterUrl && <img src={posterUrl} alt={`${title} Poster`} />}
      <p>User Score: {vote_average * 10}%</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
      <p>Release Date: {release_date}</p>
      <p>Runtime: {runtime} minutes</p>
      <h3>Additional information</h3>
      <Link to="cast" onClick={fetchMovieCast}>
        Cast
      </Link>
      <Link to="reviews" onClick={fetchMovieReviews}>
        Reviews
      </Link>
      {activeTab === 'cast' && (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'reviews' && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
