// src/ContactUs.js
import React, { useState } from "react";
import './ContactUs.css';
import CustomAlert from './CustomAlert.js'
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);


  const sendApprovalEmail = async (email, messagebody) => {
    const templateParams = {
      to_email: email,
      message: messagebody,
    };

    try {
      await emailjs.send(
        'service_8kgv9m8',     // Replace with your Email.js service ID
        'template_klyhms4',    // Replace with your Email.js template ID
        templateParams,
        'YXs-aMceIqko1PuHu'      // Replace with your Email.js public key
      );
      console.log('Approval email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);


    const adminMessage = `Dear CEO of The Dream Marketing, "Usama Ali" , My name is ${formData.name} and i am interested in ${formData.interest}. Please contact me through that number ${formData.phone} or you can email at this address ${formData.email}. I am curious about ${formData.message}. Thank You!!!`
    const adminEmail = "usamaali@gmail.com"
    await sendApprovalEmail(adminEmail, adminMessage);
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    setShowConfirmation(true);
  };

  const handleAlert = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="contact-us-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">I am interested in:</label>
          <select name="interest" value={formData.interest} onChange={handleChange} required>
            <option value="">I am interested in:</option>
            <option value="Buy a plot in Blue World City">Buy a plot in Blue World City</option>
            <option value="Buy a plot in Lake View City">Buy a plot in Lake View City</option>
            <option value="Information about a project">Information about a project</option>
            <option value="A property consultant to contact me">A property consultant to contact me</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button> {/* Apply styling here */}
      </form>
      {showConfirmation && (
        <CustomAlert
          message="Form Submitted!"
          message2={"Our team will contact you shortly!"}
          onConfirm={handleAlert}
          onCancel={handleAlert}
          buttonLabel={"OK"}
        />
      )}
    </div>
  );
};

export default ContactUs;
