// src/components/MovieCard.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/movieSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={handleAddFavorite}>Add to Favorites</button>
    </div>
  );
};

export default MovieCard;
