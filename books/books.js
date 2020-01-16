const express = required ("express");
const app = exoress ();
const bodyParser = required("body-Parser");



//configurating bodypaser to save json data by Request

app.use(bodyParser.json());

//LOAD MONGOOSE and data into our database
const mongoose = required("mongoose")

required("./Book")
const Book = mongoose.model("Book");

// connnect 
mongoose.connect("mongodb+srv://emma:<password>@cluster0-uy9fp.mongodb.net/test?retryWrites=true&w=majority",() =>{
    console.log( "Database is seriously connceted" );
});

app.get('/',(req,res) =>{
    res.send("This is actuallly the main endpoint");
})

// creat func

///app.post("/book",(req,res) =>{
 //   console.log(req,body)
 //   res.send("00:D");
//})


app.post("/book",(req,res) =>{
    var newBook = {
   title: req.body.title,            // this function saves the data
   author: req.body.author,
   numberOfPages: req.body.numberOfPages,
   publisher: req.body.publisher

    }

    // we create a new book with thses attributes then save

    var book = new Book(newBook)

    book.save().then(()=>{
        console.log("New book created!")
    }).catch((err) =>{
        if(err){
            throw err;
        }
    })
     res.send("a new book is created successfully")
})

app.get("/books",(req, res) => {
    
    Book.find().then((books) => {
    console.log(books)  // to display on the browser use  res.json(books)
}).catch(err=>{
    if(err){
        throw err;
    }
 })

})

app.get("/book/id",(req,res) =>{

    Book.findById(req.params.id).then((book)=>{

        if(book){
            // if book or data doesnt exist pass 404 as an error message after checks
            res.json(book)
               }else{
                   res.sendStatus(404);
               }

    }).catch(err =>{
        if (err){
            throw err;
        }
    })
}) 

//delete
app.delete("/book/id/",(req,res) =>{
    Book.findOneAndRemove(req.params.id).then(() =>{
        res.send("Romoved Successfully by Ema")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

app.listen(4545, () =>{
    console.log("Up and ruuning ..welcome to our books services");
})


