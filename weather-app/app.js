const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f0ebef48b81018f2d8dbc2bb99f16088&query=50.7697,15.0238'

const placeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGtzbmd5IiwiYSI6ImNrbTQwazU5YjAwMHkyb3BiN2NnczRkcmEifQ.1XtggOYR41Mu1NIylrE42A&limit=1'

request({url: url, json:true}, (error, response) => {
    const current = response.body.current
    console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees outside and it feels like ${current.feelslike} degrees.`)
})

request({url: placeUrl, json:true}, (error, response) => {
    console.log(response)
})