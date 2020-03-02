var express = require('express');
var router = express.Router();
var user = require('../model/user');
const mongoose = require(mongoose);

router.post('/register',(req, res, next) => {
    const user = new UserInfo();
    emailId : mongoose.Types._emailId,
    password = require.body.password
});
UserInfo
    .save()
    .then (result => {
        console.log(result)})
    .catch (err => console.log(err));

    module.exports = router;
    