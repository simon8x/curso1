import { render } from "@testing-library/react";
import axios from "axios";
import React, {useState} from "react";
import MainBar from "../mainBar/MainBar";
import Footer from "../footer/Footer";

function HolaMundo(){
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defence: "",
        //type: "",
    });

    const searchPokemon = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
                //console.log(response);
                setPokemon({
                    name: pokemonName, 
                    species: response.data.species.name, 
                    img: response.data.sprites.front_default,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defence: response.data.stats[2].base_stat,
                    //type: response.data.type[0].type.name,
                })
                console.log(pokemon)
                setPokemonChosen(true)
            }
        );
        
    }
    return(
        <>  
            <MainBar/>
            <div className="holamundo-wrapper">
                {/* <h1>VIVA PERON</h1> */}
                <section className="input-section">
                    <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
                    <button onClick={searchPokemon}></button>
                </section>
                <section className="display-section">
                    {!pokemonChosen ? (
                        <h1>chose a pokemon</h1>
                    ):(
                        <>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.img} />
                        <p>Species: {pokemon.species}</p>
                        <p>HP: {pokemon.hp}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Defence: {pokemon.defence}</p>
                        </>
                    )
                    }
                </section>
            </div>
            <Footer/>
        </>

    )
}
export default HolaMundo;


