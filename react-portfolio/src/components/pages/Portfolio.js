import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "./Portfolio.css";

function Portfolio() {
  const [work] = useState([
    {
      name: "Stox-ster",
      image: "Stox-ster",
      description: "Node.js, SQL, Handlebars, Express, Dcrypt, Dotenv",
      link: "https://ianmordaunt.github.io/Stox-ster/",
      github: "https://github.com/IanMordaunt/Stox-ster",
    },
    {
      name: "Auto Part Inventory Tracker",
      image: "Auto-Part-Inv-Tracker",
      description: "Node.js, SQL, Hanldebars, Express, Bcrypt, Dotenv",
      link: "",
      github: "",
    },
    // {
    //   name: "",
    //   id: "",
    //   description: "JS, HTML, CSS, Server Side APIs",
    //   link: "",
    //   github: "",
    // },
    {
      name: "Weather Dashboard",
      image: "weather-dashboard",
      description: "JS, HTML, CSS, Server Side APIs",
      link: "",
      github: "",
    },
    // {
    //   name: "Workday Scheduler",
    //   image: "WorkDay-Img-Element",
    //   description: "HTRML, Bootstrap, JQuery",
    //   link: "",
    //   github: "",
    // },
    // {
    //   name: "",
    //   image: "",
    //   description: "HTML, Bootstrap, JS",
    //   link: "",
    //   github: "",
    // },
    // {
    //   name: "",
    //   image: "",
    //   description: "HTML, CSS",
    //   link: "",
    //   github: "",
    // },,,
  ]);

  return (
    <div>
      <h2 className="my-work">Project Library</h2>
      <section className="my-3">
        <div className="portfolio-div">
          {work.map((example, i) => (
            <Row>
            <Card key={example.name} id={example.id} className="WorkCard">
              <Col className="img-col">
                <img
                  src={require(`../../Assets/portfolio/${example.image}.png`)}
                  alt="Img of portfolio project"
                  className="project-image"
                />
              </Col>
              <Card.Body>
                <Col>
                  <Card.Text className="description">
                    {example.description}
                  </Card.Text>
                </Col>
                <div>
                  <Button className="portBtn" href={example.link}>
                    {example.name}
                  </Button>
                  <Button className="portBtn" href={example.github}>
                    GitHub Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
            </Row>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
