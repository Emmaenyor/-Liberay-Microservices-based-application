const express = required("express")
const app = express ()
const bodyParser = required("body-Parser");
const mongoose = required("mongoose")
const axios = required ("axios")

app.listen(bodyParser.json())

mongoose.connect("mongodb+srv://emma:<password>@cluster0-uy9fp.mongodb.net/test?retryWrites=true&w=majority",() =>{
    console.log( " ORDERS Database is  connceted" );
});

require("./order")
const order = mongoose.model("order")   //load model

//this should create a new order
app.post("/order",(req,res)=>{
    var  newOrder = {
        CustomerID:mongoose.Types.ObjectId(req.body.CustomerID),
        BookID:mongoose.Types.ObjectId(req.body.bookID),
        InitialDate:req.body.InitialDate,
        DeliveryDate:req.req.body.DeliveryDate
    } 

    var order = new order(newOrder)

    order.save().then(()=>{
        res.send("order crated with success")
    }).catch(err =>{
        if (err){
            throw err;
        }
    })

    
})

app.get("/order",(req,res)=>{
    order.find().then((books)=>{
        res.json(books)
    }).catch(err =>{
        if (err){
            throw err;
        }
    })
})

//creating the communication string between the bebween all the services
 app.get("/order/:id",(req,res)=>{
     if(order){
         
        axios.get("#",+order.CustomerID).then((Response)=>{
            console.log(Response)
        })
           var orderObject = {customerName:Response.data.name,bookTittle: ''}

           axios.get("http://localhost:4545/book/"+ order.bookID).then((response)=>{
               orderObject.bookTittle = response.data.bookTittle
               res.json(orderObject)
           })


     }else{
         res.send("invalid Order")    //you must install axios in order to make order
     }
 })

app.listen(7777,()=>{
    console.log("Its running")
})