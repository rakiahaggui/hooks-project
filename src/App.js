import React from "react";
import { useState } from "react";
import { moviesDs } from "./components/MoviesDs";
import MovieList from "./components/MovieList";
import "./styles.css";
import AddMovies from "./components/AddMovies";
import SearchMovie from "./components/SearchMovie";   
import Description from "./components/Description";
import { BrowserRouter as Router, Switch, Route,link } from 'react-router-dom';

export default function App() {
  const [moviesList, setMoviesList] = useState(moviesDs);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <Router>
      
      <link to="" exact path= "/">
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
      </link>
      <Switch>
      <Route path="/movies/:id" component={Description} />
    </Switch>
    </div>
        </Router>
  );
}
