import React from "react";
import Read from '../../assets/README.gif'

export default function Node(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>README Generator</h1>
                    <h5>JavaScript / Inquirer</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <a href="https://github.com/neffej/README-NODE-JS" target="_blank" rel="noreferrer"><img className="img-fluid" src={Read} alt='functionality gif'></img></a>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>This project was an introduction to Command Line Interfaces and how to program them.  If you clone the repo, you can initiate a prompt through Inquirer which will walk you through all the steps needed to create a professional README document. It's an introductory project in terms of technology, but it is very helpful in creating a useful, readable README, which can really improve the functionality and accessibility of the most complicated codebase.  </p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">Continue practicing my README documentation!</li>
                </ul>
                <div>
                    <a href="https://github.com/neffej/README-NODE-JS">Github Link</a>
                </div>
                </div>
            </div>
        </section>
    )   
}