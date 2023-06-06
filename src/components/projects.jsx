import React from "react";

const Projects = () => {
    return (
    <div id='project-div'>
        <h1 className='div-header' id='projects-header'>Projects</h1>
        <div id="projects">
            <div id='project-row-1'>
            <div className="project-card">
                <img id="snake-image" src="/images/snake-game-image.png"/>
                <p className='project-title'>Snake</p>
                <div id='project-blurb-div'>
                    <p className="project-blurb">I used basic HTML, CSS, and JavaScript DOM Manipulation to build a fully functioning Snake game. The game features multiple fun nostalgic color themes, 
                    including a throwback to the 90s classic Jazz pattern known for their appearance on Solo cups and the forever loved Pacman arcade game with its beloved lemon-yellow protagonist. 
                    The game includes a functioning counter, collision detection, and special food items that allow the snake to change colors corresponding to the chosen theme.</p>
                </div>
                <div id='project-tech-used'>
                    <p className="tech-used-item">JavaScript</p>
                    <p className="tech-used-item"> HTML</p>
                    <p className="tech-used-item">CSS</p>
                </div>
                <div id='project-button-div'>
                   <form><button className="project-button" formAction="https://github.com/shruthi-tuplur/snake">Code</button></form> 
                   <form><button className="project-button" formAction="https://legendary-entremet-10b36b.netlify.app/">Source</button></form> 
                </div>
            </div>
            <div className="project-card">
            </div>

            </div>
        </div>
    </div> )
}

export default Projects;