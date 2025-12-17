export default function Footer() {
  return (
    <footer style={{
      background: "#7f1d1d",
      color: "white",
      padding: "2rem",
      marginTop: "auto"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem"
      }}>
        <div>
          <h3>THE TIMELESS TREASURES</h3>
          <p>Discover timeless treasures and vintage collectibles from around the world.</p>
        </div>
        
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/" style={{ color: "#bdc3c7", textDecoration: "none" }}>Products</a></li>
            <li><a href="/cart" style={{ color: "#bdc3c7", textDecoration: "none" }}>Cart</a></li>
            <li><a href="/about" style={{ color: "#bdc3c7", textDecoration: "none" }}>About</a></li>
          </ul>
        </div>
        
        <div>
          <h4>Contact</h4>
          <p>Email: info@epochelegance.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      
      <div style={{
        textAlign: "center",
        marginTop: "2rem",
        paddingTop: "1rem",
        borderTop: "1px solid #991b1b"
      }}>
        <p>&copy; 2024 THE TIMELESS TREASURES. All rights reserved.</p>
      </div>
    </footer>
  );
}