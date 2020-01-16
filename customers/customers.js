const express = required("express")
const app = express ()
const bodyParser = required("body-Parser");

app.use(bodyPaser.json()); // this our application to receive json data thrrough request


mongoose.connect("mongodb+srv://emma:<password>@cluster0-uy9fp.mongodb.net/test?retryWrites=true&w=majority",() =>{
    console.log( "Database is  connceted" );
});


//lets load the customer model
required("./Customer")
const Customer = mongoose.model("Customer")

app.post("/customer",(req,res)=>{
     var newCustomer ={
         name:req.body.name,
         age:req.body.age,
         address: req.body.address
     }

     var customer = new Customer (newCustomer)

     Customer.save().then(()=>{
         req.send("Customer Created Successfully")
        }).catch((err) =>{
            if(err){
                throw err;
            }
        })
     })

app.get("/customers",(req,res)=>{
    Customer.find().then((cutomers)=>{
        res.json(customers)
    }).catch((err) =>{
        if(err){
            throw err;
        }
    })


  //to list a single customer
  
  app.get("/customer/id",(req,res) =>{

    Book.findById(req.params.id).then((customer)=>{

        if(customer){
            // if customer or data doesnt exist pass 404 as an error message after checks
            res.json(customer)
               }else{
                   res.sendStatus("invalid ID");
               }

    }).catch(err =>{
        if (err){
            throw err;
        }
    })
}) 

})

//delete customer
app.delete("/customer/id/",(req,res) =>{
    Book.findOneAndRemove(req.params.id).then(() =>{
        res.send("Romoved Successfully by Emma")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

app.listen("5555",()=>{
    console.log("up and running")
})