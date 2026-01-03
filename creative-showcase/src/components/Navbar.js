import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const currentUser = localStorage.getItem('currentUser');

    const logout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Creative Showcase</Link>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-item">Home</Link>
                
                {currentUser ? (
                    <>
                        <span className="user-greeting">Hello, {currentUser}</span>
                        <Link to="/dashboard" className="nav-item">Dashboard</Link>
                        <button onClick={logout} className="btn-logout">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-item">Login</Link>
                        <Link to="/signup" className="nav-item btn-signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;