import {
  brown,
  green,
  blue,
  cyan,
  pink,
  lightGreen,
  yellow,
  red,
} from "@mui/material/colors";

const colorDict = {
  Red: "#d50000",
  Lime: "#76ff03",
  Blue: "#2962ff",
  Yellow: "#ffff00",
  Pink: "#ff80ab",
  Green: "#43a047",
  Brown: "#795548",
  White: "#ffebee",
  Cyan: "#18ffff",
};

const getEmail = () => {
  let email = window.localStorage.getItem("email");
  if (email === null || email === undefined) {
    email = null;
  }
  return email;
};

const setEmail = (newEmail) => {
  window.localStorage.setItem("email", newEmail);
};

const getCart = () => {
  let items = window.localStorage.getItem("cart");
  let cart = JSON.parse(items);
  if (cart === null || cart === undefined) {
    cart = [];
  }
  return cart;
};

const setCart = (newCart) => {
  window.localStorage.setItem("cart", JSON.stringify(newCart));
};

const getTotal = (newCart) => {
  let sum = 0;
  newCart.map((item) => {
    sum += item.qty * item.price;
  });
  return sum;
};

const getQty = (newCart) => {
  let totalqty = 0 ;
  newCart.map((item) => {
    totalqty += item.qty ; 
  });
  return totalqty ;
}
export { getEmail, setEmail, getCart, setCart, colorDict , getTotal , getQty};
