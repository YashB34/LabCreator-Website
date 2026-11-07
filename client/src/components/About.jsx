
import './About.css'

function About() {
  return (
    <section className="about-section">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Laboratory workspace"
        />
      </div>

      <div className="about-content">

        <p className="about-tagline">ABOUT OUR COMPANY</p>

        <h2>
          Building Better
          <span> Laboratory Environments</span>
        </h2>

        <p>
          LabCreator provides modern laboratory furniture
          and equipment designed to support safe, efficient
          and productive research environments.
        </p>

        <p>
          Our focus is on quality, innovation and practical
          solutions that meet the changing needs of modern
          laboratories.
        </p>

        <button>Learn More</button>

      </div>

    </section>
  )
}

export default About
