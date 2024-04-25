import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        // Implement the sign-up logic here
        console.log('Sign Up Attempt:', username, email, password);
        // Typically you would send a request to your backend to create a new user

        try {
            const response = await fetch('http://localhost:3000/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, email, password }),
            });
      
            if (!response.ok) {
              throw new Error('Sign-up failed');
            }
      
            const data = await response.json();
            console.log('Sign-up successful:', data);
            // Here you could redirect the user to the login page or a profile page
          } catch (error) {
            console.error('Sign-up error:', error);
            // Display an error message to the user
          }
        };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
