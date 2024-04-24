const express = require('express');
const bodyParser = require('body-parser'); // You'll need this to parse POST request bodies

const app = express();
const port = 3000; // or another port that suits your configuration

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Example: Hardcoded user credentials
  if (username === 'admin' && password === 'password') {
    res.json({ message: 'Login successful', user: username });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Here you would typically check if the username already exists, 
  // hash the password using a library like bcrypt, and then store the user in the database.
  // For now, we'll just log it and return a success message.
  console.log('SignUp Attempt:', username, email, password);
  
  // You should add error handling and send appropriate responses if something goes wrong.
  res.status(201).json({ message: 'User created successfully', user: username });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
