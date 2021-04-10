// load express, configure, start to load 
const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('This is about page!')
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