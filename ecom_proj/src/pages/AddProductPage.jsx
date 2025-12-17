import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";

export default function AddProductPage() {
  const navigate = useNavigate();

  const handleProductAdded = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", minHeight: "80vh" }}>
      <AddProduct onProductAdded={handleProductAdded} />
    </div>
  );
}