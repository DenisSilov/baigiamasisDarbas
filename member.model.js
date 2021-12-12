const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  name_surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Member = mongoose.model('member', memberSchema);
module.exports = Member;