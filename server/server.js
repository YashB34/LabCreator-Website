
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const contactRoutes = require('./routes/contactRoutes')

const app = express()

// Security and Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}))

app.use(express.json({ limit: '10kb' }))

// Contact API
app.use('/api/contact', contactRoutes)

// Test API
app.get('/', (req, res) => {
  res.send('LabCreator Backend Running!')
})

// Start Server after MongoDB connection
const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log('MongoDB Connected Successfully!')

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })

  } catch (error) {
    console.error('MongoDB Connection Error:', error.message)
    process.exit(1)
  }
}

startServer()
