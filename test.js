const moment = require('moment-timezone');
// this comes from the front end
const userForm = {
firstName: "Jason",
lastName: "Block",
birthdate: "1878-11-12",
birthTime: "21:00",  // 9:00 PM
latitude: 45,
longitude: -45,

}

userBirthDate = new Date(userForm.birthdate)
userBirthDate.setTime(userForm.birthTime)
console.log("test",userBirthDate)
// now convert userForm to userData

let userDataJason = {
    "year": userForm.birthdate 
}

// this goes to the api
const userData = {
"year": 1978,
"month": 12,
"date": 11,
"hours": 20,
"minutes": 0,
"seconds": 0,
"latitude": 17.38333,
"longitude": 78.4666,
"timezone": -4,
"settings": {
    "observation_point": "topocentric",
    "ayanamsha": "lahiri"
}
}
// this goes to the database 
const user = {
"fname": "Zason",
"lname": "Zock",
"dob": "1/1/1876", 
"lat": 44.4,
"log": -44.4,
"timezone": -400, // offset from PST to UTC
"chart": {
    "planets": {
    
    }
}
}


// console.log(userData)

const formatDate = new Date(userData.year, userData.month - 1, userData.date, userData.hours)
// console.log(formatDate.getTimezoneOffset())

// console.log(formatDate.getHours())
// console.log(formatDate)


// const pstDate = new Date('July 1, 1800 12:02:45 PST')
// console.log(pstDate.getTimezoneOffset())


// const thisDate = moment.tz('1800-07-01T12:02:45', 'America/Los_Angeles');
// console.log(thisDate.format()); // Output the date and time in the specified time zone
// console.log(thisDate.utcOffset()); 
// console.log(thisDate.getTimezoneOffset())
// EST local time is off UTC by 296 mins 