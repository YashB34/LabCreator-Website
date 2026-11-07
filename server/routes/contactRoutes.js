const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

// POST API - Save contact enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, service, message } = req.body

    // Server-side validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.'
      })
    }

    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must contain at least 2 characters.'
      })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address.'
      })
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid 10-digit phone number.'
      })
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must contain at least 10 characters.'
      })
    }

    // Save enquiry in MongoDB
    const newContact = await Contact.create({
      name,
      email,
      phone,
      address,
      service,
      message
    })

    res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted successfully!',
      data: newContact
    })

  } catch (error) {
    console.error('Contact API Error:', error)

    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    })
  }
})

module.exports = router