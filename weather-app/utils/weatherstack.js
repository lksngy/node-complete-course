const request = require('request')

const weatherstack = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f0ebef48b81018f2d8dbc2bb99f16088&query=${latitude},${longitude}`

    request({url: url, json: true}, (error,response) => {
        if (error) {
            callback('Cannot finish your request', undefined)
        } else if (response.body.error) {
            callback(`Error code: ${response.body.error.code}. ${response.body.error.info}`, undefined)
        } else {
            const current = response.body.current
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees outside and it feels like ${current.feelslike} degrees.`)
        }
    })
}

module.exports = weatherstack