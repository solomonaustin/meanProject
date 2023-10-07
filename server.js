const express = require('express');
const server = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB using Mongoose and Promises
mongoose
  .connect('mongodb://127.0.0.1:27017/est', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connectedddd!!!!!!!!!!!');

    server.use(cors());
    server.use(express.json());
    server.use(routes);

    server.listen(8000, () => {
      console.log('Server startedddddd');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
