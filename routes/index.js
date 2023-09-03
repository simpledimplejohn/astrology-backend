const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const UserModel = require('../models/user')



// const response = await fetch(myUrl, otherArgs)
// const data = await response.json()

router.get('/', async (req, res) => {
  
    const userData = {
        "year": 1978,
        "month": 12,
        "date": 11,
        "hours": 20,
        "minutes": 0,
        "seconds": 0,
        "latitude": 17.38333,
        "longitude": 78.4666,
        "timezone": 5.5,
        "settings": {
          "observation_point": "topocentric",
          "ayanamsha": "lahiri"
        }
      }
     
    const response = await fetch(process.env.MY_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.API_KEY
        },
        body: JSON.stringify(userData)
    });
    const result = await response.json()

    console.log(result)
    // pass data into the model
    const formatDate = new Date(userData.year, userData.month - 1, userData.date, userData.hours)
    console.log(formatDate)

    const dbobject = await UserModel.create({
        fname: 'fred',
        lname: 'frederson',
        dob: formatDate,
        lat: userData.latitude,
        log: userData.longitude,
        timezone: userData.timezone

    })
    console.log(dbobject)
    // res.send('Hello World', result)
    res.json(result) // will send back to the client

    // const userData = req.body
   
})

module.exports = router //alows this to be exported to the server file