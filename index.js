const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send("Hello");
})

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})
