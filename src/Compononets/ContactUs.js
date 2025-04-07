import React, { useState } from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';
const ContactUs = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${form.name}! We’ll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
    navigate('/'); 
    
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Fill out the form below.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        <p>Or: You can also send an Email on <a href="mailto:sheikhumair81@gmail.com">sheikhumair81@gmail.com</a></p>
      </form>
    </div>
  );
  
};

export default ContactUs;
