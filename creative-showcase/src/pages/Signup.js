import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    
    // Using separate states is very common for students
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://assignment-1-jmbq.onrender.com/api/register', { username, email, password });
            alert("Account created! Please login.");
            navigate('/login');
        } catch (err) {
            console.log(err);
            alert("Failed to register. Username might be taken.");
        }
    };

    return (
        <div className="form-page-container">
            <div className="form-box">
                <h2>Join Us</h2>
                <form onSubmit={registerUser} className="vertical-form">
                    <input 
                        className="form-input" type="text" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)} required 
                    />
                    <input 
                        className="form-input" type="email" placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} required 
                    />
                    <input 
                        className="form-input" type="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} required 
                    />
                    <button type="submit" className="form-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;