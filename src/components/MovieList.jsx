// src/components/MovieList.js

import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
