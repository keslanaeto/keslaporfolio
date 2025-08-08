import React from 'react';
import './Youtube.css';

const Youtube = () => {
  return (
    <div className="youtube-page">
      <h2>My YouTube Videos</h2>
      <div className="video-grid">
        <div className="video-item">
          <iframe
            src="https://www.youtube.com/embed/zQour3itWoI"
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>My Elevator pitch</h3>
          <p>A Quick introduction about myself.</p>
        </div>

        <div className="video-item">
          <iframe
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>My transition into cloud</h3>
          <p>my next video will be here.</p>
        </div>

        {/* More video content will be added soon */}
      </div>
    </div>
  );
};

export default Youtube;
