import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();

        // reset error message
        setError('');

        // Basic email verification
        if (!email.includes('@') || !email.includes('.', email.indexOf('@'))){
          setError('Please enter a valide email address');
          return;
        }

        // Password length check
        if (password.length < 8) {
          setError('Password must be at least 8 characters long.');
          return;
        }

        try {
            const response = await fetch('http://localhost:3000/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, email, password }),
            });
      
            if (!response.ok) {
              const data = await response.json();
              throw new Error(data.message || 'Sign-up failed');
            }
      
            const data = await response.json();
            console.log('Sign-up successful:', data);
            navigate('/login');
          } catch (error) {
            console.error('Sign-up error:', error);
            setError(error.message);
          }
        };

    return (
        // Keep ClassName as 'login-container'. This will use the login layout for Signup page
        <div className="login-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Username:</label>
                    <input 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required
                    />
                </div>
                {error && <p className="error">{error}</p>}  {/* Display error message if any */}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
