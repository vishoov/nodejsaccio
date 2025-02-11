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

    app.post("/signup", (req, res)=>{
        const user = req.body;
        console.log(user);
        //signup logic
        res.send("User signed up successfully"); 
    });




    //dynamic routing
    
    //route parameters
    app.get("/users/:username", (req, res)=>{
        const username = req.params.username;
        res.send(`Welcome ${username}`);
    })

    //Query Parameters
    app.get("/search", (req, res)=>{
        const query = req.query;
        console.log(query);
        res.send("Search results");
        //searching logic in the database 
    })
    
    


    // HTTP - req and response pair

    // Req -> "about" -> app.get('/about', (req, res))
        // req -> req.header, req.body, req.params, req.query
        // res -> res.send(), res.json(), res.render(), res.redirect()

        // get, /cars -> 
                // json -> Headers -> technical details, auth, type, encoding, etc, 
                //          Body -> data, content  

    app.get("/contact", (req, res)=>{
        res.send('<h1>Contact Page</h1><br><p>This is the contact page</p>');
    })


//browsers can only implement get route on the server 

//port listener
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
