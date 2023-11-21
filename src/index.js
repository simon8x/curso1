import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/styles.scss";
import Home from './containers/home/Home';
import SearchMovies from './containers/search-movies/Search-movies';
import HolaMundo from './components/trainingComponents/HolaMundo';
import Excercises from './containers/excercises/Excercises';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movies/" element={<SearchMovies />} />
      <Route exact path="/pokemon/" element={<HolaMundo />} />
      <Route exact path="/excercises/" element={<Excercises />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
