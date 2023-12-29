import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/styles.scss";
import Home from './containers/home/Home';
import SearchMovies from './components/movies/MoviesSearch';
import MoviesList from './containers/moviesList/MoviesList';
import HolaMundo from './components/trainingComponents/HolaMundo';
import Excercises from './containers/excercises/Excercises';
import PokeDex from './containers/pokeDex/PokeDex';
import PokemonItem from './components/trainingComponents/pokemonItem/PokemonItem';
import PokeDexSearch from './containers/pokeDexSearch/PokeDexSearch';
import PokemonBook from './containers/pokemonsBook/PokemonBook';
import JsExcercises from './containers/jsExcercises/JsExcercises';
// import { PokemonProvider } from './context/PokemonProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
        {/* <PokemonProvider > */}
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/pokedex/" element={<PokeDex />} />
          <Route path='/pokedex/:id' element={<PokemonItem />} />
          <Route path='/pokedexsearch' element={<PokeDexSearch />} />
        <Route exact path="/movies/" element={<MoviesList />} />
        <Route exact path="/pokemon/" element={<HolaMundo />} />
        <Route exact path="/excercises/" element={<Excercises />} />
        <Route exact path="/js-excercises/" element={<JsExcercises />} />
        {/* <Route exact path="/pokemonpage/" element={<PokemonBook />} /> */}
      </Routes>
        {/* </PokemonProvider> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
