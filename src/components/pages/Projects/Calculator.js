import React from 'react'
import MyGif from '../../assets/Homepage.gif'

export default function Calculator() {
  return (
    <section id='portfolio' className='portfolio-item'>
      <div className='container'>
        <div className='section-title'>
          <h1>Binge Show Calculator</h1>
          <h5>Node / Express / Web APIs / Agile Development</h5>
        </div>
      </div>
      <div
        className='row project-container p-2 aos-init aos-animate'
        data-aos='fade-up'
        data-aos-delay='100'
        id='project-container'
      >
        <div className='col-lg-4 portfolio-info'>
          <a
            href='https://camh915.github.io/Binge-Show-Calculator-p01/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='img-fluid' src={MyGif} alt='homepage gif'></img>
          </a>
        </div>
        <div className='col-lg-8 portfolio-info'>
          <p>
            This was the first group project of my bootcamp. We worked in a team
            of five and navigated the Agile development process. This project
            introduced me to the complexities of merging pull requests, which
            was especially complicated by the compact file structure of this
            webpage. As for technology, the page itself uses web APIs to return
            information about TV shows, and even features embedded YouTube
            trailers. The calculator still needs some work, but in our rushed
            development sprint, math took a back seat.
          </p>
          <ul className='fs-4'>
            Future Developments:
            <li className='fs-6'>Create user login with BCrypt</li>
            <li className='fs-6'>Fix the calculator math! </li>
            <li className='fs-6'>
              Create an autofill function in the show search
            </li>
          </ul>
          <div>
            <a href='https://camh915.github.io/Binge-Show-Calculator-p01/'>
              Deployed Link
            </a>
          </div>
          <div>
            <a href='https://github.com/neffej/Binge-Show-Calculator-p01'>
              Github Link
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
