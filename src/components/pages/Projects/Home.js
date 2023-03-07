import React from "react";
import AsteroidGif from '../../assets/Space_Rocks.gif';
import MyGif from '../../assets/Homepage.gif'
import GameTrack from '../../assets/GameTrack.gif'
import Read from '../../assets/README.gif'
import sql from '../../assets/SQL.gif'
import Work from '../../assets/network.gif'







export default function Home(){
    return(
<section id='portfolio' className='portfolio'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Portfolio</h2>
                    <p>I have deployed a few websites using Github Pages and Heroku, and I have links to Github repositories for projects that require a CLI interface.  Each project has a descriptive README, but feel free to reach out via the contact form if you want more information on anything in particular.</p>
                </div>
            </div>
            <div className='row portfolio-container p-2 aos-init aos-animate' data-aos="fade-up" data-aos-delay="100" id='portfolio-container'>
                <div className='col-lg-4 col-md-6  portfolio-item'>
                    <div className='portfolio-wrap'>
                        <img className='img-fluid img-thumbnail' src={AsteroidGif} alt='asteroid database search website'></img>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item'>
                    <div className='portfolio-wrap'>
                        <img className='img-fluid img-thumbnail' src={MyGif} alt='TV Show Binge Calculator'></img>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item'>
                    <div className='portfolio-wrap'>
                        <img className='img-fluid img-thumbnail' src={GameTrack} alt='Video Game Review Site'></img>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item'>
                    <div className='portfolio-wrap'>
                        <img className='img-fluid img-thumbnail' src={Work} alt='Social Network with MongoDB'></img>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item'>
                    <div className='portfolio-wrap'>
                        <img className='img-fluid img-thumbnail' src={Read} alt='README Generator'></img>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item'>
                    <div className='portfolio-wrap'>
                        <img className='img-fluid img-thumbnail' src={sql} alt='SQL-Based Employee Profile CLI'></img>
                    </div>
                </div>
            </div>
        </section>
    )   
}