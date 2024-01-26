/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const corrs = require("cors");
const connectDb = require('./db_connection');
const app = express();
const User = require('./user-model');
const Plant = require("./plant-model");
app.use(bodyParser.json());
app.use(corrs());

// sign up 
app.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ Email: req.body.email });

    if (existingUser) {
      res.json("Exist");
    }
    else {
      res.json("Not_Exist");
      const newUser = new User({
        FirstName: req.body.fname,
        LastName: req.body.lname,
        Email: req.body.email,
        Password: req.body.password
      });
      await newUser.save();
    } 
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// sign in 
app.post("/signin", async (req, res) => {
  try {
    const existingUser = await User.findOne({ Email: req.body.email , Password: req.body.password});

    if (existingUser) {
      res.json("Exist");
    }
    else {
      res.json("Not_Exist");
    } 
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// plants
app.get("/plants" ,  (req ,res) =>{
    Plant.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {console.log(err)})
})


const PORT = 3000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
});
