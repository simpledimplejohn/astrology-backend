const express = require('express')
const app = express()
const expressLayouts = required('express-ejs-layouts')

// this sets where the location of all our files are
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') 
app.set('layout', 'layout/layout')
app.use(expressLayouts)
app.use(express.static('public'))

