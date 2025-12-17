export default function SuccessPopup({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translate(-50%, -60%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }
        
        .popup-content {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          text-align: center;
          min-width: 400px;
          animation: slideIn 0.4s ease-out;
          border: 2px solid #10b981;
        }
        
        .success-icon {
          font-size: 4rem;
          color: #10b981;
          margin-bottom: 20px;
          animation: bounce 0.6s ease-out;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
        
        .popup-message {
          font-size: 1.2rem;
          color: #1f2937;
          margin-bottom: 30px;
          font-weight: 500;
        }
        
        .close-button {
          background: linear-gradient(45deg, #10b981, #059669);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .close-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }
      `}</style>
      
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="success-icon">✅</div>
          <div className="popup-message">{message}</div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}