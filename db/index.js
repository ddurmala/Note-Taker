const fs = require('fs').promises;

async function getNotes() {
    const rawData = await fs.readFile('./db/db.json', 'utf8');

    // return the array of notes from notes.json
    return JSON.parse(rawData)
}

async function saveNotes(updatedNotesArray) {
    // overwrite/replace the notes.json array
    await fs.writeFile('./db/db.json', JSON.stringify(updatedNotesArray, null, 2));

    console.log('note json file updated!')

}

module.exports = {
    getNotes: getNotes,
    saveNotes: saveNotes,
    // deleteNote: deleteNote
}