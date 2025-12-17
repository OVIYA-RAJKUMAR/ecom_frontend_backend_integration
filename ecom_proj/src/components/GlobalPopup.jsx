import { useState, useEffect } from 'react';

let showPopupGlobal = null;

export const showPopup = (message, type = 'success') => {
  if (showPopupGlobal) {
    showPopupGlobal(message, type);
  }
};

export default function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');

  useEffect(() => {
    showPopupGlobal = (msg, msgType) => {
      setMessage(msg);
      setType(msgType);
      setIsOpen(true);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '✅';
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success': return '#10b981';
      case 'error': return '#ef4444';
      case 'warning': return '#f59e0b';
      case 'info': return '#3b82f6';
      default: return '#10b981';
    }
  };

  return (
    <>
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes popupSlideIn {
          from { opacity: 0; transform: translate(-50%, -60%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        @keyframes popupBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
      
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
          animation: 'popupFadeIn 0.3s ease-out'
        }}
        onClick={handleClose}
      >
        <div 
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            minWidth: '400px',
            maxWidth: '500px',
            animation: 'popupSlideIn 0.4s ease-out',
            border: `3px solid ${getBorderColor()}`,
            fontFamily: "'Poppins', sans-serif"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div 
            style={{ 
              fontSize: '4rem', 
              marginBottom: '20px',
              animation: 'popupBounce 0.6s ease-out'
            }}
          >
            {getIcon()}
          </div>
          
          <div 
            style={{ 
              fontSize: '1.2rem', 
              color: '#1f2937', 
              marginBottom: '30px', 
              fontWeight: '500',
              lineHeight: '1.5'
            }}
          >
            {message}
          </div>
          
          <button 
            onClick={handleClose}
            style={{
              background: `linear-gradient(45deg, ${getBorderColor()}, ${getBorderColor()}dd)`,
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 15px ${getBorderColor()}40`
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 8px 25px ${getBorderColor()}60`;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 4px 15px ${getBorderColor()}40`;
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}