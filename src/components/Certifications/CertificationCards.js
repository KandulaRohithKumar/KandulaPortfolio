import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificationCards(props) {
  return (
    <Card className="certification-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          width: '400px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          {props.earnedDate && (
            <p className="mb-0 text-muted">
              <strong>Earned:</strong> {props.earnedDate}
            </p>
          )}
          {props.certificateLink && (
            <Button
              variant="primary"
              href={props.certificateLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              View Credential
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificationCards;