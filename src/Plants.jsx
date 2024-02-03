/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { yellow } from "@mui/material/colors";
import MySkeleton from "./MySkeleton";

let cart = [];

const addToCart = (id, price, qty, img) => {
  let itemIndex = cart.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    cart[itemIndex].qty = qty;
  } else {
    cart.push({ id: id, price: price, qty: qty, img: img });
  }
  localStorage.setItem("cart_len", cart.length);
  console.log(cart);
};

const FlowerList = () => {
  const [flowersData, setFlowersData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("http://localhost:3000/plants")
        .then((result) => {
          setFlowersData(result.data);
          setLoading(false); 
        })
        .catch((error) => console.error("Error getting data:", error));
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div className="container-fluid my-3">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {loading 
          ? 
            Array.from({ length: 8 }).map((_, index) => (
                <MySkeleton key={index}/>
            ))
          : 
            flowersData.map((flower, index) => (
              <MyCard
                key={index}
                image={flower.img}
                id={flower.id}
                name={flower.name}
                care={flower.care}
                price={flower.price}
                addToCart={addToCart}
              />
            ))}
      </Grid>
    </div>
  );
};

const MyCard = (props) => {
  let [value, setValue] = useState(0);
  const [Plus , setPlus] = useState(false);
  const [Cart , setCart] = useState(true);

  const handleCart = () => {
    if (value > 0)
    {
      setCart(false);
      
    }
    else {
      setCart(true);
    }
  }

  const handleIncrement = () => {
    if (value < 4) {
      setValue(++value);
      setPlus(false);
    }
    else {
      setPlus(true);
    }
    handleCart();
  };

  const handleDecrement = () => {
    if (value == 0) {
      setPlus(false);
    }
    if (value > 0 ){
      setValue(--value);
      setPlus(false);
    }
    handleCart();
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
        <CardMedia component="img" height="200" image={props.image} alt={props.name} />
        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <Typography py={0.5} variant="body2" color="text.secondary">
            <b>Care :</b> {props.care}
          </Typography>
          <Box py={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: 65,
                backgroundColor: yellow[300],
                height: 25,
                borderRadius: 5,
              }}
            >
              <b>₹ {value === 0 || value === 1 ? props.price : props.price * value}</b>
            </Box>
          </Box>
          <Box
            py={0.5}
            alignItems="center"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <IconButton
              onClick={() => addToCart(props.id, props.price, value, props.image)}
              disabled={Cart}
            >
              <AddShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>
            <Button
              color="success"
              onClick={handleIncrement}
              size="small"
              variant="outlined"
              disabled={Plus}
            >
              <AddIcon />
            </Button>
            <IconButton>
              <Typography variant="body1">{value}</Typography>
            </IconButton>
            <Button
              color="error"
              onClick={handleDecrement}
              size="small"
              variant="outlined"
            >
              <RemoveIcon />
            </Button>
            <IconButton>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FlowerList;
