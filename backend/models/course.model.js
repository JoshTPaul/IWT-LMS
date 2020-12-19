const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  tID: { type: Number, required: true},
  cID: { type: Number, required: true },
  cTitle: { type: String, required: true },
  cDesc: { type: String, required: true }
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;