import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/digital-cloud-data-storage-digital-concept-cloudscape-digital-online-service-global-network-database-backup-computer-infrastructure-technol.jpg";
import projImg2 from "../assets/img/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg";
import projImg3 from "../assets/img/isometric-devops-illustration_52683-84175.avif";
import projImg4 from "../assets/img/64e4b431e8e8131449f70444_Image-from-www.toools.design-on-2023-08-22-at-3.12.09-PM.jpeg";
import projImg5 from "../assets/img/k.avif";
import projImg6 from "../assets/img/Screenshot 2024-10-27 205343.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "PyCloudOps",
      description: "AWS Task Automation SuiteScript",
      imgUrl: projImg1,
      githubLink: "https://github.com/Preetykumari22/aws_projects"
    },
    {
      title: "PetPredictor",
      description: "Image classification CNN",
      imgUrl: projImg2,
      githubLink: "https://github.com/Preetykumari22/CatVsDogML"
    },
    {
      title: "My DevOps Project",
      description: "EC2 instance deployed",
      imgUrl: projImg3,
      githubLink: "https://github.com/Preetykumari22/website"
    },
    {
      title: "Domain Expert Model (GEN-AI)",
      description: "Fine-tuned text generation",
      imgUrl: projImg4,
      githubLink: "https://github.com/Preetykumari22/GEN-AI-AWS-"
    },
    {
      title: "Sticky Notes",
      description: "Interactive sticky notes",
      imgUrl: projImg5,
      githubLink: "https://github.com/Preetykumari22/sticky_n"
    },
    {
      title: "Netflix Clone",
      description: "HTML/CSS Netflix clone",
      imgUrl: projImg6,
      githubLink: "https://github.com/Preetykumari22/Netflix_clone"
    },
  ];

  const extracurriculars = [
    {
      title: "Participated in the AWS DeepRacer contest.",
    },
    {
      title: "Completed Machine Learning by Udemy.",
    },
    {
      title: "Passed the internal level of Smart India Hackathon 2024, progressing to the next phase.",
    },
    {
      title: "Certified and received swags in GOOGLE CLOUD STUDY JAM.",
    },
    {
      title: "Doing ARCADE labs+projects for at least 10 months also received SWAGS.",
    },
    {
      title: "Completed the course on introduction to Machine learning and reinforcement learning by AWS.",
    },
    {
      title: "Certified in python learning by freecodecamp.",
    },
    {
      title: "received badges + linkedin premium in Microsoft Learn Student Ambassadors event.",
    },
    {
      title: "500+ designs in canva + basics of illustrator.",
    },
  ];

  const positions = [
    {
      title: "IEEE MP SECTION | VOLUNTEER",
    },
    {
      title: "IEEE GGV | SECRETARY",
    },

    {
      title: "SILICON GGV | GRAPHIC DESIGNER",
    },
    {
      title: "ECE NEWSLETTER (THE FLIP FLOP) | LEAD",
    },
    {
      title: "EQUILIBRIO TECHFEST GGV | GRAPHIC DESIGNER",
    },
    {
      title: "JOURNAL OF AI & CS (JAICS) | Author & Publisher",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Accomplishments</h2>
                  <p>Led projects in AWS Cloud and app development; awarded in Walmart Sparkathon, SIH, and Google Cloud. As ECE Flip Flop lead and Foruppo Fellow, I strengthened leadership, communication, and organizational skills.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Extracurricular Achievements</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Position of Responsibility</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {extracurriculars.map((activity, index) => (
                            <Col key={index} sm={6} md={4}>
                              <div className="activity-card">
                                <h5>{activity.title}</h5>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {positions.map((position, index) => (
                            <Col key={index} sm={12} md={4}>
                              <div className={`position-card ${index % 2 === 0 ? 'bg-light' : 'bg-dark text-white'}`}>
                                <h5>{position.title}</h5>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
