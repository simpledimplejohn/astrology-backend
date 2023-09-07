const mongoose = require('mongoose')

// planet goes in chart
// chart goes in user


// plantet schema
const Planet = new mongoose.Schema({
    current_sign: Number,
    fullDegree: mongoose.Types.Decimal128,
    normDegree: mongoose.Types.Decimal128,
    isRetro: Boolean, 
});

const Chart = new mongoose.Schema({
    planets: {
        type: Map,
        of: Planet,
    }
})


const UserSchema = new mongoose.Schema({
    fname: String, 
    lname: String, 
    dob: Date,
    lat: Number,
    lon: Number,
    timezone: Number,
    chart: Chart,
});

const UserModel = mongoose.model('User', UserSchema)
const ChartModel = mongoose.model("Chart", Chart)


module.exports = {UserModel, ChartModel}; 
