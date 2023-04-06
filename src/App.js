import React, { useState } from 'react';
import './App.css';
// MovieCard component to display a single movie
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

// MovieList component to display a list of movies
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

// Filter component to filter movies by title and rating
const Filter = ({ filterTitle, filterRating, onFilterTitleChange, onFilterRatingChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter by title" value={filterTitle} onChange={onFilterTitleChange} />
      <input type="number" placeholder="Filter by rating" value={filterRating} onChange={onFilterRatingChange} />
    </div>
  );
};
// Main component to manage state and render the app
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: ' Furtive',
      description: 'Furtive is a film, set in a natural park in the province of Buenos Aires, Argentina, which, starting from the themes of corruption, impunity and traffickers, passing through the wild territory of the city, touches and confronts the interior and the conflictual part of the human being.',
      posterURL:'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRvHEWtNwyUMYqVoyOmFFkf2ULSpGh8gzc-22Mc_AojPfZ09STI6dNfRaESLIuf_lfdMxTkHJM_EvaBo1PH2kt_XIJ52iopzOFpvICbni8VY7dqTLKuDxnihusul3Ko-Akpgbg.jpg?r=5a5',
      rating:9.3,
         },
      {   
      title:'The Gray Man',
      description: 'When an enigmatic CIA spy discovers dark secrets, he finds himself hunted around the world by a sociopathic agent who has put a price on his head.',
      posterURL :'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRFkBbCyYTjYdaxwujcZCW2DaiYYwZ7xhiQVMiwYQ8JugYMj1GBad-WoJM-IoASY7RQJWzozlm9wfPT04c10Tq819Zp9NdqhUTvwoSePnA5TbfFSUXagzGDVnIIuClxRnYEjNw.jpg?r=fb8',
      rating:9.2,
    },
{  
    title: 'BAC NORD ',
    description: 'The northern districts of Marseille hold a sad record: the area with the highest crime rate in France. Driven by its hierarchy, the BAC Nord, a field brigade, constantly seeks to improve its results.',
    posterURL:'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSci_4RH14FxueVzhOSqOCPKoFCE6KPhUp2hGhj2I5UWyA5RXQvv9HAJHQfzZof_2kOd-nxI52pxceL686vlyPIUpzPuVXkJkYdS.jpg?r=522',
    rating: 9.1,
},
      {
      title: 'TROLL',
      description: 'it follows a ragtag group of people who must come together to stop an ancient troll that was awakened in a Norwegian mountain and prevent it from wreaking havoc ',
      posterURL: 'https://occ-0-4609-1740.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfHdHP8aOH1gAg3PT96wXJSUHMZGzmxlllRmUlJ8DD5aRb6I6jHLs5T22hCZMSHpH1DmGAnfkiezwCTajAHX-xw91tUs0sMYSuhKP7tgSw21zfehpLjlq54LlbIEX_Aad4mRmg.jpg?r=87c',
      rating: 9.0,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleFilterTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleFilterRatingChange = (event) => {
    setFilterRating(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
  movie.rating >= filterRating
);
  
  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter filterTitle={filterTitle} filterRating={filterRating} onFilterTitleChange={handleFilterTitleChange} onFilterRatingChange={handleFilterRatingChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};
      export default App;
