import React from "react";

function MainBar() {

    return(
        <nav className="main-bar">
            <div className="container">
                <div className="main-bar__wrapper"> 
                    <div className="main-bar__logo">
                        <img 
                            className="logo__image" 
                            src="../public/assets/images/cool-logo.png"
                            alt="logo"
                        />
                    </div>
                </div>

                <p>MAIN BAR</p>
            </div>
        </nav>
    );
}

export default MainBar;

