# Back End
- Node.js
- Express
- Mongodb

## Launch
- root folder `\BACK_END`
- mongodb 
    - brew services start mongodb-community
    


## Setup 
- npm init -y 
- npm i express ejs 
- npm i express-ejs-layouts
- npm i --save-dev nodemon  // this lets us refresh our server in real time
    - make a script in the package.json to run the server
    - update package.json to run the server, we will call the first one server.js
- npm i --save node-fetch 

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


