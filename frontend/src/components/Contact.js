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
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const linkedin = "https://www.linkedin.com/in/eby-chacko-85695b245/";
  const github = "https://github.com/EbyChacko";

  // Validate a specific field and update errors
  const validateField = (category, value) => {
    let errorMessage = '';

    if (category === 'name' && !value) {
      errorMessage = 'Full Name is required';
    }

    if (category === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMessage = 'Email is required';
      } else if (!emailPattern.test(value)) {
        errorMessage = 'Enter a valid email address';
      }
    }

    if (category === 'message' && !value) {
      errorMessage = 'Message is required';
    }

    setErrors({
      ...errors,
      [category]: errorMessage
    });
  };

  // Update form details and validate the individual field
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });

    // Validate the field as the user types
    validateField(category, value);
  };

  // Full form validation before submission
  const validateForm = () => {
    const errors = {};

    // Check if name is filled
    if (!formDetails.name) {
      errors.name = "Full Name is required";
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formDetails.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formDetails.email)) {
      errors.email = "Enter a valid email address";
    }

    // Check if message is filled
    if (!formDetails.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setButtonText("Sending...");
    let response = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }

    setTimeout(() => {
      setStatus({});
    }, 4000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>GET IN TOUCH</h2>
              <div className="social-icon">
                <a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn icon" /></a>
                <a href="mailto:cybe1990@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="Email icon" />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="GitHub icon" /></a>
              </div>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.name}
                      placeholder="Full Name"
                      onChange={(e) => onFormUpdate('name', e.target.value)}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </Col>

                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </Col>

                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                  </Col>

                  <Row>
                    {status.message && (
                      <Col className="animate__animated animate__fadeInDown">
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    )}
                  </Row>

                  <Col>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}