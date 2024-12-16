import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kandula Rohith Kumar </span>
            from <span className="purple"> Vijayawada, India.</span>
            <br />
I am currently pursuing my B.Tech 3rd year at KL University, Guntur.
            <br />
            <br />
            Apart from Coding🧑‍💻, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling✈️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every Iteration is an opportunity to learn something new!"{" "}
          </p>
          <footer className="blockquote-footer">Rohith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
