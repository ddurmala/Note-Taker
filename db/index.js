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

// async function deleteNote(noteId) {

//     const filteredNotes = notes.filter(note => note.id !== noteId);

//     if (noteIndex !== -1) {
//         // Remove the note from the notes array
//         notes.splice(noteIndex, 1);

//         // Save the updated notes array
//         await saveNotes(notes);

//         responseObj.json({ message: 'Note deleted successfully' });

//         console.log('note with id ${noteId} deleted');
//     }
// }

module.exports = {
    getNotes: getNotes,
    saveNotes: saveNotes,
    // deleteNote: deleteNote
}