import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Nguyễn Thành Tín </span>
          from <span className="purple"> Ho Chi Minh City.</span>
          <br />
          I graduated from FPT University.
          <br />
          Currently, I am working as a freelance web developer.
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Learning about software architecture and system design
          </li>
          <li className="about-activity">
            <ImPointRight /> Reading tech blogs
          </li>
          <li className="about-activity">
            <ImPointRight /> Exploring new web technologies
          </li>
        </ul>
      </blockquote>
    </Card.Body>
  </Card>
  );
}

export default AboutCard;
