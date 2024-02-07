import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}

export default App;
