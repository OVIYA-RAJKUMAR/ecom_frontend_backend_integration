import { useState } from "react";
import { ordersAPI } from '../services/api';

export default function Cart({ cart, setCart, orders, setOrders, user, requireAuth }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const updateQuantity = (productId, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item._id === productId) {
          const newQuantity = (item.quantity || 1) + change;
          if (newQuantity <= 0) {
            return null; // Will be filtered out
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean); // Remove null items
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const handleCheckout = async () => {
    if (!user) {
      requireAuth();
      return;
    }
    
    try {
      const orderData = {
        items: cart.map(item => ({
          productId: item._id,
          quantity: item.quantity || 1
        })),
        shippingAddress: {
          name: user.name || 'Customer',
          street: '123 Main St',
          city: 'City',
          state: 'State',
          zipCode: '12345',
          country: 'Country'
        },
        paymentMethod: 'cash_on_delivery'
      };
      
      await ordersAPI.create(orderData);
      
      const orderItems = cart.map(item => ({
        ...item,
        quantity: item.quantity || 1,
        orderDate: new Date().toISOString()
      }));
      
      setOrders([...orders, ...orderItems]);
      setCart([]);
      setShowSuccess(true);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .cart-container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 20px;
          font-family: 'Poppins', sans-serif;
          min-height: 80vh;
        }
        
        .cart-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #dc2626;
          text-align: center;
          margin-bottom: 40px;
          animation: fadeInUp 0.8s ease-out;
        }
        
        .cart-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }
        
        .cart-items {
          animation: slideIn 0.8s ease-out;
        }
        
        .cart-item {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 25px;
          border-radius: 20px;
          margin-bottom: 20px;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.1);
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out;
        }
        
        .cart-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 35px rgba(220, 38, 38, 0.15);
        }
        
        .item-content {
          display: grid;
          grid-template-columns: 120px 1fr auto;
          gap: 20px;
          align-items: center;
        }
        
        .item-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .item-description {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 10px;
          line-height: 1.4;
        }
        
        .item-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: #dc2626;
        }
        
        .item-controls {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(220, 38, 38, 0.05);
          padding: 8px;
          border-radius: 25px;
        }
        
        .quantity-btn {
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 50%;
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .quantity-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }
        
        .quantity-display {
          min-width: 40px;
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
          color: #1f2937;
        }
        
        .remove-btn {
          background: linear-gradient(45deg, #f59e0b, #d97706);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .remove-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
        }
        
        .cart-summary {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.1);
          height: fit-content;
          position: sticky;
          top: 20px;
          animation: slideIn 0.8s ease-out 0.3s both;
        }
        
        .summary-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .summary-label {
          color: #6b7280;
          font-weight: 500;
        }
        
        .summary-value {
          font-weight: 600;
          color: #1f2937;
        }
        
        .total-row {
          border-top: 2px solid #dc2626;
          padding-top: 15px;
          margin-top: 20px;
          border-bottom: none;
        }
        
        .total-label {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
        }
        
        .total-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #dc2626;
        }
        
        .checkout-btn {
          width: 100%;
          padding: 18px;
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 25px;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }
        
        .checkout-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(220, 38, 38, 0.4);
        }
        
        .empty-cart {
          text-align: center;
          padding: 100px 20px;
          animation: fadeInUp 0.8s ease-out;
        }
        
        .empty-icon {
          font-size: 5rem;
          margin-bottom: 20px;
          opacity: 0.5;
        }
        
        .empty-title {
          font-size: 2rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 15px;
        }
        
        .empty-text {
          font-size: 1.1rem;
          color: #9ca3af;
          margin-bottom: 30px;
        }
        
        .shop-now-btn {
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .shop-now-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
        }
        
        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .item-content {
            grid-template-columns: 80px 1fr;
            gap: 15px;
          }
          
          .item-controls {
            grid-column: 1 / -1;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 15px;
          }
          
          .item-image {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
      
      <div className="cart-container">
        <h1 className="cart-title">🛒 Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2 className="empty-title">Your cart is empty</h2>
            <p className="empty-text">Discover amazing treasures and add them to your cart</p>
            <a href="/products" className="shop-now-btn">
              🏺 Start Shopping
            </a>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={`${item._id}-${index}`} className="cart-item">
                  <div className="item-content">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="item-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/120x120?text=No+Image';
                      }}
                    />
                    
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <div className="item-price">₹{item.price.toLocaleString()}</div>
                    </div>
                    
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item._id, -1)}
                        >
                          −
                        </button>
                        <span className="quantity-display">{item.quantity || 1}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item._id, 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item._id)}
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3 className="summary-title">📋 Order Summary</h3>
              
              <div className="summary-row">
                <span className="summary-label">Items ({cart.reduce((sum, item) => sum + (item.quantity || 1), 0)})</span>
                <span className="summary-value">₹{getTotalPrice().toLocaleString()}</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Shipping</span>
                <span className="summary-value">Free</span>
              </div>
              
              <div className="summary-row">
                <span className="summary-label">Tax</span>
                <span className="summary-value">₹{Math.round(getTotalPrice() * 0.1).toLocaleString()}</span>
              </div>
              
              <div className="summary-row total-row">
                <span className="total-label">Total</span>
                <span className="total-value">₹{Math.round(getTotalPrice() * 1.1).toLocaleString()}</span>
              </div>
              
              <button className="checkout-btn" onClick={handleCheckout}>
                💳 Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Success Popup */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            border: '2px solid #10b981'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
            <div style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#1f2937' }}>
              Order placed successfully! Thank you for your purchase.
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              style={{
                background: 'linear-gradient(45deg, #10b981, #059669)',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}