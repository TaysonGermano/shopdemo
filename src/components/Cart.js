import React from "react";
import { Stack } from "@mui/material";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <Stack
      spacing={3}
      p={4}
      sx={{
        border: "5px solid #000",
      }}
    >
      {cart.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </Stack>
  );
}
