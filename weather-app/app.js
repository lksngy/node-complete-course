const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f0ebef48b81018f2d8dbc2bb99f16088&query=50.073658,14.41840'
const placeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Prague.json?access_token=pk.eyJ1IjoibGtzbmd5IiwiYSI6ImNrbTQwazU5YjAwMHkyb3BiN2NnczRkcmEifQ.1XtggOYR41Mu1NIylrE42A&limit=1'

request({url: url, json:true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to the weather service!')
    } else if (response.body.error) {
        console.log(`Error code: ${response.body.error.code}. ${response.body.error.info}`)
    } else {
        const current = response.body.current
        console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees outside and it feels like ${current.feelslike} degrees.`)
    }
})

request({url: placeUrl, json:true}, (error, response) => {
    if (error) {
        console.log('Internal error: Unable to connect to the weather service!')
    } else if (response.body.message) {
        console.log(`Error code from the server: ${response.body.message}`)
    } else if (response.body.features.length === 0) {
        console.log('Unable to find the location.')
    } else {
    const lat = response.body.features[0].geometry.coordinates[0]
    const lon = response.body.features[0].geometry.coordinates[1]
    console.log(`This place: ${response.body.features[0].text} has lat: ${lat} and lon: ${lon} coordinates.`)
    }
})
