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
import Soil from "../data/soil_data.json";
import {yellow } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const SoilList = () => {
  const [purchaseQuantities, setPurchaseQuantities] = useState(
    Soil.soil.map(() => 0)
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
        {Soil.soil.map((soil, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={soil.img}
                alt={soil.soil_name}
              />
              <CardContent>
                <Typography variant="h6">{soil.soil_name}</Typography>
                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Type :</b> {soil.soil_type}
                </Typography>
                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Discription :</b> {soil.description}
                </Typography>

                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Characteristics :</b> {soil.characteristics}
                </Typography>

                <Typography py={0.5} variant="body2" color="text.secondary">
                  <b>Good For :</b> {soil.good_for}
                </Typography>

                <Box 
                py={1}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box sx={{  display:"flex",justifyContent:"center"  , width : 65 ,  backgroundColor : yellow[300] , height: 25 , borderRadius : 5}}>
                   <b>₹ {soil.price}</b>
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

export default SoilList;
