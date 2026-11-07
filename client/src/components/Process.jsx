
import './Process.css'

const processSteps = [
  {
    number: '01',
    title: 'Consultation & Design',
    description: 'We begin by understanding your lab’s specific needs and create a customized design that maximizes space, safety, and workflow efficiency.',
    image: 'https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    number: '02',
    title: 'Material Selection & Planning',
    description: 'We carefully select the best materials for your lab furniture, ensuring durability, chemical resistance, and compliance with safety standards.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600'
  },
  {
    number: '03',
    title: 'Manufacturing & Installation',
    description: 'Our expert team manufactures and installs your lab furniture, ensuring everything is set up for optimal performance and safety.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600'
  }
]

function Process() {
  return (
    <section className="process-section">

      <div className="process-heading">
        <p>WORK PROCESS</p>
        <h2>Our Working Process</h2>
      </div>

      <div className="process-container">

        {processSteps.map((step) => (
          <div className="process-card" key={step.number}>

            <div className="process-image">
              <img src={step.image} alt={step.title} />

              <span className="process-number">
                {step.number}
              </span>
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Process;
