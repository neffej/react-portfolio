import React from 'react';
import './Header.css';

export default function Header({ currentPage, handlePageChange }){
     
    return(
            <header className="container-sm site-header bg-light p-15" id="header">
                <div className="wrap row" id='wrapper'>
                    <div className='profile col-sm-auto bg-dark sticky-top'>
                        <img src='https://avatars.githubusercontent.com/u/118024182?v=4' className='img-thumbnail rounded-circle m-2' alt="avatar image"width="250px" />
                         <h1 className='text-light row justify-content-center'>Eric Neff
                        </h1>
                        <div className='social-links mt-3 row justify-content-center'>
                            <a href="https://www.linkedin.com/in/eric-james-neff/" target="_blank" className='linkedIn col-2'><i className="fa-brands fa-linkedin fs-3"></i></a>
                            <a href="https://github.com/neffej" target="_blank" className='github col-2'><i className="fa-brands fa-github fs-3"></i></a>
                            <a href="mailto:eric.j.neff@gmail.com" target="_blank" className='email col-2'><i className="fa-regular fa-envelope fs-3"></i></a>
                            <a className='phone col-2'><i className="fa-solid fa-phone fs-3"></i></a>
                        </div>
                        <div className='container-fluid' id='navigation'>
                            <ul className='navbar-nav me-auto'>
                                <li className='nav-item row mt-5'>
                                    <a href="#home" className='nav-link text-light'><i className="fa-solid fa-house fs-6 m-2"></i> Home<span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className='nav-item row '>
                                    <a href="#about" className='nav-link text-light'><i className="fa-regular fa-user fs-6 m-2"></i> About</a>
                                </li>
                                <li className='nav-item row '>
                                    <a href="#resume" className='nav-link text-light'><i className="fa-solid fa-list-ul fs-6 m-2"></i> Resumé</a>
                                </li>
                                <li className='nav-item dropdown row '>
                                    <a href='#portfolio' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link-active text-light' : 'nav-link text-light'}>
                                        <i className="fa-regular fa-folder fs-6 m-2" id='portfolio-btn'></i> 
                                        Portfolio</a>
                                    {/* <ul className='row menu'>
                                        <li className='item' href='#portfolio'>Index</li>
                                        <li className="item" href="#">Asteroids</li>
                                        <li className="item" href="#">Calculator</li>
                                        <li className="item" href="#">Weather</li>
                                        <li className="item" href="#">Social Network</li>
                                        <li className="item" href="#">README</li>
                                        <li className="item" href="#">SQL Employees</li>
                                    </ul> */}
                                </li>
                                {/* <li className='row p-2'>
                                    <a href="#portfolio" onClick={() => handlePageChange('Asteroids')} className={currentPage === 'Asteroids' ? 'nav-link-active text-light' : 'portfolio-item text-light'}>Asteroids</a>
                                </li>
                                <li className='row p-2'>
                                    <a href="#portfolio" onClick={() => handlePageChange('Calculator')} className={currentPage === 'Calculator' ? 'nav-link-active text-light' : 'portfolio-item text-light'}>Calculator</a>
                                </li>
                                <li className='row justify-content-end p-2'>
                                    <a href="#portfolio" onClick={() => handlePageChange('Weather')} className={currentPage === 'Weather' ? 'nav-link-active text-light' : 'portfolio-item text-light'}>Weather</a>
                                </li>
                                <li className='row p-2'>
                                    <a href="#portfolio" onClick={() => handlePageChange('Network')} className={currentPage === 'Network' ? 'nav-link-active text-light' : 'portfolio-item text-light'}>Social Network</a>
                                </li>
                                <li className='row p-2'>
                                    <a href="#portfolio" onClick={() => handlePageChange('Node')} className={currentPage === 'Node' ? 'nav-link-active text-light' : 'portfolio-item text-light'}>README</a>
                                </li>
                                <li className='row p-2'>
                                    <a href="#portfolio" onClick={() => handlePageChange('SQL')} className={currentPage === 'SQL' ? 'nav-link-active text-light' : 'portfolio-item text-light'}>SQL Employees</a>
                                </li> */}
                                <li className='row '>
                                    <a href="#contact" className='nav-link text-light'><i className="fa-regular fa-paper-plane fs-6 m-2"></i> Contact</a>
                                </li>
                            </ul>
                        </div> {/* nav container div */}
                        </div> {/*profile div*/} 
                </div>
            </header>
    )
}