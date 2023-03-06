import React from "react";

export default function Network(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>Social Networking with MongoDB</h1>
                    <h5>MongoDB / Express</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <a href="https://github.com/neffej/API-social-network-18" target="_blank" rel="noreferrer"><img className="img-fluid" src="https://www.stockvault.net/data/2022/06/17/293325/preview16.jpg"></img></a>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>I used this project to create a MongoDB back-end server file. I tested the file with Insomnia and through local-hosting the server file, and a user is able to create other users, create thoughts, react to other user's thoughts and comment on them as well.  A user can also edit and delete thoughts and friends, giving them basically all the functionality of a modern social network.  Now it just needs a front-end!</p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">Link this database with a user front-end</li>
                </ul>
                <div>
                    <a href="https://github.com/neffej/API-social-network-18">Github Link</a>
                </div>
                </div>
            </div>
        </section>
    )   
}