import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Projects from "./projects";

const Header = (props) => {

    const {boogie, setBoogie, businessMode, setBusinessMode } = props;
    const song= document.getElementById('boogie_wonderland')
    function stopBoogie(){
        setBoogie(false);
    }

    if(businessMode){
        return (<div id='header-main-div-bus'>
            <Link to='/home'>
                <button id='homepage-button-bus'>shruthi tuplur</button>
            </Link>
            <div id='nav-bar'>
                <a className = 'header-item-bus' id='projects-nav-bus'  href='#projects-bus'>Projects</a>
                <a className = 'header-item-bus' id='technologies-nav-bus' href='#technologies-bus'>Technologies</a>
                <a className = 'header-item-bus' href='#about-bus'>About</a>
                
            </div>
        </div>)
    } else{

    return (
        <div id='header-main-div'>
            <Link to='/home'>
                <button id='homepage-button'>shruthi tuplur</button>
            </Link>
            <div id='nav-bar'>
                <a className = 'header-item' id='projects-nav'  href='#projects'>Projects</a>
                <a className = 'header-item' id='technologies-nav' href='#technologies'>Technologies</a>
                <a className = 'header-item' href='#about'>About</a>
                <button className="header-item" id='boogie-button' onClick={(event) => {
                    song.play();
                    setBoogie(true);
                    setTimeout(stopBoogie, 18500);
                    }}>Boogie</button>
            </div>
        </div>
    )
}
}

export default Header;