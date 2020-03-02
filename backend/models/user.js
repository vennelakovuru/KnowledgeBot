const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    emailId = mongoose.Types._emailId,
    password = String,
    confirmPassword = String
});

module.exports = mongoose.model('UserInfo',userSchema)