import React from 'react';
import './RightSidebar.css';

const RightSidebar = ({ song, onClose }) => {
  // Chống crash nếu chưa có bài hát nào được chọn
  if (!song) return null;

  return (
    <div className="right-sidebar">
      {/* Lớp bọc rs-inner-content giúp nội dung không bị thanh cuộn đè lên */}
      <div className="rs-inner-content">
        
        {/* =========================================
           1. HEADER: Tên bài hát & Nút đóng
           ========================================= */}
        <div className="right-header">
          <h4>{song.title}</h4>
          <div className="header-icons">
            <span className="more-btn">⋯</span>
            <span className="close-btn" onClick={onClose}>✖</span>
          </div>
        </div>

        {/* =========================================
           2. ẢNH COVER (THÁP PISA)
           ========================================= */}
        <div className="right-cover">
          <img src={song.coverUrl} alt={song.title} />
        </div>

        {/* =========================================
           3. THÔNG TIN BÀI HÁT & NÚT ADD
           ========================================= */}
        <div className="right-song-info">
          <div className="song-title">
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </div>
          <span className="add-btn" title="Add to Library">⊕</span>
        </div>

        {/* =========================================
           4. PHẦN CREDITS (Thông tin nghệ sĩ)
           ========================================= */}
        <div className="right-credits-card">
          <div className="credits-header">
            <h4>Credits</h4>
            <span className="show-all">Show all</span>
          </div>
          
          {/* Nghệ sĩ chính + Nút Follow */}
          <div className="credit-item">
            <div className="credit-info">
              <p className="name">{song.artist}</p>
              <p className="role">Main Artist • Producer</p>
            </div>
            <button className="follow-btn">Follow</button>
          </div>

          {/* Các thông tin phụ khác */}
          <div className="credit-item">
            <div className="credit-info">
              <p className="name">Charles Ekhaus</p>
              <p className="role">Writer • Masterer • Mixer</p>
            </div>
          </div>
        </div>

        {/* =========================================
           5. DANH SÁCH CHỜ (NEXT IN QUEUE)
           ========================================= */}
        <div className="right-next-card">
          <div className="next-header">
            <h4>Next in queue</h4>
            <span className="open-queue">Open queue</span>
          </div>
          
          <div className="next-item">
            <img 
              src="https://picsum.photos/48?random=10" 
              alt="Queue Cover" 
              className="queue-mini-img" 
            />
            <div className="next-info">
              <p className="next-title">Mrs Magic</p>
              <p className="next-artist">Strawberry Guy</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightSidebar;