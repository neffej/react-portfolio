import React from "react";
import Ratings from '../../assets/Rateacop.gif'

export default function Node(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>Rate A Cop</h1>
                    <h5>React / JWT / GraphQL / MongoDB</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <a href="https://github.com/p0ptartz/rate-a-cop" target="_blank" rel="noreferrer"><img className="img-fluid" src={Ratings} alt='functionality gif'></img></a>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>Rate A Cop is a fully deployed website, hosted on Heroku, that uses React, MongoDB and Apollo GraphQL to allow users to post ratings on police officers in any city in the USA.  City data is provided by Mapquest API, which is accessed via Express.     </p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">Implement Login/Sign-up feature using JWT</li>
                    <li className="fs-6">Improve specificity of city selection</li>
                </ul>
                <div>
                    <a href="https://github.com/p0ptartz/rate-a-cop">Github Link</a>
                    <a href="https://rate-a-cop-acab.herokuapp.com/location/Springfield">Deployed Link</a>
                </div>
                </div>
            </div>
        </section>
    )   
}