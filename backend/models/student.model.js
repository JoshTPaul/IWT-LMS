const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({  
  username: { type: String, required: true },
  sName: { type: String, required: true },
  sID: { type: Number, required: true},
  regCourses: [String]
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;