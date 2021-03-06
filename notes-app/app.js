const chalk = require('chalk')
const { command, argv } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

////add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title name',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Title: ' + argv.title + ' Body: ' + argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing your notes' + argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading all notes',
    handler: function () {
        console.log('reading your notes')
    }
})

yargs.parse()