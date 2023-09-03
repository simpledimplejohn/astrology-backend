const mongoose = require('mongoose');

// Define the schema
const kittySchema = new mongoose.Schema({
  name: String,
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

module.exports = Kitten; // Export the Kitten model
