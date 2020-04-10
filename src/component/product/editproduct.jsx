import React, { Component } from "react";
//import { connect } from "react-redux";
class EditProduct extends Component {
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.dispatch({
    //   type: "UPDATE_PRODUCT",
    //   product: {
    //     id: e.target.id.value,
    //     name: e.target.name.value,
    //     price: e.target.price.value,
    //   },
    // });
    this.props.dispatch({
      type: "REPLACE_PRODUCT",
      product: {
        id: e.target.id.value,
        name: e.target.name.value,
        price: e.target.price.value,
      },
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3> Edit Product</h3>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter Id:</label>
            <input
              type="Number"
              name="id"
              placeholder="Id"
              readOnly="true"
              defaultValue={this.props.product.id}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Name:</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={this.props.product.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Price:</label>
            <input
              type="Number"
              name="price"
              placeholder="price"
              defaultValue={this.props.product.price}
              onChange={this.handleChange}
            ></input>
            <br />
            <br />
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     product: state.products[0],
//   };
//}
//export default connect(mapStateToProps)(EditProduct);
export default EditProduct;
