import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY, 
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section min-h-screen flex items-center justify-center">
      <div className="text-center z-10 max-w-2xl w-full">
        {/* Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/CarlSciz/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://linkedin.com/in/carl-scozzari/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-start flex-shrink-0 text-left">
            <p className="contact-heading-tag">Tag</p>
            <p className="contact-heading-in">In</p>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-md mx-auto">
            <form onSubmit={sendEmail} className="contact-form shadow-md rounded mb-4">
              <div className="mb-4 space-y-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
