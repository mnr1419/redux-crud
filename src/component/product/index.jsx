import React from "react";
import { connect } from "react-redux";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }
  deleteProduct(id) {
    console.log("delete product");
    this.props.dispatch({
      type: "DELETE_PRODUCT",
      id: id,
    });
    this.props.history.push("/");
  }
  editProduct(id) {
    console.log("edit product");
    this.props.dispatch({
      type: "EDIT_PRODUCT",
      id: id,
    });
    this.props.history.push("/editproduct");
  }
  render() {
    console.log("check");
    return (
      <div>
        <h3>Product List</h3>
        <br />
        <br />
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.deleteProduct(product.id)}
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => this.editProduct(product.id)}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(ProductsList);
