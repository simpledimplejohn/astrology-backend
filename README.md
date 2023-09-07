# Back End
- Node.js
- Express
- Mongodb

## Launch
- root folder `\BACK_END`
- mongodb 
    - brew services start mongodb-community
- launch 
    `npm run devStart`



## Setup 
Node stuff
- npm init -y 
- npm i express ejs 
- npm i express-ejs-layouts
- npm i --save-dev nodemon  // this lets us refresh our server in real time
    - make a script in the package.json to run the server
    - update package.json to run the server, we will call the first one server.js
- npm i --save node-fetch 
Mongodb
- `brew install mongosh` (shell for viewing database)
- mongosh // starts the shell
- show dbs
- use test // use the database
- exit // gets you out
- use appdb //creates/opens appdb database
- db. creates tables
    - db.users.insertOne({ fname: "bohn", lname: "jalock"})
    - returns 
{
  acknowledged: true,
  insertedId: ObjectId("64f4cf9c9412334708976a42")
}
- db.users.find()
- _id created automatically
db.users.insert({ fname: "zohn", lname: "zalock", age: 44, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]})
- db.users.insertMany([{},{}])

db.users.insertMany([{ fname: "zohn", lname: "zalock", age: 44, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]},{ fname: "fohn", lname: "zzalock", age: 454, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]},{ fname: "mohn", lname: "zzzalock", age: 424, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]},{ fname: "dohn", lname: "zzzzzalock", age: 144, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]},{ fname: "xohn", lname: "zzzzzalock", age: 444, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]},{ fname: "yohn", lname: "zzzalock", age: 404, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]},{ fname: "qohn", lname: "zzalock", age: 44, address: {street: "thisone", houseNumber: 6700}, hobbies:["sitting", "running"]}])

- db.users.find().limit(2)
- db.users.find().sort({ name: -1 }).limit(2)
- db.users.find({ name: "zohn"})


Using the kitten database
go into the test db
test> db.kettens.find()

## Next steps for the index.js file
* Handle API key with .env
- Create model for user and for the chart
- Send response data to the database
- error handling for bad response


## Documentation
- Fetch API `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data`
- Express Server `https://expressjs.com/en/4x/api.html`
- Mongoose `https://mongoosejs.com/docs/api/schematype.html`
- Javascript `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date`


