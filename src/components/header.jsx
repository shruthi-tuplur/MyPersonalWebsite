import React from "react";

const Header = (props) => {

    const {boogie, setBoogie} = props;
    return (
        <div id='header-main-div'>
            <button id='homepage-button'>shruthi tuplur</button>
            <div id='nav-bar'>
                <p className = 'header-item'>Projects</p>
                <p className = 'header-item'>Technologies</p>
                <p className= "header-item">About</p>
                <button className="header-item" id='boogie-button' onClick={(event) => {setBoogie(true)}}>BOOGIE</button>
            </div>
        </div>
    )
}

export default Header;