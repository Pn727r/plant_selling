/* eslint-disable no-undef */
const express = require('express');
const app = express();
const port = 3001; 

app.use(express.json());

const flowersData = require('../data/flower_data.json');

app.get('/api/flowers', (req, res) => {
  res.json(flowersData);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
