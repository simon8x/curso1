import React, { useState, useEffect } from "react";
import axios from "axios";
// import MainBar from "../../components/mainBar/MainBar";
// import Footer from "../../components/footer/Footer";
//import SearchMoviesForm from "../../components/movies/search-movies-form";


const SearchMovies = (props) => {
    
    // const API_KEY = '70a6e4e5'
    // const [results, setResults] = useState("");
    // const [value, setValue] = useState("");

    // function handleResults(e){
    //     alert("VIVA PERON");

    // }


    return(
        <>
        {/* <MainBar /> */}
        <div className="search-movie-wrapper">
            <form className="movies-search-form" onSubmit={props.searchMovies}>
                <input type='text' placeholder='search' onChange={(e)=> props.setSearchKey(e.target.value)} />
                <button>search</button>
            </form>
        </div>
        
        {/* <Footer /> */}
        </>
    )
}
export default SearchMovies;