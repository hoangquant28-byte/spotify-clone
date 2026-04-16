import React from 'react';
import './FriendsModal.css';

const FriendsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="friends-card" onClick={(e) => e.stopPropagation()}>
        {/* Nút đóng X ở góc */}
        <button className="close-icon-btn" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="friends-card-content">
          <h2>Check what friends are playing with the Windows app</h2>
          <p>Explore the tracks your friends are spinning and get inspired for your next play.</p>
          
          {/* Nút Microsoft Store chuẩn */}
          <div className="store-badge">
            <div className="ms-logo">
               {/* Icon Microsoft Store giả lập */}
               <div className="ms-grid"><span></span><span></span><span></span><span></span></div>
            </div>
            <div className="ms-text">
              <span className="small-text">Download from the</span>
              <span className="big-text">Microsoft Store</span>
            </div>
          </div>

          <span className="direct-link">Download directly from Spotify</span>
        </div>
      </div>
    </div>
  );
};

export default FriendsModal;