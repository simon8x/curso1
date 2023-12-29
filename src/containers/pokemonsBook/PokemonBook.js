import React, {useState, useEffect}from 'react';
import axios from 'axios';
import MainBar from '../../components/mainBar/MainBar';
import Footer from '../../components/footer/Footer';
import Pagination from '../../components/trainingComponents/pokemonPagination/Pagination';
import PokemonSinglePage from '../../components/trainingComponents/pokemonSinglePage/PokemonSinglePage';

const PokemonPage = () => {
  
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [currentItemUrl, setCurrentItemUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/")
  const [currentPokemon, setCurrentPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    imgFrontDefault:"",
  })
  const [pokemon, setThePokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    imgFrontDefault:"",
  })
    
    
    // function getPokemon(pokemonUrl) {
      // let pokemon
      // axios.get(pokemonUrl).then(res => {
      //   res.data.results.map(pokemon => pokemon)
      // })
    //   console.log("hola, desde get pokemon, no comment")
    // }
    useEffect(() => {
      let cancel
      //setLoading(true)
      axios.get(currentPageUrl,{
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        //setLoading(false)
        setNextPageUrl(res.data.next)
        setPreviousPageUrl(res.data.previous)
        setPokemons(res.data.results.map(p => p))
      })
      console.log("desde pokempons map",pokemons)
      return() => cancel() 
    },[currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPreviousPage() {
        setCurrentPageUrl(previousPageUrl)
    }

    
      
      // .then((response)=>{
      //   setCurrentPokemon({
      //     name: response.data.name, 
      //     species: response.data.species.name, 
      //     img: response.data.sprites.front_default,
      //     hp: response.data.stats[0].base_stat,
      //     attack: response.data.stats[1].base_stat,
      //     defence: response.data.stats[2].base_stat,
      //     imgFrontDefault: response.data.sprites.other.dream_world.front_default,
      //   })
        //setLoadingPokemon(false)
        // console.log("item  ====>",currentPokemon)
      //  console.log("desde get pokemon", )
      

  return (
    <>
    <MainBar />
    <div className="main-container">
        <div className="container">
          <div>Pokemon Page</div>
          <div className='pokedex_nav-wrapper'>
              <Pagination 
                gotoNextPage={gotoNextPage}
                gotoPreviousPage={gotoPreviousPage}
                previousPageUrl={previousPageUrl}
                nextPageUrl={nextPageUrl}
              />
              <PokemonSinglePage
                pokemons={pokemons}
                pokemon={pokemon}
                setThePokemon={setThePokemon}
              //setCurrentItemUrl={setCurrentItemUrl}
              //currentPokemon={currentPokemon}
              //getPokemon={getPokemon}
              //updateUrl={updateUrl}
              />
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
export default PokemonPage