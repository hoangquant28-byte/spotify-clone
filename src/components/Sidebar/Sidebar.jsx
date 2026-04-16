import React, { useState } from 'react';
import './Sidebar.css';

// --- 1. DỮ LIỆU TỔNG HỢP ---
// Đưa tất cả vào một mảng duy nhất, phân biệt bằng thuộc tính 'type'
const libraryData = [
  // --- PLAYLISTS ---
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
    img: "src\\assets\\covers\\am.jpg" 
  },

  // --- ARTISTS ---
  { 
    id: 3, 
    type: 'artists',
    name: "Justin Bieber", 
    subtitle: "Artist",
    img: "src\\assets\\covers\\justin.jpg" 
  },
  { 
    id: 4, 
    type: 'artists',
    name: "Lil Nas X", 
    subtitle: "Artist",
    img: "src\\assets\\covers\\lil.jpg" 
  },
  { 
    id: 5, 
    type: 'artists',
    name: "Alan Walker", 
    subtitle: "Artist",
    img: "src\\assets\\covers\\alan.jpg" 
  },
  { 
    id: 6, 
    type: 'artists',
    name: "Sơn Tùng M-TP", 
    subtitle: "Artist",
    img: "src\\assets\\covers\\sontung.jpg" 
  },

  // --- ALBUMS ---
  { 
    id: 7, 
    type: 'albums',
    name: "Never Let Go", 
    subtitle: "Single • Jung Kook",
    img: "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699" 
  },
  { 
    id: 8, 
    type: 'albums',
    name: "Purpose (Deluxe)", 
    subtitle: "Album • Justin Bieber",
    img: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de" 
  },
  { 
    id: 9, 
    type: 'albums',
    name: "Loi Choi", 
    subtitle: "Album • Wren Evans",
    img: "src\\assets\\covers\\loichoi.jpg" 
  },
  { 
    id: 10, 
    type: 'albums',
    name: "BORN PINK", 
    subtitle: "Album • BLACKPINK",
    img: "https://i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01" 
  },
  { 
    id: 11, 
    type: 'albums',
    name: "Starboy", 
    subtitle: "Album • The Weeknd",
    img: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452" 
  }
];

const Sidebar = () => {
  const [isRecentsOpen, setIsRecentsOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Recents');
  const [activeFilter, setActiveFilter] = useState(null); // null = Hiện tất cả

  const toggleRecentsMenu = () => {
    setIsRecentsOpen(!isRecentsOpen);
  };

  const handleFilterClick = (filter) => {
    // Nếu bấm lại vào tag đang chọn thì tắt lọc, ngược lại thì chọn tag mới
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  // --- LOGIC LỌC DỮ LIỆU ---
  // Nếu activeFilter có giá trị (vd: 'artists'), chỉ lấy những item có type khớp.
  // Nếu activeFilter là null, lấy toàn bộ mảng libraryData.
  const displayItems = activeFilter 
    ? libraryData.filter(item => item.type === activeFilter)
    : libraryData;

  return (
    <div className="sidebar">
      
      {/* --- HEADER: LIBRARY --- */}
      <div className="sidebar-header">
        <div className="library-toggle">
          <div className="library-icon has-tooltip" data-tooltip="Collapse Your Library">
            <svg viewBox="0 0 24 24" className="svg-icon" fill="currentColor">
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
          </div>
          <h2>Your Library</h2>
        </div>
        
        <div className="header-actions">
          <div className="create-btn has-tooltip" data-tooltip="Create a playlist, folder, or Jam">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
          </div>
          <div className="expand-btn has-tooltip" data-tooltip="Expand Your Library">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M7.19 1A.749.749 0 0 1 8.46 1l4.489 4.49a.75.75 0 1 1-1.061 1.06L8.75 3.411V14.25a.75.75 0 0 1-1.5 0V3.411L4.11 6.55A.75.75 0 0 1 3.05 5.49L7.19 1z" transform="rotate(45 8 8)"></path></svg>
          </div>
        </div>
      </div>

      {/* --- BỘ LỌC (PILLS) --- */}
      <div className="sidebar-filters">
        {/* Nút X màu xám chỉ hiện khi có 1 tag đang được chọn */}
        {activeFilter && (
          <button className="filter-close-btn" onClick={() => setActiveFilter(null)}>
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M12.72 3.28a.75.75 0 0 0-1.06 0L8 6.94 4.34 3.28a.75.75 0 0 0-1.06 1.06L6.94 8l-3.66 3.66a.75.75 0 0 0 1.06 1.06L8 9.06l3.66 3.66a.75.75 0 0 0 1.06-1.06L9.06 8l3.66-3.66a.75.75 0 0 0 0-1.06z"></path>
            </svg>
          </button>
        )}
        
        {/* Ẩn các nút không được chọn để mô phỏng Spotify */}
        {(!activeFilter || activeFilter === 'playlists') && (
          <button 
            className={`filter-pill ${activeFilter === 'playlists' ? 'active' : ''}`}
            onClick={() => handleFilterClick('playlists')}
          >
            Playlists
          </button>
        )}
        
        {(!activeFilter || activeFilter === 'artists') && (
          <button 
            className={`filter-pill ${activeFilter === 'artists' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('artists')}
          >
            Artists
          </button>
        )}
        
        {(!activeFilter || activeFilter === 'albums') && (
          <button 
            className={`filter-pill ${activeFilter === 'albums' ? 'active' : ''}`}
            onClick={() => handleFilterClick('albums')}
          >
            Albums
          </button>
        )}
      </div>

      {/* --- TÌM KIẾM & SẮP XẾP --- */}
      <div className="sidebar-sub-header">
        <span className="search-icon has-tooltip" data-tooltip="Search in Your Library">
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06l-3.185-3.184A6.75 6.75 0 0 1 .25 7z"></path></svg>
        </span>
        
        <div className="recents-wrapper">
          <div className="recents-trigger" onClick={toggleRecentsMenu}>
            <span>{sortBy}</span>
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 5.75H1v-1.5h2v1.5zm0 5.75H1V13h2v1.5z"></path></svg>
          </div>

          {isRecentsOpen && (
            <div className="recents-dropdown-menu">
              <div className="dropdown-section-title">Sort by</div>
              <ul>
                {['Recents', 'Recently Added', 'Alphabetical', 'Creator'].map(sortOption => (
                  <li key={sortOption} className={sortBy === sortOption ? 'active' : ''} onClick={() => { setSortBy(sortOption); setIsRecentsOpen(false); }}>
                    {sortOption}
                    {sortBy === sortOption && <svg viewBox="0 0 16 16" fill="#1ed760" className="check-icon"><path d="M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"></path></svg>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* --- DANH SÁCH RENDER ĐỘNG --- */}
      <div className="library-list">
        {displayItems.map((item) => (
          <div key={item.id} className="library-item">
            {/* ĐIỂM NHẤN: Render ảnh tròn cho ca sĩ, vuông bo góc cho playlist/album */}
            <img 
              src={item.img} 
              alt={item.name} 
              style={{ borderRadius: item.type === 'artists' ? '50%' : '4px' }} 
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