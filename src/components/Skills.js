import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
];

const Skills = () => {
  return (
    <Container id="skills">
      <h2>Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={3} key={index} className="skill-col">
            <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
              <Card className="skill-card">
                <Card.Body>
                  <div className="icon-container" style={{ color: skill.color }}>
                    <i className={skill.icon}></i>
                  </div>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
