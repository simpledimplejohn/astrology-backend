const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the schema
const kittySchema = new mongoose.Schema({
  name: String
});

// Define a method to add to the schema
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : "I don't have a name";
  console.log(greeting);
};

// Create a model
const Kitten = mongoose.model('Kitten', kittySchema);

// Handle routes
router.get('/', async (req, res) => {
  // Create a kitten document
  const fluffy = new Kitten({ name: 'fluffy' });

  // Call the speak method
  fluffy.speak();

  // Save the document to the database
  await fluffy.save();

  // Query all kittens in the database
  const kittens = await Kitten.find();
  console.log(kittens);

  // Query kittens by name
  const specificKittens = await Kitten.find({ name: /^fluff/ });
  console.log(specificKittens);

  res.json({ message: 'Kitten actions performed' });
});

module.exports = router;
