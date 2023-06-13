import React from "react";

const Footer = (props) => {

    const {businessMode} = props;

    if(businessMode){
        return(
            <div id='footer-div-bus'>
                <div id='contact-div-bus'>
                    <div>
                        <p id="email-bus">Email: shruthituplur@gmail.com</p> 
                        
                    </div>
                    <div id="icons-div-bus">
                        <div id="github-div-bus">
                            <a href="https://github.com/shruthi-tuplur"><img id="github-icon-bus" className="icon" src='/images/github-logo-bus.png' /></a>
                        </div>
                        <div id='linkedin-div-bus'>
                            <a href="https://www.linkedin.com/in/shruthi-tuplur"><img id="linkedin-icon-bus" className="icon" src='/images/linkedin-logo-bus.png' /></a>
                        </div>    
                        
                    </div>
                </div>
                
            </div>
        )
    } else {
    return(
        <div id='footer-div'>
            <div id='contact-div'>
                <div>
                    <p id="email">email: shruthituplur@gmail.com</p> 
                    
                </div>
                <div id="icons-div">
                    <div id="github-div">
                        <a href="https://github.com/shruthi-tuplur"><img id="github-icon" className="icon" src='/images/github-icon.png' /></a>
                    </div>
                    <div id='linkedin-div'>
                        <a href="https://www.linkedin.com/in/shruthi-tuplur"><img id="linkedin-icon" className="icon" src='/images/linkedin-icon.png' /></a>
                    </div>    
                    
                </div>
            </div>
            
        </div>
    )

}
}
export default Footer;