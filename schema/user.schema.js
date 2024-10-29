
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        },
    phone:{
        type: Number,
        required: true
    },
    deviceData:{
        deviceType: String,
        browser: String,
        os: String,
        platform: String
    },
    geoLocation:{
        ipAddress:String,
        countryCode:String,
        country:String,
        state:String,
        district:String,
        city:String,
        zipcode:String,
        latitude:String,
        longitude:String,
        calling_code:String,
        isp:String,
        ispOrganization:String,
        time_zone:String,
    }
    // geoLocation:{

    // }









},{
    timestamps: true
});

 const User = mongoose.model("User", userSchema);
 module.exports = User;
