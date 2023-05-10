import React from "react";

const Header = (props) => {
    return (
        <div id='header-main-div'>
            <button id='homepage-button'>shruthi tuplur</button>
            <div id='nav-bar'>
                <p className = 'header-item'>Projects</p>
                <p className = 'header-item'>Technologies</p>
                <p className= "header-item">About</p>
            </div>
        </div>
    )
}

export default Header;