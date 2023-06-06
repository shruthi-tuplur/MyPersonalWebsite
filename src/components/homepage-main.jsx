import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import HorizontalLine from "./horizontal-div";
import AnimationRender from "./animation";
import Footer from "./footer";
import Projects from "./projects";
import Technologies from './technologies';
import About from './about';

const HomepageMain = (props) => {

    const {boogie, setBoogie} = props; 
    

return (
    
    <div id="homepage-main-component">
        <div id='main-page-header-div'>
            <div id="site-main-intro-header-div">
                <h1 id='site-main-intro-header'>Welcome to my personal portfolio.</h1>
            </div>
            <div id='animation-div'> 
                <AnimationRender boogie = {boogie} setBoogie = {setBoogie} />
            </div>
        </div>
        <div id="resume-button-div">
            <button id="resume-button">Resume</button>
        </div>
        <HorizontalLine/>
        <a id='projects-component'>
            <Projects />
        </a>    
        
        <a id='technologies-component'>
            <Technologies />
        </a>
        <HorizontalLine/>
        <a id='about-component'>     
            <About/>
        </a>    
        
    </div>
    
)
}

export default HomepageMain;