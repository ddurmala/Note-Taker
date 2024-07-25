const router = require('express').Router();

const path = require('path');

router.get('/notes', (requestObj, responseObj) => {
    // const id = requestObj.query.note_id;

    responseObj.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = router;
