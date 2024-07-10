import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';

const About = () => {
  return (
    <Container id="about">
      <Row>
        <Col md={4} className="text-center">
          <Image src="/IMG_6067.JPG" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <hr />
          <p>Hello! I'm Sabelo Sibaya, proficient in modern web technologies and languages, with a strong foundation in both front-end and back-end development. Passionate about creating responsive and user-friendly web applications. Seeking a junior role to leverage my skills and contribute to innovative projects.</p>
          <h3>Education</h3>
          <p>
            <strong>ALX-AFRICA</strong><br />
            Graduate of an Intensive Full Stack Software Engineering Program<br />
            Specializing in Front-End Development
          </p>
          <ul>
            <li>Completed a comprehensive curriculum covering both front-end and back-end technologies.</li>
            <li>Gained proficiency in modern web technologies and languages.</li>
            <li>Developed a strong foundation in creating responsive and user-friendly web applications.</li>
          </ul>
          <h3>Interests</h3>
          <p>Web Development, UI/UX Design, Open Source, and Learning as Much as I Can.</p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default About;


