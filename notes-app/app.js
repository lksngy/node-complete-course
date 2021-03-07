const chalk = require('chalk')
const { command, argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove a note with this title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler () {
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading all notes',
    builder: {
        title: {
            describe: 'Read a note user choose',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
       notes.readNote(argv.title)
    }
})

yargs.parse()