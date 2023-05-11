import React from "react";
import HorizontalLine from "./horizontal-div";
import AnimationRender from "./animation";

const HomepageMain = (props) => {

    const {boogie, setBoogie} = props; 

return (
    <div id="homepage-main-component">
        <div id='main-page-header-div'>
            <div id="site-main-intro-header-div">
                <h1 id='site-main-intro-header'>Welcome to my personal portfolio.</h1>
            </div>
            <div id='animation-div'> 
                <AnimationRender boogie = {boogie} setBoogie = {setBoogie}/>
            </div>
        </div>
        <div id="resume-button-div">
            <button id="resume-button">Resume</button>
        </div>
        <HorizontalLine />
       <div id='project-div'>
        <h1 id='div-header'>Projects</h1>
        <div id="projects">
            <div>project 1</div>
            <div>project 2</div> 
        </div>
       </div> 
       <HorizontalLine />
       <div id='technologies-div'>
            <h1 id='div-header'>Technologies</h1>
            <p id='technologies-intro'> I enjoy working with a range of technologies that help me create aesthetically pleasing web applications with intuitive UI. </p>
            <div id='types-of-tech-div'>
                <div id='front-end'>
                    <p id='tech-types-header'>FRONT END</p>
                        <p>React.js</p>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>TypeScript</p>
                </div>

            </div>
       </div>
    </div>
)
}

export default HomepageMain;