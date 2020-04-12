import React, { Component } from "react";
import { connect } from "react-redux";
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_PRODUCT",
      product: this.state,
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3> Add Product</h3>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter Id:</label>
            <input
              type="text"
              name="id"
              placeholder="Id"
              value={this.state.id}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Name:</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Enter Price:</label>
            <input
              type="Number"
              name="price"
              placeholder="price"
              value={this.state.price}
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
export default connect()(AddProduct);
