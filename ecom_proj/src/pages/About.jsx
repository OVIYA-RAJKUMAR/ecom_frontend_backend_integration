export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
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
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.4); }
        }
        
        .about-container {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%);
          color: white;
          padding: 120px 20px;
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
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
          opacity: 0.3;
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(3rem, 6vw, 5rem);
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out;
          background: linear-gradient(45deg, #fff, #fecaca, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          margin-bottom: 40px;
          animation: fadeInUp 1s ease-out 0.3s both;
          font-weight: 300;
        }
        
        .floating-icon {
          position: absolute;
          animation: float 3s ease-in-out infinite;
          font-size: 2rem;
        }
        
        .icon-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .icon-2 { top: 30%; right: 15%; animation-delay: 1s; }
        .icon-3 { bottom: 20%; left: 20%; animation-delay: 2s; }
        .icon-4 { bottom: 30%; right: 10%; animation-delay: 1.5s; }
        
        .content-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 1s ease-out;
          background: linear-gradient(45deg, #dc2626, #b91c1c, #991b1b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
        }
        
        .story-text {
          animation: slideInLeft 1s ease-out;
        }
        
        .story-visual {
          animation: slideInRight 1s ease-out;
          text-align: center;
        }
        
        .story-content {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 30px;
        }
        
        .highlight-text {
          color: #dc2626;
          font-weight: 600;
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .visual-element {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #dc2626, #b91c1c, #991b1b);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          margin: 0 auto;
          animation: pulse 2s infinite, glow 3s infinite;
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.3);
        }
        
        .stats-section {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
          color: white;
          padding: 80px 20px;
          margin: 100px 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        
        .stat-item {
          animation: fadeInUp 1s ease-out;
        }
        
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 10px;
          animation: bounce 2s infinite;
        }
        
        .stat-label {
          font-size: 1.1rem;
          font-weight: 500;
          opacity: 0.9;
        }
        
        .values-section {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 100px 20px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .value-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.1);
          transition: all 0.4s ease;
          animation: fadeInUp 1s ease-out;
        }
        
        .value-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 50px rgba(220, 38, 38, 0.2);
          animation: glow 2s infinite;
        }
        
        .value-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          animation: rotate 10s linear infinite;
        }
        
        .value-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 15px;
        }
        
        .value-description {
          color: #6b7280;
          line-height: 1.6;
        }
        
        .team-section {
          padding: 100px 20px;
          text-align: center;
        }
        
        .team-intro {
          max-width: 800px;
          margin: 0 auto 60px;
          font-size: 1.2rem;
          color: #4b5563;
          animation: fadeInUp 1s ease-out;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #7c2d12 0%, #dc2626 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }
        
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out;
        }
        
        .cta-text {
          font-size: 1.3rem;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: white;
          color: #dc2626;
          padding: 20px 50px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 700;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out 0.6s both;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          animation: pulse 1s infinite;
        }
        
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .visual-element {
            width: 200px;
            height: 200px;
            font-size: 3rem;
          }
          
          .hero-section {
            padding: 80px 20px;
          }
          
          .content-section {
            padding: 60px 20px;
          }
        }
      `}</style>
      
      <div className="about-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg"></div>
          <div className="floating-icon icon-1">🏺</div>
          <div className="floating-icon icon-2">⚱️</div>
          <div className="floating-icon icon-3">🗿</div>
          <div className="floating-icon icon-4">👑</div>
          
          <div className="hero-content">
            <h1 className="hero-title">✨ Our Legacy ✨</h1>
            <p className="hero-subtitle">
              Preserving History, Creating Memories, Building Tomorrow's Heritage
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="content-section">
          <h2 className="section-title">📜 Our Story</h2>
          <div className="story-grid">
            <div className="story-text">
              <div className="story-content">
                Founded in <span className="highlight-text">2020</span> by passionate historians and collectors, 
                <span className="highlight-text"> THE TIMELESS TREASURES</span> began as a dream to bridge 
                the gap between ancient civilizations and modern appreciation for craftsmanship.
              </div>
              <div className="story-content">
                Our journey started in a small antique shop, where we discovered that every artifact 
                tells a story of <span className="highlight-text">human creativity, culture, and connection</span>. 
                Today, we've grown into a global platform celebrating the world's most extraordinary treasures.
              </div>
            </div>
            <div className="story-visual">
              <div className="visual-element">🏛️</div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">🏺 Rare Artifacts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">75+</div>
              <div className="stat-label">🌍 Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">😊 Happy Collectors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">🏆 Years Experience</div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="values-section">
          <div className="content-section">
            <h2 className="section-title">💎 Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🔍</div>
                <h3 className="value-title">Authenticity First</h3>
                <p className="value-description">
                  Every piece undergoes rigorous authentication by certified experts with decades of experience in historical verification and provenance research.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Excellence Always</h3>
                <p className="value-description">
                  We maintain the highest standards in curation, presentation, and customer service, ensuring each interaction exceeds expectations.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Trust & Integrity</h3>
                <p className="value-description">
                  Built on transparency, honest dealings, and long-term relationships with collectors, museums, and cultural institutions worldwide.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎓</div>
                <h3 className="value-title">Education & Culture</h3>
                <p className="value-description">
                  Committed to sharing knowledge, preserving cultural heritage, and educating future generations about historical significance.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3 className="value-title">Sustainable Collecting</h3>
                <p className="value-description">
                  Promoting ethical collecting practices, supporting local artisans, and ensuring cultural treasures are preserved responsibly.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3 className="value-title">Innovation & Growth</h3>
                <p className="value-description">
                  Embracing technology to enhance discovery, authentication, and accessibility while respecting traditional craftsmanship values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="content-section">
          <div className="story-grid">
            <div className="story-visual">
              <div className="visual-element">🎯</div>
            </div>
            <div className="story-text">
              <h2 className="section-title">🎯 Our Mission</h2>
              <div className="story-content">
                To <span className="highlight-text">connect passionate collectors</span> with the world's most 
                extraordinary historical artifacts, while preserving cultural heritage and promoting 
                appreciation for traditional craftsmanship across generations.
              </div>
              <div className="story-content">
                We believe that <span className="highlight-text">every artifact has a soul</span>, carrying 
                stories of the hands that created it, the cultures that cherished it, and the history it witnessed.
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">👥 Our Expert Team</h2>
          <div className="team-intro">
            Our diverse team of <span className="highlight-text">historians, archaeologists, art experts, and passionate collectors</span> 
            work together to curate the finest selection of authentic treasures. With combined experience spanning over 
            <span className="highlight-text"> 200 years</span>, we bring unparalleled expertise to every piece in our collection.
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">🌟 Join Our Journey</h2>
          <p className="cta-text">
            Become part of a community that values history, appreciates craftsmanship, 
            and celebrates the timeless beauty of human creativity.
          </p>
          <a href="/products" className="cta-button">
            🏺 Explore Our Collection
          </a>
        </section>
      </div>
    </>
  );
}