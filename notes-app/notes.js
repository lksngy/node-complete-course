const chalk = require('chalk')
const fs = require('fs') 

const getNotes = function () {
    return 'Your notes...'
}

//function to remove data from the json
const removeNote = function (title) {
    //console.log('Removing a note with title: ' + title)
    
    // load existing notes
    const notes = loadNotes()
    
    // filter out those with the same title as user requested, save the rest
    const nonDuplicateNotes = notes.filter( function (note) {
        return note.title !== title
    })

    if (nonDuplicateNotes.length !== notes.length) {
        console.log(chalk.green.inverse('This title: ' + title + ' was removed from the json file.'))
        // save newly created array
        saveNotes(nonDuplicateNotes)
    } else {
        console.log(chalk.red.inverse('No such title found, nothing deleted'))
    }
    

}

// function to save data into json
const addNote = function (title, body) {
    const notes = loadNotes()
    console.log(notes)

    // before we push data into notes, make sure to check for duplicates
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    
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

//little helper => save data into the file
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// little helper to load all notes and if there are no notes, create empty array
const loadNotes = function () {
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
    removeNote:removeNote
}