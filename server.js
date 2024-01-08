//server.js

const express = require('express');
const session = require('express-session');
const app = express();
const port = 5000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

// Middleware for parsing JSON
app.use(express.json());


app.use(cors());
app.use(express.urlencoded({extended:true}))

// Configure session middleware
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
      httpOnly: false,
    },
  })
);

// Registration
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    req.session.user = user; // Store user information in the session

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Get Username
app.get('/getUsername', (req, res) => {
  if (req.session.user) {
    const { username } = req.session.user;
    res.status(200).json({ username });
  } else {
    res.status(401).json({ error: 'User not authenticated' });
  }
});

// Logout
app.post('/logout', (req, res) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: 'Logout failed' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  } else {
    res.status(401).json({ error: 'User not authenticated' });
  }
});

connectDB();

app.listen(port, () => {
  console.log('Server is listening on Port 5000');
});