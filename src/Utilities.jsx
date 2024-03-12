/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { yellow } from "@mui/material/colors";
import MySkeleton from "./MySkeleton";
import { getCart, setCart , getLen} from "./Global";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const UtilList = (props) => {
  const [utilData, setutilData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState({
    status: false,
    statusText: "",
    type: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("http://localhost:3000/util")
        .then((result) => {
          setutilData(result.data);
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
          ? Array.from({ length: 8 }).map((_, index) => (
              <MySkeleton key={index} />
            ))
          : utilData.map((util, index) => (
              <MyCard
                key={index}
                image={util.img}
                id={util.id}
                name={util.name}
                description={util.description}
                usage={util.usage}
                price={util.price}
                setOpenSnackbar={setOpenSnackbar}
                setlen={props.setlen}
              />
            ))}
      </Grid>
      <Snackbar
        open={openSnackbar.status}
        autoHideDuration={4000}
        onClose={() =>
          setOpenSnackbar({ status: false, statusText: "", type: "" })
        }
      >
        <Alert
          severity={openSnackbar.type}
          variant="filled"
          sx={{ width: "100%" }}
          onClose={() =>
            setOpenSnackbar({ status: false, statusText: "", type: "" })
          }
        >
          <b>{openSnackbar.statusText}</b>
        </Alert>
      </Snackbar>
    </div>
  );
};

const MyCard = (props) => {

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="250px"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <Typography py={0.5} variant="body2" color="text.secondary">
            <b>Description :</b> {props.description}
          </Typography>
          <Typography py={0.5} variant="body2" color="text.secondary">
            <b>Usage :</b> {props.usage}
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
              <b>₹ {props.price}</b>
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
              onClick={() => {
                addToCart(
                  props.id,
                  props.price,
                  props.image,
                  props.usage,
                  props.name,
                  props.setOpenSnackbar,
                  props.setlen
                );
              }}
            >
              <AddShoppingCartOutlinedIcon fontSize="medium" />
            </IconButton>

            <IconButton>
              <FavoriteBorderOutlinedIcon fontSize="medium" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const addToCart = (id, price, img, usage, name, setOpenSnackbar ,setlen) => {
  let qty = 1;
  let cart = getCart();
  let itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    setOpenSnackbar({
      status: true,
      statusText: "Item is already in cart.",
      type: "warning",
    });
  } else {
    setOpenSnackbar({
      status: true,
      statusText: "Item added in cart.",
      type: "success",
    });
    cart.push({
      id: id,
      price: price,
      qty: qty,
      img: img,
      usage: usage,
      name: name,
    });
    setCart(cart);
    setlen(getLen())
  }

  console.log(getCart());
  // window.localStorage.removeItem("cart");
  // let items = window.localStorage.getItem("cart");
  // let temp = JSON.parse(items);
  // console.log(temp);
};

export default UtilList;
