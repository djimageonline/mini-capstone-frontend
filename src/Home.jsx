import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function Home() {
  const [products, setProducts] = useState([]);

  // make state to show and hide the modal
  const [isProductsShowVisibile, setIsProductShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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
    setCurrentProduct(product);
  };
  // Need to handle the close in the Modal
  const handleClose = () => {
    console.log("handleClose");
    setIsProductShowVisible(false);
  };

  //make an update function and pass it into the show component
  const handleUpdateProduct = (id, params) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      handleClose();
    });
  };

  useEffect(handleIndexProduct, []);

  return (
    <div>
      <h1>Welcome ShopR</h1>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisibile} onClose={handleClose}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
