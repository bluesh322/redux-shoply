import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import CartIcons from "./CartIcons";

const ProductList = () => {
  const { products } = useSelector((st) => st.productsReducer);
  return (
    <div className="productList">
      <Typography variant="h2">Check out all of our products!</Typography>
      {Object.keys(products).map((id) => (
          <Card key={id}>
            <CardContent>
              <Link to={`/products/${id}`}>
                <Typography variant="h5">{products[id].name}</Typography>
              </Link>

            </CardContent>
            <CartIcons id={id}></CartIcons>
          </Card>
        )
      )}
    </div>
  );
};

export default ProductList;
