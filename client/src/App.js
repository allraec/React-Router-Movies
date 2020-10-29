import React, { useState, useEffect } from 'react';
import {Route, Link} from "react-router-dom";
import axios from 'axios';

import MovieList from "./Movies/MovieList.js";
import Movie from "./Movies/Movie.js";
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Route exact path='/' render={() => (
        <MovieList movies={movieList} />
      )}>
      </Route>
      <Route path='/movies/:id' component={Movie}></Route>
    </div>
  );
}
