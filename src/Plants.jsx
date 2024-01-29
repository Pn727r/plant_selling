/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { yellow } from "@mui/material/colors";



const FlowerList = () => {  
  const [flowersData, setflowersData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/plants")
      .then((result) => setflowersData(result.data))
      .catch((error) => console.error("Error gettting data : ", error));
  }, []);

  return (
    <div className="container-fluid my-3">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {flowersData.map((flower, index) => (
          <MyCard
            image={flower.img}
            id={flower.id}
            name={flower.name}
            care={flower.care}
            price={flower.price}
            key={index}
          />
        ))}
      </Grid>
    </div>
  );
};

let cart = [];

const addToCart = (id , price , qty , img) =>{
  let value = cart.find(data => data.id == id);
  if (value  != null || value != undefined ) {
    value.qty = qty
  } 
  else {
    cart.push({id : id , price : price , qty : qty  , img})
  }
  localStorage.setItem("cart_len", cart.length);
  console.log(cart);
}

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
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          {/* <Box px={2} justifyContent= "flex-start" style={{backgroundColor: '#93ff82' , borderRadius:"5px"}}> */}
          <Typography variant="h6">{props.name}</Typography>
          <Typography py={0.5} variant="body2" color="text.secondary">
            <b>Care :</b> {props.care}
          </Typography>            
          {/* </Box> */}

          <Box
            py={1}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
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
              <b>
                ₹ {value == 0 || value == 1 ? props.price : props.price * value}
              </b>
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
            disabled= {Cart}
            onClick={()=>{addToCart(props.id , props.price , value , props.image)}}
            >
              <AddShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>

            <Button
              color="success"
              disabled={Plus}
              onClick={handleIncrement}
              size="small"
              variant="outlined"
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

export default FlowerList ;



