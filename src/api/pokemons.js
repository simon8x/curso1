import axios from "axios";

export const getPokemons = setPokemonId => {
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + setPokemonId);
};


