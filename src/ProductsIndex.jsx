export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h2>All Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p> Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => props.onShowProduct(product)}>Show Product</button>
          {/* <img src={product.url}></img> */}
        </div>
      ))}
    </div>
  );
}
