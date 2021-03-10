const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f0ebef48b81018f2d8dbc2bb99f16088&query=50.7697,15.0238'

request({url: url}, (error, response) => {
    //console.log(response.body)
    const data = JSON.parse(response.body)
    console.log(data.current)
})