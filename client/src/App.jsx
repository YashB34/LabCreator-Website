
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Care from './components/Care'
import WhoWeAre from './components/WhoWeAre'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="about">
        <Care />
      </div>

      <div id="who-we-are">
        <WhoWeAre />
      </div>

      <div id="process">
        <Process />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App;
