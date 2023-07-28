const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') //this imports our routes file

// this sets where the location of all our files are
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') 
app.set('layout', 'layout/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter) // tells the app to use the above router tied to the file

app.listen(process.env.PORT || 3000)
