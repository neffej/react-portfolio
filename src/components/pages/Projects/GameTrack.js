import React from "react";

export default function GameTrack(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>Video Game Review Site</h1>
                    <h5>MySQL / Express / Web APIs / Handlebars / BCrypt</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <a href="https://github.com/neffej/game-track/" target="_blank" rel="noreferrer"><img className="img-fluid img-thumbnail" src="https://i.imgur.com/k3oUFzE.png"></img></a>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>GameTrack is a group project I developed with others in Georgia Tech's Coding Bootcamp.  The greatest challenges we experienced in this project were connecting the API to the Internet Game DataBase, which requires Axios or proxy servers to properly connect, routing all of the webpages, and creating the relational database.  We successfully implemented BCrypt to validate login information, and we used session storage to pass that information between webpages to create a complete user experience; certain features were only available while logged in.</p>
                <p>The site experienced difficulties when deploying to Heroku, but the code does work on local hosting.  I've included a link to the Github repository if you'd like to check out Game Track.</p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">Fully deploy to Heroku</li>
                    <li className="fs-6">Improve API connectivity</li>
                    <li className="fs-6">Create an autofill function in the game search</li>
                </ul>
                <div>
                    <a href="https://github.com/neffej/game-track">Github Link</a>
                </div>
                </div>
            </div>
        </section>
    )   
}