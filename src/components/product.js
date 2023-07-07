import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartAction, removeFromCartAction} from "../redux/actions/cartActions";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Snackbar, Alert} from '@mui/material';
import {useState} from "react";

const Product = ({productDetails}) => {
    const dispatch = useDispatch();
    const cartproducts = useSelector((state) => state.cart.products);
    const [msg, setMsg] = useState("");
    const handleAddToCart = (e) => {
        dispatch(addToCartAction(productDetails))
        setMsg("Product Added In Cart !")
    };
    const handleRemoveFromCart = (e) => {
        const productId = productDetails?.id;
        dispatch(removeFromCartAction(productId))
        setMsg("Product Removed From Cart !")
    };
    return (
        <>
            <Snackbar open={msg !== ""} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                      autoHideDuration={3000}
                      onClose={() => setMsg("")}>
                <Alert onClose={() => setMsg("")} variant="filled" severity="info" sx={{width: '100%'}}>
                    {msg}
                </Alert>
            </Snackbar>

            <Card sx={{maxWidth: 345, maxHeight: 400, minHeight: 400}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={productDetails?.image}
                />

                <CardContent sx={{paddingTop: 0, marginTop: 0}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {productDetails?.title}
                    </Typography>

                    <CardActions sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Typography gutterBottom variant="h6" component="div">
                            Price : {productDetails?.price}$
                        </Typography>
                        {cartproducts.some(product => product.id === productDetails?.id) ? <Button
                                onClick={handleRemoveFromCart}
                                sx={{
                                    padding: 1,
                                    backgroundColor: "rgba(47,56,47,1)",
                                    "&:hover": {backgroundColor: "rgba(10,20,10,1)"}
                                }}>
                                <Typography
                                    style={{fontSize: 12, color: "white"}}>
                                    Remove From Cart </Typography>
                            </Button> :
                            <Button sx={{
                                padding: 1,
                                backgroundColor: "rgba(47,56,47,1)",
                                "&:hover": {backgroundColor: "rgba(10,20,10,1)"}
                            }} onClick={handleAddToCart}>
                                <Typography
                                    style={{fontSize: 12, color: "white"}}>
                                    Add to Cart</Typography>
                            </Button>}
                    </CardActions>
                    <Typography variant="body2" color="text.secondary" style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        paddingBottom: 2
                    }}>
                        {productDetails?.description}
                    </Typography>
                </CardContent>


            </Card>
        </>
    );
}

export default Product;