import React from "react";

export default function Calculator(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>5-Day Weather Forecast Tool</h1>
                    <h5>Node / Express / Web APIs / JavaScript / Bootstrap</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <a href="https://neffej.github.io/weather-fiesta/" target="_blank" rel="noreferrer"><img className="img-fluid" src="https://i.imgur.com/IaxeKp7.jpg"></img></a>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>The weather forecasting tool uses multiple layers of API calls to the Openweather Database to render a 5-day forecast for any city in the world. It also makes tremendous use of localstorage to pass user input and API results back and forth.  The project is deployed on Github pages and can be visited by clicking the image to your left.</p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">Create user login with BCrypt</li>
                    <li className="fs-6">Add styling </li>
                    <li className="fs-6">Create an autofill function in the city search</li>
                </ul>
                </div>
            </div>
        </section>
    )   
}