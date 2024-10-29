import React from 'react';


import colorSharp from "../assets/img/color-sharp2.png"


const WorkExperience = () => {

  const App = () => {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
          {/* Left side content */}
        </div>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
          {/* Right side content */}
        </div>
      </div>
    );
  };
  const experiences = [
    {
      title: "AWS Cloud Computing Intern | ",
      company: "Linux World PVT LMT",
      duration: "Jul'24 - Aug'24",
      description: [
        "I enhanced my skills in Python, Linux, RHEL 9, AWS services, and various DevOps tools during my internship. This experience deepened my understanding of software development and cloud technologies, preparing me for future challenges in the tech industry."
      ],
    },

    {
      title: "Software Engineering Intern | ",
      company: "Presear Software PVT LMT",
      duration: "Aug'22 - Jan'24",
      description: [
        "I gained hands-on experience with AWS services such as EC2, SES, S3, Load Balancer, and Security Groups. I successfully hosted several websites using EC2 and AWS Amplify. Additionally, I had the opportunity to lead my Cloud team, fostering collaboration and enhancing my technical knowledge while developing my leadership skills in a dynamic environment.",
      ],
    },
    
    {
      title: "Full Stack Developer Intern | ",
      company: "IEEE Bombay Section",
      duration: "Sep'23 - Nov'23",
      description: [
        "During my internship at IEEE Bombay Section, I received a Letter of Recommendation and a certificate for achieving a score of 8 out of 10 based on the successful completion of four weekly tasks. This recognition reflects my dedication and performance in full-stack development during my time at the organization."
      ],
    },
  ];

  return (
    <section id="work-experience" className="work-experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
      <div className="line"></div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3 className="title">
                {experience.title} <span className="company">@ {experience.company}</span>
              </h3>
              <p className="duration-location">
                {experience.duration} | {experience.location}
              </p>
              <ul className="description-list">
                {experience.description.map((item, i) => (
                  <li className="description-item" key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}



      </div>
      <img className="background-image-right" src={colorSharp} alt="Image" />
    </section>
  );
};

export default WorkExperience;
