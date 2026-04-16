import React, { useState } from 'react';
import './Player.css';

const Player = () => {
  // --- 1. SETTINGS & STATE ---
  const duration = 240; // Tổng thời gian: 4 phút = 240 giây
  const [currentTime, setCurrentTime] = useState(104); // Vị trí hiện tại (1:44)
  const [volume, setVolume] = useState(50);             // Âm lượng mặc định 50%
  const [isTimeHovered, setIsTimeHovered] = useState(false);
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);
  
  // State mới: Quản lý trạng thái đang phát nhạc
  const [isPlaying, setIsPlaying] = useState(false);

  // --- 2. HELPERS ---
  
  // Chuyển đổi trạng thái Play/Pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Chuyển đổi giây (240) -> chuỗi hiển thị (4:00)
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  // Tính toán màu sắc Gradient cho thanh Slider
  const getSliderStyle = (value, max, isHovered) => {
    const percentage = (value / max) * 100;
    const activeColor = isHovered ? '#1db954' : '#fff'; // Xanh khi hover, Trắng khi thường
    return {
      background: `linear-gradient(to right, ${activeColor} ${percentage}%, #4d4d4d ${percentage}%)`
    };
  };

  return (
    <div className="player">
      
      {/* --- KHỐI TRÁI: BÀI HÁT & TIM --- */}
      <div className="player-left">
        <img src="https://picsum.photos/60?random=111" alt="Album Cover" className="now-playing-img" />
        <div className="now-playing-info">
          <h4>Mrs Magic (Strings Version)</h4>
          <p>Strawberry Guy</p>
        </div>
        <span className="control-icon like-btn">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
            <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
          </svg>
        </span>
      </div>

      {/* --- KHỐI GIỮA: ĐIỀU KHIỂN & THANH THỜI GIAN --- */}
      <div className="player-center">
        <div className="player-controls">
          <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 2.75l-2.829-2.828zm-3.81 10.39l-1.016-1.017a.75.75 0 0 0-1.06 1.06l1.017 1.017a.75.75 0 0 0 1.06-1.06zM2.873 3.66L1.149 1.604A2.25 2.25 0 0 0 .39 1.5H0V3h.391c.362 0 .7.16 1.11.59l1.455 1.734-.083-.083z"></path></svg></span>
          <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg></span>
          
          {/* NÚT PLAY TRÒN - ĐÃ TÍCH HỢP TOGGLE */}
          <span className="play-circle" onClick={togglePlay}>
            {isPlaying ? (
              /* Icon Pause (2 gạch) */
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
              </svg>
            ) : (
              /* Icon Play (Tam giác) */
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
              </svg>
            )}
          </span>

          <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.106A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg></span>
          <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg></span>
        </div>
        
        <div className="progress-container">
          <span className="time">{formatTime(currentTime)}</span>
          <input 
            type="range" 
            className="player-slider"
            min="0" 
            max={duration} 
            value={currentTime}
            style={getSliderStyle(currentTime, duration, isTimeHovered)}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            onMouseEnter={() => setIsTimeHovered(true)}
            onMouseLeave={() => setIsTimeHovered(false)}
          />
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>

      {/* --- KHỐI PHẢI: VOLUME & TIỆN ÍCH --- */}
      <div className="player-right">
        <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.526 15H.5a.5.5 0 0 1 0-1h2.641l1.791-4.225A4.5 4.5 0 0 1 4 7.238V4.5a4 4 0 0 1 8 0v2.738a4.5 4.5 0 0 1-.958 2.537L12.833 14H15.5a.5.5 0 0 1 0 1h-3.026a.5.5 0 0 1-.461-.308L10.368 11h-4.736l-1.645 3.692A.5.5 0 0 1 3.526 15zM5 4.5v2.738a3 3 0 0 0 6 0V4.5a3 3 0 0 0-6 0zM6.155 10h3.69l1.103-2.474a4.484 4.484 0 0 1-2.948 1.102A4.484 4.484 0 0 1 5.052 7.526L6.155 10z"></path></svg></span>
        <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg></span>
        <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15zM13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg></span>
        <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88zM11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg></span>
        
        <div className="progress-container volume-container">
          <input 
            type="range" 
            className="player-slider volume-slider"
            min="0" max="100" 
            value={volume}
            style={getSliderStyle(volume, 100, isVolumeHovered)}
            onChange={(e) => setVolume(Number(e.target.value))}
            onMouseEnter={() => setIsVolumeHovered(true)}
            onMouseLeave={() => setIsVolumeHovered(false)}
          />
        </div>

        <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M11.196 8l-4.225-2.439v4.878L11.196 8zM1 2.75A1.75 1.75 0 0 1 2.75 1h10.5A1.75 1.75 0 0 1 15 2.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H2.75z"></path></svg></span>
        <span className="control-icon"><svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1-1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg></span>
      </div>

    </div>
  );
};

export default Player;