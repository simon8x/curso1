import React from 'react'
let imageUrl = ""



const MovieItem = (props) => {
  if (props.movie.poster_path) {
    imageUrl = `${props.URL_IMAGE + props.movie.poster_path}`;
  } else {
    imageUrl = `https://pub111.com/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg`;
  }
  
  return (
    <>
      <div key={props.movie.id} className='movie-wrapper' onClick={()=> props.selectMovie(props.movie)}>
        <div className='poster-wrapper'>
          <img className='movie-image' src={imageUrl} alt="" />
        </div>
        <h4 className='title'>{props.movie.title}</h4>
      </div>

    </>
  )
}
export default MovieItem