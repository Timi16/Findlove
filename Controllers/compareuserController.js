const Profile = require('../Models/Profile');

// Controller function to compare two users based on usernames and return the similarity score
const compareUsers = async (req, res) => {
  const { username1, username2 } = req.body;

  try {
    // Fetch profiles for both users based on usernames
    const profile1 = await Profile.findOne({ username: username1 });
    const profile2 = await Profile.findOne({ username: username2 });

    if (!profile1 || !profile2) {
      return res.status(404).json({ error: 'Profiles not found for one or both users' });
    }

    // Example weights (you can adjust these based on importance)
    const weights = {
      gender: 5,
      hobbies: 3,
      hairColor: 2,
      chestHair: 1,
      feetPreference: 1
    };

    let score = 0;

    // Compare gender
    if (profile1.gender === profile2.gender) {
      score += weights.gender;
    }

    // Compare hobbies (intersection count)
    const commonHobbies = profile1.hobbies.filter(hobby => profile2.hobbies.includes(hobby));
    score += weights.hobbies * commonHobbies.length;

    // Compare hair color
    if (profile1.hairColor === profile2.hairColor) {
      score += weights.hairColor;
    }

    // Compare chest hair
    if (profile1.chestHair === profile2.chestHair) {
      score += weights.chestHair;
    }

    // Compare feet preference
    if (profile1.feetPreference === profile2.feetPreference) {
      score += weights.feetPreference;
    }

    // Return the similarity score
    res.json({ similarityScore: score });
  } catch (error) {
    console.error(`Error comparing users: ${error.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  compareUsers
};
