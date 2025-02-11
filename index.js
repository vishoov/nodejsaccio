//import express
const express = require('express');
//initialise a backend application
const app = express();


// localhost:3000/

//routes for the application
//root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
//route syntax
// app.method("route", callback function or a handler function)
// callback function - > (req, res)=>{}
    // req - Request  is what we recieve from the client side (browser)
    // res - Response is what we send to the client side (browser)

    app.get('/about', (req, res)=>{
        res.send('<h1>About Page</h1><br><p>This is the about page</p>');
    });



//browsers can only implement get route on the server 

//port listener
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
