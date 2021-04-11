// load express, configure, start to load 
const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)

const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
//Modify the 'views' folder for hbs and use 'templates' instead
const viewPath = path.join(__dirname, '../templates/views')
// Modify the 'partials' folder for hbs and use 'templates' instead
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/weather', (req, res) => {
    res.send('This is a page with weather forecast from the API. Work in progress! Stay tuned.')
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up and running on port 3000.')
})