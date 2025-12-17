import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import BuyNow from './components/BuyNow';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderHistory from './pages/OrderHistory';
import AuthModal from './components/AuthModal';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProductPage from './pages/AddProductPage';
import GlobalPopup from './components/GlobalPopup';
import QuickAddProduct from './components/QuickAddProduct';
import ProtectedRoute from './pages/ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, name, token) => {
    const userData = { email, name: name || email.split('@')[0], token };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const requireAuth = () => {
    if (!user) {
      setShowAuthModal(true);
      return false;
    }
    return true;
  };

  const handleQuickAdd = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setShowQuickAdd(true);
  };

  const handleProductAdded = (newProduct) => {
    // Refresh products if on products page
    window.location.reload();
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header 
        user={user} 
        onLogout={handleLogout} 
        cart={cart}
        onLoginClick={() => setShowAuthModal(true)}
        onQuickAdd={handleQuickAdd}
      />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route 
              path="/products" 
              element={
                <Products 
                  cart={cart} 
                  setCart={setCart}
                  orders={orders}
                  setOrders={setOrders}
                  user={user}
                  requireAuth={requireAuth}
                />
              } 
            />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route 
              path="/product/:id" 
              element={
                <Product 
                  orders={orders}
                  setOrders={setOrders}
                  user={user}
                  requireAuth={requireAuth}
                />
              }
            />

            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart} 
                  setCart={setCart}
                  orders={orders}
                  setOrders={setOrders}
                  user={user}
                  requireAuth={requireAuth}
                />
              }
            />
            <Route 
              path="/buy/:id" 
              element={
                <ProtectedRoute 
                  user={user} 
                  onAuthRequired={() => setShowAuthModal(true)}
                >
                  <BuyNow />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/add-product" 
              element={
                <ProtectedRoute 
                  user={user} 
                  onAuthRequired={() => setShowAuthModal(true)}
                >
                  <AddProductPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/orders" 
              element={
                <ProtectedRoute 
                  user={user} 
                  onAuthRequired={() => setShowAuthModal(true)}
                >
                  <OrderHistory orders={orders} />
                </ProtectedRoute>
              } 
            />

          </Routes>
        </main>
        
        <Footer />
        
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
        
        <QuickAddProduct 
          isOpen={showQuickAdd}
          onClose={() => setShowQuickAdd(false)}
          onProductAdded={handleProductAdded}
        />
        
        <GlobalPopup />
    </div>
  );
}

export default App;
