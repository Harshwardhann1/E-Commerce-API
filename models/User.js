const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlenght: 5,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
});
