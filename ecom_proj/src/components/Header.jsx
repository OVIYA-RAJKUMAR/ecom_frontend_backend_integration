import { Link } from "react-router-dom";

export default function Header({ user, onLogout, cart, onLoginClick }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        @keyframes slideInDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 15px rgba(255,255,255,0.8); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }

        .header-logo {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 1.8rem;
          background: linear-gradient(45deg, #fff, #fecaca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 2s infinite;
          text-decoration: none;
        }

        .nav-link {
          font-family: 'Poppins', sans-serif;
          color: white;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .cart-badge {
          background: #fff;
          color: #dc2626;
          border-radius: 50%;
          padding: 2px 8px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-left: 5px;
          animation: bounce 2s infinite;
        }

        .header-btn {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
        }

        .logout-btn {
          background: #7f1d1d;
          color: white;
        }

        .login-btn {
          background: white;
          color: #dc2626;
        }
      `}</style>

      <header style={{
        background: "linear-gradient(135deg, #dc2626, #991b1b)",
        padding: "1rem 2rem",
        animation: "slideInDown 0.8s ease-out"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <Link to="/" className="header-logo">
            ✨ THE TIMELESS TREASURES 🏺
          </Link>

          <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link to="/" className="nav-link">🏠 Home</Link>
            <Link to="/products" className="nav-link">🛍️ Products</Link>
            <Link to="/about" className="nav-link">📜 About</Link>
            <Link to="/contact" className="nav-link">📞 Contact</Link>

            {user && (
              <>
                <Link to="/orders" className="nav-link">📦 Orders</Link>
                <Link to="/add-product" className="nav-link">➕ Add Product</Link>
              </>
            )}

            {user ? (
              <>
                <Link to="/cart" className="nav-link">
                  🛒 Cart
                  {cart?.length > 0 && (
                    <span className="cart-badge">{cart.length}</span>
                  )}
                </Link>

                <span style={{ color: "white" }}>
                  👋 Hi, {user.name}
                </span>

                <button onClick={onLogout} className="header-btn logout-btn">
                  🚪 Logout
                </button>
              </>
            ) : (
              <button onClick={onLoginClick} className="header-btn login-btn">
                🔑 Login
              </button>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
