import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Card from "../Cart/Cart";

const Routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleCartClearance,
  handleRemoveItem,
}) => {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route
          path="/cart"
          exact
          element={
            <Card
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleCartClearance={handleCartClearance}
              handleRemoveItem={handleRemoveItem}
            />
          }
        ></Route>
      </Switch>
    </div>
  );
};

export default Routes;
