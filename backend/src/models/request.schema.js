const mongoose=require("mongoose");
const validator=require("validator");

const requestSchema = new mongoose.Schema({
    consumer:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    orderdetails:{
        orderid:{
            type:Number,
            required:true
        },
        batteryhealth:{
            type:Number,
            required:true
        }
    },
    orderstatus:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const Request = new mongoose.model('request',requestSchema);

module.exports=Request;