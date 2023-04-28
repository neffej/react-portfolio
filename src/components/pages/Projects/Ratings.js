import React from 'react'
import Ratings from '../../assets/Rateacop.gif'

export default function Node() {
  return (
    <section id='portfolio' className='portfolio-item'>
      <div className='container'>
        <div className='section-title'>
          <h1>MERN-stack Rating Website</h1>
          <h5>React / JWT / Tailwind / GraphQL / MongoDB</h5>
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
            href='https://rate-a-cop-acab.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='img-fluid'
              src={Ratings}
              alt='functionality gif'
            ></img>
          </a>
        </div>
        <div className='col-lg-8 portfolio-info'>
          <p>
            This deployed, online rating system was designed to allow community
            members to give anonymous feedback to police departments. Users can
            search for their city and leave feedback anonymously, which is
            stored on the back-end. There is also a login feature which allows
            users to see all of the feedback they have left. Each city displays
            an average of their ratings, as well as a graphic that changes based
            on their score.{' '}
          </p>
          <ul className='fs-4'>
            Future Developments:
            <li className='fs-6'>Implement Login/Sign-up feature using JWT</li>
            <li className='fs-6'>Improve specificity of city selection</li>
            <li className='fs-6'>
              Allow registered users to post replies to feedback entries
            </li>
          </ul>
          <div>
            <a href='https://github.com/p0ptartz/rate-a-cop'>Github Link</a>
          </div>
          <div>
            <a href='https://rate-a-cop-acab.herokuapp.com/'>Deployed Link</a>
          </div>
        </div>
      </div>
    </section>
  )
}
