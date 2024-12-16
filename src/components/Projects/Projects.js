import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Placement Portal"
              description="Placement Portal is a full-stack web application built using JSP for the frontend and Spring Boot for the backend. The system facilitates seamless placement management, featuring company registrations, job postings, student profiles, and an admin dashboard for managing recruitment activities."
              ghLink="https://github.com/klu-2200030106/PIS"
              demoLink="https://pis-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quiz App"
              description="A dynamic quiz application built using C# and MySQL, designed for seamless user interaction and robust data management. It enables users to create, take, and evaluate quizzes while securely storing results in a relational database."
              ghLink="https://github.com/klu-2200030106/OnlineQuiz-VP"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Food Ordering App"
              description="The Online Food Ordering System is a web application built using Python and the Django framework. It allows users to browse menus, place orders, and make payments online. The system uses PostgreSQL as the database to store user, order, and menu information securely."
              ghLink="https://github.com/klu-2200030106/Online-Food-Ordering"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="EBookStore"
              description="An Online Book Store built using the MERN stack, with a React.js frontend for dynamic and user-friendly interfaces, and a Node.js + Express.js backend for robust APIs, integrated with MongoDB for efficient data storage and management."
              ghLink="https://github.com/klu-2200030106/SDP1"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Car Show Room Management"
              description="The Car Showroom Management System is a Java EE project designed to manage the operations of a car showroom efficiently. It is deployed on the Red Hat JBoss EAP Server and uses MySQL for storing data.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/klu-2200030106/Online-Car-Show-Room-Management"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
