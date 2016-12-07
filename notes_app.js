const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes-backend');

const NoteappSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: String,
  imageUrls: [String],
  description: String,
  minimumRequirements: {},
  recommendedRequiremens: {},
  price: String,
  hdspace: String,
});


const notesapp = mongoose.model('notesapp', NoteappSchema);

function getNotesapp(req, res){
  notesapp.find()
  .then(function(notes_app){
    res.json(notes_app)
  })
  .catch(err=>res.sendStatus(500));
}
module.exports = {
  getAll: getNotesapp

};
