import * as React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Typography, Box} from "@mui/material";
import Product from "../components/product";
import Navbar from "../components/navbar";

const Cart = () => {
    const cartproducts = useSelector((state) => state.cart.products);

    return (
        <div>
            <Navbar/>
            <Grid sx={{padding: 5, paddingTop: 10,}} container spacing={0.5} rowSpacing={2}
                  columns={{xs: 1, sm: 2, md: 12}}>
                {cartproducts && cartproducts.map((product) =>
                    <Grid item xs={4} key={product.id}>
                        <Product productDetails={product}/>
                    </Grid>
                )}
            </Grid>
            {cartproducts && cartproducts.length < 1 && <Box sx={{display: 'flex', justifyContent: "center"}}>
                <Typography>No Products In
                    cart
                </Typography>
                <Typography sx={{paddingLeft: 5}}>
                    <Link to={"/home"}>Go to Products</Link>
                </Typography>
            </Box>}
        </div>


    );
}
export default Cart;
