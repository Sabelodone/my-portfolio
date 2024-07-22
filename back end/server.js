require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Gmail email address from .env
    pass: process.env.EMAIL_PASS // Gmail password from .env or app-specific password
  }
});

// Mock endpoint for form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

  // Construct email message
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'Sabelozondo825@gmail.com', // Replace with your email address where you want to receive messages
    subject: 'New Contact Form Submission',
    text: `
      You have received a new contact form submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Form submitted successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
