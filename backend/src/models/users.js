const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    Userdetails : {
        Name:{
        type:String,
        required:true,
        },
        id:{
            type:Number,
            required:true,
        }
    },
    Location:{
        type:String,
        required:true,
    },
    Batterydetails:{
        Percentage:{
        type:String,
        required:true,
        },
        Vehicletype:{
            type:String,
            required:true
        },
        Batteryid:{
            type:Number,
            required:true,
        }
    },
    Rating:{
        type:Number,
        required:true,
    }
})

const User = new mongoose.model('users',userSchema);

module.exports = User;