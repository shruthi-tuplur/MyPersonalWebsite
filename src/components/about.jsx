
import React from "react";

const About = (props) => {
    const {businessMode} = props;

    if(businessMode){
        return (
            <div id='about-me-bus'>
                    <div id='about-me-left-bus'>
                    <h1 className='div-header-bus' id='about-me-header-bus'>About me</h1>
                    <p id="about-me-first-line-bus"> I am a passionate, creative, and excited junior web developer currently working on a Master's in Computer Science at Stevens Institute of Technology. I am looking for a role that will challenge me and help me grow as a developer. </p>
                    </div>
                    <div id='about-me-section-bus'>
                    
                    <p id='about-me-blurb-bus'> I started my career journey with a background in psychology and criminal justice, initially aiming for a career as a lawyer because I loved the idea of solving puzzles with the goal of coming up with a solution to a problem. I worked as a legal secretary at one of StateFarm’s law firms, but didn’t feel as though the job fit with my skillset and interests, so I decided to become a paralegal because I felt that the creativity and logical reasoning involved in the role was more in line with me. Toward the end of my paralegal certification course,  I decided to try learning to code, because growing up in Silicon Valley taught me that one of the most valuable skills for any professional is adapting to new technologies and learning to use new resources. To my surprise, I ended up absolutely loving to code; I found my love for problem solving was satisfied because every program I created had the goal of addressing a gap using code. Plus, as a bonus, I was able to exercise my creativity (a significant portion of my personality) every day as I came up with ways to make my programs fun and Shruthi-fied. In fact, I enjoyed coding so much that I decided to switch to a career in the world of software/web development.
                    I enrolled in a web development bootcamp to confirm that I truly did enjoy programming, and I am now working on a MS in Computer Science to help me get a deeper understanding of computers as a whole.</p>
                    <p id='about-me-blurb-bus'> In my free time, I enjoy hanging out with my cat Cheese, crocheting, reading mystery novels, doing puzzles, visiting museums, and exploring the area with friends. My favorite tv show is Criminal Minds
                        and I love hammerhead sharks and stegosauruses, pineapple does NOT belong on pizza, and raisins do not belong anywhere.
                    </p>
                    </div>
            </div>
        )
    } else {

    
        return (
            <div id='about-me'>
                    <div id='about-me-left'>
                    <h1 className='div-header' id='about-me-header'>about me. </h1>
                    <p id="about-me-first-line"> I am a passionate, creative, and excited junior web developer currently working on a Master's in Computer Science at Stevens Institute of Technology. I am looking for a role that will challenge me and help me grow as a developer. </p>
                    </div>
                    <div id='about-me-section'>
                    
                    <p id='about-me-blurb'> I started my career journey with a background in psychology and criminal justice, initially aiming for a career as a lawyer because I loved the idea of solving puzzles with the goal of coming up with a solution to a problem. I worked as a legal secretary at one of StateFarm’s law firms, but didn’t feel as though the job fit with my skillset and interests, so I decided to become a paralegal because I felt that the creativity and logical reasoning involved in the role was more in line with me. Toward the end of my paralegal certification course,  I decided to try learning to code, because growing up in Silicon Valley taught me that one of the most valuable skills for any professional is adapting to new technologies and learning to use new resources. To my surprise, I ended up absolutely loving to code; I found my love for problem solving was satisfied because every program I created had the goal of addressing a gap using code. Plus, as a bonus, I was able to exercise my creativity (a significant portion of my personality) every day as I came up with ways to make my programs fun and Shruthi-fied. In fact, I enjoyed coding so much that I decided to switch to a career in the world of software/web development.
                    I enrolled in a web development bootcamp to confirm that I truly did enjoy programming, and I am now working on a MS in Computer Science to help me get a deeper understanding of computers as a whole.
                    </p>
                    <p id='about-me-blurb'> In my free time, I enjoy hanging out with my cat Cheese, crocheting, reading mystery novels, doing puzzles, visiting museums, and exploring the area with friends. My favorite tv show is Criminal Minds
                        and I love hammerhead sharks and stegosauruses, pineapple does NOT belong on pizza, and raisins do not belong anywhere.
                    </p>
                    </div>
            </div>
        )

}
}

export default About;