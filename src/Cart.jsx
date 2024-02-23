/* eslint-disable react/prop-types */
import { getCart, setCart, getTotal, getQty } from "./Global";
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
import { flowerContent, potsContent } from "./CartContent";

const MyCart = () => {
  const prev = getCart();
  const [cart, setLocalCart] = useState(prev);
  const [quantity, setQuantity] = useState(getQty(cart));
  const [total, setTotal] = useState(getTotal(cart));
  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setLocalCart(updatedCart);
    setTotal(getTotal(updatedCart));
    setQuantity(getQty(updatedCart));
    console.log(getCart());
  };

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
            handleDelete={handleDelete}
            setTotal={setTotal}
            setQuantity={setQuantity}
          />
        ))
      )}

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
      </div>
    </>
  );
};

let tempcart = getCart();
const MyCard = (props) => {
  let [value, setValue] = useState(props.qty);
  const itemToChange = tempcart.find((item) => item.id === props.id);

  const handleIncrement = () => {
    if (value < 4) {
      setValue(++value);
      itemToChange.qty = value;
      setCart(tempcart);
      props.setTotal(getTotal(tempcart));
      props.setQuantity(getQty(tempcart));
      console.log(getCart());
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(--value);
      itemToChange.qty = value;
      setCart(tempcart);
      props.setTotal(getTotal(tempcart));
      props.setQuantity(getQty(tempcart));
      console.log(getCart());
    }
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
          {
            props.id.startsWith("flower")
              ? flowerContent(props.name, props.care)
              : props.id.startsWith("pots")
              ? potsContent(props.category, props.color, props.type)
              : ""
            // props.id.startWith("soil") ? soilContent() :
            // props.id.startWith("util") ? utilContent() : ""
          }

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
              <Typography variant="body1">{value}</Typography>
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
              <b>₹ {props.price * value}</b>
            </Box>
            <IconButton
              onClick={() => {
                props.handleDelete(props.id);
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
