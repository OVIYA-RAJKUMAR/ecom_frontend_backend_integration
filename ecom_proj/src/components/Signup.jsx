import React, { useState } from 'react';

export default function Signup({ onSignup, onSwitchToLogin }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.name && formData.email && formData.password) {
      onSignup(formData.name, formData.email, formData.password);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ccc' }}
            required
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
            {error}
          </div>
        )}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#27ae60', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: 15 }}>
        Already have an account? 
        <button onClick={onSwitchToLogin} style={{ background: 'none', border: 'none', color: '#4b7bec', cursor: 'pointer', textDecoration: 'underline' }}>
          Login
        </button>
      </p>
    </div>
  );
}