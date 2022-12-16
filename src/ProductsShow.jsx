export function ProductsShow(props) {
  // handle the form submit to run the props update function
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Product Info</h1>
      <h2>Name: {props.product.name}</h2>
      <p> Price: {props.product.price}</p>
      <p> Description: {props.product.description}</p>
      <p> In Stock: {props.product.quantity}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        {/* <div>
          Quantity: <input defaultValue={props.product.quantity} name="quantity" type="text" />
        </div> */}
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Delete product</button>
    </div>
  );
}
