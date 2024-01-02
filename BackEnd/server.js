//server.js

const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

//Middleware for parsing JSON
app.use(express.json());

// Add CORS and session config
app.use(
    cors({
      origin: 'http://localhost:3000', 
      credentials: true  
    })
  );

// Configure session middleware
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true, 
      cookie: {
        maxAge: 3600000,
        httpOnly: false
      }
    })
  );

//Registration
app.post('/register',async(req,res) => {
    try{
        const {username,password} = req.body;
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'});
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})

//Login
app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }

        if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'});
        }

        // Store user information in the session
        req.session.user = user;

        res.status(200).json({message:'Login successful'})
    }
    catch(error){
        res.status(500).json({error:'Login failed'})
    }
})

connectDB();

app.listen(port,()=> {
 console.log('Server is listening on Post 8000')
});