import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Projects/Home';
import Asteroids from './pages/Projects/Asteroids';
import Calculator from './pages/Projects/Calculator';
import SQL from './pages/Projects/SQL-employees';
import GameTrack from './pages/Projects/GameTrack';
import Node from './pages/Projects/Node';
import Ratings from './pages/Projects/Ratings';
import Network from './pages/Projects/Network';
import "./Portfolio.css"


export default function Portfolio(){
    const [currentPage, setCurrentPage] = useState('React');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />;
        }
        if (currentPage === 'Asteroids'){
            return <Asteroids />;
        }
        if (currentPage === 'Calculator'){
            return <Calculator />;
        }
        if (currentPage === 'SQL'){
            return <SQL />;
        }
        if (currentPage === 'GameTrack'){
            return <GameTrack />;
        }
        if (currentPage === 'React'){
            return <Ratings />;
        }
            return <Network />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )

//     return (
//         <section id='portfolio' className='portfolio'>
//             <div className='container'>
//                 <div className='section-title'>
//                     <h2>Portfolio</h2>
//                     <p>I have deployed a few websites using Github Pages and Heroku, and I have links to Github repositories for projects that require a CLI interface.  Each project has a descriptive README, but feel free to reach out via the contact form if you want more information on anything in particular.</p>
//                 </div>
//             </div>
//             <div className='row portfolio-container p-2 aos-init aos-animate' data-aos="fade-up" data-aos-delay="100" id='portfolio-container'>
//                 <div className='col-lg-4 col-md-6  portfolio-item'>
//                     <div className='portfolio-wrap'>
//                         <img className='img-fluid img-thumbnail' src='https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2002/04/typical_orbits_for_inner_solar_system_asteroids/9198180-5-eng-GB/Typical_orbits_for_inner_solar_system_asteroids_pillars.jpg' alt='asteroid database search website'></img>
//                     </div>
//                 </div>
//                 <div className='col-lg-4 col-md-6 portfolio-item'>
//                     <div className='portfolio-wrap'>
//                         <img className='img-fluid img-thumbnail' src='https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80' alt='TV Show Binge Calculator'></img>
//                     </div>
//                 </div>
//                 <div className='col-lg-4 col-md-6 portfolio-item'>
//                     <div className='portfolio-wrap'>
//                         <img className='img-fluid img-thumbnail' src='https://i.imgur.com/IaxeKp7.jpg' alt='Weather forecasting website'></img>
//                     </div>
//                 </div>
//                 <div className='col-lg-4 col-md-6 portfolio-item'>
//                     <div className='portfolio-wrap'>
//                         <img className='img-fluid img-thumbnail' src='https://www.stockvault.net/data/2022/06/17/293325/preview16.jpg' alt='Social Network with MongoDB'></img>
//                     </div>
//                 </div>
//                 <div className='col-lg-4 col-md-6 portfolio-item'>
//                     <div className='portfolio-wrap'>
//                         <img className='img-fluid img-thumbnail' src='https://img.freepik.com/free-vector/realistic-notepad-blank_98292-4733.jpg?w=740&t=st=1678070229~exp=1678070829~hmac=b21cfc7bfb2cd5f64cf0dd725caa284c49ec994c473f2562ef07e021fc63cd0e' alt='README Generator'></img>
//                     </div>
//                 </div>
//                 <div className='col-lg-4 col-md-6 portfolio-item'>
//                     <div className='portfolio-wrap'>
//                         <img className='img-fluid img-thumbnail' src='https://freesvg.org/img/terminal_window.png' alt='SQL-Based Employee Profile CLI'></img>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
}