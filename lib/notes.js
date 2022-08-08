const fs = require('fs');
const path = require('path');

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}

module.exports = addNewNote;