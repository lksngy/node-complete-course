const request = require('request')

const mapbox = (place, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoibGtzbmd5IiwiYSI6ImNrbTQwazU5YjAwMHkyb3BiN2NnczRkcmEifQ.1XtggOYR41Mu1NIylrE42A&limit=1`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Cannot connect to the API', undefined)
        } else if (response.body.features.length === 0) {
            callback(`Error code from the server: ${response.body.message}`, undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                location: response.body.features[0].text
            })
        }
    })
}

module.exports = mapbox