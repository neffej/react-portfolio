import React from 'react';
import './Header.css';

export default function Header(){
    return(
            <header className="container-sm site-header bg-light p-15" id="header">
                <div className="wrap row" id='wrapper'>
                    <div className='profile col-sm-auto bg-dark sticky-top'>
                        <img src='https://avatars.githubusercontent.com/u/118024182?v=4' className='img-thumbnail rounded-circle m-2' width="250px" />
                         <h1 className='text-light row justify-content-center'>Eric Neff
                        </h1>
                        <div className='social-links mt-3 row justify-content-center'>
                            <a href="https://www.linkedin.com/in/eric-james-neff/" target="_blank" className='linkedIn col-2'><i className="fa-brands fa-linkedin fs-3"></i></a>
                            <a href="https://github.com/neffej" target="_blank" className='github col-2'><i className="fa-brands fa-github fs-3"></i></a>
                            <a href="mailto:eric.j.neff@gmail.com" target="_blank" className='email col-2'><i className="fa-regular fa-envelope fs-3"></i></a>
                            <a className='phone col-2'><i className="fa-solid fa-phone fs-3"></i></a>
                        </div>
                        <div className='row mt-5 p-2'>
                        <a href="#home" className='text-light'><i className="fa-solid fa-house fs-2 m-2"></i> Home</a>
                        </div>
                        <div className='row p-2'>
                        <a href="#about" className='text-light'><i className="fa-regular fa-user fs-2 m-2"></i> About</a>
                        </div>
                        <div className='row p-2'>
                        <a href="#resume" className='text-light'><i className="fa-solid fa-list-ul fs-2 m-2"></i> Resumé</a>
                        </div>
                        <div className='row p-2'>
                        <a href='#portfolio' className='text-light'><i className="fa-regular fa-folder fs-2 m-2"></i> Portfolio</a>
                        </div>
                        <div className='row p-2'>
                        <a href="#contact" className='text-light'><i className="fa-regular fa-paper-plane fs-2 m-2"></i> Contact</a>
                        </div>
                        </div> {/*profile div*/} 
                </div>
            </header>
    )
}