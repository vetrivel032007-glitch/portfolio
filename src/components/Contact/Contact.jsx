import React, { useState } from 'react';
import styles from './Contact.module.css';
import { personalInfo } from '../../data/portfolioData';
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCopy,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.');
      return;
    }

    setSubmitted(true);
    showToast('Message sent successfully! I will respond shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast('Email address copied to clipboard!');
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch & Hire Me</h2>
        <p className="section-subtitle">
          Open for full-time software engineering roles, internships, and technical collaborations.
        </p>

        <div className={styles.contactGrid}>
          {/* LEFT: DIRECT CHANNELS */}
          <div className={styles.infoCol}>
            {/* Email Card */}
            <div className={styles.contactCard}>
              <div className={styles.iconBox}>
                <FaEnvelope />
              </div>
              <div className={styles.contactMeta}>
                <h4>Direct Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <button
                className={styles.copyBtn}
                onClick={copyEmail}
                title="Copy Email"
              >
                <FaCopy /> Copy
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className={styles.contactCard}>
              <div className={styles.iconBox}>
                <FaWhatsapp style={{ color: '#25d366' }} />
              </div>
              <div className={styles.contactMeta}>
                <h4>Phone & WhatsApp</h4>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className={styles.contactCard}>
              <div className={styles.iconBox}>
                <FaMapMarkerAlt style={{ color: '#f472b6' }} />
              </div>
              <div className={styles.contactMeta}>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            {/* Location Map Visualizer */}
            <div className={styles.mapWrapper}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                alt="Valaiyeduppu Location Map"
                className={styles.mapImg}
              />
              <div className={styles.mapOverlay}>
                📍 Valaiyeduppu, Tiruchirappalli
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className={styles.formCard}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Send Me a Direct Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={styles.inputField}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className={styles.inputField}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  className={styles.inputField}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, role, or project details..."
                  className={styles.textareaField}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <FaPaperPlane /> Send Message
              </button>
            </form>

            {submitted && (
              <div style={{ marginTop: '1rem', color: 'var(--accent-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaCheckCircle /> Thank you! Your message has been sent to Vetrivel D.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <div className={styles.toast}>
          <FaCheckCircle /> {toastMsg}
        </div>
      )}
    </section>
  );
}
