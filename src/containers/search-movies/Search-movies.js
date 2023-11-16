import React, { useState } from "react";
import MainBar from "../../components/mainBar/MainBar";
import Footer from "../../components/footer/Footer";

const API_KEY = '70a6e4e5'

function SearchMovies() {
    const [value, setValue] = useState("");
    
    function handleChange(e) {
        const { value } = e.target;
        setValue(value);
        console.log("contenido ==========> ",value)
    }

    function handleSubmitSearch(e) {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
            })
    }
    //http://www.omdbapi.com/?i=tt3896198&apikey=70a6e4e5
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
                    <div className="search-movies-wrapper">
                        <form onSubmit={e => handleSubmitSearch(e)} >
                            <input
                                className="search-movies__input" 
                                type="text"
                                placeholder="type a movie name"
                                onChange={e => handleChange(e)}
                                />                                
                            <button className="search-movies__submit">
                                find
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
        </div>
        <Footer />
        </>
    )
}
export default SearchMovies;