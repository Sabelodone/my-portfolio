import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import axios from 'axios';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setResponseMessage('There was an error submitting the form.');
    }
  };

  return (
    <Container id="contact">
      <h2>Contact</h2>
      <hr />
      <Row>
        <Col md={6}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {responseMessage && <p>{responseMessage}</p>}
            </Form>
          </ScrollAnimation>
        </Col>
        <Col md={6}>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <div>
              <h3>Download Resume</h3>
              <Button
                variant="primary"
                href={process.env.PUBLIC_URL + "./my resume - 2024-06-26 10_15_40.pdf"}
                download="Resume.pdf"
              >
                Download Resume
              </Button>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
