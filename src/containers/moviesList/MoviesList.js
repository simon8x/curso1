import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MainBar from '../../components/mainBar/MainBar';
import Footer from '../../components/footer/Footer';
import MovieItem from '../../components/movies/movieItem';
import SearchMovies from '../../components/movies/MoviesSearch';
import MovieSelected from '../../components/movies/MovieSelected';
//import axios from './MoviesProvider';


const MoviesList = () => {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = 'd91f7a1bfc9a653baa272bc8edb67036'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //estados
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState ("")
  const [trailer, setTrailer] = useState(null)
  const [movie, setMovie] = useState({title: "Loading Movies"})
  const [paying, setPlaying] = useState(false)

  //petición get a la api
  const fetchMovies = async(searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {data:{results},
    } = await axios.get(`${API_URL}/${type}/movie`,{
      params:{
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results)
    setMovie(results[0])
    if (results.length) {
      await fetchMovie(results[0].id)
    }
  }

  // función buscar
  const searchMovies = (e) =>{
    e.preventDefault();
    fetchMovies(searchKey)
  }
  // función obtener una movie
  const fetchMovie = async(id) => {
    const{data} = await axios.get(`${API_URL}/movie/${id}`,{
      params:{
        api_key: API_KEY,
        append_to_response:"videos"
      }
    })

    if (data.videos && data.videos.results){
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Oficial Trailer"
      )
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    //(trailer ? alert("hay trailer") : alert("no hay trailer") )
    setMovie(data)
  }

  const selectMovie = async(movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    //window.scrollTo(0,0)
  }

  useEffect(()=>{
    fetchMovies()
  },[])
  
  return (
    <>
    <MainBar />
    <div className="movies-list-page-wrapper">
        {/* contenedor de pelicula búsqueda*/}
        
        <SearchMovies 
          searchMovies = {searchMovies}
          setSearchKey = {setSearchKey}
        />

        {/* contenedor de pelicula seleccionada */}
        <MovieSelected 
          movie = {movie}
          IMAGE_PATH = {IMAGE_PATH}
          trailer = {trailer}
        />

      
        {/* contenedor de posters */}
        <section className='movies-wrapper'>
          {movies.map((movie)=>(
            <MovieItem 
              movie={movie}
              selectMovie= {selectMovie}
              //movies={movies}
              URL_IMAGE = {URL_IMAGE}
            />
          ))}
        </section>
      
    </div>
    <Footer />
    </>
  )
}
export default MoviesList