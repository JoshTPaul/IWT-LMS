const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({  
  username: { type: String, required: true },
  cID: { type: Number, required: true},
  lID: { type: Number, required: true},
  lTitle: { type: String, required: true },
  lContent: { type: String, required: true },
}, {
  timestamps: true,
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;