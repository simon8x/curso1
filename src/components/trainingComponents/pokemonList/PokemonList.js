import React, {useEffect} from 'react'
//import PokemonItem from '../pokemonItem/PokemonItem';
// import { useEffect } from 'react';
//console.log(">>>>>>>>>>>>",pokemons)



function PokemonList({pokemons, setCurrentItemUrl, currentItem}) {
  
  return (
    <div className='nav-wrapper-items'>
      {pokemons.map(p => (
          <button
            className='pokemon-trigger' 
            onClick={event => {
              event.preventDefault();
              setCurrentItemUrl(p.url)
            }}          
            key={p.name} 
            >
              {p.name}
          </button>
      )
      )}
    </div>
  )
}
export default PokemonList