import React, { useState, useEffect } from "react";
import axios from "axios";
import MainBar from "../../components/mainBar/MainBar";
import Footer from "../../components/footer/Footer";
import SearchMoviesForm from "../../components/search-movies-form";


function SearchMovies() {
    
    const API_KEY = '70a6e4e5'
    const [results, setResults] = useState("");
    const [value, setValue] = useState("");

    function handleResults(e){
        alert("VIVA PERON");

    }


    return(
        <>
        <MainBar />
        <div className="main-container">
            <header className="header search-movies-header">
            <div className="container">
                <h1>Search Form</h1>
            </div>
            </header>
            <section className="search-movies">
                <div className="container">
                    <SearchMoviesForm onResults={handleResults} API_KEY results setResults value setValue/>
                </div>
            </section>            
        </div>
        <Footer />
        </>
    )
}
export default SearchMovies;