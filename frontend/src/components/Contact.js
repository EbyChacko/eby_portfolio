import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const linkedin = "https://www.linkedin.com/in/eby-chacko-85695b245/"
  const github = "https://github.com/EbyChacko"

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img  src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <div >
                <h2>GET IN TOUCH</h2>
                <div className="social-icon">
                    <a href={linkedin}target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin icon" /></a>
                    <a href="mailto:cybe1990@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={navIcon2} alt="email icon" />
                    </a>
                    <a href={github}target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="GitHub icon" /></a>
                </div>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} placeholder="Full Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}