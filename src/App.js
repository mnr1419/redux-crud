import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter } from "react-router-dom";
import AddProduct from "./component/product/addproduct";
import EditProduct from "./component/product/editproduct";
import ProductsList from "./component/product/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <h2>React Crud Application</h2>
        <Link to="/index">Home</Link>|<Link to="/addproduct">Add</Link>
        <br />
        <br />
        <Route path="/" exact component={ProductsList}></Route>
        <Route path="/index" exact component={ProductsList}></Route>
        <Route path="/addproduct" exact component={AddProduct}></Route>
        <Route path="/editproduct" exact component={EditProduct}></Route>
        <br />
        <br />
        <br />
        <h3> Copyrights @2020 by MNR</h3>
        {/* <ProductsList />
      <EditProduct />
      <AddProduct /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
