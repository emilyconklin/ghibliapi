import React, { useEffect, useState } from 'react';
import Movie from "./Movie";
import Header from "./Header";
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([]);
 
useEffect(() => {
  getMovies();
}, []);

const getMovies = async () => {
const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
const data = await response.json();
setMovies(data);
}

  return (
    <div className="App">
    <Header />
    
      <div className="films">
      {movies.map(film => (
        <Movie title={film.title} 
        director={film.director} 
        desc={film.description}
        reldate={film.release_date}/>
      ))}</div>
    </div>
  );
}

export default App;


