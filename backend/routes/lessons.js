const router = require('express').Router();
let Lesson = require('../models/lesson.model');

router.route('/').get((req, res) => {
  Lesson.find()
    .then(lessons => res.json(lessons))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const cID = Number(req.body.cID);
  const lID = Number(req.body.lID);
  const lTitle = req.body.lTitle;
  const lContent = req.body.lContent;

  const newLesson = new Lesson({
    username,
    cID,
    lID,
    lTitle,
    lContent,
  });

  newLesson.save()
  .then(() => res.json('Lesson added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson => res.json(lesson))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findByCID/:id').get((req, res) => {
  Lesson.find({cID: req.params.id})
    .then(lesson => res.json(lesson))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findByCID/:cid/findbyLID/:lid').get((req, res) => {
  Lesson.findOne({cID: req.params.cid, lID: req.params.lid})
    .then(lesson => res.json(lesson))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Lesson.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lesson deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Lesson.findById(req.params.id)
    .then(lesson => {
      lesson.username = req.body.username;
      lesson.cID = Number(req.body.cID);
      lesson.lTitle = req.body.lTitle;
      lesson.lContent = req.body.lContent;
      lesson.save()
        .then(() => res.json('Lesson updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;