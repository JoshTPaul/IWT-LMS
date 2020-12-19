const router = require('express').Router();
let Tutor = require('../models/tutor.model');

router.route('/').get((req, res) => {
  Tutor.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findbyUsername/:id').get((req, res) => {
  Tutor.find({username: req.params.id})
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const tID = req.body.tID;
  const tName = req.body.tName;
  const tDesc = req.body.tDesc;
  const newUser = new Tutor({ username, tID, tName, tDesc });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;