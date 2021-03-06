const notesCtrl = {};

const Note = require('../models/Note');
const User = require('../models/User');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title , description});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success', 'Note Added successfully');
    res.redirect('/notes')
};


notesCtrl.renderNotes = async (req, res) => {
   const notes = await Note.find({user: req.user.id});
   res.render('notes/all-notes', { notes });
}; 


notesCtrl.renderEditForm = async(req, res) => {
    const note = await Note.findById(req.params.id);
    if(note.user != req.user.id){
        req.flash('error', 'Not Authorized.');
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', { note });
};

notesCtrl.updateNote = async(req, res) => {
    const {title, description} = req.body; 
  await Note.findByIdAndUpdate(req.params.id, {title, description});
  req.flash('success', 'Note  Updated successfully');
    res.redirect('/notes');
};

notesCtrl.deleteNote = async(req, res) => {
   await Note.findByIdAndDelete(req.params.id);
   req.flash('success', 'Note Deleted successfully');
   res.redirect('/notes')
};



notesCtrl.renderFavorite = (req, res) => {
    User.findById(req.user._id)
    };
    



module.exports = notesCtrl;