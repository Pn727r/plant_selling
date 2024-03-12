/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./db_connection");

const app = express();
const multer = require("multer");

const User = require("./user-model");
const Plant = require("./plant-model");
const Pot = require("./pot-model");
const Soil = require("./soil-model");
const Util = require("./util-model");
const Business = require("./business-model");

app.use(cors());
app.use(bodyParser.json());

function generateUniqueId() {
  const timestamp = new Date().getTime(); // Get current timestamp
  const randomNumber = Math.floor(Math.random() * 10000); // Generate random number
  return `${timestamp}-${randomNumber}`;
}

// sign up
app.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ Email: req.body.email });

    if (existingUser) {
      res.json("Exist");
    } else {
      res.json("Not_Exist");
      const newUser = new User({
        FirstName: req.body.fname,
        LastName: req.body.lname,
        Email: req.body.email,
        Password: req.body.password,
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
    const existingUser = await User.findOne({
      Email: req.body.email,
      Password: req.body.password,
    });

    if (existingUser) {
      res.json("Exist");
    } else {
      res.json("Not_Exist");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// plants
app.get("/plants", (req, res) => {
  Plant.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// pots
app.get("/pots", (req, res) => {
  Pot.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// soil
app.get("/soil", (req, res) => {
  Soil.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// util
app.get("/util", (req, res) => {
  Util.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// POST route for uploading the image
app.post('/upload', upload.single('imageInput'), (req, res) => {
  console.log('Received file:', req.file);
  console.log('Received data:', req.body);
  // Here you can handle saving the image and other form data to your database or perform other operations
  res.send('File uploaded successfully');
});

const PORT = 3000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
});
