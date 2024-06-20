// src/redux/movieSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// tRY CATCH uSAGE, 
// Replace with your actual OMDB API key
const API_KEY = '9c5a3701';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (title) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
    return response.data.Search;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: [],
    status: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;


