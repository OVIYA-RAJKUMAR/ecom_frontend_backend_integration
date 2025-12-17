import { useState } from "react";
import { productsAPI } from "../services/api";

export default function QuickAddProduct({ isOpen, onClose, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Valid price is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.stock || formData.stock < 0) newErrors.stock = "Valid stock quantity is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      const newProduct = await productsAPI.create({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      });
      
      onProductAdded(newProduct);
      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        stock: ""
      });
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translate(-50%, -60%) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        .quick-add-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2000;
          animation: modalFadeIn 0.3s ease-out;
        }
        
        .quick-add-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
          animation: modalSlideIn 0.4s ease-out;
          border: 2px solid #dc2626;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(220, 38, 38, 0.1);
        }
        
        .modal-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #dc2626;
          margin: 0;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          padding: 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .close-btn:hover {
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 5px;
          font-size: 0.9rem;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 0.95rem;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          background: #ffffff;
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.1);
        }
        
        .form-textarea {
          height: 80px;
          resize: vertical;
        }
        
        .error-message {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 5px;
          font-weight: 500;
        }
        
        .form-buttons {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        
        .submit-btn {
          flex: 1;
          padding: 12px;
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }
        
        .cancel-btn {
          flex: 1;
          padding: 12px;
          background: #6b7280;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        
        .cancel-btn:hover {
          background: #4b5563;
          transform: translateY(-2px);
        }
      `}</style>
      
      <div className="quick-add-overlay" onClick={onClose}>
        <div className="quick-add-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">⚡ Quick Add Product</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">🏺 Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter product name"
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            
            <div className="form-group">
              <label className="form-label">💰 Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter price"
                min="0"
                step="0.01"
              />
              {errors.price && <div className="error-message">{errors.price}</div>}
            </div>
            
            <div className="form-group">
              <label className="form-label">📝 Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Enter product description"
              />
              {errors.description && <div className="error-message">{errors.description}</div>}
            </div>
            
            <div className="form-group">
              <label className="form-label">🖼️ Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="form-input"
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && <div className="error-message">{errors.image}</div>}
            </div>
            
            <div className="form-group">
              <label className="form-label">🏷️ Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter category"
              />
              {errors.category && <div className="error-message">{errors.category}</div>}
            </div>
            
            <div className="form-group">
              <label className="form-label">📦 Stock Quantity</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter stock quantity"
                min="0"
              />
              {errors.stock && <div className="error-message">{errors.stock}</div>}
            </div>
            
            <div className="form-buttons">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}