import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://assignment-1-jmbq.onrender.com/api/login', { email, password });
            if (res.data.username) {
                localStorage.setItem('currentUser', res.data.username);
                alert("Welcome back!");
                navigate('/dashboard');
                window.location.reload(); 
            }
        } catch (err) {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="form-page-container">
            <div className="form-box">
                <h2>Login</h2>
                <form onSubmit={submitHandler} className="vertical-form">
                    <input 
                        className="form-input" type="email" placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} required 
                    />
                    <input 
                        className="form-input" type="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} required 
                    />
                    <button type="submit" className="form-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;