import { useState } from "react";
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
import pots from "../data/pots_data.json";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {yellow } from "@mui/material/colors";


const PotsList = () => {
  const [purchaseQuantities, setPurchaseQuantities] = useState(
    pots.pots.map(() => 0)
  );

  const incrementPurchase = (index) => {
    setPurchaseQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const decrementPurchase = (index) => {
    if (purchaseQuantities[index] > 0) {
      setPurchaseQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] -= 1;
        return newQuantities;
      });
    }
  };

  return (
    <div className="container my-3">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {pots.pots.map((pot, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 280}}>
              <CardMedia
                component="img"
                height="230"
                image={pot.img}
                alt={`Pot ${index + 1}`}
              />
              <CardContent>
                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Category:</b> {pot.category}
                </Typography>
                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Colors:</b> {pot.color.join(", ")}
                </Typography>
                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Type:</b> {pot.type}
                </Typography>
                
                <Box 
                py={1}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box sx={{  display:"flex",justifyContent:"center"  , width : 65 ,  backgroundColor : yellow[300] , height: 25 , borderRadius : 5}}>
                   <b>₹ {pot.price}</b>
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
                  <IconButton>
                    <AddShoppingCartOutlinedIcon fontSize="small" />
                  </IconButton>

                  <Button
                    color="success"
                    onClick={() => incrementPurchase(index)}
                    size="small"
                    variant="outlined"
                  >
                    <AddIcon />
                  </Button>
                  
                  <IconButton>
                    <Typography variant="body1">
                      {purchaseQuantities[index]}
                    </Typography>
                  </IconButton>

                  <Button
                    color="error"
                    onClick={() => decrementPurchase(index)}
                    size="small"
                    variant="outlined"
                  >
                    <RemoveIcon/>
                  </Button>

                  <IconButton>
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PotsList;
