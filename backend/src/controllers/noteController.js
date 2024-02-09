const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNotes = async (req, res) => {
    //console.body(req.body);
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    //console.log(newNote);
    await newNote.save();
    res.json({message: 'Note save'})
};

notesCtrl.updateNotes = async (req, res) => {
    const {title, content, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id},{ 
        title,
        content,
        author
    });
    res.json({message: 'Note update'})
};

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note delete'})
};

notesCtrl.getNote = async (req, res) => {
    
    const note = await Note.findById(req.params.id);
    
    res.json(note)
};


module.exports = notesCtrl;