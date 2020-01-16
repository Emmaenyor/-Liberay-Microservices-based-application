const mongoose = require("./node_modules/mongoose")

mongoose.model('Customer',{
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})