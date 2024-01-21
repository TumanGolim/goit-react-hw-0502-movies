import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import NotFound from './NotFound'; 

const App = () => {
  return (
    <QueryParamProvider ReactRouterRoute={Route}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </QueryParamProvider>
  );
};

export default App;
