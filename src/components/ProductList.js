import React from "react";
import { Stack } from "@mui/material";
import Product from "./Product";
import { products } from "../database/products";

export default function ProductList() {
  return (
    <Stack
      spacing={3}
      p={4}
      sx={{
        border: "5px solid #000",
      }}
    >
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </Stack>
  );
}
