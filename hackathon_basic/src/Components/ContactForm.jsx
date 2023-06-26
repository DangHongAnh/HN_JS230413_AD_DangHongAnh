import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phone.trim() === "") {
      setPhoneError("Phone is required");
      isValid = false;
    // }else if (!isValidPhone(phone)) {
    //   setPhoneError("Invalid phone format");
    //   isValid = false;
    } else {
      setPhoneError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Message:", message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      alert("Nhập Thành Công")
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  // const isValidPhone = (value) => {
  //   const PhoneRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return PhoneRegex.test(value);
  // };

  return (
    <div className="form-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {phoneError && <span className="error">{phoneError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {messageError && <span className="error">{messageError}</span>}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
