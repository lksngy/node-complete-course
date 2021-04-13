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
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Johnny Cash'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Johnny Cash'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Johnny Cash'
    })
})

app.get('/weather', (req, res) => {
    res.send('This is a page with weather forecast from the API. Work in progress! Stay tuned.')
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help article not found.',
        name: 'Johnny Cash'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404: Page not found',
        name: 'Johnny Cash'
    })
})

app.listen(3000, () => {
    console.log('Server is up and running on port 3000.')
})