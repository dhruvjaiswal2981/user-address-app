const User = require('../models/User');
const Address = require('../models/Address');

exports.createUserWithAddress = async (req, res) => {
  const { name, street, city, state, postalCode } = req.body;

  try {
    
    const user = await User.create({ name });

    
    const address = await Address.create({
      street,
      city,
      state,
      postalCode,
      userId: user.id, 
    });

    res.status(201).send('User and address created successfully!');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
};
