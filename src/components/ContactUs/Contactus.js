import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// import "../components/Styles/EmailForm.css";
// import SuccessAlert from "./alert";
import "../ContactUs/Contact.css";
import { Button, TextField, Snackbar } from "@mui/material";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields");
      setOpen(true);
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setOpen(true);
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_cs1yjwi";
    const templateId = "template_zutubam";
    const publicKey = "HWwHo-6eVXqsdAAFh";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Niwesh",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setOpen(true); // Show success alert
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isSubmitDisabled = !name || !email || !message;

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="email-form-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="emailForm">
          <h2>Contact Us</h2>
          <br />
          <div className="input-container">
            <TextField
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              multiline
              rows={10}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field textarea-field"
              fullWidth
            />
          </div>
          <Button variant="contained" type="submit" disabled={isSubmitDisabled}>
            Send Email
          </Button>
        </form>
        {/* <SuccessAlert open={open} onClose={handleClose} />{" "} */}
        {/* SuccessAlert component */}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={errorMessage}
        />
      </div>
    </div>
  );
};
export default EmailForm;
