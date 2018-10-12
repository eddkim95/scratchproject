const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());

app.post('/create', UserController.createUser, (req, res) => {
  res.status(200).json(res.locals.db_user);
});
app.post('/login', UserController.verifyUser, (req, res) => {
  res.send('Logged In!');
});

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database...');
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
});