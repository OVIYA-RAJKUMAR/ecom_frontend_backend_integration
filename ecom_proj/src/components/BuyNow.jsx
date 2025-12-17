import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsAPI } from "../services/api";

export default function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productsAPI.getById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 0 15px rgba(0,0,0,0.1)"
    }}>
      
      <h2 style={{ marginBottom: "10px" }}>{product.name}</h2>

      <img 
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        Price: <b>₹{product.price}</b>
      </p>

      <h3>Shipping Details</h3>
      <input type="text" placeholder="Full Name" style={inputStyle} />
      <input type="text" placeholder="Address" style={inputStyle} />
      <input type="text" placeholder="Phone Number" style={inputStyle} />

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Place Order
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};
