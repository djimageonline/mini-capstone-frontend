export function ProductsShow(props) {
  console.log(props);
  return (
    <div>
      <h1>Product Info</h1>
      <h2>Name: {props.product.name}</h2>
      <p> Price: {props.product.price}</p>
      <p> Description: {props.product.description}</p>
      <p> In Stock: {props.product.quantity}</p>
    </div>
  );
}
