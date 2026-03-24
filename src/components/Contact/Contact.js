import React, { useState, useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub, FaPhone } from "react-icons/fa";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const SERVICE_ID = 'service_etbaado';
  const TEMPLATE_ID = 'template_2n712l8';
  const PUBLIC_KEY = 'Cltvn1ZiFlX0zTYVL';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams); // Debug log

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      console.log('EmailJS Success:', result); // Debug log
      
      setStatus('✅ Message sent successfully!');
      setFormData({ name: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
      
    } catch (error) {
      console.error('🚨 EmailJS Error:', error);
      console.error('Error text:', error.text);
      console.error('Error status:', error.status);
      
      if (error.status === 400) {
        setStatus('❌ Invalid template parameters. Check your EmailJS template.');
      } else if (error.status === 403) {
        setStatus('❌ Invalid credentials. Check your EmailJS Service ID, Template ID, and Public Key.');
      } else if (error.status === 0) {
        setStatus('❌ Network error. Check your internet connection.');
      } else {
        setStatus(`❌ Failed to send: ${error.text || error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        <h2><FaEnvelope className="icon" /> Get in touch.</h2>
        <div className="contact-form-container">
          <div className="contact-form-item">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows="5"
              />
              
              {status && (
                <div className={`status-message ${status.includes('✅') ? 'success' : 'error'}`}>
                  {status}
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn-submit"
                disabled={isLoading}
              >
                {isLoading ? '📤 Sending...' : '📨 Send Message'}
              </button>
            </form>

            <div className="contact-info">
              <p>Let's connect! 🚀</p>
              <ul>
                <li><FaEnvelope /> santhoshkumar140424@gmail.com</li>
                <li><FaPhone /> +91 9176170978</li>
                <li><FaMapMarkerAlt /> Chennai City, India</li>
                <li><FaInstagram /> @santhoshkumar</li>
                <li><FaGithub /> santhosh140424</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;