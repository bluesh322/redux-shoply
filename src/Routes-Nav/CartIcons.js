import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/actions";
import { IconButton } from "@material-ui/core"
import { Add, Remove} from "@material-ui/icons"

const CartIcons = ({id}) =>{
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id));
    const remove = () => dispatch(removeFromCart(id));
    return (
        <div className="justify-content-between">
            <IconButton onClick={add}><Add></Add></IconButton>
            <IconButton onClick={remove}><Remove></Remove></IconButton>
        </div>
    )
}

export default CartIcons;