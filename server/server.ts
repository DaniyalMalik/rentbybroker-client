require('dotenv').config();
require('colors');
require('@types/colors');

const express = require('express'),
  app = express(),
  morgan = require('morgan'),
  connection = require('./config/db'),
  //   archiveHandler = require('./api/archiveHandler'),
  PORT = process.env.PORT || 5000,
  cors = require('cors');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.blue);
});

connection();

const corsOption = {
  origin: ['http://localhost:3000'],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(morgan('tiny'));

// app.use('/api/activities/', activityHandler);
