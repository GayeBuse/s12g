import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    timeout: 1000,
    headers: { "Secret-Custom-Header": "token" },
  });

  useEffect(() => {
    instance
      .get()
      .then(function (response) {
        // handle successsetProducts(json)
        setProducts(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}$</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
