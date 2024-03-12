/* eslint-disable react/prop-types */
import { getCart, setCart, getTotal, getQty , getLen} from "./Global";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import RemoveCart from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EmptyCart from "./EmptyCart";
import Gpay from "./Payment";

import {
  flowerContent,
  potsContent,
  utilContent,
  soilContent,
} from "./CartContent";

const MyCart = (props) => {
  const [cart, setLocalCart] = useState(getCart());
  const [quantity, setQuantity] = useState(getQty(cart));
  const [total, setTotal] = useState(getTotal(cart));

  return (
    <>
      {cart.length == 0 ? (
        <EmptyCart />
      ) : (
        cart.map((item, index) => (
          <MyCard
            key={index}
            id={item.id}
            image={item.img}
            qty={item.qty}
            price={item.price}
            name={item.name}
            care={item.care}
            category={item.category}
            type={item.type}
            color={item.color}
            soil_name={item.soil_name}
            soil_type={item.soil_type}
            util_name={item.name}
            util_usage={item.usage}
            cart={cart}
            setLocalCart={setLocalCart}
            setTotal={setTotal}
            setQuantity={setQuantity}
            setlen={props.setlen}
          />
        ))
      )}
      {cart.length != 0 ? (
        <div
          className="container my-3"
          style={{
            display: "flex",
            "align-items": "center",
            "justify-content": "flex-end",
          }}
        >
          <Typography component="div" variant="h6">
            Total Quantity :
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 45,
              backgroundColor: "#93ff82",
              height: 35,
              borderRadius: 5,
              marginLeft: 2,
              marginRight: "100px",
            }}
          >
            <Typography variant="h6">{quantity}</Typography>
          </Box>

          <Typography component="div" variant="h6">
            Total Amount :
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 120,
              backgroundColor: "#93ff82",
              height: 35,
              borderRadius: 5,
              marginLeft: 2,
              marginRight: "25px",
            }}
          >
            <Typography variant="h6">₹ {total}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 120,
              backgroundColor: "#93ff82",
              height: 35,
              borderRadius: 5,
              marginLeft: 45,
              marginRight: "25px",
            }}
          >
            <Gpay total={total} />
          </Box>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const MyCard = (props) => {

  const index = props.cart.findIndex((item) => item.id === props.id);
  const handleIncrement = () => {
    if (props.cart[index].qty < 4) {

      if (index !== -1) {
        props.cart[index].qty += 1 ;
        console.log(props.cart[index].qty) ; 
      }
      setCart(props.cart);
      props.setLocalCart(getCart());
      props.setTotal(getTotal(props.cart));
      props.setQuantity(getQty(props.cart));
      console.log(getCart());
    }
  };

  const handleDecrement = () => {
    if (props.cart[index].qty >1) {

      if (index !== -1) {
        props.cart[index].qty -= 1 ;
        console.log(props.cart[index].qty) ; 
      }
      setCart(props.cart);
      props.setLocalCart(getCart());
      props.setTotal(getTotal(props.cart));
      props.setQuantity(getQty(props.cart));
      console.log(getCart());
    }
  };

  const handleDelete = () => {
    const updatedCart = props.cart.filter((item) => item.id !== props.id);
    console.log(updatedCart);
    setCart(updatedCart);

    props.setLocalCart(updatedCart);
    props.setTotal(getTotal(updatedCart));
    props.setQuantity(getQty(updatedCart));
    props.setlen(getLen())
    // setCart()
    // setLocalCart(updatedCart);
    // setTotal(getTotal(updatedCart));
    // setQuantity(getQty(updatedCart));

  };
  return (
    <>
      <Card
        sx={{
          height: "max-content",
          display: "flex",
          marginTop: 4,
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 2,
        }}
        my={5}
      >
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={props.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {props.id.startsWith("flower")
            ? flowerContent(props.name, props.care)
            : ""}
          {props.id.startsWith("pots")
            ? potsContent(props.category, props.color, props.type)
            : ""}
          {props.id.startsWith("soil")
            ? soilContent(props.soil_name, props.soil_type)
            : ""}
          {props.id.startsWith("util")
            ? utilContent(props.util_name, props.util_usage)
            : ""}

          <Box
            py={1}
            sx={{
              marginRight: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{ width: 65, height: 25 }}
              color="success"
              onClick={handleIncrement}
              variant="outlined"
            >
              <AddIcon />
            </Button>
            <IconButton style={{ height: 25 }}>
              <Typography variant="body1">{props.cart[index].qty}</Typography>
            </IconButton>
            <Button
              style={{ width: 65, height: 25 }}
              color="error"
              onClick={handleDecrement}
              variant="outlined"
            >
              <RemoveIcon />
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: 65,
                backgroundColor: yellow[300],
                height: 25,
                borderRadius: 5,
                marginLeft: 2,
              }}
            >
              <b>₹ {props.price * props.cart[index].qty}</b>
            </Box>
            <IconButton
              onClick={() => {
                handleDelete();
              }}
              style={{
                borderRadius: 15,
                width: 65,
                height: 25,
                marginRight: 10,
                marginLeft: 10,
              }}
              aria-label="previous"
            >
              <RemoveCart color="error" />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MyCart;
