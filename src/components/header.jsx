import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Projects from "./projects";

const Header = (props) => {

    const {boogie, setBoogie} = props;
    const song= document.getElementById('boogie_wonderland')
    function stopBoogie(){
        setBoogie(false);
    }

    return (
        <div id='header-main-div'>
            <Link to='/home'>
                <button id='homepage-button'>shruthi tuplur</button>
            </Link>
            <div id='nav-bar'>
                <a className = 'header-item' href='projects-component'>Projects</a>
                <a className = 'header-item' href='technologies-component'>Technologies</a>
                <a className = 'header-item' href='about-component'>About</a>
                <button className="header-item" id='boogie-button' onClick={(event) => {
                    song.play();
                    setBoogie(true);
                    setTimeout(stopBoogie, 18500);
                    }}>Boogie</button>
            </div>
        </div>
    )
}

export default Header;