const chalk = require('chalk')
const fs = require('fs') 

const getNotes = () =>{
    return 'Your notes...'
}

//function to remove data from the json
const removeNote = (title) => {
    //console.log('Removing a note with title: ' + title)
    
    // load existing notes
    const notes = loadNotes()
    
    // filter out those with the same title as user requested, save the rest
    const nonDuplicateNote = notes.find((note) => note.title === title)

    debugger 
    
    if (!nonDuplicateNote) {
        console.log(chalk.green.inverse('This title: ' + title + ' was removed from the json file.'))
        // save newly created array
        saveNotes(nonDuplicateNotes)
    } else {
        console.log(chalk.red.inverse('No such title found, nothing deleted'))
    }
}

// function to save data into json
const addNote = (title, body) => {
    const notes = loadNotes()
    //console.log(notes)

    // before we push data into notes, make sure to check for duplicates
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    // if no duplicates, push into object
    if (duplicateNotes.length === 0) {
    // push data into notes as an object
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    } else {
        console.log('Title already taken') // if there are duplicates, it will not put there
    }    
}

//function to list all your notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.red('Your notes: '))
    notes.forEach((el) => {
        console.log(el.title)
    })
}

// function to read chosen note
const readNote = (title) => {
    const notes = loadNotes()

    const readThisOne = notes.find((note) => note.title === title)

    if (readThisOne) {
        console.log(chalk.inverse.blue(readThisOne.title))
        console.log(readThisOne.body)
    } else {
        console.log(chalk.red.inverse('No such title found!'))
    }
}

//little helper => save data into the file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// little helper to load all notes and if there are no notes, create empty array
const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON =  dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes: listNotes,
    readNote: readNote
}