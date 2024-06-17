// src/components/MovieDetails.js

import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <ul>
        <li>Director: {movie.Director}</li>
        <li>Actors: {movie.Actors}</li>
        <li>Released: {movie.Released}</li>
        <li>Genre: {movie.Genre}</li>
        <li>IMDB Rating: {movie.imdbRating}</li>
      </ul>
    </div>
  );
};

export default MovieDetails;
