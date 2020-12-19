const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
  Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tID = req.body.tID;
  const cID = Number(req.body.cID);
  const cTitle = req.body.cTitle;
  const cDesc = req.body.cDesc;

  const newCourse = new Course({
    tID,
    cID,
    cTitle,
    cDesc
  });

  newCourse.save()
  .then(() => res.json('Course added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findBytID/:id').get((req, res) => {
  Course.find({ tID: req.params.id})
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findBycID/:id').get((req, res) => {
  Course.find({ cID: req.params.id})
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Course.findById(req.params.id)
    .then(course => {
      course.tID = req.body.tID;
      course.cID = Number(req.body.cID);
      course.cTitle = req.body.cTitle;
      course.cDesc = req.body.cDesc;
      course.save()
        .then(() => res.json('Course updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;