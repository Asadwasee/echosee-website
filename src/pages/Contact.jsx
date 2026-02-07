import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submit logic
    setSubmitted(true);
  };

  // Glassmorphism Style
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '40px',
  };

  return (
    <div className="contact-page" style={{ minHeight: '100vh', padding: '120px 20px', background: '#020617', color: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-1px' }}>Get In <span style={{ color: '#3b82f6' }}>Touch</span></h2>
          <p style={{ color: '#94a3b8', marginTop: '10px' }}>Have questions about EchoSee? Our team is here to help.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Left Side: Contact Info & Socials */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={glassStyle}
          >
            <h3 style={{ marginBottom: '30px', fontSize: '1.5rem' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '12px' }}>
                  <FaEnvelope color="#3b82f6" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>Email Us</p>
                  <p>support@echosee.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '12px' }}>
                  <FaPhone color="#3b82f6" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>Call Us</p>
                  <p>+92 319 00000000</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '12px' }}>
                  <FaMapMarkerAlt color="#3b82f6" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>Our Office</p>
                  <p>Tech Hub, Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <hr style={{ margin: '40px 0', borderColor: 'rgba(255,255,255,0.05)' }} />

            <h4 style={{ marginBottom: '20px' }}>Connect with us</h4>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[FaLinkedin, FaTwitter, FaGithub].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#3b82f6', filter: 'drop-shadow(0 0 8px #3b82f6)' }}
                  style={{ color: '#94a3b8', fontSize: '24px', cursor: 'pointer' }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={glassStyle}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {/* Floating Labels Logic using relative positioning */}
                  <div style={{ marginBottom: '30px', position: 'relative' }}>
                    <input type="text" required className="peer" placeholder=" " 
                      style={inputStyle}
                    />
                    <label style={labelStyle}>Full Name</label>
                  </div>

                  <div style={{ marginBottom: '30px', position: 'relative' }}>
                    <input type="email" required className="peer" placeholder=" " 
                      style={inputStyle}
                    />
                    <label style={labelStyle}>Email Address</label>
                  </div>

                  <div style={{ marginBottom: '30px', position: 'relative' }}>
                    <textarea rows="4" required className="peer" placeholder=" " 
                      style={{ ...inputStyle, resize: 'none' }}
                    ></textarea>
                    <label style={labelStyle}>Your Message</label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{ width: '100%', padding: '16px', background: '#3b82f6', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  >
                    <FaPaperPlane /> Send Message
                  </motion.button>
                </motion.form>
              ) : (
                
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FaCheckCircle size={80} color="#22c55e" />
                  </motion.div>
                  <h3 style={{ marginTop: '20px', fontSize: '1.5rem' }}>Message Sent!</h3>
                  <p style={{ color: '#94a3b8', marginTop: '10px' }}>We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '20px', background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer' }}
                  >
                    Send another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Global CSS for Floating Labels and PeerView */}
      <style>{`
        .peer:focus ~ label,
        .peer:not(:placeholder-shown) ~ label {
          transform: translateY(-25px) scale(0.85);
          color: #3b82f6;
        }
      `}</style>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 0',
  background: 'transparent',
  border: 'none',
  borderBottom: '2px solid #334155',
  color: 'white',
  outline: 'none',
  transition: 'border-color 0.3s',
};

const labelStyle = {
  position: 'absolute',
  left: '0',
  top: '12px',
  color: '#94a3b8',
  pointerEvents: 'none',
  transition: 'all 0.3s ease',
};

export default Contact;