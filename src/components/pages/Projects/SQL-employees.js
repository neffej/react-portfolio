import React from "react";
import sql from '../../assets/SQL.gif'


export default function SQL(){
    return(
        <section id="portfolio" className="portfolio-item">
            <div className="container">
                <div className="section-title">
                    <h1>SQL Employee Tracker</h1>
                    <h5>SQL / MySQL / JavaScript / Express</h5>
                </div>
            </div>
            <div className="row project-container p-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" id="project-container">
                <div className="col-lg-4 portfolio-info">
                    <a href="https://github.com/neffej/sql-employee-tracker" target="_blank" rel="noreferrer"><img className="img-fluid" src={sql} alt='functionality gif'></img></a>
                </div>
                <div className="col-lg-8 portfolio-info">
                <p>This project was my first structured foray into SQL and databases.  It is a Command Line Interface that prompts the user through a looping tree of questions which allow the user to build a business' employee base; a user can add employee name, role,  department, salary, and establish who their manager is.  Each entry is stored in a relational database which can be referenced in future queries.  It is an excellent introduction to SQL and MySQL.</p>
                <p>I've created a ton of models, tables, schedules, and data suites with MS Excel. I enjoy its interface, and I enjoy working with data.  I am motivated to explore MySQL and MongoDB more to unlock greater presentation and analysis tools and more powerful data management tools.</p>
                <ul className="fs-4">Future Developments:
                    <li className="fs-6">None planned</li>
                </ul>
                <div>
                    <a href="https://github.com/neffej/sql-employee-tracker">Github Link</a>
                </div>
                </div>
            </div>
        </section>
    )   
}