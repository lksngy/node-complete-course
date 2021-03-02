const fs = require('fs')

const info = {
    name:"Andrew",
    planet:"Earth",
    age:27
}

const infoJSON = JSON.stringify(info);
//console.log(infoJSON)

//fs.writeFileSync('1-json.json', infoJSON)

const infoBuffer = fs.readFileSync('1-json.json')
//console.log(infoBuffer)

const readableInfoJSON = infoBuffer.toString()
//console.log(readableInfoJSON)

const parsedInfo = JSON.parse(readableInfoJSON)
//console.log(parsedInfo.planet)

parsedInfo.name = 'Lukas'
parsedInfo.age = 29

const newInfo = JSON.stringify(parsedInfo)
console.log(newInfo)

fs.writeFileSync('1-json.json', newInfo)