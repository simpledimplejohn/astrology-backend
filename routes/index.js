const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const { UserModel, ChartModel } = require('../models/user')

// create user and make chart from front end form 
router.post('/addUserChart', async (req, res) => {
    console.log("addUserChart1")

    try {
        console.log("try")
        const userData = req.body;
        console.log("userData,", userData)
        // const hour = userData.
        const userSend =
        {
            "year": userData.year,
            "month": userData.month,
            "date": userData.date,
            "hours": userData.hour,
            "minutes": 0,
            "seconds": 0,
            "latitude": userData.latitude,
            "longitude": userData.longitude,
            "timezone": userData.timezone,
            "settings": {
                "observation_point": "topocentric",
                "ayanamsha": "lahiri"
            }
        }
        console.log("userData before POST", userSend)
/////////////////////////////// FETCH DONE HERE //////////////////////////
        const response = await fetch(process.env.MY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.API_KEY,
            },
            body: JSON.stringify(userSend)
        });

        const result = await response.json() // passes the response into the result
        console.log("result", result)
/////////////////////////////// JUST DATE FORMATING HERE //////////////////////////
        // console.log("result1", result)


        console.log("FROM THIS!!! userData", userData)
        // const [hour] = userData.birthTime.split(":").map(Number) // this is the number object 
        

        // Create a date object using the provided year, month, date, and time
        const formatDate = new Date(
            userData.year,
            userData.month - 1, // Months are 0-based in JavaScript (0 = January, 1 = February, etc.)
            userData.date,
            userData.hours,
            0, // Minutes (assuming it's 0, you can change it if needed)
            0, // Seconds (assuming it's 0, you can change it if needed)
            0 // Milliseconds (assuming it's 0, you can change it if needed)
        );
        console.log(formatDate)    
/////////////////////////////// ADDING TO THE DATABASE //////////////////////////   
///////////////////////////////////////////////////////////////////////////////     
        // This uses mongoose to add the object to the database
        const dbobject = await UserModel.create({  // this makes a model from the schema
            fname: userData.firstName,
            lname: userData.lastName,
            dob: formatDate,
            lat: userData.latitude,
            log: userData.longitude,
            timezone: userData.timezone,
            chart: {
                planets: result.output[1].planets // drills into the results and returns the planets object and puts it in the planets field in the charts object
            }
        });
        console.log("FIXTHIS!!!!! userModel dbobject created here: ",dbobject)
        await dbobject.save();  // sends to the database
        res.json({ user: dbobject, chart: result });  // returns the database object
        console.log("It atually worked!!!")  // DONE


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});


// TESTING WITH A PRE-BUILT USER gets a chart, adds to databse sucessful
router.get('/test', async (req, res) => {
    console.log("test endpoint")
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
    console.log(response)
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
            planets: { "Ascendant": result.output[1].Ascendant },
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

// gets a single user from the database
router.get('/users/:userid', async (req, res) => {
    const userid = req.params.userid
    try {

        const user = await UserModel.findById(userid).populate({ path: "chart" }).exec();

        
        console.log(user)
        

        // user.forEach(  (item) => {

        //     console.log("debug",item.chart.planets.get("Ascendant"));
        // } )
        res.json(user);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
});

// works gets all users
router.get('/allUsers', async (req, res) => {
    try {
        // route stuff here
        console.log("/allUsers")
        const users = await UserModel.find().populate( { path: "chart" }).exec();
        res.json(users);
        console.log("finished")
    } catch {
        res.status(500).json({ error: error.message });        
    }
})



// this works and adds a user to the database only
// adds using the formated database user
router.post('/addUserDB', async (req, res) => {
    try {
        // Extract user data from the request body
        const {
            fname,
            lname,
            dob,
            lat,
            lon,
            timezone,
            chart: { planets },
        } = req.body;

        // Create a new user object
        const newUser = new UserModel({
            fname,
            lname,
            dob: new Date(dob), // Parse the date string into a Date object
            lat,
            log: lon, // Correct the variable name to match your schema
            timezone,
            chart: {
                planets,
            },
        });

        // Save the user object to the database
        await newUser.save();

        res.status(201).json({ newUser });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});
// test adding form to userdatabase without hitting the chart
/*
router.post('/addUserOnly', async (req, res) => {
    try {
        // Extract user data from the request body
        const userForm {
            firstName,
            lastName,
            birthdate,
            birthTime,
            latitude,
            longitude,
            timezone,
            year,
            month,
            date,
            chart: { planets },
        } = req.body;

        // Create a new user object
        const newUser = new UserModel({
            fname: userForm.firstName,
            lname: userForm.lastName,
            dob: userForm.year,  // new Date(dob), // Parse the date string into a Date object
            lat: userForm.latitude,
            log: userForm.longitude, // Correct the variable name to match your schema
            timezone: userForm.timezone,
            chart: {
                planets,
            },
        });

        // Save the user object to the database
        await newUser.save();

        res.status(201).json({ newUser });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});
*/


// sends a chart the chart if the user data is sent in the correct format
// needs date updated
router.post('/chart', async (req, res) => {
    try {
        console.log("/chart POST");

        const userData = req.body;
        console.log("user", userData)
        const userSend = {  // this modifies the user data to send correctly to the api
            "year": userData.year,
            "month": userData.month,
            "date": userData.date,
            "hours": userData.birthTime,
            "minutes": 0,
            "seconds": 0,
            "latitude": userData.latitude,
            "longitude": userData.longitude,
            "timezone": userData.timezone,
            "settings": {
                "observation_point": "topocentric",
                "ayanamsha": "lahiri"
            }
        }
        console.log("userSend ", userSend)

        const response = await fetch(process.env.MY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.API_KEY
            },
            body: JSON.stringify(userSend)
        });
        const result = await response.json()

        console.log("returned chart", result)
        res.json({ result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

})

module.exports = router //alows this to be exported to the server file