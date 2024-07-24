
// import required modules:

const express = require('express');

const path = require('path');

// create express app:

const app = express();

// Import Routes:

const view_routes = require('./routes/view_routes');

const api_routes = require('./routes/api_routes');

// middleware:

app.use(express.static('./public'));

app.use(express.json({ extended: false }));

// Load Routes: 

app.use('/', view_routes);

app.use('/api', api_routes);

// wildcard:

app.get('*', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, './public/notFound.html'));
});


app.listen(3333, () => {
    console.log('server started');
})





// app.get('/notes', (requestObj, responseObj) => {
//     responseObj.sendFile(path.join(__dirname, './public/notes.html'));
// });

// app.get('/note/:noteId', (requestObj, responseObj) => {
//     const noteId = requestObj.params.noteId;

//     responseObj.sendFile(path.join(__dirname, './public/notes.html'));
// })