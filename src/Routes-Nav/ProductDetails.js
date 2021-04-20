import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import CartIcons from "./CartIcons";


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        marginTop: "2em",
        paddingTop: "1em"
    },
    media: {
        height: 200,
        width : "auto",
    }
})

const ProductDetails = () => {
    const classes = useStyles();
    const { id } = useParams();
    const { image_url, name, price, description } = useSelector(st => ({...st.productsReducer.products[id]}))

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}
                image={image_url}
                title={name}></CardMedia>
            </CardActionArea>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body1">${price}</Typography>
                <hr/>
                <Typography variant="body1">{description}</Typography>
                <CartIcons id={id}></CartIcons>
                <Link to="/"><Typography variant="body1">Go Back</Typography></Link>
            </CardContent>
        </Card>
    )
}

export default ProductDetails;