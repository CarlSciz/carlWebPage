import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const emailConfig = {
  serviceId: import.meta.env.VITE_SERVICE_KEY,
  templateId: import.meta.env.VITE_TEMPLATE_KEY,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus({
        type: "error",
        message: "Message failed to send. The contact form is missing its email configuration."
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        emailConfig.publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. I will be in touch soon."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: `Message failed to send. ${error?.text || "Please try again in a moment."}`
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section min-h-screen flex items-center">
      <div className="section-frame">
        <div className="contact-layout">
          <div className="glass-panel contact-panel text-left">
            <span className="section-eyebrow">Contact</span>
            <h2 className="contact-display mt-6">
              Let&apos;s make
              <span className="block text-[var(--sunset-500)]">something standout.</span>
            </h2>
            <p className="section-copy mt-6">
              Whether you are hiring, collaborating, or just want to talk shop, this is the best place to reach out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/CarlSciz/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit Carl's GitHub profile, opens in a new tab"
              >
                <FaGithub size={22} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/carl-scozzari/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit Carl's LinkedIn profile, opens in a new tab"
              >
                <FaLinkedin size={22} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="glass-panel contact-panel">
            <form
              onSubmit={sendEmail}
              className="contact-form"
              aria-describedby={status.message ? "contact-form-status" : undefined}
            >
              <label className="sr-only" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                className="contact-field"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="sr-only" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                className="contact-field"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="contact-field min-h-40 resize-y"
                name="message"
                placeholder="Tell me about the project, role, or idea."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="contact-submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {status.message ? (
                <p
                  id="contact-form-status"
                  className={`contact-status ${status.type === "error" ? "error" : ""}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
