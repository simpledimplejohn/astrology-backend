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
// console.log("test",userBirthDate)
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
const userFrontEnd = {
    "firstName": "Constible",
    "lastName": "Blockhead",
    "birthdate": "1799-11-12",
    "birthTime": 3,
    "latitude": 32.1,
    "longitude": -120.1,
    "timezone": 5,
    "year": 1640,
    "month": 7,
    "date": 6,
};

console.log(userFrontEnd);

// Create a date object using the provided year, month, date, and time
const formatDate = new Date(
    userFrontEnd.year,
    userFrontEnd.month - 1, // Months are 0-based in JavaScript (0 = January, 1 = February, etc.)
    userFrontEnd.date,
    userFrontEnd.birthTime,
    0, // Minutes (assuming it's 0, you can change it if needed)
    0, // Seconds (assuming it's 0, you can change it if needed)
    0 // Milliseconds (assuming it's 0, you can change it if needed)
);

console.log(formatDate);
