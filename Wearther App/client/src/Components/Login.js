import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignUpButton, setShowSignUpButton] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset error
    setError("");
    setShowSignUpButton(false);

    try {
      const response = await fetch("http://localhost:3000/login", {
        // Update this URL to match actual API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Redirect to another route after successful login
        navigate("/dashboard"); // set to dashboard
      } else {
        // set in server.js to show button
        setShowSignUpButton(data.signupSuggested);
        throw new Error(data.message || "Unable to login");
      }
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} data-testid="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        {showSignUpButton && (
          <button
            type="button"
            className="signup-button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
