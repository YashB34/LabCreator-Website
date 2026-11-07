
import './Care.css'

function Care() {
  return (
    <section className="care-section">

      <div className="care-gallery">
        <div className="care-main-image">
          <img
            src="https://labcreator.in/img/Flux_Schnell_A_professionally_designed_Indian_laboratory_inter_3.jpg"
            alt="Modern laboratory"
          />
        </div>

        <div className="care-small-images">
          <img
            src="https://labcreator.in/img/Flux_Schnell_A_quality_control_and_testing_area_inside_an_Indi_3.jpg"
            alt="Laboratory interior"
          />
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600"
            alt="Research laboratory"
          />
        </div>

        <div className="experience-badge">
          <h3>30+ Years of Experience</h3>
        </div>
      </div>

      <div className="care-content">

        <p className="care-tagline">
          WHAT DO WE CARE ABOUT?
        </p>

        <h2>
          We offer the best design and development services!
        </h2>

        <p className="care-description">
          Our objective is to offer a high-quality service
          and a dependable source of income to our investors
          while simultaneously minimizing any potential risks
          and automating and simplifying the relationships.
          Grow our presence in both domestic and international
          markets by targeting new sectors, such as pharmaceutical
          labs, educational institutions, and research centers,
          while maintaining our reputation for excellence.
        </p>

        <div className="care-bottom">

          <div className="ceo-card">
            <h3>Vishal Panchal</h3>
            <p>CEO, LabCreator</p>
          </div>

          <div className="care-points">
            <p>✓ Customer Service & Support</p>
            <p>✓ Quality Assurance & Durability</p>
            <p>✓ Sustainability & Customer-Centric Design</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Care
