const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const getNotes = require('./notes.js')

const yourNotes = getNotes();

console.log('checking the email... ' + validator.isEmail('george@gmail.com'))

console.log(chalk.green.inverse('Printed in green, but inversed!'))


// create read command
yargs.command({
    command: 'add',
    describe: 'Add command',
    builder: {
        title: {
            describe: 'Set title to your note',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'Set body of your note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List command',
    handler: function () {
        console.log('Listing your notes')
    }
})

yargs.parse()
console.log(yargs.argv)
