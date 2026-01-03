import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('currentUser');
    
    const [imageLink, setImageLink] = useState('');
    const [caption, setCaption] = useState('');
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            loadImages();
        }
    }, [user]);

    const loadImages = async () => {
        try {
            const res = await axios.get(`https://assignment-1-jmbq.onrender.com/api/images/${user}`);
            setGallery(res.data);
        } catch (err) {
            console.log("Error loading images");
        }
    };

    const uploadImage = async (e) => {
        e.preventDefault();
        if(!imageLink) return alert("Please add a link");

        try {
            await axios.post('https://assignment-1-jmbq.onrender.com/api/upload', {
                imageUrl: imageLink,
                username: user,
                title: caption || "Untitled"
            });
            alert("Uploaded!");
            setImageLink('');
            setCaption('');
            loadImages(); 
        } catch (err) {
            alert("Something went wrong");
        }
    };

    // --- NEW DELETE FUNCTION ---
    const deleteImage = async (id) => {
        // Simple confirmation before deleting
        if(!window.confirm("Are you sure you want to delete this?")) return;

        try {
            await axios.delete(`https://assignment-1-jmbq.onrender.com/api/images/${id}`);
            // Remove it from the screen immediately
            setGallery(gallery.filter(img => img._id !== id));
        } catch (err) {
            alert("Could not delete image");
        }
    };

    return (
        <div className="container">
            <div className="dashboard-header" style={{display:'flex', justifyContent:'space-between', margin:'30px 0'}}>
                <h2>My Dashboard</h2>
                <Link to={`/profile/${user}`} className="btn-primary" style={{textDecoration:'none', color:'#007bff'}}>
                    View Public Profile
                </Link>
            </div>

            <div className="dashboard-upload-box">
                <h3 style={{textAlign:'center', marginBottom:'15px'}}>Add New Image</h3>
                <form onSubmit={uploadImage} className="vertical-form">
                    <input 
                        className="form-input"
                        type="text" 
                        placeholder="Image URL..." 
                        value={imageLink} 
                        onChange={(e) => setImageLink(e.target.value)} 
                    />
                    <input 
                        className="form-input"
                        type="text" 
                        placeholder="Caption (optional)" 
                        value={caption} 
                        onChange={(e) => setCaption(e.target.value)} 
                    />
                    <button type="submit" className="form-btn">Add to Gallery</button>
                </form>
            </div>

            <h3 style={{marginTop:'40px'}}>My Collection</h3>
            <div className="masonry-wrapper">
                {gallery.length > 0 ? (
                    gallery.map((item) => (
                        <div key={item._id} className="masonry-item" style={{position: 'relative'}}>
                            <img src={item.imageUrl} alt="upload" />
                            <div style={{padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <p style={{fontWeight:'bold', margin:0}}>{item.title}</p>
                                
                                {/* DELETE BUTTON */}
                                <button 
                                    onClick={() => deleteImage(item._id)}
                                    style={{
                                        background: '#dc3545', 
                                        color: 'white', 
                                        border: 'none', 
                                        padding: '5px 10px', 
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '12px'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{color:'gray'}}>No images yet.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;