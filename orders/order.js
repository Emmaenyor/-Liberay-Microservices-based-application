const mongoose = required('mongoose')

mongoose.model("Order",{
    CustomerID:{
        type:mongoose.SchemaTypes.Objectid,
        required:true
    },
    BookID:{
        type: mongoose.SchemaTypes.Objectid,
        required:True
    },
    initialData:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type: Date,
        required:true
    }
})