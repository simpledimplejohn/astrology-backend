/*
Run this with
node getting-started.js
*/


const mongoose = require('mongoose');

// Define the schema
const kittySchema = new mongoose.Schema({
  name: String
});

// Define a method to add to the schema
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

// Create a model
const Kitten = mongoose.model('Kitten', kittySchema);

async function main() {
  // Connect to MongoDB
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

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
}

main().catch(err => console.log(err));

