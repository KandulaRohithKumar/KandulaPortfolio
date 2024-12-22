import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCards";
import Particle from "../Particle";

// Import certification images (you'll need to add these to your Assets folder)
import googleCloudCert from "../../Assets/Certifications/google-cloud.png";
import awsCert from "../../Assets/Certifications/aws-cert.png";
import microsoftCert from "../../Assets/Certifications/microsoft-cert.png";
import redhat from "../../Assets/Certifications/red-hat.png";
import si from "../../Assets/Certifications/Salesforce.jpeg";

function Certifications() {
  return (
    <Container 
      fluid 
      className="certification-section" 
      style={{ 
        paddingTop: '80px',  // Increased top padding to move down
        minHeight: 'calc(100vh - 80px)' // Ensure full viewport height minus navbar
      }}
    >
      <Particle />
      <Container>
        <h1 className="certification-heading">
          <strong className="purple">Global Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
            imgPath={googleCloudCert}
              title="Oracle Certified Professional Java-SE-11 Developer"
              description="Obtained the Oracle Certified Professional Java SE11 Developer certification,demonstrating advanced Java programming skills."
              certificateLink="https://catalog-education.oracle.com/ords/certview/sharebadge?id=7D1F92D18197EC948ED155FA78D75335A9279E4E9070421E000419D48B6D52D1"
              earnedDate="5 July 2024"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
            imgPath={awsCert}
              title="AWS Certified Cloud Practitioner"
              description="Earned the AWS Certified Cloud Practitioner certification, validating expertise in cloud fundamentals, AWS core services, security, architecture, pricing, and support."
              certificateLink="https://www.credly.com/badges/5d979652-7139-4238-b539-968da98f061c/public_url"
              earnedDate="31 July 2024"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
            imgPath={microsoftCert}
              title="Microsoft Certified Azure AI Fundamentals"
              description="Obtained the Microsoft Azure AI Fundamentals certification, showcasing understanding of core AI concepts, Azure AI services, machine learning."
              certificateLink="https://learn.microsoft.com/api/credentials/share/en-us/KANDULAROHITHKUMAR-9986/B8F947C8F999AAD3?sharingId=705E93D8B6B2654D"
              earnedDate="21 May 2024"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
            imgPath={redhat}
              title="Redhat Certified Enterprise Application Developer"
              description="Red Hat Certified Enterprise Application Developer (RHCEAD) validates skills in Java EE development, including CDI, JPA, RESTful APIs, security, and bean validation."
              certificateLink="https://www.credly.com/badges/c52db83a-7e37-435d-a885-5946c2e68245/public_url"
              earnedDate="6 November 2024"
            />
          </Col>

          <Col md={4} className="certification-card">
  <CertificationCard
    imgPath={si}
    title="Salesforce Certified AI Associate"
    description="Achieved the Salesforce Certified AI Associate certification, demonstrating knowledge of AI concepts, ethical considerations, and Salesforce's AI capabilities."
    certificateLink="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=h1tXa69pdl5NSk9leqYGv1P3VFjaultJJgDs8zZzVdQVuNGn2kG+42cXBiCuHEXl"
    earnedDate="19 October 2024"
  />
</Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;