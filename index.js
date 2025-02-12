//import express
const express = require('express');
//initialise a backend application
const app = express();

//json parser
// pre-built middleware
app.use(express.json());
//app.use(function)-> middleware
//logging middleware
// app.use(custom function)
app.use((req, res, next)=>{

    //middleware 
    const method = req.method;
    const url = req.url;
    const time = new Date().toString();

    console.log(`METHOD: ${method}, URL: ${url}, TIME: ${time}`);


    //this middleware has been executed and you can pass onto the next middleware or route handler
    next();

})


// app.use((req, res, next)=>{
//     console.log("Middleware executed");
//     next();
// })    



// localhost:3000/



//routes for the application
//root route
app.get('/', (req, res)=>{
    res.json({message:"Hello World"});
});
//route syntax
// app.method("route", callback function or a handler function)
// callback function - > (req, res)=>{}
    // req - Request  is what we recieve from the client side (browser)
    // res - Response is what we send to the client side (browser)

    app.get('/about', (req, res)=>{
        res.send('<h1>About Page</h1><br><p>This is the about page</p>');
    });

    const middleware = (req, res, next)=>{
        console.log("Middleware executed");
        next();
    }

    app.post("/signup", middleware,(req, res)=>{
        const user = req.body;
    
        // console.log(method);
        console.log(user);
        //signup logic
        res.send("User signed up successfully"); 
    });

    // Req
        // - req.params -> objects of parameters in the url -> route parameters
        // - req.query -> objects of query parameters in the url -> query parameters
        // - req.body -> objects of data sent in the body of the request -> body parameters
        // - req.headers -> objects of headers sent in the request -> headers parameters
        // JSON -> Headers, body
        //req.method -> method of the request -> GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, etc
        // req,url -> url of the request -> /about, /signup, /users, etc

    //Res
        // - res.send() -> sends a response to the client
        // - res.json()-> sends a json response to the client
        // - res.render() -> renders a view template
        // - res.redirect() -> redirects to another route



    //dynamic routing
    
    //route parameters
    app.get("/users/:username", (req, res)=>{
        const username = req.params.username;
        res.send(`Welcome ${username}`);
    })
    // it depends on some data present in the db
    //instagram: users -> document in the db



    //Query Parameters
    app.get("/search", (req, res)=>{
        const query = req.query;
        console.log(query);
        res.send("Search results");
        //searching logic in the database 
    })
    //searching, filtering, sorting etc 
    


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
