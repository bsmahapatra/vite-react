
function ProjectList() {



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


    return(

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

    );
}

export default ProjectList