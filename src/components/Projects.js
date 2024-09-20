import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './projects.css';

const initialProjects = [
  {
    title: "Massage Phela",
    description: "A website where you can select from various massage options, book your appointment, and confirm it",
    img: "/massage-phela.png",
    link: "http://massage-phela-xv3s-git-master-sabelodones-projects.vercel.app",
    github: "https://github.com/Sabelodone/massage-phela.git", 
    showDescription: false // Initial state for description visibility
  },
  {
    title: "Searchify",
    description: "Discover your dream job with ease. Let us guide you through a seamless search experience.",
    img: "/searchify.png",
    link: "http://example.com/project2",
    github: "https://github.com/Sabelodone/searchify.git",
    showDescription: false // Initial state for description visibility
  },
  {
    title: "My Portfolio",
    description: "My portfolio showcases a collection of projects highlighting my skills in web development and design. Using modern technologies and frameworks, it aims to demonstrate my proficiency in creating responsive and engaging web experiences. Tailored for potential employers and clients, it features a clean design, intuitive navigation, and showcases various projects that illustrate my expertise",
    img: "/my portfolio.png",
    link: "http://my-portfolio-tau-two-57.vercel.app",
    github: "https://github.com/Sabelodone/my-portfolio.git",
    showDescription: false // Initial state for description visibility
  },
  {
    title: "Suits-systems",
    description: "Suits Systems is a responsive web application tailored for law firms, focusing on seamless document management, case management, and time tracking.",
    img: "/Screenshot 2024-09-20 075900.png",
    link: "https://vercel.com/sabelodones-projects/suits-systems",
    github: "https://github.com/Sabelodone/law-firm_software/tree/master/suits-systems",
    showDescription: false // Initial state for description visibility
  },
  {
    title: "Cheza",
    description: "Cheza is a sleek and modern travel management website that provides users with a seamless platform to plan, book, and manage their travel experiences.",
    img: "/Screenshot 2024-09-20 081716.png",
    link: "https://cheza-phi.vercel.app/",
    github: "https://github.com/Sabelodone/cheza-website",
    showDescription: false // Initial state for description visibility
  },
  // Add more projects as needed
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);

  const toggleDescription = (index) => {
    const updatedProjects = projects.map((project, idx) => {
      if (idx === index) {
        return { ...project, showDescription: !project.showDescription };
      } else {
        return { ...project, showDescription: false };
      }
    });
    setProjects(updatedProjects);
  };

  return (
    <Container id="projects">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="project-card" onClick={() => toggleDescription(index)}>
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {project.showDescription && <Card.Text>{project.description}</Card.Text>}
                <Button variant="primary" href={project.link} target="_blank">View Project</Button>
                <Button variant="dark" className="ml-2" href={project.github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

