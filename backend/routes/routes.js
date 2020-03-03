const express = require('express');
const router = express.Router();
const userInfo = require('../models/user');
const cors = require('cors');

router.use(cors());

router.post('/register', (req, res, next) => {
  const user = new userInfo({
    emailId: req.body.emailId,
    password: req.body.password
  });
  user.save().then(result => {
    console.log(result);
  })
    .catch(error => {
      console.log(error)
    });
  res.status(201).json({
    message: 'Handling post request',
    createdUser: user
  });
});

router.post('/login', function (req, res, next) {
  userInfo.findOne({emailId: req.body.emailId}).then(user => {
    console.log(user, 'user');
    console.log(req.body);
    if (user) {
      if (req.body.password == user.password) {
        res.status(201).json(user);
      } else {
        res.send('password does not match')
      }
    } else {
      res.send('User does not exist')
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
});


module.exports = router;
