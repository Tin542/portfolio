import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiMaterializecss,
} from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
  SiExpress,
  SiAntdesign,
  SiMicrosoftazure,
  SiTailwindcss 
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaGitlab } from "react-icons/fa";

function Techstack() {
  const categories = [
    {
      title: "Programming Language",
      tools: [
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <DiJava />, name: "Java" },
      ],
    },
    {
      title: "Back-end",
      tools: [
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <SiNestjs />, name: "NestJS" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <GrGraphQl />, name: "GraphQL" },
      ],
    },
    {
      title: "Front-end",
      tools: [
        { icon: <DiReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <SiAntdesign />, name: "Ant Design" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <DiMaterializecss />, name: "Materialize CSS" },
      ],
    },
    {
      title: "Database",
      tools: [
        { icon: <SiMicrosoftsqlserver />, name: "Microsoft SQL Server" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <DiMongodb />, name: "MongoDB" },
      ],
    },
    {
      title: "Source Management",
      tools: [
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaGitlab />, name: "GitLab" },
        { icon: <SiMicrosoftazure />, name: "Azure DevOps Repo" },
      ],
    },
  ];

  return (
    <section>
      {categories.map((category, index) => (
        <div key={index} style={{ paddingBottom: "50px" }}>
          <Row>
            <strong style={{fontSize: '25px'}}>{category.title}</strong>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            {category.tools.map((tool, toolIndex) => (
              <Col xs={4} md={2} className="tech-icons" key={toolIndex}>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${index}-${toolIndex}`}>
                      {tool.name}
                    </Tooltip>
                  }
                >
                  <span>{tool.icon}</span>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </section>
  );
}

export default Techstack;
