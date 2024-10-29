import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        
          <MailchimpForm />

       
            <div className="thank">
            <h1>THANK YOU!!</h1>

            </div>
      
     
      </Container>
    </footer>
  )
}
