
import './Projects.css'

const projects = [
  {
    title: 'Pharmaceutical Laboratory Project',
    description: 'Our team has vast experience in delivering modern pharmaceutical laboratory solutions.',
    image: 'https://images.unsplash.com/photo-1788010234756-799c8cff02ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    title: 'University Educational Laboratory Project',
    description: 'LabCreator specializes in designing and developing educational laboratory spaces.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800'
  },
  {
    title: 'Research & Technology Laboratory Project',
    description: 'We are committed to providing customers with advanced research environments.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800'
  },
  {
    title: 'Chemical Processing Laboratory',
    description: 'We create efficient and safe laboratory solutions for chemical industries.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800'
  }
]

function Projects() {
  return (
    <section className="projects-section">

      <div className="projects-heading">
        <p>OUR PROJECTS</p>
        <h2>Art of Work</h2>
      </div>

     
<div className="projects-container">
  <div className="projects-track">
    {[...projects, ...projects].map((project, index) => (
      <div className="project-card" key={index}>

        <div className="project-marker">
          <span></span>
        </div>

        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

      </div>
    ))}
  </div>
</div>

    </section>
  )
}

export default Projects;
