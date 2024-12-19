import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
import springBootLogo from "../About/spring.png"; // Replace with your image path

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <FaJava style={{ color: '#007396' }} />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiJavascript1 style={{ color: '#F7DF1E' }} />
</Col>
      <Col xs={4} md={2} className="tech-icons">
  <div style={{ position: 'relative' }}>
  <img 
  src={springBootLogo} 
  alt="Spring Boot Logo" 
  style={{ 
    height: '50px', 
    filter: 'grayscale(100%) brightness(50%) contrast(80%)' 
  }} 
/>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: 0.5,
      zIndex: 1
    }} />
  </div>
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiNodejs style={{ color: '#68A063' }} />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiReact style={{ color: '#61DAFB' }} />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiMongodb style={{ color: '#47A248' }} />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <DiGit style={{ color: '#F1502F' }} />
</Col>

      <Col xs={4} md={2} className="tech-icons">
  <SiPostgresql style={{ color: '#336791' }} />
</Col>
      <Col xs={4} md={2} className="tech-icons">
  <DiPython style={{ color: '#3776AB' }} />
</Col>
      <Col xs={4} md={2} className="tech-icons" >
      <IoLogoHtml5  color="#E34F26"  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoCss3   color="#1572B6" />
      </Col>
    </Row>
  );
}

export default Techstack;
