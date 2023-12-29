import axios from 'axios';
import React, {useState} from 'react';




function PokemonSingleItem(props) {
  function getPokemon(){
    axios.get(props.url).then((response) => {
      props.setPokemon({
      name: response.data.name, 
      species: response.data.species.name, 
      img: response.data.sprites.front_default,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defence: response.data.stats[2].base_stat,
      imgFrontDefault: response.data.sprites.other.dream_world.front_default,
      })
      console.log("POKEMON!!! EN SINGLE PAGE",props.thePokemon)
    })
  }     
  console.log("PROPS EN SINGLE ITEM ===>",props)
  return (
    <>
        {getPokemon(props.url)}
        {/* <div>PokemonSingleItem</div> */}
        NN{props.pokemon.name}NN
    </>
  )
}
export default PokemonSingleItem