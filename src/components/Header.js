import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      console.log(response.data);
      handleClose(); // Close modal after successful submission
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      // Handle error state or alert user
    }
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">SABELO</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <Button className="btn btn-primary" onClick={handleShow}>Contact</Button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" onChange={handleChange} required />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose} className="mr-2">Close</Button>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
