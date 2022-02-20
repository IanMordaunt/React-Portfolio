import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "../../App.css";

function Portfolio() {
  const [work] = useState([
    {
      name: "Stox-ster",
      image: "Stox-ster",
      description: "Stox-ster is a personalized stock trading application",
      tech: "Node.js, SQL, Handlebars, Express, Dcrypt, Dotenv" ,
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
    {
      name: "Team Generator",
      image: "team_generator",
      description: "JS, HTML, CSS, Server Side APIs",
      link: "",
      github: "",
    },
    {
      name: "Weather Dashboard",
      image: "weather-dashboard",
      description: "JS, HTML, CSS, Server Side APIs",
      link: "",
      github: "",
    },
    {
      name: "Note Taker",
      image: "note-taker",
      description: "HTRML, Bootstrap, JQuery",
      link: "https://shielded-harbor-18931.herokuapp.com/notes",
      github: "https://github.com/IanMordaunt/Note-Taker",
    },
    {
      name: "Tech Blog",
      image: "Tech-Blog",
      description: "HTML, Bootstrap, JS",
      link: " https://mvc-tech-block-ian.herokuapp.com/",
      github: "https://github.com/IanMordaunt/mvc-tech-blog-mordaunt",
    },
    // {
    //   name: "",
    //   image: "",
    //   description: "HTML, CSS",
    //   link: "",
    //   github: "",
    // },,,
     // {
    //   name: "",
    //   image: "",
    //   description: "HTML, CSS",
    //   link: "",
    //   github: "",
    // },,,
  ]);

  return (
    <div className="portfolioContainer">
      <div className="projTitle">
      <h2 className="my-work">- Projects -</h2>
      </div>
      <section className="my-3">
        <div className="portfolio-div">
          {work.map((example, i) => (
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
                    <br></br>
                    {example.tech}
                  </Card.Text>
                </Col>
                <div>
                  <Button className="portBtn" href={example.link} traget='_blank'>
                    {example.name}
                  </Button>
                  <Button className="portBtn" href={example.github} traget='_blank'>
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
