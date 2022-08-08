const { filterByQuery } = require("../../../zookeepr/lib/animals");
const { notes } = require("../../lib/notes");
const router = require("express").Router();
const { newNote, getNotes } = require("../../lib/notes");

router.get("/notes", (req, res) => {
    let newNote = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.toString();

    const newNote = addNewNote(req.body, notes);
    res.json(newNote);
});