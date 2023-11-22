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

                    <SingleExcercise title="props" size="x1" />
                
                    <SingleExcercise title="json mock" size="x1" />
                    
                    <SingleExcercise title="states uses" size="x1" />

                    <SingleExcercise title="login" size="x1" />

                    <SingleExcercise title="list of names" size="x1" />

                    <SingleExcercise title="ternary" size="x1" />

                    <SingleExcercise title="to do list" size="x2" />

                </section>
            
            </div>
        </div>


        <Footer />
        </>
    )
}

export default Excercises;