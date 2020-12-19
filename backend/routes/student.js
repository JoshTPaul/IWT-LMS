const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findbysID/:id').get((req, res) => {
  Student.find({sID: req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/enrollCourse/:sID/:cID').put((req, res) => {
  Student.findOneAndUpdate({sID: req.params.sID}, { $push: { regCourses: req.params.cID } })
  .then(console.log("Course enrolled!"))
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const sName = req.body.sName;
  const sID = req.body.sID;
  const newUser = new Student({ username, sName, sID });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;