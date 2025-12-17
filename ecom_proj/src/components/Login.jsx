import React, { useState } from 'react';

export default function Login({ onLogin, onSwitchToSignup }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.email && formData.password) {
      onLogin(formData.email, formData.password);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" style={{ width: '100%', padding: 10, background: '#4b7bec', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Login
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: 15 }}>
        Don't have an account? 
        <button onClick={onSwitchToSignup} style={{ background: 'none', border: 'none', color: '#4b7bec', cursor: 'pointer', textDecoration: 'underline' }}>
          Sign Up
        </button>
      </p>
    </div>
  );
}