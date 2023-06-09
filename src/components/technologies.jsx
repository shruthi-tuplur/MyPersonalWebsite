import React from "react";

const Technologies = (props) => {
    const {businessMode} = props;

    if(businessMode){
        return(
            <div id='technologies-div-bus'>
            <h1 className='div-header-bus' id='technologies-header-bus'>Technologies</h1>
            <p id='technologies-intro-bus'> I enjoy working with a range of technologies that help me create aesthetically pleasing web applications with intuitive UI. </p>
            <div id='types-of-tech-div-bus'>
                <div id='front-end-bus' className="tech-lists-bus">
                    <p id='tech-types-header-bus'>FRONT END</p>
                        <p className="tech-type-item-bus">React.js</p>
                        <p  className="tech-type-item-bus" >JavaScript</p>
                        <p className="tech-type-item-bus">HTML</p>
                        <p className="tech-type-item-bus">CSS</p>
                        <p className="tech-type-item-bus">TypeScript</p>
                </div>
                <div id='back-end-bus' className="tech-lists-bus">
                    <p id='tech-types-header-bus'>BACK END</p>
                        <p className="tech-type-item-bus">Node.js</p>
                        <p className="tech-type-item-bus">PostgreSQL</p>
                        <p className="tech-type-item-bus">Express.js</p>
                        <p className="tech-type-item-bus">AJAX</p>
                        <p className="tech-type-item-bus">Restful APIs</p>
                        <p className="tech-type-item-bus">Database Architecture and Schemas</p>
                </div>
                <div id='ui-ux-bus' className="tech-lists-bus">
                    <p id='tech-types-header-bus'>UI/UX</p>
                        <p className="tech-type-item-bus">Figma</p>
                        <p className="tech-type-item-bus">Canva</p>
                </div>

            </div>
       </div>
        )
    } else{
 return (
    <div id='technologies-div'>
            <h1 className='div-header' id='technologies-header'>Technologies</h1>
            <p id='technologies-intro'> I enjoy working with a range of technologies that help me create aesthetically pleasing web applications with intuitive UI. </p>
            <div id='types-of-tech-div'>
                <div id='front-end' className="tech-lists">
                    
                    <span id='tech-types-header'>I use front end tools such as [ </span>
                    <div class="scrolling-words-container">
                    <div class="scrolling-words-box">
                        <ul>
                        <li className='front-end-item' >React.JS</li>
                        <li className='front-end-item' >JavaScript</li>
                        <li className='front-end-item' >HTML</li>
                        <li className='front-end-item' >CSS</li>
                        <li className='front-end-item'>TypeScript</li>
                        
                        </ul>
                    </div>
                    </div>
                    <span id='to-create-fun'> ] to create fun and user-friendly sites</span>
                </div>
                <div id='back-end' className="tech-lists">
                    <p id='tech-types-header'>BACK END</p>
                        <p>Node.js</p>
                        <p>PostgreSQL</p>
                        <p>Express.js</p>
                        <p>AJAX</p>
                        <p>Restful APIs</p>
                        <p>Database Architecture and Schemas</p>
                </div>
                <div id='ui-ux' className="tech-lists">
                    <p id='tech-types-header'>UI/UX</p>
                        <p>Figma</p>
                        <p>Canva</p>
                </div>

            </div>
       </div>
 )
}
}
export default Technologies;