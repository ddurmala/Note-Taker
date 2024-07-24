const router = require('express').Router();

const path = require('path');

router.get('/note', (requestObj, responseObj) => {
    // const id = requestObj.query.note_id;

    responseObj.sendFile(path.join(__dirname, '../public/note.html'));
});


module.exports = router;