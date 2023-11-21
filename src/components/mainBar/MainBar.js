import React from "react";

function MainBar() {

    return(
        <nav className="main-bar">
            <div className="container">
                <div className="main-bar__wrapper"> 
                    <a 
                    className="main-bar__logo"
                    href="/"
                    target= "_self"
                    >
                        <img 
                            className="logo__image" 
                            src="https://cdn-icons-png.flaticon.com/128/1048/1048951.png"
                            alt="logo"
                            />
                    </a>                    
                    <div className="main-bar__nav">
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <a 
                                className="main-bar__link"
                                href="/movies"
                                target= "_self"
                                >Movies
                                </a>
                            </li>
                            <li className="nav-list__item">
                                <a 
                                className="main-bar__link"
                                href="/pokemon"
                                target= "_self"
                                >Pokemon
                                </a>
                            </li>
                            <li className="nav-list__item">
                                <a 
                                className="main-bar__link"
                                href="/excercises/"
                                target= "_self"
                                >Exercises
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default MainBar;

