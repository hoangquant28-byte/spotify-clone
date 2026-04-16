import React from 'react';
import './InstallApp.css';
import Footer from '../Footer/Footer';

const InstallApp = () => {
  return (
    <div className="install-scroll-container">
      <div className="install-container">
        <div className="install-content">
          <h1>Download Spotify for Windows</h1>
          <p className="install-desc">
            Enjoy high-quality audio and offline playback, plus Windows Game Bar integration 
            and a friend activity feed that lets you see what your friends are listening to in real time.
          </p>

          {/* Nút tải từ Microsoft Store */}
          <button className="ms-store-btn">
            <svg viewBox="0 0 24 24" width="28" height="28" className="ms-icon">
              <rect x="2" y="2" width="9" height="9" fill="#f25022" />
              <rect x="13" y="2" width="9" height="9" fill="#7fba00" />
              <rect x="2" y="13" width="9" height="9" fill="#00a4ef" />
              <rect x="13" y="13" width="9" height="9" fill="#ffb900" />
            </svg>
            <div className="btn-text">
              <span className="btn-small-text">Download from the</span>
              <span className="btn-large-text">Microsoft Store</span>
            </div>
          </button>

          {/* Link tải trực tiếp */}
          <a href="#" className="direct-download-link">
            Download directly from Spotify
          </a>

          {/* Ảnh Mockup App (dùng link ảnh tạm, Quân có thể thay bằng ảnh thật sau) */}
          <div className="app-mockup">
            <img src="https://picsum.photos/1000/600?random=88" alt="Spotify Desktop App Mockup" />
          </div>
        </div>
      </div>
      
      {/* Giữ lại Footer cho chuẩn cấu trúc trang */}
      <div style={{ backgroundColor: '#121212' }}>
        <Footer />
      </div>
    </div>
  );
};

export default InstallApp;