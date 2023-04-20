import React from 'react';
import './Header.css';

export default function Header({ currentPage, handlePageChange }){
     
    return(
            <header className="container-sm site-header bg-light p-15" id="header">
                <div className="wrap row" id='wrapper'>
                    <div className='profile col-sm-auto bg-dark sticky-top'>
                        <img src='https://avatars.githubusercontent.com/u/118024182?v=4' className='img-thumbnail rounded-circle m-2' alt="avatar"width="250px" />
                         <h1 className='text-light row justify-content-center'>Eric Neff
                        </h1>
                        <div className='social-links mt-3 row justify-content-center'>
                            <a href="https://www.linkedin.com/in/eric-james-neff/" target="_blank" className='linkedIn col-2'><i className="fa-brands fa-linkedin fs-3"></i></a>
                            <a href="https://github.com/neffej" target="_blank" className='github col-2'><i className="fa-brands fa-github fs-3"></i></a>
                            <a href="mailto:eric.j.neff@gmail.com" className='email col-2'><i className="fa-regular fa-envelope fs-3"></i></a>
                            {/* <a href="#contact" onClick={()=> handlePageChange('Contact')} className='phone col-2'><i className="fa-solid fa-phone fs-3"></i></a> */}
                        </div>
                        <div className='container-fluid' id='navigation'>
                            <ul className='navbar-nav me-auto'>
                                <li className='nav-item row mt-5'>
                                    <a href="#home" onClick={()=> handlePageChange('Hero')} className={currentPage === 'Hero' ? 'nav-link-active text-primary' : 'nav-link text-light'}><i className="fa-solid fa-house fs-6 m-2"></i> Home<span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className='nav-item row '>
                                    <a href="#about" onClick={()=> handlePageChange('About')}className={currentPage === 'About' ? 'nav-link-active text-primary' : 'nav-link text-light'}><i className="fa-regular fa-user fs-6 m-2"></i> About</a>
                                </li>
                                <li className='nav-item row '>
                                    <a href="#resume" onClick={()=> handlePageChange('Resume')}className={currentPage === 'Resume' ? 'nav-link-active text-primary' : 'nav-link text-light'}><i className="fa-solid fa-list-ul fs-6 m-2"></i> Resumé</a>
                                </li>
                                <li className='nav-item dropdown row '>
                                    <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link-active text-primary' : 'nav-link text-light'}>
                                        <i className="fa-regular fa-folder fs-6 m-2" id='portfolio-btn'></i> 
                                        Portfolio</a>
                                </li>
                                <li className='row '>
                                    <a href="#contact" onClick={()=> handlePageChange('Contact')}className={currentPage === 'Contact' ? 'nav-link-active text-primary' : 'nav-link text-light'}><i className="fa-regular fa-paper-plane fs-6 m-2"></i> Contact</a>
                                </li>
                            </ul>
                        </div> {/* nav container div */}
                        </div> {/*profile div*/} 
                </div>
            </header>
    )
}