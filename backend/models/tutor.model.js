const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  tID: { type: Number, required: true },
  tName: { type: String, required: true },
  tDesc: { type: String, required: true }
}, {
  timestamps: true,
});

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;