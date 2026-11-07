
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-about">

          <div className="footer-logo">
            <h2>LAB<span>CREATOR</span></h2>
            <p>A Brand of CHAMEZA GROUP</p>
          </div>

          <p className="footer-description">
            Our company’s core values are rooted in quality,
            safety, sustainability, and customer-centric
            innovation. An ISO 9001:2015 certified company
            and one of India’s leading manufacturers of
            fume hoods and laboratory furniture.
          </p>

        </div>

        {/* Contact Information */}
        <div className="footer-contact">

          <h3>Contact</h3>

          <a href="mailto:Inquiry@labcreator.in">
            Inquiry@labcreator.in
          </a>

          <p className="footer-phone">
            +91 8828991702
          </p>

          <p className="footer-address">
            Office no. 104 & 103, Raj swastik chs ltd.,
            daulat nagar road no.3, post office lane,
            Maharashtra 400066
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#about">➜ About Us</a></li>
            <li><a href="#projects">➜ Our Projects</a></li>
            <li><a href="#services">➜ Our Services</a></li>
            <li><a href="#contact">➜ Contact</a></li>
          </ul>

        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © All rights reserved by <span>Lab Creator</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer
