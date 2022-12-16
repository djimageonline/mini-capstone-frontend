import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export function Home() {
  const [products, setProducts] = useState([]);

  // make state to show and hide the modal
  const [isProductsShowVisibile, setIsProductShowVisible] = useState(false);
  const [currentProduct, setcurrentProduct] = useState({});

  // handles index from backend with axios
  const handleIndexProduct = () => {
    console.log("handleIndexProduct");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  //make a create function and pass it to the new component
  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProducts", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  //make state and functions to show and hide the modal
  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductShowVisible(true);
    setcurrentProduct;
  };
  // Need to handle the close in the Modal
  const handleClose = () => {
    console.log("handleClose");
    setIsProductShowVisible(false);
  };

  useEffect(handleIndexProduct, []);

  return (
    <div>
      <h1>Welcome ShopR</h1>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisibile} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
