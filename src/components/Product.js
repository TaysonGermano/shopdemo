import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Button } from "./custom/Button";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/reducers/cart";

export default function Product(props) {
  const dispatch = useDispatch();

  // add to cart
  const addToCart = () => dispatch(add(props));

  // remove from cart
  const removeFromCart = () => dispatch(remove(props));

  return (
    <Box textAlign="left">
      <Typography component="h2" fontSize={30} fontWeight="bold">
        {props.image} {props.name}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={3}>
          <Typography component="p" fontSize={16}>
            <b>SKU:</b> {props.SKU}
          </Typography>
          <Typography component="p" fontSize={16}>
            <b>Expires At:</b> {props.expireDate}
          </Typography>
        </Stack>
        {props.showAddBtn && <Button onClick={addToCart}>Add to cart</Button>}
        {props.showRmvBtn && (
          <Button onClick={removeFromCart}>Remove from cart</Button>
        )}
      </Stack>
    </Box>
  );
}
