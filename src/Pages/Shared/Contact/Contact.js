import React from "react";
import { Form } from "react-bootstrap";

import "./Contact.css";
const Contact = () => {
   
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h4>Get In Touch</h4>
        <p>Feel free to contact with me</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  name="name"
                  type="name"
                  placeholder="name"
                  className="input"
                />
                <br></br>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input"
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
                />
              </Form.Group>
              
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
