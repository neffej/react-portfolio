import React from "react";

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
                    <a href="https://github.com/neffej/README-NODE-JS" target="_blank" rel="noreferrer"><img className="img-fluid" src="https://img.freepik.com/free-vector/realistic-notepad-blank_98292-4733.jpg?w=740&t=st=1678070229~exp=1678070829~hmac=b21cfc7bfb2cd5f64cf0dd725caa284c49ec994c473f2562ef07e021fc63cd0e"></img></a>
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