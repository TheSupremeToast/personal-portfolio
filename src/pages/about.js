import React from "react";
import "./index.css"

const About = () => {
    return (
        <div>
            <section class="section">
                <div class="box-main">
                    <h1>About Me</h1>
                </div>
            </section>
            <div class="container">
                <img 
                    style={{width:"25%", height:"25%"}} 
                    src='images/headshot_1.JPG' 
                    alt='profile pic'
                />
                <p>
                    Hi, I'm Patrick. <br />
                    I am a student at Virginia Tech studying Computation Modeling and Data analytics. <br />
                </p>
            </div>
        </div>
    );
};

export default About;
