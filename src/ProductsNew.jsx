import "./ProductsNew.css";

export function ProductsNew(props) {
  // Need to handle submit when clicked.  This will targer onCerateProduct.
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params);
    event.target.reset();
  };

  return (
    <div id="product-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div>
          Price: <input className="form-control" name="price" type="text" />
        </div>
        <div>
          Description: <input className="form-control" name="description" type="text" />
        </div>
        <div>
          Quantity: <input className="form-control" name="quantity" type="text" />
        </div>
        <div>
          Supplier: <input className="form-control" name="supplier_id" type="text" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
