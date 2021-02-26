const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')

const yourNotes = getNotes();

console.log('checking the email... ' + validator.isEmail('george@gmail.com'))

console.log('Checking the mobile phone... ' + validator.isMobilePhone('+420739017529', 'de-DE', true))

console.log(chalk.red('Printed in green!'))
console.log(chalk.green.inverse('Printed in green, but inversed!'))
