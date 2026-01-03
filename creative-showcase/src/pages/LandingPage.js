import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://assignment-1-jmbq.onrender.com/api/images')
      .then(res => setImages(res.data))
      .catch(err => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="container">
      <div className="hero-section" style={{textAlign:'center', padding:'40px 20px'}}>
        <h1>Welcome to the Creative Showcase</h1>
        <p>Discover digital memories and artwork from our community.</p>
      </div>

      <div className="masonry-wrapper">
        {images.map(img => (
          <div key={img._id} className="masonry-item">
            <Link to={`/profile/${img.username}`}>
               <img src={img.imageUrl} alt={img.title} />
               <div className="image-info">
                 <p style={{fontWeight:'bold'}}>{img.title || "Untitled"}</p>
                 <small>By: {img.username}</small>
               </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;