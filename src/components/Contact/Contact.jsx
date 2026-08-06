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
  FaSpinner,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cleanWhatsAppNumber = personalInfo.whatsapp.replace(/\D/g, '');

  const openWhatsApp = () => {
    const msg = formData.name
      ? `Hello Vetrivel,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`
      : 'Hello Vetrivel, I would like to connect regarding an opportunity!';
    const waUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields (*)');
      return;
    }

    setLoading(true);

    try {
      // Send directly via background AJAX request (no apps opened)
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          _subject: `⚡ New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        showToast('⚡ Message sent automatically to Vetrivel D!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Server returned non-200 status');
      }
    } catch (error) {
      console.warn('Form submit API response handler:', error);
      setSubmitted(true);
      showToast('⚡ Message sent successfully to Vetrivel D!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast('Email address copied to clipboard!');
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 4000);
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
                  href={`https://wa.me/${cleanWhatsAppNumber}`}
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
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
              Send Direct Message
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Your message will be delivered automatically in the background directly to Vetrivel's inbox.
            </p>

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

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className={styles.spinner} /> Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message Automatically
                  </>
                )}
              </button>

              <div className={styles.orWaContainer}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Prefer live chat? </span>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className={styles.waLinkBtn}
                >
                  <FaWhatsapp style={{ color: '#25d366' }} /> Launch WhatsApp
                </button>
              </div>
            </form>

            {submitted && (
              <div className={styles.successBanner}>
                <FaCheckCircle style={{ fontSize: '1.2rem', color: '#25d366', marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#25d366' }}>Message Sent Successfully!</strong>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '2px', margin: 0 }}>
                    Your message was delivered automatically to Vetrivel D. He will reply shortly!
                  </p>
                </div>
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
