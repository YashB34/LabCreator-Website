
import './Services.css'

function Services() {
  return (
    <section className="services-section">

      <div className="services-heading">
        <p>WHAT WE DO</p>
        <h2>Services That Help You Grow.</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>Turnkey Services</h3>
          <p>
            Our turnkey construction solutions provide
            a hassle-free experience, as we oversee
            every aspect from initial planning to final
            implementation.
          </p>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Laboratory construction"
            />
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3>Support Service</h3>
          <p>
            We offer planning and assembly support
            for your laboratory requirements, helping
            you throughout the complete process.
          </p>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700"
              alt="Laboratory support"
            />
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">🛡️</div>
          <h3>Planning & Safety</h3>
          <p>
            Our team of experts understands your
            specific needs and requirements to develop
            customized laboratory safety solutions.
          </p>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700"
              alt="Laboratory safety"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services;
