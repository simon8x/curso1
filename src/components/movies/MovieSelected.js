import React, {useState} from 'react'
import ModalVideo from 'react-modal-video';

let imageUrl = ""
let trailerKey = ""

const MovieSelected = (props) => {
  const [isOpen, setOpen] = useState(false);
  if (props.movie.backdrop_path) {
    imageUrl = `url("${props.IMAGE_PATH}${props.movie.backdrop_path}")`;
  } else {
    imageUrl = `url("https://pub111.com/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg")`;
  }

  
  if (props.trailer) {
    console.log("TRAILER KEY =====>",props.trailer.key)  
    trailerKey = props.trailer.key
  } else {
    trailerKey = undefined
  }
  
  console.log("movie =====>",props.movie)
  console.log("TRAILER =====>",props.trailer)
  console.log("PROPS =====>",props)
  return (
 
 <>
    {trailerKey ? (
      <ModalVideo
        channel='youtube' 
        autoplay
        playsinline 
        isOpen={isOpen} 
        videoId={trailerKey}
        onClose={() => setOpen(false)}   
      />
      ):(null)}
    <div className='slected-movie-wrapper'>
          {props.movie ? (
            <div 
              className='main-image-wrapper'
              style={{
                backgroundImage: imageUrl
              }}
            >
              {/* {props.isOpen ? (
                <>
                  <h3>VIDEO!</h3>
                  
                  <button onClick={()=> {
                    setOpen(false)
                    }}> CERAR </button>
                </>
              ):(  */}
                <div 
                className='info-wrapper'
                >
                  <div className='movie-data'>
                    <div className='data-square'>
                      <img className="data-icon" src="https://cdn-icons-png.flaticon.com/512/1667/1667182.png" alt=''/>
                      <span className='data-number'>55555555</span>
                    </div>
                    <div className='data-square'>
                      <img className="data-icon" src="https://cdn-icons-png.flaticon.com/512/484/484633.png" alt=''/>
                      <span className='data-number'>55555555</span>
                    </div>
                    <div className='data-square'>
                      <img className="data-icon" src="https://cdn-icons-png.flaticon.com/512/709/709612.png" alt=''/>
                      <span className='data-number'>55555555</span>
                    </div>
                  </div>
                  {trailerKey ? (
                    <button
                      className='play-trailer-button'
                      onClick={() => {setOpen(true)}}
                      > PLAY TRAILER
                    </button>
                  ):(
                    <span>NO TRAILER AVAILABLE</span>
                  )}
                  <h1 className='info-title'>{props.movie.title}</h1>
                  <p className='info-description'>{props.movie.overview}</p>
                </div>
               {/* )} */}
            </div>
          ):null}
        </div>
 </>

  )
}

export default MovieSelected