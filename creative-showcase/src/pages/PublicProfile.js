import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PublicProfile = () => {
    const { username } = useParams(); 
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get(`https://assignment-1-jmbq.onrender.com/api/images/${username}`)
            .then(res => setImages(res.data))
            .catch(err => console.error(err));
    }, [username]);

    return (
        <div className="container">
            <h1>Portfolio: {username}</h1>
            <div className="masonry-wrapper">
                {images.length > 0 ? (
                    images.map(img => (
                        <div key={img._id} className="masonry-item">
                            <img src={img.imageUrl} alt="art" />
                            <p style={{padding:'5px'}}>{img.title}</p>
                        </div>
                    ))
                ) : (
                    <p>This artist hasn't uploaded anything yet.</p>
                )}
            </div>
        </div>
    );
};

export default PublicProfile;