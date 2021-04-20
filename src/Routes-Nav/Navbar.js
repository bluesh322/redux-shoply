import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Typography
} from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { calculateTotalQuantity } from "../helpers/calculateCartTotal";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    color: "white",
  },
});

const Navbar = () => {
    const itemCount = useSelector(st => calculateTotalQuantity(st.productsReducer.cartItems));
    const cartValue = useSelector(st => st.productsReducer.cartValue);
    const itemUnit = itemCount === 1 ? "item" : "items";
  const Nav = () => {
    return (
      <Container maxWidth="md" className={classes.navDisplayFlex}>
        <IconButton edge="start" color="inherit" aria-label="cart">
          <Link className={classes.linkText} to="/">
            <ShoppingCart style={{ color : lightGreen[400]}} fontSize="large"></ShoppingCart>
          </Link>
        </IconButton>
        <List
          className={classes.navDisplayFlex}
          component="nav"
          aria-labelledby="main navigation"
        >
          <ListItem>
            <ListItemText className={classes.linkText} primary={`${itemCount} ${itemUnit} ${cartValue}`}></ListItemText>
          </ListItem>
          <Link className={classes.linkText} to="/cart" key="Cart">
            <ListItem button>
              <Typography>See Cart</Typography>
            </ListItem>
          </Link>
        </List>
      </Container>
    );
  };

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>{Nav()}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
