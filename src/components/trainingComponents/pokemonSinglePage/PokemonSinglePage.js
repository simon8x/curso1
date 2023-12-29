import React, {useState, useEffect} from 'react'
import PokemonSingleItem from '../pokemonSingleItem/PokemonSingleItem';
import axios from 'axios';
//import PokemonItem from '../pokemonItem/PokemonItem';
// import { useEffect } from 'react';
//console.log(">>>>>>>>>>>>",pokemons)


const PokemonSinglePage = (props) =>{

  // function getPokemon(){
  //   axios.get(props.url).then((response) => {
  //     props.setThePokemon({
  //     name: response.data.name, 
  //     species: response.data.species.name, 
  //     img: response.data.sprites.front_default,
  //     hp: response.data.stats[0].base_stat,
  //     attack: response.data.stats[1].base_stat,
  //     defence: response.data.stats[2].base_stat,
  //     imgFrontDefault: response.data.sprites.other.dream_world.front_default,
  //     })
  //     console.log("POKEMON!!! EN SINGLE PAGE",props.thePokemon)
  //   })
  // }
    
    

    return (
      <div className='nav-wrapper-items'>
      {props.pokemons.map((p) => (
        <button className='pokemon-trigger' key={p.name}>
        
          {/* {props.pokemon.map((pok) => (

              {{ getPokemon(p.url) }} */}
              <p>{p.name}</p>
            
          {/* )
          )} */}
        
          {p.name}
        </button>
      )
      )}
    </div>
  )
}
// <PokemonSingleItem  
  // pokemon= {props.pokemon}
  //pokemons={pokemons}
  // thePokemon={props.pokemon}
  // setPokemon={props.setPokemon}
  //setPokemon = {setPokemon}
  // url = {p.url}
// />
export default PokemonSinglePage