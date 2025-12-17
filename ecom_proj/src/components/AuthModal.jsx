import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { usersAPI } from '../services/api';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = async (email, password) => {
    try {
      const response = await usersAPI.login({ email, password });
      localStorage.setItem('token', response.token);
      onLogin(email, response.user.name, response.token);
      onClose();
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      console.log('Attempting signup with:', { name, email, password });
      const response = await usersAPI.register({ name, email, password });
      console.log('Signup response:', response);
      localStorage.setItem('token', response.token);
      onLogin(email, response.user.name, response.token);
      onClose();
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed: ' + error.message);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: 8,
        position: 'relative',
        maxWidth: 500,
        width: '90%'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 15,
            background: 'none',
            border: 'none',
            fontSize: 20,
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        
        {isLoginMode ? (
          <Login 
            onLogin={handleLogin}
            onSwitchToSignup={() => setIsLoginMode(false)}
          />
        ) : (
          <Signup 
            onSignup={handleSignup}
            onSwitchToLogin={() => setIsLoginMode(true)}
          />
        )}
      </div>
    </div>
  );
}