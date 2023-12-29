import React from 'react'
import MainBar from '../../components/mainBar/MainBar';
import JsArrays from '../../components/jsExerciseComponents/jsArrays';
import Footer from '../../components/footer/Footer';

const JsExcercises = () => {
  return (
    <>
        <MainBar />
        <div className="main-container">
            <div className="container">
                <div>JsExcercises</div>
                 <JsArrays />
            </div>
        </div>
        <Footer />
    </>
  )
}
export default JsExcercises