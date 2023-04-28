import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id='about' className='about m-2'>
      <div className='section-title'>
        <h2 id='intro'>About</h2>
        <p>
          I'm a competitive and results-oriented person who believes that
          greatness and success is always a team endeavor. I'm driven to find
          solutions that work for all stakeholders - a good solution makes
          everyone feel like a winner. I believe in the value of
          "intrepreneurship", or finding value and efficiency in existing
          processes, while recognizing that growth and change are inevitable,
          exciting, and profitable if they can be accounted for. I've had a
          wonderful career in adventure and hospitality with a foray into higher
          education, and I'm excited to start a new journey in software and
          technology.
        </p>
      </div>
      <div className='row'>
        <div className='col-lg-4 aos-init aos-animate' data-aos='fade-right'>
          <img
            src='https://i.imgur.com/rnRjMxh.jpg'
            className='img-fluid'
            alt='headshot of Eric Neff'
          ></img>
        </div>
        <div
          className='col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate'
          data-aos='fade-left'
        >
          <h3>MERN Stack Junior Developer</h3>
          <p className='fst-italic'>
            Experienced working with front and back-end development protocols,
            as well as Test-Driven Development and Progressive Web Applications
          </p>
          <div className='row'>
            <div className='col-lg-6'>
              <ul>
                <li>
                  <i className='fa-solid fa-chevron-right'> </i>
                  <strong> Website: </strong>
                  <span>https://github.com/neffej</span>
                </li>
                <li>
                  <i className='fa-solid fa-chevron-right'> </i>
                  <strong> Phone: </strong>
                  <span>+1(828)200-0769</span>
                </li>
                <li>
                  <i className='fa-solid fa-chevron-right'> </i>
                  <strong> City: </strong>
                  <span>Clayton, GA</span>
                </li>
              </ul>
            </div>
            <div className='col-lg-6'>
              <ul>
                <li>
                  <i className='fa-solid fa-chevron-right'> </i>
                  <strong> Degree: </strong>
                  <span>Master of Science</span>
                </li>
                <li>
                  <i className='fa-solid fa-chevron-right'> </i>
                  <strong> Email: </strong>
                  <span>eric.j.neff@gmail.com</span>
                </li>
                <li>
                  <i className='fa-solid fa-chevron-right'> </i>
                  <strong> Job Status: </strong>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            I'm looking for full-time remote work in full-stack, front-end or
            back-end development.
          </p>
        </div>
      </div>
      <div className='section-title'>
        <h2 id='skills'>Skills</h2>
        <p>
          Skills are the pillar of utility. I began my interest in computer
          engineering with MS Excel, and have taken many steps with Georgia
          Tech's Full-Stack Flex Coding Boot Camp. I'm actively pursuing
          projects to practice SQL & MongoDB, and I intend to learn Python and
          Tableau as well. Currently, I am familiar with:
        </p>
        <div className='skills-items row'>
          <div className='col-lg-4'>
            <ul>
              <li>HTML / CSS </li>
              <li>MS Excel</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className='col-lg-4'>
            <ul>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div className='col-lg-4'>
            <ul>
              <li>MongoDB</li>
              <li>React</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
