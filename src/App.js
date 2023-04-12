import React from "react";
import { useState } from "react";
import { moviesDs } from "./components/MoviesDs";
import MovieList from "./components/MovieList";
import "./styles.css";
import AddMovies from "./components/AddMovies";
import SearchMovie from "./components/SearchMovie";

export default function App() {
  const [moviesList, setMoviesList] = useState(moviesDs);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="wrapper">
      <SearchMovie
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
      />
      <MovieList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <AddMovies addNewMovie={addNewMovie} />
    </div>
  );
}
