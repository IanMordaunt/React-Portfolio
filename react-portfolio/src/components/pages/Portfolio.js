import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./Portfolio.css";
import Stoxster from '../../Assets/portfolio/Stox-ster.png'


function Portfolio(projects) {

  
  const [work] = useState([
    {
      name: "Stox-ster",
      image: '../../Assets/portfolio/Stox-ster.png',
      description: "Node.js, SQL, Handlebars, Express, Dcrypt, Dotenv",
      link: "",
      github: "https://github.com/IanMordaunt/Stox-ster",
    },
    // {
    //   name: "Tech Blog",
    //   image: "TechBlog-Img-Element",
    //   description: "Node.js, SQL, Hanldebars, Express, Bcrypt, Dotenv",
    //   link: "",
    //   github: "",
    // },
    // {
    //   name: "",
    //   id: "",
    //   description: "JS, HTML, CSS, Server Side APIs",
    //   link: "",
    //   github: "",
    // },
    // {
    //   name: "Weather Dashboard",
    //   image: "WeatherDash-Img-Element",
    //   description: "JS, HTML, CSS, Server Side APIs",
    //   link: "",
    //   github: "",
    // },
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
    // },
  ]);

  const { name, id, description, link, github } = work

  return (
    <div>
      <h2 className="my-work">Work Portfolio</h2>
      <section className="my-3">
        <div className="portfolio-div">
          {work.map((example, i) => (
            <Card key={example.name} id={example.id} className="WorkCard">
              <Col className="img-col">
                <img
                  src={`${example.image}`}
                  alt="Img of Stox-ster App"
                  className="project-bg"
                />
              </Col>
              <Card.Body>
                <Col>
                  <Card.Text>{example.description}</Card.Text>
                </Col>
                <div>
                  <Button
                    className="portBtn"
                    variant="primary"
                    href={example.link}
                  >
                    {example.name}
                  </Button>
                  <Button
                    className="portBtn2"
                    href={example.github}
                    className="github-link"
                  >
                    GitHub Repository
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
