import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaCheckCircle, FaSpinner, FaShoppingCart, FaMicrochip, FaGlasses, FaSprayCan } from 'react-icons/fa';

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Mock Payment Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2500); 
  };

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  };

  return (
    <div className="shop-section" style={{ minHeight: '100vh', padding: '60px 20px', background: 'linear-gradient(to bottom right, #0f172a, #1e293b)', color: 'white' }}>
      
      {/* Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', fontSize: '2.5rem', marginTop: '0px', marginBottom: '50px', textShadow: '0 0 10px rgba(59, 130, 246, 0.7)' }}
      >
        Pre-Order Your Future Vision
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', maxWidth: '1100px', margin: ' 0 auto' }}>
        
        {/* 1. Pre-order Form & Payment */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={glassStyle}
        >
          {!success ? (
            <form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaShoppingCart color="#3b82f6 " size={30} /> Shipping & Payment
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8' }}>Full Name</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, borderColor: '#3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  type="text" required placeholder="John Doe"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(15, 23, 42, 0.6)', color: 'white', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8' }}>Email Address</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, borderColor: '#3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  type="email" required placeholder="john@example.com"
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(15, 23, 42, 0.6)', color: 'white', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8' }}>Mock Credit Card</label>
                <div style={{ position: 'relative' }}>
                  <FaCreditCard style={{ position: 'absolute', top: '15px', left: '12px', color: '#3b82f6' }} />
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: '#3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                    type="text" required placeholder="4242 4242 4242 4242"
                    style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #475569', background: 'rgba(15, 23, 42, 0.6)', color: 'white', outline: 'none' }}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                style={{ width: '100%', padding: '15px', background: 'linear-gradient(to right, #3b82f6, #2563eb)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s' }}
              >
                {loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}><FaSpinner size={20} /></motion.div> : "Confirm Pre-Order - PKR 35,000"}
              </motion.button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ textAlign: 'center', padding: '40px' }}
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: 1 }}>
                <FaCheckCircle size={80} color="#22c55e" style={{ filter: 'drop-shadow(0 0 10px #22c55e)' }} />
              </motion.div>
              <h3 style={{ marginTop: '20px', fontSize: '1.5rem' }}>Order Confirmed!</h3>
              <p style={{ color: '#94a3b8', marginTop: '10px' }}>Welcome to the future. Check your email for details.</p>
            </motion.div>
          )}
        </motion.div>

        {/* 2. Future Accessories Shop  */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaMicrochip color="#3b82f6" /> Future Upgrades
          </h3>
          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              { name: 'Advanced AI Processor Chip', icon: <FaMicrochip />, date: 'Q3 2026' },
              { name: 'Stylized Cyber Frames', icon: <FaGlasses />, date: 'Q4 2026' },
              { name: 'AR Lens Cleaning Kit', icon: <FaSprayCan />, date: 'Coming Soon' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 10, background: 'rgba(59, 130, 246, 0.1)', borderColor: '#3b82f6' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                style={{ ...glassStyle, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', border: '1px solid rgba(59, 130, 246, 0.2)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ color: '#3b82f6', fontSize: '1.2rem' }}>{item.icon}</span>
                  <span style={{ fontWeight: '500' }}>{item.name}</span>
                </div>
                <span style={{ fontSize: '12px', color: '#94a3b8', background: 'rgba(15, 23, 42, 0.8)', padding: '5px 10px', borderRadius: '20px' }}>{item.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Shop;