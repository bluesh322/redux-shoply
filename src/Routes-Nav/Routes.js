import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/">
          <ProductList></ProductList>
        </Route>
        <Route exact path='/products/:id'>
            <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
  );
};

export default Routes;
