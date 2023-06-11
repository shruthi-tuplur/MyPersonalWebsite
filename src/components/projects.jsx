import React from "react";

const Projects = (props) => {
    const {businessMode, setBusinessMode} = props;

    if(businessMode){
        return (
            <div id='project-div-bus'>
                <h1 className='div-header-bus' id='projects-header-bus'>Projects</h1>
                <div id="projects-bus">
                    <div className="project-card-bus">
                        <img id="snake-image-bus" src="/images/snake-game-image.png"/>
                        <div id='project-info-div-bus'>
                        <p className='project-title-bus'>snake.</p>
                        <div id='project-blurb-div-bus'>
                            <p className="project-blurb-bus">I used basic HTML, CSS, and JavaScript DOM Manipulation to build a fully functioning Snake game. The game features multiple fun nostalgic color themes, 
                            including a throwback to the 90s classic Jazz pattern known for their appearance on Solo cups and the forever loved Pacman arcade game with its beloved lemon-yellow protagonist. 
                            The game includes a functioning counter, collision detection, and special food items that allow the snake to change colors corresponding to the chosen theme.</p>
                        </div>
                        <div id='project-tech-used-bus'>
                            <p className="tech-used-item-bus">JavaScript</p>
                            <p className="tech-used-item-bus"> HTML</p>
                            <p className="tech-used-item-bus">CSS</p>
                        </div>
                        <div id='project-button-div-bus'>
                           <form><button className="project-button-bus" formAction="https://github.com/shruthi-tuplur/snake">Code</button></form> 
                           <form><button className="project-button-bus" formAction="https://legendary-entremet-10b36b.netlify.app/">Source</button></form> 
                        </div>
                        </div>
                    </div>
                    <div className="project-card-bus">
                    <img id="strangers-things-image-bus" src="/images/strangers-things.png"/>
                    <div id='project-info-div-bus'>
                        <p className='project-title-bus'>e-commerce craigslist clone.</p>
                        <div id='project-blurb-div-bus'>
                            <p className="project-blurb-bus">This project utilizes HTML, CSS, JavaScript, ReactJS, and RESTful APIs. This site boasts a simple, clean UI, and it allows users to register, login, 
                            post listings, browse listings created by other users, and view their own profile. </p>
                        </div>
                        <div id='project-tech-used-strangers-bus'>
                            <p className="tech-used-item-bus"> HTML</p>
                            <p className="tech-used-item-bus">CSS</p>
                            <p className="tech-used-item-bus">JavaScript</p>
                            <p className="tech-used-item-bus">ReactJS</p>
                            <p className="tech-used-item-bus">RESTful APIs</p>
                        </div>
        
                        <div id='project-button-div-strangers-bus'>
                           <form><button className="project-button-bus" id='stranger-button-bus' formAction="https://github.com/shruthi-tuplur/Stranger-s_Things">Code</button></form> 
                           <form><button className="project-button-bus" id='stranger-button-bus' formAction="https://admirable-cheesecake-aa69e4.netlify.app/">Source</button></form> 
                        </div>
                        </div>
                    </div>
        
                    
                </div>
            </div> )
    } else {
    return (
    <div id='project-div'>
        <h1 className='div-header' id='projects-header'>Projects</h1>
        <div id="projects">
            <div className="project-card">
                <img id="snake-image" src="/images/snake-game-image.png"/>
                <div id='project-info-div'>
                <p className='project-title'>snake.</p>
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
            </div>
            <div className="project-card">
            <img id="strangers-things-image" src="/images/strangers-things.png"/>
            <div id='project-info-div'>
                <p className='project-title'>e-commerce craigslist clone.</p>
                <div id='project-blurb-div'>
                    <p className="project-blurb">This project utilizes HTML, CSS, JavaScript, ReactJS, and RESTful APIs. This site boasts a simple, clean UI, and it allows users to register, login, 
                    post listings, browse listings created by other users, and view their own profile. </p>
                </div>
                <div id='project-tech-used-strangers'>
                    <p className="tech-used-item"> HTML</p>
                    <p className="tech-used-item">CSS</p>
                    <p className="tech-used-item">JavaScript</p>
                    <p className="tech-used-item">ReactJS</p>
                    <p className="tech-used-item">RESTful APIs</p>
                </div>

                <div id='project-button-div-strangers'>
                   <form><button className="project-button" id='stranger-button' formAction="https://github.com/shruthi-tuplur/Stranger-s_Things">Code</button></form> 
                   <form><button className="project-button" id='stranger-button' formAction="https://admirable-cheesecake-aa69e4.netlify.app/">Source</button></form> 
                </div>
                </div>
            </div>

            
        </div>
    </div> )
    }
}

export default Projects;