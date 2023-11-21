import React from "react";
import MainBar from "../../components/mainBar/MainBar";
import Footer from "../../components/footer/Footer";


function Home() {

    return(
    <>
        <MainBar />
        <div className="main-container">
            <div className="container">
                <h1>VIVA LA PATRIA</h1>
            </div>
            {/* <HolaMundo /> */}
        </div>

        <Footer />
    </>
    );
}
export default Home;