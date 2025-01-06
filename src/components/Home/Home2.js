import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SOCIAL } from "../../data/social";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I am proficient in
              <i>
                <b className="purple"> Java, Javascript and Typescript </b>
              </i>
              &nbsp;with strong skills in database management systems such as{" "}
              <i>
                <b className="purple">
                  {" "}
                  SQL Server, MongoDB, MySQL and PostgreSQL{" "}
                </b>
              </i>
              <br />
              <br />
              My passion lies in &nbsp;
              <i>
                <b className="purple">building modern web technologies and innovative products </b>
              </i>
              <br />
              <br />
              I enjoy applying my expertise in <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern frameworks
                </b>
              </i>
              &nbsp;like
              <i>
                <b className="purple"> ReactJS</b>
                &nbsp;and
                <b className="purple"> NextJS</b>
              </i>
              &nbsp; to develop high-quality, scalable solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={SOCIAL.GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SOCIAL.LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SOCIAL.FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
