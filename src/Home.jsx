import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function Home() {
  const [products, setProducts] = useState([]);

  const handleIndexPhotos = () => {
    console.log("handleIndexPhotos");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexPhotos, []);

  return (
    <div>
      <h1>Welcome ShopR</h1>
      <ProductsIndex products={products} />
    </div>
  );
}
