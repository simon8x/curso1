import React from "react";
import MainBar from "../../components/mainBar/MainBar";
import Footer from "../../components/footer/Footer";
import SingleExcercise from "../../components/trainingComponents/SingleExcercise";

function Excercises(){

    return(
        <>
        <MainBar />
        <div className="main-container">
            <div className="container">
                <section className="exercises-container">

                    <SingleExcercise title="props" />
                
                    <SingleExcercise title="json mock" />
                    
                    <SingleExcercise title="states uses" />

                    <SingleExcercise title="login" />

                    <SingleExcercise title="list of names" />

                    <SingleExcercise title="ternary" />

                </section>
            
            </div>
        </div>


        <Footer />
        </>
    )
}

export default Excercises;