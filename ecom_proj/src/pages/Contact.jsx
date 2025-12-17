import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@400;700&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.4); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        
        .contact-container {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
          opacity: 0.3;
        }
        
        .floating-icon {
          position: absolute;
          animation: float 3s ease-in-out infinite;
          font-size: 2.5rem;
          opacity: 0.7;
        }
        
        .icon-1 { top: 15%; left: 10%; animation-delay: 0s; }
        .icon-2 { top: 25%; right: 15%; animation-delay: 1s; }
        .icon-3 { bottom: 20%; left: 20%; animation-delay: 2s; }
        .icon-4 { bottom: 25%; right: 10%; animation-delay: 1.5s; }
        
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: clamp(3rem, 6vw, 4.5rem);
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out;
          background: linear-gradient(45deg, #fff, #fecaca, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-family: 'Dancing Script', cursive;
          font-size: 1.8rem;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out 0.3s both;
          font-weight: 700;
        }
        
        .main-content {
          padding: 100px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }
        
        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        
        .contact-info {
          animation: slideInLeft 1s ease-out;
        }
        
        .contact-form-wrapper {
          animation: slideInRight 1s ease-out;
        }
        
        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          background: linear-gradient(45deg, #dc2626, #b91c1c, #991b1b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .info-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .info-card:hover {
          transform: translateY(-10px);
          animation: glow 2s infinite;
        }
        
        .info-card:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }
        
        .info-card:hover:before {
          left: 100%;
        }
        
        .info-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }
        
        .info-icon {
          font-size: 2rem;
          animation: bounce 2s infinite;
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .info-title {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
        }
        
        .info-content {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #4b5563;
        }
        
        .highlight-text {
          color: #dc2626;
          font-weight: 600;
        }
        
        .form-container {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 50px;
          border-radius: 25px;
          box-shadow: 0 15px 40px rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(220, 38, 38, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .form-container:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #dc2626, #b91c1c, #991b1b, #dc2626);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        
        .form-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 30px;
          text-align: center;
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .form-group {
          margin-bottom: 25px;
          position: relative;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 18px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 15px;
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          background: linear-gradient(145deg, #ffffff, #f9fafb);
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.2);
          transform: translateY(-2px);
        }
        
        .form-textarea {
          height: 120px;
          resize: vertical;
        }
        
        .submit-button {
          width: 100%;
          padding: 20px;
          background: linear-gradient(45deg, #dc2626, #b91c1c, #991b1b);
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(220, 38, 38, 0.4);
          animation: pulse 1s infinite;
        }
        
        .submit-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .submit-button:hover:before {
          left: 100%;
        }
        
        .map-section {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }
        
        .map-title {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out;
        }
        
        .map-content {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 40px;
        }
        
        .social-link {
          font-size: 2rem;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
        }
        
        .social-link:hover {
          transform: scale(1.2);
          animation: bounce 0.6s;
        }
        
        @media (max-width: 768px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .form-container {
            padding: 30px;
          }
          
          .hero-section {
            padding: 60px 20px;
          }
          
          .main-content {
            padding: 60px 20px;
          }
        }
      `}</style>
      
      <div className="contact-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg"></div>
          <div className="floating-icon icon-1">📞</div>
          <div className="floating-icon icon-2">✉️</div>
          <div className="floating-icon icon-3">📍</div>
          <div className="floating-icon icon-4">💬</div>
          
          <div className="hero-content">
            <h1 className="hero-title">📞 Get In Touch</h1>
            <p className="hero-subtitle">
              Let's start a conversation about your next treasure
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="main-content">
          <div className="content-wrapper">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="section-title">🏛️ Visit Our Heritage Center</h2>
              
              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon">🏢</div>
                  <h3 className="info-title">Our Address</h3>
                </div>
                <div className="info-content">
                  <strong className="highlight-text">THE TIMELESS TREASURES</strong><br/>
                  123 Heritage Boulevard<br/>
                  Antique District, Cultural Quarter<br/>
                  New York, NY 10001<br/>
                  United States
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon">📱</div>
                  <h3 className="info-title">Phone & WhatsApp</h3>
                </div>
                <div className="info-content">
                  <strong className="highlight-text">Main Line:</strong> +1 (555) 123-4567<br/>
                  <strong className="highlight-text">WhatsApp:</strong> +1 (555) 987-6543<br/>
                  <strong className="highlight-text">Toll Free:</strong> 1-800-TREASURES
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon">📧</div>
                  <h3 className="info-title">Email Contacts</h3>
                </div>
                <div className="info-content">
                  <strong className="highlight-text">General:</strong> info@timelesstreasures.com<br/>
                  <strong className="highlight-text">Sales:</strong> sales@timelesstreasures.com<br/>
                  <strong className="highlight-text">Support:</strong> support@timelesstreasures.com
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon">🕐</div>
                  <h3 className="info-title">Business Hours</h3>
                </div>
                <div className="info-content">
                  <strong className="highlight-text">Monday - Friday:</strong> 9:00 AM - 7:00 PM<br/>
                  <strong className="highlight-text">Saturday:</strong> 10:00 AM - 6:00 PM<br/>
                  <strong className="highlight-text">Sunday:</strong> 12:00 PM - 5:00 PM<br/>
                  <em>Extended hours during holiday seasons</em>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-container">
                <h2 className="form-title">💌 Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="👤 Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="📧 Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="📝 Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="💭 Tell us about your inquiry, interests, or how we can help you find the perfect treasure..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                    />
                  </div>
                  
                  <button type="submit" className="submit-button">
                    🚀 Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Social Section */}
        <section className="map-section">
          <h2 className="map-title">🗺️ Find Us & Connect</h2>
          <div className="map-content">
            <p>
              Located in the heart of the <strong>Cultural Quarter</strong>, our heritage center 
              showcases rotating exhibitions and houses our most prized collections. 
              Visit us for private viewings, expert consultations, and exclusive events.
            </p>
            
            <div className="social-links">
              <a href="#" className="social-link" style={{animationDelay: '0s'}}>📘</a>
              <a href="#" className="social-link" style={{animationDelay: '0.5s'}}>📷</a>
              <a href="#" className="social-link" style={{animationDelay: '1s'}}>🐦</a>
              <a href="#" className="social-link" style={{animationDelay: '1.5s'}}>💼</a>
              <a href="#" className="social-link" style={{animationDelay: '2s'}}>📺</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}