import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Normal typing speed
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer ", "ML Engineer", "Cloud Engineer"];
  const period = 1000; // Normal transition time between words

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5); // Slightly faster deleting speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300); // Resets to normal typing speed for new word
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
             
                  <h1>{`Hi! I'm Preety Kumari`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "ML Engineer", "Cloud Engineer"  ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm an Electronics and Communication Engineering student with hands-on experience in AWS, DevOps, and full-stack development. Through internships at Linux World Pvt Ltd and Presear Software, I've sharpened my skills in AWS services like EC2, SES, and S3, as well as Python, Linux, and various DevOps tools. I've led cloud projects, hosted websites, and worked on innovative projects like patch antenna design and machine learning applications. As a proactive leader, I serve as the secretary of IEEE GGV and lead the ECE newsletter. I'm passionate about leveraging cloud technologies to drive solutions and streamline operations. Let's connect!</p>
                  <button onClick={() => {
                    console.log('connect');
                    window.open('https://drive.google.com/file/d/1FqddibhkgqI3D0XiTR4s2CqZXrwNEiL9/view?usp=sharing', '_blank');
                  }}>
                    View Resume <ArrowRightCircle size={25} />
                  </button>



                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
