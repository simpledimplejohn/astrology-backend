const express = require('express');
const router = express.Router();
const Kitten = require('../models/kitten'); // Updated import path

// Handle routes
router.get('/', async (req, res) => {
  // Create a kitten document
  const fluffy = new Kitten({ name: 'johnny' });

  // Call the speak method
  fluffy.speak();

  // Save the document to the database
  await fluffy.save();

  // Query all kittens in the database
  const kittens = await Kitten.find();
  console.log("ALL THE KITTENS!",kittens);

  // Query kittens by name
  const specificKittens = await Kitten.find({ name: /^zuffy/ });
  console.log("just one kitten named: ",specificKittens);

  res.json(specificKittens);
});

// New route to get all kittens
router.get('/kittens', async (req, res) => {
    try {
      // Query all kittens in the database
      const kittens = await Kitten.find();
  
      res.json(kittens);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
