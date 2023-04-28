import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <section id='resume' className='resume m-4'>
      <div className='section-title'>
        <h2 id='title'>Resumé</h2>
        <p>Please see a small record of my professional achievements below.</p>
        {/* <a href='../static/media/eric_neff_resume.pdf' target='_blank'>
          Resumé 
        </a> */}
      </div>
      <div className='row'>
        <div className='col-lg-6 aos-init aos-animate' data-aos='fade-up'>
          <h3 className='resume-title'>Summary</h3>
          <div className='resume-item pb-0'>
            <h4>Eric Neff</h4>
            <p>
              <em>
                Productive problem-solver, deadline-driven with 4 years of
                management experience interfacing with all shareholders and
                creating innovative, assertive solutions to move the
                organization from reacting to creating.
              </em>
            </p>
          </div>
          <h3 className='resume-title'>Education</h3>
          <div className='resume-item'>
            <h4>Full-Stack Coding Bootcamp</h4>
            <h5>2023</h5>
            <p>
              <em>Georgia Institute of Technology</em>
            </p>
            <p>
              MERN-stack focused program that brought participants from a basic
              understanding of HTML & CSS through creating fully-deployed
              websites using React, MongoDB and GraphQL. Practical and
              product-driven, every component created a portfolio project to
              practice and display fundamental web development skills.
            </p>
          </div>
          <div className='resume-item'>
            <h4>Master of Science in Technology</h4>
            <h5>2013 - 2015</h5>
            <p>
              <em>Appalachian State University</em>
            </p>
            <p>
              Data-driven approach to societal change through the crux of
              technology. Developed a thesis that modeled effects of energy
              value based on policy changes using MS Excel.
            </p>
          </div>
        </div>
        <div
          className='col-lg-6 aos-init aos-animate'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <h3 className='resume-title'>Professional Experience</h3>
          <div className='resume-item'>
            <h4>Data Analyst, Office of Sustainability</h4>
            <h5>2014 - 2016</h5>
            <p>
              <em>Appalachian State University, Boone, NC</em>
            </p>
            <ul>
              <li>
                Led in the installation of remote sensors in renewable energy
                systems on campus
              </li>
              <li>
                Used MS Excelt to analyze data; identified several faulty
                systems, leading to their repair or replacement. Faulty systems
                represented $500k investment, and $40k in energy savings per
                year.
              </li>
              <li>
                Analyzed financial performance of potential energy system
                investments using MS Excel. This analysis convinced the student
                investment body to pursue economies of scale i.e. large
                investments rather than piece-meal projects.
              </li>
            </ul>
          </div>
          <div className='resume-item'>
            <h4>Assistant Manager of Rafting Operations</h4>
            <h5>2019 - 2022</h5>
            <p>
              <em>Nantahala Outdoor Center, Wesser, NC</em>
            </p>
            <ul>
              <li>
                Created digital resource schedules using Google Sheets and MS
                Excel. Prior to my hire, employees got their schedule by calling
                a voice recording. I migrated the system to a shareable Google
                Sheet which reduced scheduling time by more than 10 hours per
                week, created accountability and long-term forecasting for
                staff, and improved our labor/revenue by 20%{' '}
              </li>
              <li>
                This system also collected data, leading to my department's
                first ever native data suite.
              </li>
              <li>
                Analysis and utilization of the suite led to optimization of
                bookings and availability, creating more than $50k in new
                revenue opportunities per year.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
