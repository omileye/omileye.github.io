// src/components/SearchBar.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/movieSlice';

const SearchBar = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (title.trim()) {
      dispatch(fetchMovies(title));
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
