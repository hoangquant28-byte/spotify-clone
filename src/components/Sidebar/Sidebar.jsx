import React, { useState } from 'react';
import './Sidebar.css';

// 🔍 Nhận prop setView từ App.jsx
const Sidebar = ({ setView }) => {
  // 1. Khai báo biến base TRƯỚC khi dùng trong libraryData
  const base = import.meta.env.BASE_URL;

  // --- 2. DỮ LIỆU TỔNG HỢP ---
  const libraryData = [
    { 
      id: 1, 
      type: 'playlists',
      name: "Liked Songs", 
      subtitle: "Playlist • 7 songs",
      img: "https://misc.scdn.co/liked-songs/liked-songs-64.png" 
    },
    { 
      id: 2, 
      type: 'playlists',
      name: "Your Top Songs 2023", 
      subtitle: "Playlist • Quân",
      img: `${base}assets/am.jpg` 
    },
    { 
      id: 3, 
      type: 'artists',
      name: "Justin Bieber", 
      subtitle: "Artist",
      img: `${base}assets/justin.jpg` 
    },
    { 
      id: 4, 
      type: 'artists',
      name: "Lil Nas X", 
      subtitle: "Artist",
      img: `${base}assets/lil.jpg` 
    },
    { 
      id: 5, 
      type: 'artists',
      name: "Alan Walker", 
      subtitle: "Artist",
      img: `${base}assets/alan.jpg` 
    },
    { 
      id: 6, 
      type: 'artists',
      name: "Sơn Tùng M-TP", 
      subtitle: "Artist",
      img: `${base}assets/sontung.jpg` 
    },
    { 
      id: 9, 
      type: 'albums',
      name: "Loi Choi", 
      subtitle: "Album • Wren Evans",
      img: `${base}assets/loichoi.jpg` 
    },
    { 
      id: 10, 
      type: 'albums',
      name: "BORN PINK", 
      subtitle: "Album • BLACKPINK",
      img: "https://i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01" 
    }
  ];

  const [isRecentsOpen, setIsRecentsOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Recents');
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleRecentsMenu = () => setIsRecentsOpen(!isRecentsOpen);

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  // --- 3. XỬ LÝ SỰ KIỆN CLICK VÀO ITEM ---
  const handleItemClick = (item) => {
    // Nếu bấm vào Lil Nas X, gọi setView để đổi giao diện sang trang Artist
    if (item.name === "Lil Nas X" && setView) {
      setView('artist_lilnasx');
    } else {
      // Logic cho các item khác (nếu có sau này)
      console.log(`Clicked on ${item.name}`);
    }
  };

  const displayItems = activeFilter 
    ? libraryData.filter(item => item.type === activeFilter)
    : libraryData;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="library-toggle">
          <div className="library-icon">
            <svg viewBox="0 0 24 24" className="svg-icon" fill="currentColor">
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
          </div>
          <h2>Your Library</h2>
        </div>
      </div>

      <div className="sidebar-filters">
        {(!activeFilter || activeFilter === 'playlists') && (
          <button className={`filter-pill ${activeFilter === 'playlists' ? 'active' : ''}`} onClick={() => handleFilterClick('playlists')}>Playlists</button>
        )}
        {(!activeFilter || activeFilter === 'artists') && (
          <button className={`filter-pill ${activeFilter === 'artists' ? 'active' : ''}`} onClick={() => handleFilterClick('artists')}>Artists</button>
        )}
        {(!activeFilter || activeFilter === 'albums') && (
          <button className={`filter-pill ${activeFilter === 'albums' ? 'active' : ''}`} onClick={() => handleFilterClick('albums')}>Albums</button>
        )}
      </div>

      <div className="library-list">
        {displayItems.map((item) => (
          <div 
            key={item.id} 
            className="library-item" 
            onClick={() => handleItemClick(item)} // Gắn sự kiện click ở đây
            style={{ cursor: 'pointer' }} // Thêm con trỏ chuột dạng tay để người dùng biết có thể bấm
          >
            <img 
              src={item.img} 
              alt={item.name} 
              style={{ borderRadius: item.type === 'artists' ? '50%' : '4px' }}
              // 💡 Mẹo: Nếu ảnh vẫn lỗi, dùng ảnh mặc định của Spotify
              onError={(e) => { e.target.src = 'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836D1C02891E04E?v=v2'; }}
            />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;