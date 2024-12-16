import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  
} from "react-icons/si";
import { SiWindows } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
  <SiWindows style={{ color: '#00a4ef' }} />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiVisualstudiocode style={{ color: '#0066FF' }} />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiPostman style={{ color: '#FF6C37' }} />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiVercel style={{ color: '#1F7CFF' }} />
</Col>

    </Row>
  );
}

export default Toolstack;
