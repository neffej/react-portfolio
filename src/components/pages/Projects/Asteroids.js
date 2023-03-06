import React from "react";

export default function Asteroids(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>Search for Rocks with NASA</h1>
                    <h5>Node / Express / Web APIs / BCrypt</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <img className="img-fluid" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2002/04/typical_orbits_for_inner_solar_system_asteroids/9198180-5-eng-GB/Typical_orbits_for_inner_solar_system_asteroids_pillars.jpg"></img>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>This project is a simple API-based website that uses NASA's Open API portal to learn more about Near Earth Objects.  The website uses Node and Express to connect a user to NASA through an on-page search form. </p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">Create user login with BCrypt</li>
                    <li className="fs-6">Use MongoDB to store user-searches and allow users to "like" asteroids</li>
                    <li className="fs-6">Create a sortable table as well as more custom query templates</li>
                </ul>
                <div>
                    <a href="https://github.com/neffej/congenial-asteroid-queryer">Github Link</a>
                </div>
                </div>
            </div>
        </section>
    )   
}