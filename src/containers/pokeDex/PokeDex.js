import React, {useState, useEffect}from 'react'
import PokemonItem from '../../components/trainingComponents/pokemonItem/PokemonItem';
import { getPokemons } from '../../api/pokemons';
import PokemonList from '../../components/trainingComponents/pokemonList/PokemonList';
import axios from 'axios';
import Pagination from '../../components/trainingComponents/pokemonPagination/Pagination';
import MainBar from '../../components/mainBar/MainBar';
import Footer from '../../components/footer/Footer';

const PokeDex = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [loadingPokemon, setLoadingPokemon] = useState(true)
  const [currentItemUrl, setCurrentItemUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/")
  const [currentItem, setCurrentItem] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    imgFrontDefault:"",
  })

  //con axios
  //,{cancelToken: new axios.CancelToken(c => cancel = c)}
  useEffect(() => {
    
    let cancel
    setLoading(true)
    axios.get(currentPageUrl,{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemons(res.data.results.map(p => p))
      //console.log(Pokemons)
    })
    return() => cancel() 
  },[currentPageUrl])
  console.log("CURRENT next page URL ==>>>", nextPageUrl)
  console.log("CURRENT prev page URL ==>>>", previousPageUrl)
  console.log("CURRENT ITEM URL ==>>>", currentItemUrl)
  
  useEffect(() => {
    updatePokemon()
    console.log("usefect update pokemon urrent item url=====>", currentItemUrl)
  },[currentItemUrl])
  
  
  const updatePokemon = () => {
    setLoadingPokemon(true)
    axios.get(`${currentItemUrl}`).then((response)=>{
      setCurrentItem({
        name: response.data.name, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defence: response.data.stats[2].base_stat,
        imgFrontDefault: response.data.sprites.other.dream_world.front_default,
        })
        setLoadingPokemon(false)
        console.log("item",currentItem)
    })
  }
  

  console.log("CURRENT ITEM ==>>>", currentItem)

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }
  

  //axios get pockemon
  //function getItemToShow(currentItemUrl) {
  // useEffect(() => {
  //     axios.get(currentItemUrl).then(res => {
  //     setCurrentItem(res.data.results.map(item => item))
  //   })
  // },[currentItemUrl])

  // function getItemToShow(currentItemUrl){
  //   setCurrentItemUrl(currentItemUrl)
  //   console.log("current url ==>>>>>",currentItemUrl)
  // }
  
  // useEffect(()=>{
  //   let cancel
  //   axios.get(currentItemUrl,{
  //     CancelToken: new axios.CancelToken(c => cancel = c)
  //   }).then( res => {
  //     setCurrentItemUrl(res)
  //   })
  // })




  // sin usar axios
  // useEffect(() => {
  //   async function getTenPokemons(){
  //     const responseNames = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  //     const dataNames = await responseNames.json(); 
  //     //console.log(await responseNames.json());
  //     setPokemonNames(dataNames.results);
  //     console.log("RESULTS====>", dataNames.results)
  //     console.log("DATA=======>", pokemonNames)
  //   }
  //   getTenPokemons();
  // },[])

  if (loading) return "loading..."
  return (
    <>
    <MainBar/>
      <div className="main-container">
        <div className="container">
          <div className='pokedex_nav-wrapper'>
            <Pagination 
              gotoNextPage={gotoNextPage}
              gotoPreviousPage={gotoPreviousPage}
              previousPageUrl={previousPageUrl}
              nextPageUrl={nextPageUrl}
            />
            <PokemonList 
            pokemons={pokemons}
            setCurrentItemUrl={setCurrentItemUrl}
            currentItem={currentItem}
            //updateUrl={updateUrl}
            />
          </div>
          <PokemonItem currentItem={currentItem} />
        {/* {pokemonNames.map((pokemon, id)=>{
            return( 
                <PokeDexItem 
                pokemons={pokemonNames} 
                key={pokemon.id}
                name={pokemon.name}
                url={pokemon.url} 
                /> 
                    
            )}
          )} */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default PokeDex