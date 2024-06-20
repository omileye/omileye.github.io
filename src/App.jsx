// src/App.jsx

import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';


const App = () => {
  return (
    <div className="App">
      <h1>Movie Explorer</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;
