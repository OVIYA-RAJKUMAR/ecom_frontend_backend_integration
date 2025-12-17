import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 4.5rem;
          background: linear-gradient(45deg, #fff, #fecaca, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          margin-bottom: 30px;
        }
        
        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1.4rem;
          animation: fadeInUp 1s ease-out 0.3s both;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        
        .shop-btn {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(45deg, #fff, #f8fafc);
          color: #dc2626;
          padding: 18px 40px;
          text-decoration: none;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out 0.6s both;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        
        .shop-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          animation: pulse 1s infinite;
        }
        
        .feature-card {
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.1);
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out;
          border: 1px solid rgba(220, 38, 38, 0.1);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(220, 38, 38, 0.2);
        }
        
        .feature-icon {
          font-size: 3rem;
          animation: float 3s ease-in-out infinite;
          margin-bottom: 20px;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 3rem;
          color: #dc2626;
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 1s ease-out;
        }
        
        .stats-number {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 3rem;
          color: white;
          animation: bounce 2s infinite;
        }
      `}</style>
      
      <div style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%)",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"rgba(255,255,255,0.1)\"/><circle cx=\"80\" cy=\"80\" r=\"2\" fill=\"rgba(255,255,255,0.1)\"/><circle cx=\"40\" cy=\"60\" r=\"1\" fill=\"rgba(255,255,255,0.1)\"/></svg>')",
            opacity: 0.3
          }} />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <h1 className="hero-title">
              ✨ THE TIMELESS TREASURES ✨
            </h1>
            <p className="hero-subtitle">
              🏺 Discover Rare Antiques & Vintage Collectibles 🏺<br/>
              From Ancient Civilizations to Modern Masterpieces
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/products" className="shop-btn">
                🛍️ Shop Now
              </Link>
              <Link to="/about" style={{
                fontFamily: "'Inter', sans-serif",
                background: "transparent",
                color: "white",
                padding: "18px 40px",
                textDecoration: "none",
                border: "2px solid white",
                borderRadius: "50px",
                fontSize: "1.2rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px"
              }}>
                📖 Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{
          background: "linear-gradient(45deg, #dc2626, #b91c1c)",
          color: "white",
          padding: "60px 20px"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            textAlign: "center"
          }}>
            <div>
              <div className="stats-number">500+</div>
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>🏺 Rare Artifacts</p>
            </div>
            <div>
              <div className="stats-number">50+</div>
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>🌍 Countries</p>
            </div>
            <div>
              <div className="stats-number">1000+</div>
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>😊 Happy Customers</p>
            </div>
            <div>
              <div className="stats-number">25+</div>
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>🏆 Years Experience</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: "100px 20px", background: "#f8fafc" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className="section-title">🌟 Why Choose Us 🌟</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px"
            }}>
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", color: "#dc2626" }}>Authentic Verification</h3>
                <p style={{ lineHeight: "1.6", color: "#64748b" }}>Every piece undergoes rigorous authentication by certified experts with decades of experience in antique verification.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", color: "#dc2626" }}>Global Collection</h3>
                <p style={{ lineHeight: "1.6", color: "#64748b" }}>Curated treasures from ancient civilizations, royal collections, and renowned artisans across the globe.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🎓</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", color: "#dc2626" }}>Expert Curation</h3>
                <p style={{ lineHeight: "1.6", color: "#64748b" }}>Hand-picked by museum-quality curators and antique specialists with impeccable taste and knowledge.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", color: "#dc2626" }}>Secure Delivery</h3>
                <p style={{ lineHeight: "1.6", color: "#64748b" }}>White-glove delivery service with full insurance coverage and professional packaging for ultimate protection.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", color: "#dc2626" }}>Investment Value</h3>
                <p style={{ lineHeight: "1.6", color: "#64748b" }}>Each piece comes with detailed provenance and appraisal documentation for investment and insurance purposes.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "15px", color: "#dc2626" }}>Lifetime Support</h3>
                <p style={{ lineHeight: "1.6", color: "#64748b" }}>Ongoing support for maintenance, restoration advice, and market valuation updates throughout ownership.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: "linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            marginBottom: "20px",
            animation: "fadeInUp 1s ease-out"
          }}>
            🎯 Start Your Collection Today 🎯
          </h2>
          <p style={{
            fontSize: "1.2rem",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6"
          }}>
            Join thousands of collectors who trust us to find the world's most extraordinary treasures
          </p>
          <Link 
            to="/products" 
            style={{
              background: "white",
              color: "#dc2626",
              padding: "20px 50px",
              textDecoration: "none",
              borderRadius: "50px",
              fontSize: "1.3rem",
              fontWeight: "700",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "15px"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            🚀 Explore Collection
          </Link>
        </section>
      </div>
    </>
  );
}