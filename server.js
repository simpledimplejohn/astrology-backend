require('dotenv').config()
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
const indexRouter = require('./routes') //this imports our routes file

// Connect ot MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/astrology', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// this sets where the location of all our files are
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
});
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') 
app.set('layout', 'layout/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter) // tells the app to use the above router tied to the file

app.listen(process.env.PORT || 3000)
