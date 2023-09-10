# Astrology Interface API Back End Server
This API takes user data from the front end website.  It can get a users chart and add them to a data base.

## Using
- Node.js
- Express
- Mongodb
- mongoose 
- moment-timezone

## Launch
- root folder `\BACK_END`
- mongodb 
    - brew services start mongodb-community
- launch 
    `npm run devStart`

## Next Steps
- getUserChart 
    this endpoing takes the user, gets the chart, and adds to database 
    NEEDS:
    - Convert user data to properly format for the Astorlogy Call
    - Front End sends over data formated like this:
        {
        "fname": "Zason",
        "lname": "Zock",
        "dob": "1/1/1876",  (DATE OBJECT IN UTC)
        "lat": 44.4,
        "log": -44.4,
        "timezone": 4,
        "chart": {
            "planets": {
            
            }
        }
        }
    - API needs them formated like this:
        {
        "year": 1978,
        "month": 12,
        "date": 11,
        "hours": 20,
        "minutes": 0,
        "seconds": 0,
        "latitude": 17.38333,
        "longitude": 78.4666,
        "timezone": -5,
        "settings": {
            "observation_point": "topocentric",
            "ayanamsha": "lahiri"
        }
        }




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


## Documentation
- Fetch API `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data`
- Express Server `https://expressjs.com/en/4x/api.html`
- Mongoose `https://mongoosejs.com/docs/api/schematype.html`
- Javascript `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date`



