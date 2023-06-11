import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import HorizontalLine from "./horizontal-div";
import AnimationRender from "./animation";
import Footer from "./footer";
import Projects from "./projects";
import Technologies from './technologies';
import About from './about';


const HomepageMain = (props) => {

    const {boogie, setBoogie, businessMode, setBusinessMode, containerRef} = props; 

    const [isIntersecting, setIsIntersecting] = useState(false);




    if(businessMode){
        return(
            <div id="homepage-main-component-bus">
        <div id='party-toggle-div'>
        <button className="btn" id='party-mode-toggle' onClick={(event) => {
                setBusinessMode(false);
            }}><svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>CLICK FOR PARTY MODE</span></button>
        </div>
        <div id='main-page-header-div-bus'>
            <div id="site-main-intro-header-div-bus">
                <h1 id='site-main-intro-header-bus'>Welcome to my personal portfolio.</h1>
            </div>
        </div>
        <div id="resume-button-div-bus">
            <button id="resume-button-bus">Resume → </button>
        </div>
       
        <a id='projects-bus' ref={containerRef}>
            <Projects businessMode={businessMode} setBusinessMode={setBusinessMode} />
        </a>    
        
        <a id='technologies-bus'ref={containerRef}>
            <Technologies businessMode={businessMode} setBusinessMode={setBusinessMode} />
        </a>
        
        <a id='about-bus'ref={containerRef}>     
            <About businessMode={businessMode} setBusinessMode={setBusinessMode}/>
        </a>    
        
    </div>
    
        )
    } else{

return (
    
    <div id="homepage-main-component">
        <div id='business-toggle-div'>
            <button className="btn" id='business-mode-toggle' onClick={(event) => {
                setBusinessMode(true);
            }}><svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span>click for business mode.</span></button>
        </div>
        <div id='main-page-header-div'>
            <div id="site-main-intro-header-div">
                <h1 id='site-main-intro-header'>welcome to my personal portfolio.</h1>
            </div>
            <div id='animation-div'> 
                <AnimationRender boogie = {boogie} setBoogie = {setBoogie} />
            </div>
        </div>
        <div id="resume-button-div">
            <button id="resume-button">check out my resume → </button>
        </div>
        
            
                <a id='projects'>
                    <Projects businessMode={businessMode} setBusinessMode={setBusinessMode} />
                </a>  
           
                <a id='technologies'>
                    <Technologies businessMode={businessMode} setBusinessMode={setBusinessMode} />
                </a>
            
        
            <a id='about'>     
                <About businessMode={businessMode} setBusinessMode={setBusinessMode}/>
            </a>  
        
        
    </div>
    
)
}
}


export default HomepageMain;