import React from "react";

const Projects = (props) => {
    const {businessMode, setBusinessMode} = props;

    if(businessMode){
        return (
            <div id='project-div-bus'>
                <h1 className='div-header-bus' id='projects-header-bus'>Projects</h1>
                <div id="projects-bus">
                <div className="project-card-bus">
                    <img id="strangers-things-image-bus" src="/images/guitarget.png"/>
                    <div id='project-info-div-bus'>
                        <p className='project-title-bus'>Guitarget</p>
                        <div id='project-blurb-div-bus'>
                            <p className="project-blurb-bus">An ecommerce site that allows users to purchase guitars and guitar accessories. A clone of the website for my favorite retailer to frequent- Target. </p>
                        </div>
                        <div id='project-tech-used-strangers-bus'>
                            <p className="tech-used-item-bus"> PostgreSQL</p>
                            <p className="tech-used-item-bus">Express.JS</p>
                            <p className="tech-used-item-bus">JavaScript</p>
                            <p className="tech-used-item-bus">ReactJS</p>
                            <p className="tech-used-item-bus">HTML</p>
                            <p className="tech-used-item-bus">CSS</p>
                        </div>
        
                        <div id='project-button-div-guitarget-bus'>
                           <a href="https://github.com/shruthi-tuplur/Fitness-Tracker-Frontend" target="_blank"><button className="project-button-bus" id='stranger-button-bus' >Code</button></a> 
                           <a href="https://github.com/Kieren27/FitnessTrackerBackend" target="_blank"><button className="project-button-bus" id='stranger-button-bus' >Source</button></a> 
                           <a href="https://luxury-dasik-ca4091.netlify.app/" target="_blank"><button className="demonstration-button-bus" id='stranger-button-bus'>Demonstration video</button></a> 
                        </div>
                        </div>
                    </div>
                <div className="project-card-bus">
                    <img id="strangers-things-image-bus" src="/images/fitness-tracker-image.png"/>
                    <div id='project-info-div-bus'>
                        <p className='project-title-bus'>FitnessTrackr</p>
                        <div id='project-blurb-div-bus'>
                            <p className="project-blurb-bus">A web application that allows users to share fitness routines and updates on their fitness journeys, as well as view others' routines. </p>
                        </div>
                        <div id='project-tech-used-strangers-bus'>
                            <p className="tech-used-item-bus"> PostgreSQL</p>
                            <p className="tech-used-item-bus">Express.JS</p>
                            <p className="tech-used-item-bus">JavaScript</p>
                            <p className="tech-used-item-bus">ReactJS</p>
                            <p className="tech-used-item-bus">HTML</p>
                            <p className="tech-used-item-bus">CSS</p>
                        </div>
        
                        <div id='project-button-div-strangers-bus'>
                           <a href="https://github.com/shruthi-tuplur/Fitness-Tracker-Frontend" target="_blank"><button className="project-button-bus" id='stranger-button-bus' >Frontend Code</button></a> 
                           <a href="https://github.com/Kieren27/FitnessTrackerBackend" target="_blank"><button className="project-button-bus" id='stranger-button-bus' >Backend Code</button></a> 
                           <a href="https://luxury-dasik-ca4091.netlify.app/" target="_blank"><button className="project-button-bus" id='stranger-button-bus'>Source</button></a> 
                        </div>
                        </div>
                    </div>
        
                    <div className="project-card-bus">
                        <img id="snake-image-bus" src="/images/snake-game-image.png"/>
                        <div id='project-info-div-bus'>
                        <p className='project-title-bus'>Snake</p>
                        <div id='project-blurb-div-bus'>
                            <p className="project-blurb-bus">My version of the beloved Snake game. the game features multiple fun nostalgic color themes, 
                     a functioning counter, collision detection, and the ability to change snake color depending on the color theme by eating special food items.</p>
                        </div>
                        <div id='project-tech-used-bus'>
                            <p className="tech-used-item-bus">JavaScript</p>
                            <p className="tech-used-item-bus"> HTML</p>
                            <p className="tech-used-item-bus">CSS</p>
                        </div>
                        <div id='project-button-div-bus'>
                           <a href="https://github.com/shruthi-tuplur/snake" target="_blank"><button className="project-button-bus" >Code  → </button></a> 
                           <a target="_blank" href="https://legendary-entremet-10b36b.netlify.app/"><button className="project-button-bus">Source  → </button></a> 
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div> )
    } else {
    return (
    <div id='project-div'>
        <h1 className='div-header' id='projects-header'>projects.</h1>
        <div id="projects">
        <div className="project-card">
            <img id="fitness-trackr-image" src="/images/guitarget.png"/>
            <div id='project-info-div'>
                <p className='project-title'>guitarget.</p>
                <div id='project-blurb-div'>
                    <p className="project-blurb">an ecommerce site that allows users to purchase guitars and guitar accessories. a clone of the website for my favorite retailer to frequent- Target. </p>
                </div>
                <div id='project-tech-used-strangers'>
                    <p className="tech-used-item"> PostgreSQL</p>
                    <p className="tech-used-item">Express.JS</p>
                    <p className="tech-used-item">JavaScript</p>
                    <p className="tech-used-item">ReactJS</p>
                    <p className="tech-used-item">HTML</p>
                    <p className="tech-used-item">CSS</p>
                </div>

                <div id='project-button-div-guitarget'>
                   <form><button className="project-button" id='stranger-button' formAction="https://github.com/raynhlee/grace-shopper-capstone" target="_blank"> code  → </button></form> 
                   <form><button className="project-button" id='stranger-button' formAction="https://guitarget.onrender.com/" target="_blank"> source  → </button></form> 
                   <form><button className="demonstration-button" id='stranger-button' formAction="https://youtu.be/9_LnzeyyXDg" target="_blank">demonstration video  → </button></form> 
                </div>
                </div>
            </div>
        <div className="project-card">
            <img id="fitness-trackr-image" src="/images/fitness-tracker-image.png"/>
            <div id='project-info-div'>
                <p className='project-title'>fitness trackr.</p>
                <div id='project-blurb-div'>
                    <p className="project-blurb">a web application that allows users to share fitness routines and updates on their fitness journeys, as well as view others' routines. </p>
                </div>
                <div id='project-tech-used-strangers'>
                    <p className="tech-used-item"> PostgreSQL</p>
                    <p className="tech-used-item">Express.JS</p>
                    <p className="tech-used-item">JavaScript</p>
                    <p className="tech-used-item">ReactJS</p>
                    <p className="tech-used-item">HTML</p>
                    <p className="tech-used-item">CSS</p>
                </div>

                <div id='project-button-div-strangers'>
                   <form><button className="project-button" id='stranger-button' formAction="https://github.com/shruthi-tuplur/Fitness-Tracker-Frontend" target="_blank"> frontend code  → </button></form> 
                   <form><button className="project-button" id='stranger-button' formAction="https://github.com/Kieren27/FitnessTrackerBackend" target="_blank"> backend code  → </button></form> 
                   <form><button className="project-button" id='stranger-button' formAction="https://luxury-dasik-ca4091.netlify.app/" target="_blank">source  → </button></form> 
                </div>
                </div>
            </div>
            <div className="project-card">
                <img id="snake-image" src="/images/snake-game-image.png"/>
                <div id='project-info-div'>
                <p className='project-title'>snake.</p>
                <div id='project-blurb-div'>
                    <p className="project-blurb">my version of the beloved Snake game. the game features multiple fun nostalgic color themes, 
                     a functioning counter, collision detection, and the ability to change snake color depending on the color theme by eating special food items.</p>
                </div>
                <div id='project-tech-used'>
                    <p className="tech-used-item">JavaScript</p>
                    <p className="tech-used-item"> HTML</p>
                    <p className="tech-used-item">CSS</p>
                </div>
                <div id='project-button-div'>
                   <form><button className="project-button" formAction="https://github.com/shruthi-tuplur/snake" target="_blank">code  → </button></form> 
                   <form><button className="project-button" formAction="https://legendary-entremet-10b36b.netlify.app/" target="_blank">source  → </button></form> 
                </div>
                </div>
            </div>
            

            
        </div>
    </div> )
    }
}

export default Projects;