const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gender: { type: String, required: true },
  hobbies: [String],
  hairColor: String,
  chestHair: String,
  feetPreference: String,
  bio: String,
  age: Number,
  location: String,
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
