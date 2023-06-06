import React from "react";

const Technologies = () => {
 return (
    <div id='technologies-div'>
            <h1 className='div-header' id='technologies-header'>Technologies</h1>
            <p id='technologies-intro'> I enjoy working with a range of technologies that help me create aesthetically pleasing web applications with intuitive UI. </p>
            <div id='types-of-tech-div'>
                <div id='front-end' className="tech-lists">
                    <p id='tech-types-header'>FRONT END</p>
                        <p>React.js</p>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>TypeScript</p>
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
export default Technologies;