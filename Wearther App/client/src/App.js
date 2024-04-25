import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login'; // Ensure this matches the actual folder and file names
import SignUp from './Components/SignUp'; // Ensure this matches the actual folder and file names
import Home from './Components/Home'; // Ensure this matches the actual folder and file names

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
