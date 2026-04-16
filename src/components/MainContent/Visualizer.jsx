import React from 'react';
import './Visualizer.css';

const Visualizer = () => {
  return (
    <div className="visualizer-wrapper">
      <div className="visualizer-container">
        {/* Tạo ra 15 cột sóng */}
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
      <div className="visualizer-glow"></div> {/* Hiệu ứng ánh sáng ảo ảnh phía sau */}
    </div>
  );
};

export default Visualizer;