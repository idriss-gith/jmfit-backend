const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require("./middlewares/UserRoute")
const app = express();
const port = 3000;


const uri = "mongodb+srv://jmfit:jmfit2023@jmfit.0rwccnf.mongodb.net/?retryWrites=true&w=majority";
// Use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(uri).then(res=>{
  
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
})


app.use("/user", User)

app.use("/get", require("./middlewares/Get"))


