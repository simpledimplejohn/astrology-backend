const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const {UserModel, ChartModel} = require('../models/user')




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

    const dbobject = await UserModel.create({ // this makes our user object in our db
        fname: 'fred',
        lname: 'frederson',
        dob: formatDate,
        lat: userData.latitude,
        log: userData.longitude,
        timezone: userData.timezone,
        chart: {
            planets: {"Ascendant": result.output[1].Ascendant},
        }

    })
    console.log(dbobject)
    // res.send('Hello World', result)
    res.json(result) // will send back to the client

    // const userData = req.body
   
})

// const myArrow1 = () => {
//     // do stuff
//     return 'whatever'
// }

// const myArrow2 = () => 'whatever'

// const myArrow3 = (myObj) => ({
//     prop1: myObj.value,
//     prop2: 'whatever'
// })

// show all the users in the database
router.get('/users', async (req, res) => {
    try {
        const user = await UserModel.find().populate({ path: "chart" }).exec();

        const chart = await ChartModel.findById("64f626120bade3355b1bba7b")
        console.log(user)
        console.log(chart)

        // user.forEach(  (item) => {

        //     console.log("debug",item.chart.planets.get("Ascendant"));
        // } )
        res.json(user);

    } catch (error) {

        res.status(500).json({error: error.message});
    }
});


// create user from front end form 
router.post('new', async (req, res) => {
    try {
        
        const userData = req.body;

        const response = await fetch(process.env.MY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.API_KEY,
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json() // passes the response into the result

        // format the date
        const formatDate = new Date(userData.dob)

        // This uses mongoose to add the object to the database
        const dbobject = await UserModel.create({  // this makes a model from the schema
            fname: userData.fname,
            lname: userData.lname,
            dob: formatDate,
            lat: userData.lat,
            lon: userData.lon,
            timezone: userData.timezone,
            chart: {
                planets: {"Ascendant": result.output[1].Ascendant}
            }
        }); 
    }catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router //alows this to be exported to the server file