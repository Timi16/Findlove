const User = require('../Models/User');

exports.updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { hobbies, hairColor, chestHair, feetPreference, bio, age, location } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).send('User not found');

    user.hobbies = hobbies || user.hobbies;
    user.hairColor = hairColor || user.hairColor;
    user.chestHair = chestHair || user.chestHair;
    user.feetPreference = feetPreference || user.feetPreference;
    user.bio = bio || user.bio;
    user.age = age || user.age;
    user.location = location || user.location;
    user.profileComplete = true;

    await user.save();

    res.send('Profile updated');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
