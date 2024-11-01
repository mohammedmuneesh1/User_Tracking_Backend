const {UserDeviceTracking} = require("../utils/userDeviceTracking");
const {getUserGeoLocation} =require("../utils/getUserGeoLocation");
const User = require("../schema/user.schema")
const registerUser = (async (req,res)=>{
    try {
        const body = req.body;
        
        let saveData={...body};
        const deviceData = UserDeviceTracking(req);
        saveData.deviceData = deviceData;
        const geoLocation = await getUserGeoLocation(req);
        // console.log('this is the geolocation from user controller',geoLocation);


        if(geoLocation){
            saveData.geoLocation = geoLocation;
        }

           console.log("this is the saveData",saveData);

        await User.create(saveData);

        return res.status(200).send("User Registration Successfull");
    } catch (error) {
        // return res.status(500).send(error.message);
        return res.status(500).json({message:`error while  registering users ${error.message} `});

    }
})




const getAllRegisterData = (async(req,res)=>{
    try {
        const result = await User.find({}).sort({createdAt:-1});
        return res.status(200).json({message:"registration data fetched successfully",data:result});
    } catch (error) {
        return res.status(500).json({message:`error while getting registered users ${error.message} `});

    }
})

module.exports = {
    registerUser,
    getAllRegisterData
}