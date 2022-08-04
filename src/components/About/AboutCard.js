import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Batuhan Yılmaz </span>
            from <span className="purple"> Istanbul, Turkey.</span>
            <br />I am an <span className="purple"> Architech</span> with a degree in Architecture, I know my design side is strong and because of my special interest in software, 
I started developing projects in the field of <span className="purple">Front-End Developer</span>. Apart from that,
 I received training in the field of <span className="purple">UI/UX</span> Design and I make designs and developments in this field. 
 I can speak B2+ level <span className="purple">English </span> and A2 level <span className="purple">German</span>, after improving myself in these languages, 
 it will be to increase my <span className="purple">French</span> from A1 to B1 level.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing an instrument (Piano, Cello, Flute)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Hobby Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Influencership
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing & Design Something
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What keeps us alive is receiving joy!"{" "}
          </p>
          <footer className="blockquote-footer">Best regards, Batuhan <span className="wave" role="img" aria-labelledby="wave">
          😊
                </span></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
