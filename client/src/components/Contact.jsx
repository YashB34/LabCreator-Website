
import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target

    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const phone = form.phone.value.trim()
    const address = form.address.value.trim()
    const service = form.service.value
    const message = form.message.value.trim()

    // Name validation
    if (name.length < 2) {
      setStatus('Please enter a valid name.')
      return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
      setStatus('Please enter a valid 10-digit mobile number.')
      return
    }

    // Message validation
    if (message.length < 10) {
      setStatus('Message must contain at least 10 characters.')
      return
    }

    try {
      setLoading(true)
      setStatus('Submitting your enquiry...')

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          service,
          message
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.')
      }

      setStatus('Your enquiry has been submitted successfully!')
      form.reset()

    } catch (error) {
      console.error('Form Submission Error:', error)
      setStatus(error.message || 'Unable to submit. Please try again.')

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-form-card">
        <h2>Send Us Message</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name <span>*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                minLength="2"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email <span>*</span></label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Your Number <span>*</span></label>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Address</label>
            <textarea
              name="address"
              placeholder="Your address"
              rows="2"
            />
          </div>

          <div className="form-group">
            <label>Service Required</label>
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select Service Interest
              </option>
              <option>Laboratory Furniture</option>
              <option>Fume Hoods</option>
              <option>BioSafety Cabinets</option>
              <option>Laboratory Design</option>
              <option>Installation & Maintenance</option>
              <option>Other Services</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message <span>*</span></label>
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              minLength="10"
              required
            />
          </div>

          <button
            type="submit"
            className="send-button"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Send Message'}
          </button>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
