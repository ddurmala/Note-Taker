const router = require('express').Router();

// const { v4 } = require('uuid');

const db = require('../db');

const { getNotes, saveNotes } = require('../db');

router.get('/notes', async (requestObj, responseObj) => {
    const notes = await getNotes();

    responseObj.json(notes);
});

// getting a single note by id
router.get('/note/:noteId', async (requestObj, responseObj) => {
    const id = requestObj.params.noteId;
    const notes = await getNotes();

    const note = notes.find(noteObj => noteObj.id == id);

    responseObj.json(note || {});
})

// receiving form data to create a note and sends the user back to the homepage
router.post('/notes', async (requestObj, responseObj) => {
    const noteText = requestObj.body.noteText;
    const id = v4();

    const notes = await getNotes();
    const newNote = {
        id: id,
        text: noteText
    };

    notes.push(newNote);

    await saveNotes(notes);

    responseObj.json(newNote);
});



module.exports = router;