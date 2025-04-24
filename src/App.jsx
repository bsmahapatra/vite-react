import { useState } from 'react'
import './App.css'

function App() {  

    const name = "Karma Kumar Rout";
    const profession = "Fullstack Developer (Reactjs+NodeJs)";

    const projects = 
    [
      {
        title : "Project One",
        description: "A Webapplication built using React and Nodejs",
        link : "#"
      },

      {
        title : "Project two",
        description: "A desktop application for maintaining a departmental store",
        link : "#"
      },

      {
        title : "Project three",
        description: "A Mobile Application a health monitoring app using Flutter",
        link : "#"
      }
    ]
  return (
    
    <div className="App">
      <header className='header'>
        <h1>{name}</h1>
        <p>
          {profession}
        </p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contacts</a>
        </nav>
      </header>
      {/*About Section */}
      <section id ='about' className='about-section'>
        <h2>About me</h2>
        <p>Hello! I am <b>{ name }</b>, a passionate { profession }. I love to built web application that solves real world problems</p>
      </section>

      {/* Projects section */}
      <section id = 'projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <h3><i>{project.title}</i></h3>
              <h4>{project.description}</h4>
              <a href={project.link} target='_blank' rel="noopener noreferrer">View Project</a>

            </div>
          ))}
        </div>
      </section>

      <section id='contact'className='contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to email me at <a href='mailto:karma.rout@gmail.com'>karma.rout@gmail.com
          </a></p>
      </section>

        {/* Footer Section*/}
          <footer className='footer'>
            <p>2025. All Rights Reserved</p>
          </footer>

    </div>
    
  )
}

export default App