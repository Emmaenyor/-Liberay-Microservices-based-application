const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://emma:<password>@cluster0-uy9fp.mongodb.net/test?retryWrites=true&w=majority");

app.listen(3000, () => {
  console.log("emma's application is running on port 3000");
  console.log("--------------------------");
});




//to run this simply type node sever.js in the server terminal//


//user to MY MongODB cLAUSTER//
//username:emma
//password : emma12345 