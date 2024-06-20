// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;


