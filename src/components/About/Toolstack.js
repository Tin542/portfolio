import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiRender />, name: "Render" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <span>{tool.icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
