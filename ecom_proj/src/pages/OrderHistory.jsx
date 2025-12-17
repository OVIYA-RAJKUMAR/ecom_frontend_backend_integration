export default function OrderHistory({ orders }) {
  // Generate dummy detailed order data
  const detailedOrders = orders.map((order, index) => ({
    ...order,
    orderId: `ORD-${String(1000 + index).padStart(4, '0')}`,
    orderDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    deliveryDate: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: ['Processing', 'Shipped', 'Delivered', 'In Transit'][Math.floor(Math.random() * 4)],
    quantity: Math.floor(Math.random() * 3) + 1,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Heritage Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    paymentMethod: 'Credit Card ending in 4567',
    trackingNumber: `TRK${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    estimatedDelivery: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    totalAmount: order.price * (Math.floor(Math.random() * 3) + 1),
    shippingCost: 0,
    tax: Math.round(order.price * 0.1)
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing': return '#f59e0b';
      case 'Shipped': return '#3b82f6';
      case 'In Transit': return '#8b5cf6';
      case 'Delivered': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processing': return '⏳';
      case 'Shipped': return '📦';
      case 'In Transit': return '🚚';
      case 'Delivered': return '✅';
      default: return '📋';
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap');
        
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
          50% { transform: scale(1.02); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 8px 25px rgba(220, 38, 38, 0.1); }
          50% { box-shadow: 0 12px 35px rgba(220, 38, 38, 0.2), 0 0 20px rgba(220, 38, 38, 0.1); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .orders-container {
          max-width: 1400px;
          margin: 40px auto;
          padding: 20px;
          font-family: 'Inter', sans-serif;
          min-height: 80vh;
        }
        
        .orders-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          text-align: center;
          margin-bottom: 50px;
          background: linear-gradient(45deg, #dc2626, #b91c1c, #991b1b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out;
        }
        
        .orders-grid {
          display: grid;
          gap: 30px;
        }
        
        .order-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border-radius: 25px;
          padding: 35px;
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.8s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .order-card:hover {
          transform: translateY(-8px);
          animation: glow 2s infinite;
        }
        
        .order-card:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }
        
        .order-card:hover:before {
          left: 100%;
        }
        
        .order-header {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 20px;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgba(220, 38, 38, 0.1);
        }
        
        .order-id {
          font-family: 'Roboto Mono', monospace;
          font-size: 1.4rem;
          font-weight: 700;
          color: #1f2937;
          animation: slideInLeft 0.8s ease-out;
        }
        
        .order-date {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #6b7280;
          font-weight: 500;
        }
        
        .status-badge {
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: bounce 2s infinite;
        }
        
        .order-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 25px;
        }
        
        .product-section {
          animation: slideInLeft 0.8s ease-out 0.2s both;
        }
        
        .details-section {
          animation: slideInRight 0.8s ease-out 0.2s both;
        }
        
        .product-info {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .product-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .product-image:hover {
          transform: scale(1.05);
        }
        
        .product-details {
          flex: 1;
        }
        
        .product-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        
        .product-description {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.4;
          margin-bottom: 10px;
        }
        
        .product-price {
          font-family: 'Roboto Mono', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: #dc2626;
        }
        
        .quantity-info {
          background: rgba(220, 38, 38, 0.05);
          padding: 10px 15px;
          border-radius: 10px;
          margin-top: 10px;
          font-weight: 600;
          color: #dc2626;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .info-group {
          background: rgba(248, 250, 252, 0.8);
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 20px;
          border-left: 4px solid #dc2626;
        }
        
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        
        .info-label {
          color: #6b7280;
          font-weight: 500;
        }
        
        .info-value {
          color: #1f2937;
          font-weight: 600;
        }
        
        .address-block {
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(220, 38, 38, 0.1);
          line-height: 1.6;
          color: #4b5563;
        }
        
        .tracking-section {
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-top: 20px;
          text-align: center;
          animation: pulse 2s infinite;
        }
        
        .tracking-number {
          font-family: 'Roboto Mono', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          margin-top: 10px;
          letter-spacing: 1px;
        }
        
        .order-summary {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, #fef2f2, #fecaca);
          padding: 25px;
          border-radius: 20px;
          border: 2px solid rgba(220, 38, 38, 0.2);
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        
        .summary-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .summary-item {
          text-align: center;
          padding: 15px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.1);
        }
        
        .summary-label {
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 5px;
        }
        
        .summary-value {
          font-family: 'Roboto Mono', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: #dc2626;
        }
        
        .empty-orders {
          text-align: center;
          padding: 100px 20px;
          animation: fadeInUp 1s ease-out;
        }
        
        .empty-icon {
          font-size: 5rem;
          margin-bottom: 30px;
          animation: bounce 2s infinite;
        }
        
        .empty-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #6b7280;
          margin-bottom: 20px;
        }
        
        .empty-text {
          font-size: 1.2rem;
          color: #9ca3af;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        
        .shop-button {
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          padding: 18px 40px;
          border: none;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }
        
        .shop-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(220, 38, 38, 0.4);
        }
        
        @media (max-width: 768px) {
          .order-content {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .order-header {
            grid-template-columns: 1fr;
            gap: 15px;
            text-align: center;
          }
          
          .product-info {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="orders-container">
        <h1 className="orders-title">📦 Order History</h1>
        
        {detailedOrders && detailedOrders.length > 0 ? (
          <div className="orders-grid">
            {detailedOrders.map((order, index) => (
              <div key={index} className="order-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="order-header">
                  <div className="order-id">🆔 {order.orderId}</div>
                  <div className="order-date">
                    📅 Ordered: {new Date(order.orderDate).toLocaleDateString()}
                  </div>
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {getStatusIcon(order.status)} {order.status}
                  </div>
                </div>
                
                <div className="order-content">
                  <div className="product-section">
                    <h3 className="section-title">🏺 Product Details</h3>
                    <div className="product-info">
                      <img 
                        src={order.image} 
                        alt={order.name}
                        className="product-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                        }}
                      />
                      <div className="product-details">
                        <h4 className="product-name">{order.name}</h4>
                        <p className="product-description">{order.description}</p>
                        <div className="product-price">₹{order.price.toLocaleString()}</div>
                        <div className="quantity-info">
                          📊 Quantity: {order.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="details-section">
                    <h3 className="section-title">📋 Order Information</h3>
                    
                    <div className="info-group">
                      <div className="info-row">
                        <span className="info-label">💳 Payment Method:</span>
                        <span className="info-value">{order.paymentMethod}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">🚚 Estimated Delivery:</span>
                        <span className="info-value">{order.estimatedDelivery}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">📱 Tracking Number:</span>
                        <span className="info-value">{order.trackingNumber}</span>
                      </div>
                    </div>
                    
                    <h4 className="section-title">🏠 Shipping Address</h4>
                    <div className="address-block">
                      <strong>{order.shippingAddress.name}</strong><br/>
                      {order.shippingAddress.street}<br/>
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br/>
                      {order.shippingAddress.country}
                    </div>
                    
                    {order.status !== 'Delivered' && (
                      <div className="tracking-section">
                        <div>🔍 Track Your Order</div>
                        <div className="tracking-number">{order.trackingNumber}</div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="order-summary">
                  <h4 className="summary-title">💰 Order Summary</h4>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <div className="summary-label">Subtotal</div>
                      <div className="summary-value">₹{(order.totalAmount - order.tax).toLocaleString()}</div>
                    </div>
                    <div className="summary-item">
                      <div className="summary-label">Shipping</div>
                      <div className="summary-value">₹{order.shippingCost}</div>
                    </div>
                    <div className="summary-item">
                      <div className="summary-label">Tax</div>
                      <div className="summary-value">₹{order.tax.toLocaleString()}</div>
                    </div>
                    <div className="summary-item">
                      <div className="summary-label">Total</div>
                      <div className="summary-value">₹{order.totalAmount.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-orders">
            <div className="empty-icon">📦</div>
            <h2 className="empty-title">No Orders Yet</h2>
            <p className="empty-text">
              Start your treasure hunting journey!<br/>
              Discover amazing antiques and vintage collectibles.
            </p>
            <a href="/products" className="shop-button">
              🏺 Start Shopping
            </a>
          </div>
        )}
      </div>
    </>
  );
}