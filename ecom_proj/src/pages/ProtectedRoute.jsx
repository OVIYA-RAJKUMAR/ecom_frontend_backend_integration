import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, user, onAuthRequired }) {
  if (!user) {
    onAuthRequired();
    return <Navigate to="/" replace />;
  }
  
  return children;
}
