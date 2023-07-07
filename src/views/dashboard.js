import * as React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProductAction} from "../redux/actions/productActions";
import Product from "../components/product";
import Navbar from "../components/navbar";
import {Grid, Box, CircularProgress} from "@mui/material";

const Dashboard = () => {
    const allproducts = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => dispatch(addProductAction(json)))
    }, [])

    return (
        <div>
            <Navbar/>
            <Grid sx={{padding: 5, paddingTop: 10,}} container spacing={0.5} rowSpacing={2}
                  columns={{xs: 1, sm: 2, md: 12}}>
                {allproducts && allproducts.map((product) =>
                    <Grid item xs={4} key={product.id}>
                        <Product productDetails={product}/>
                    </Grid>
                )}
            </Grid>
            {allproducts && allproducts.length < 1 && <Box sx={{display: 'flex', justifyContent: "center"}}>
                <CircularProgress/>
            </Box>}

        </div>


    );
}
export default Dashboard;
