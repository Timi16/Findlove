const Profile = require('../Models/Profile');
const User = require('../Models/User');

exports.createOrUpdateProfile = async (req, res) => {
  const { username, gender, hobbies, hairColor, chestHair, feetPreference, bio, age, location } = req.body;
  
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('User not found');
    
    let profile = await Profile.findOne({ userId: user._id });

    if (profile) {
      // Update existing profile
      profile.gender = gender;
      profile.hobbies = hobbies;
      profile.hairColor = hairColor;
      profile.chestHair = chestHair;
      profile.feetPreference = feetPreference;
      profile.bio = bio;
      profile.age = age;
      profile.location = location;
    } else {
      // Create new profile
      profile = new Profile({
        userId: user._id,
        gender,
        hobbies,
        hairColor,
        chestHair,
        feetPreference,
        bio,
        age,
        location,
      });
    }

    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  const { username } = req.params;
  
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('User not found');

    const profile = await Profile.findOne({ userId: user._id });
    if (!profile) return res.status(404).send('Profile not found');
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
