import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function Shop() {
  return (
    <Grid container>
      <Grid item md={6} p={4} bgcolor="#63beff">
        <Typography component="h1" variant="h1" mb={2}>
          Shop Stock
        </Typography>
        <ProductList />
      </Grid>
      <Grid item md={6} p={4} bgcolor="#ffdb63">
        <Typography component="h1" variant="h1" mb={2}>
          Client's Cart
        </Typography>
        <Cart />
      </Grid>
    </Grid>
  );
}
