import React, {useState, useEffect} from 'react'

const PokemonItem = (props) => {
  
  // const [pokemons, setPokemons] = useState([])

  // console.log(">>>>>>>>>",props.url)

  // useEffect(() => {
  //   async function getPokemon(){
  //     const response = await fetch(props.url);
  //     const data = await response.json();

  //     setPokemons(data.results);
  //     console.log("result ===>", data.results)
  //     console.log("data ===>", pokemons)
  //   }
  //   getPokemon()
  // },[])
  console.log("PROPS POKEMON ITEM ===>",props)
  return (
    <>
    <section className='current-pokemon-wrapper'>
      {/* <img src={props.currentItem.img} alt=''/> */}
      <div className='cover-img-container'>
        <img className="cover-img" src={props.currentItem.imgFrontDefault} alt=''/>
      </div>
      <div className='data-container'>
        <p>
          name= {props.currentItem.name}
        </p>
        <p>
          species= {props.currentItem.species}
        </p>
        <p>
          hp= {props.currentItem.hp}
        </p>
        <p>
          attack= {props.currentItem.attack}
        </p>
        <p>
          defence= {props.currentItem.defence}
        </p>

      </div>

    </section>
    </>
  )
}

export default  PokemonItem