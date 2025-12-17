import { useState } from "react";
import { productsAPI } from "../services/api";

export default function AddProduct({ onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "20px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 0 15px rgba(0,0,0,0.1)"
    }}>
      <h2>Add New Product</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{...inputStyle, height: "80px"}}
        />
        
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={formData.stock}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px"
};