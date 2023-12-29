import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContex"

export const PokemonProvider = ({childern}) => {

    const[allPokemons, setAllPokemons] = useState([])
    const[globalPokemons, setGlobalPokemons] = useState([])
    const[offset, setOffset] = useState(0);

    //estados globales
    const[loading, setLoading] = useState(true); 
    const[active, setActive] = useState(false); 


    //llamar 50 pokemones
    const getAllPokemons = async(limit = 50) => {
        const baseURL = "https://pokeapi.co/api/v2/"

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        console.log(data)

        const promise = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data
        })
        const results = await Promise.all(promise)
        setAllPokemons(results)
        setLoading(false)
        console.log("RESULTOSSSSSSSSSS => ",results)
    }
    //llamar todos los pokemones
    const getGlobalPokemons = async() => {
        const baseURL = "https://pokeapi.co/api/v2/"

        const res = await fetch(`${baseURL}pokemon?limit=10000&offset=0`)
        const data = await res.json();
        console.log(data)

        const promise = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json();
            return data
        })
        const results = await Promise.all(promise)
        setGlobalPokemons(results)
        setLoading(false)
        console.log("GLOBALSSSSSS => ",results)
    }

    //llamar un pokemon por id
    const getPokemonByID = async(id) => {
        const baseURL = "https://pokeapi.co/api/v2/"

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json();
        return data
    }

    useEffect(() => {
        getAllPokemons()
    },[])

    useEffect(() => {
        getGlobalPokemons()
    },[])

    return (
        <>
        <PokemonContext.Provider value={{
            numero:0
        }}>
            {childern}
        </PokemonContext.Provider>
        <h1>VIVA PERON</h1>
        </>
    )
}
