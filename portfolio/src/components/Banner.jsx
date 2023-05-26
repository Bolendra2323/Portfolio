import React from "react";

function Banner(){

    return(
        <section className="banner" id="banner"> 
        <div className="container">
            <div className="banner-wrapper">
                <div className="banner-img">
                    <img src="/person.png" alt=""/>
                </div>
                <div className="banner-content">
                    <h6>Hello , I'm Bolendra Moran</h6>
                    <h3>Full Stack Web Developer</h3>
                    <p>
                        A Mechanical Engineer graduate who has made a transition into the IT field.
                        His expertise lies in the MERN stack, where he can building dynamic web applications using 
                        MongoDB, Express.js, React.js, and Node.js.
                        He has a passion for learning, and has a problem-solving mindset.
                    </p>
                    <a className="btn" href="#projects">
                        About Me
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Banner;