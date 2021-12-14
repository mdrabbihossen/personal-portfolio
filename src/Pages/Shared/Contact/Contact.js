import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "send_messages_portfolio",
        "template_a1kvkcb",
        form.current,
        "user_gVsbJ0BQp59y2VVRe69SF"
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
        },
        () => {
          alert("Your message could not be sent. Please try again.");
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h4>Get In Touch</h4>
        <p>Feel free to contact with me</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  name="user_name"
                  type="name"
                  placeholder="name"
                  className="input"
                  required
                />
                <br></br>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input"
                  required
                />
                <br></br>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="message"
                  rows={5}
                  className="input"
                  required
                />
              </Form.Group>
              <input type="submit" className="send-mail" value="Send" />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
