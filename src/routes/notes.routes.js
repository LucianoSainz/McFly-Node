const { Router } = require('express')
const router = Router()

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controllers');


const { isAuthenticated } = require('../helpers/auth');

//NEW NOTE
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

//GET ALL NOTE
router.get('/notes', isAuthenticated, renderNotes);



//EDIT NOTES
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);

router.put('/notes/edit/:id', isAuthenticated, updateNote);

//DELETE NOTES
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);



module.exports = router;