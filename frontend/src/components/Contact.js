import React, { useState } from 'react';
import './styles/Contact.css'; // Import your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
      <div className="contact-container">
          <h1>Get In Touch With NaisuXpress</h1>
          <p> We’re thrilled that you’re considering reaching out. Whether you’re an aspiring artist, a seasoned
              creator,
              or just an anime and manga enthusiast, your thoughts and inquiries are important to us. Here’s how you can
              use
              our contact form to connect:</p>
          <h2>Reasons to Fill Out the Contact Form:</h2>
          <ul>
              <li>Support Queries: Need help or have questions about our software tools? We’re here to assist.</li>
              <li>Feedback and Suggestions: Share your experiences or suggest how we can improve our platform for a
                  better user journey.
              </li>
              <li>Collaborations and Partnerships: Interested in collaborating or partnering with NaisuXpress? Let’s
                  discuss how we can work together to support the anime and manga community.
              </li>
              <li>Press and Media Inquiries: For all press-related questions, please reach out. We’re ready to share our
                  story and latest news with the world.
              </li>
              <li>General Inquiries: Have any other questions or just want to say hello? We’d love to hear from you!
              </li>
          </ul>
          <h2>How to Fill Out the Contact Form:</h2>
          <p>Please provide the following details to help us serve you better:</p>
          <ul>
              <li>Your Name: So we know how to address you.</li>
              <li>Email Address: This is how we’ll get back to you, so please double-check that it’s entered
                  correctly.
              </li>
              <li>Subject: A brief headline that summarizes the reason for your contact.</li>
              <li>Message: Feel free to elaborate on your inquiry, feedback, or proposal. The more specific you are, the
                  better we can tailor our response to your needs.
              </li>
          </ul>
          <h2>Expected Response Times:</h2>
          <p>We understand that your time is valuable, and we strive to respond to all inquiries promptly. Here’s what
              you can expect:</p>
          <ul>
              <li>Standard Inquiries: We aim to respond within 1-2 business days.</li>
              <li>Support-Related Questions: These are prioritized, and we endeavor to get back to you within 24
                  hours.
              </li>
              <li>Partnership and Press Inquiries: Please allow us up to 2-3 business days to thoroughly review your
                  proposal and respond accordingly.
              </li>
          </ul>
          <p>Your insights, stories, and experiences fuel our mission at NaisuXpress. We’re committed to providing you
              with the support and information you need. Fill out the contact form, and let’s start a conversation that
              could lead to something amazing. We look forward to hearing from you!</p>

          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                  ></textarea>
              </div>
              <button type="submit">Submit</button>
          </form>
      </div>
  );
}

export default Contact;
