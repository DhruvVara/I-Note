const express = require("express");
const router = express.Router();
const Note = require("../models/NotesSchema");
const Contact = require("./../models/Contactschema")

//middleware
const fetchdata = require("../middleware/fetchdata");

//fetching user's notes
router.get("/fetchnotes", fetchdata, async (req, res) => {
    const notes = await Note.find({ user: req.user.id })
    res.json(notes);
})

//storing user notes
router.post("/addnotes", fetchdata, async (req, res) => {

    const { title, description } = req.body;

    try {
        
        const note = new Note({
            title,
            description,
            user: req.user.id
        })

        const savenote = await note.save();

        res.json(savenote)
    } catch (err) {
        res.status(500).json("Internal Server Error");
    }
})

// updating user's note
router.put("/updatenote/:id", fetchdata, async (req, res) => {
    const { title, description } = req.body;

    try {
        //creating new note
        const newnote = {}
        if (title) {
            newnote.title = title;
        }
        if (description) {
            newnote.description = description;
        }

        //find the note to be updated
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found")
        }

        //checking whether following note belongs to particular user or not
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Error Found")
        }

        const updatenote = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json(updatenote);
    } catch (err) {
        res.status(500).json("Internal Server Error");
    }
})

//deleting user's note
router.delete("/deletenote/:id", fetchdata, async (req, res) => {
    try {

        //find id to delete
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found")
        }

        //checking whether following note belongs to particular user or not
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Error Found")
        }

        const deletenote = await Note.findByIdAndDelete(req.params.id)
        res.json("Succesfully deleted");
    } catch (err) {
        res.status(500).json("Internal Server Error");
    }
})

//contact details
router.post("/contact", async (req, res) => {
    const { name, email, description } = req.body;

    try {
        let success = false;
        const savecontact = new Contact({
            name,
            email,
            description
        })

        const save = await savecontact.save();
        success = true
        res.json(success);

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error");
    }
})

module.exports = router;