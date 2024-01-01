const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String, // Add the email field
});

const User = mongoose.model('User', userSchema);

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while logging in' });
    });
});

// Signup route
app.post('/signup', (req, res) => {
  const { username, password, email } = req.body; // Include the email field

  const newUser = new User({ username, password, email }); // Pass email to create a new user

  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: 'Signup successful' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while signing up' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});