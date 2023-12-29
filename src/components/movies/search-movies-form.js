import React, { useState } from "react";

function SearchMoviesForm(props){
    
    console.log('esto es props', props)
    
    // function handleChange(e) {
    //     const { value } = e.target;
    //     setValue(value);
    //     console.log("contenido ==========> ",value)
    // }

    // function handleSubmitSearch(e) {
    //     e.preventDefault()
    //     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
    //         .then (res => res.json())
    //         .then (results => {
    //             setResults(results)
    //             props.onResults(results)
    //         })
    //     console.log(results)
    //     console.log("RESPONSE=========>>>>>>>",results.totalResults)
    // }

    return(
        <div className="search-movies-wrapper">
            <form 
            //onSubmit={e => handleSubmitSearch(e)} 
            >
                <input
                    className="search-movies__input" 
                    type="text"
                    placeholder="type a movie name"
                    //onChange={e => handleChange(e)}
                    />                                
                <button className="search-movies__submit">
                    find
                </button>
            </form>
            {/* {!results.totalResults
            ? <h1>SIN RESULTADOS</h1>
            : <h1>CON RESULTADOS ({results.totalResults})</h1>} */}
        </div>
    )
}

export default SearchMoviesForm;