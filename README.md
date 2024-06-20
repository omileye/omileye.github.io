# Movie Explorer

Movie Explorer is a React-based web application that allows users to search for movies and view detailed information about them using the OMDB API.

## Features

- Search for movies by title
- View detailed information about movies
- Add movies to favorites

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Redux Toolkit
- Axios
- OMDB API

The application will bereducing Redux for state management. The main features include:

User Registration: Allows new users to register by providing a username, email, and password.
User Login: Allows existing users to login and receive a JWT token for authenticated requests.
Movie Search: Users can search for movies and view a list of results fetched from the OMDB API.
State Management: Utilizes Redux for managing application state, including user authentication and movie data.

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/omileye/SBA-320ReactProject.git


movie-explorer/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieDetails.js
│   │   ├── MovieList.js
│   │   └── SearchBar.js
│   ├── redux/
│   │   ├── store.js
│   │   └── movieSlice.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
└── README.md





