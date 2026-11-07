
import { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  {
    tagline: 'STRATEGIC . INNOVATE . EXCELLENCE',
    title: <>EMPOWER<br />ELEVATE</>,
    button: 'GET STARTED',
    image: 'https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    tagline: 'DESIGN . CREATE . INSPIRE',
    title: <>COMPLETE<br />YOUR LAB</>,
    button: 'EXPLORE MORE',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=90'
  },
  {
    tagline: 'QUALITY . INNOVATION . TRUST',
    title: <>BUILDING<br />THE FUTURE</>,
    button: 'CONTACT US',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=90'
  }
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content" key={currentSlide}>
        <p className="hero-tagline">{slides[currentSlide].tagline}</p>
        <h1 className="hero-title">{slides[currentSlide].title}</h1>
        <button className="hero-button">
          {slides[currentSlide].button}
        </button>
      </div>

      <div className="hero-indicators">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={currentSlide === index ? 'indicator active' : 'indicator'}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button className="floating-contact">💬 Contact Us</button>
    </section>
  )
}

export default Hero;
