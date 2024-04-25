const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Memory for user data
// Note this data is lost when the server is restarted/shutdown
const users = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// SignUp route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Server-side validation for email and password
  if (!email.includes('@') || !email.includes('.', email.indexOf('@'))) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
  }

  // Check if user is in users array
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  // Hash password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add user to array
  users.push({ username, email, password: hashedPassword });
  res.status(201).json({ message: 'User created successfully', user: username });
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user in users array
  const user = users.find(user => user.username === username);
  if (!user){
    return res.status(404).json({message: 'User not found. Consider sigining up!', signupSuggested: true})
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch){
    return res.status(401).json({message: 'Invalid credentials', signupSuggested: false });
  }

  res.json({message: 'Login successful', user: username})
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});