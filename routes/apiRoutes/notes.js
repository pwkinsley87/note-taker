const router = require('express').Router();
const { addNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(addNote(req.body, notesArray));
});

module.exports = router;
