
import { useState } from 'react'
import './WhoWeAre.css'

const questions = [
  {
    question: 'What types of laboratory furniture do you offer?',
    answer: 'We offer a range of laboratory furniture, including workbenches, fume hoods, storage cabinets, and custom designs tailored to the specific needs of your laboratory.'
  },
  {
    question: 'How do I get a custom lab furniture design?',
    answer: 'You can contact our team to discuss your laboratory requirements. We will help you plan and develop a customized furniture design.'
  },
  {
    question: 'Are your products compliant with safety regulations?',
    answer: 'Our products are designed with laboratory safety, quality, and durability in mind to meet the requirements of modern laboratory environments.'
  }
]

function WhoWeAre() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <section className="who-section">

      <div className="who-hero">
        <div className="who-overlay"></div>

        <div className="who-heading">
          <p>WHO WE ARE</p>
          <h2>
            Where innovation meets precision, we build
            the foundation for scientific discovery
          </h2>
        </div>
      </div>

      <div className="who-content">

        <div className="faq-card">

          {questions.map((item, index) => (
            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() =>
                  setActiveQuestion(
                    activeQuestion === index ? null : index
                  )
                }
              >
                <span>
                  {index + 1}. {item.question}
                </span>

                <span className="faq-icon">
                  {activeQuestion === index ? '−' : '+'}
                </span>
              </button>

              {activeQuestion === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

        <div className="who-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
            alt="Modern laboratory workspace"
          />
        </div>

      </div>

    </section>
  )
}

export default WhoWeAre;
