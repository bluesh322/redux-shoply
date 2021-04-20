import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  FormControl,
  TextField,
  Button
} from "@material-ui/core";
import CartIcons from "./CartIcons";
import { makeStyles } from "@material-ui/core/styles";
import { applyDiscount } from "../reducers/actions";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const [discount, setDiscount] = useState("");
  const dispatch = useDispatch();
  const {
    cartItems,
    products,
    discountAmount,
    discountApplied,
    cartValue,
  } = useSelector((st) => st.productsReducer);

  const handleChange = (evt) => {
    setDiscount(evt.target.value);
  };

  const handleDiscount = (evt) => {
    evt.preventDefault();
    dispatch(applyDiscount(discount));
    setDiscount("");
  };

  return Object.keys(cartItems).length === 0 ? (
    <h2>No items in the cart yet!</h2>
  ) : (
    <Box mt={2}>
      <TableContainer component={Paper} className="cart">
        <Table className={classes.table} aria-label="cart">
          <TableHead>
            <TableRow>
              <TableCell align="left">Item Name</TableCell>
              <TableCell align="right">Item Price</TableCell>
              <TableCell align="right">Item Quantity</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(cartItems).map((id) => (
              <TableRow key={products[id].name}>
                <TableCell align="left">
                  <Link to={`/products/${id}`}>{products[id].name}</Link>
                </TableCell>
                <TableCell align="right">{products[id].price}</TableCell>
                <TableCell align="right">{cartItems[id]}</TableCell>
                <TableCell align="right">
                  <CartIcons id={id}></CartIcons>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>
        Total: ${cartValue}{" "}
        {discountApplied ? (
          <span>- You saved {(discountAmount * 100).toFixed(0)}%</span>
        ) : null}
      </p>
      <form onSubmit={handleDiscount} className="inline">
        <FormControl>
          <TextField 
            id="discount"
            className={clsx(
              classes.margin,
              classes.withoutLabel,
              classes.textField
            )}
            variant="outlined"
            label="discount"
            name="discnount"
            value={discount.discount}
            onChange={handleChange}
          ></TextField>
          <Button
            data-testid="submit"
            variant="contained"
            color="primary"
            type="submit"
          >
            Apply Discount Code
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Cart;
