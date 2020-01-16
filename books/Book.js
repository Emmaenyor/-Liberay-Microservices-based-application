const mongoose = require ("mongoose");

mongoose.model("Book",{

title:{
    type: String,
    required:ture
},
author:{
    type: String,
    required: true
},
 
numberOfPages: {
    type: Number,
    required: false
},

publisher: {
    type: String,
    required: false
}


});