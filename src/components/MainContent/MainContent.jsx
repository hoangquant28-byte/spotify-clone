import React from 'react';
import Footer from '../Footer/Footer';
import './MainContent.css';

const MainContent = ({ onSongClick, searchQuery }) => {
  // 1. Danh sách 8 bài hát (Dữ liệu chuẩn của Quân)
  const songs = [
    { id: 1, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", coverUrl: "src/assets/covers/dwas.jpg" },
    { id: 2, title: "Birds of a Feather", artist: "Billie Eilish", coverUrl: "src/assets/covers/boaf.jpg" },
    { id: 3, title: "Espresso", artist: "Sabrina Carpenter", coverUrl: "src/assets/covers/e.jpg" },
    { id: 4, title: "APT.", artist: "ROSÉ, Bruno Mars", coverUrl: "src/assets/covers/apt.jpg" },
    { id: 5, title: "Moonlight", artist: "Kali Uchis", coverUrl: "src/assets/covers/ml.jpg" },
    { id: 6, title: "Sweater Weather", artist: "The Neighbourhood", coverUrl: "src/assets/covers/sw.jpg" },
    { id: 7, title: "505", artist: "Arctic Monkeys", coverUrl: "src/assets/covers/am.jpg" },
    { id: 8, title: "Glimpse of Us", artist: "Joji", coverUrl: "src/assets/covers/gou.jpg" },
  ];

  // 🔍 LOGIC LỌC BÀI HÁT:
  // Lọc dựa trên searchQuery truyền từ App.jsx xuống
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content red-theme">
      
      {/* =========================================
          1. THANH LỌC NỘI DUNG (FILTERS)
          ========================================= */}
      <div className="content-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Music</button>
        <button className="filter-btn">Podcasts</button>
      </div>

      {/* =========================================
          2. PHẦN DANH SÁCH BÀI HÁT (DYNAMIC)
          ========================================= */}
      <section className="card-section">
        <div className="section-header">
          <div className="section-title">
            <span className="subtitle">
              {searchQuery ? "Search results" : "More like..."}
            </span>
            <h2>
              {searchQuery ? `Showing results for "${searchQuery}"` : "Recommended for you"}
            </h2>
          </div>
        </div>
        
        <div className="cards-grid">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div 
                className="spotify-card" 
                key={song.id} 
                onClick={() => onSongClick(song)} 
              >
                <div className="card-img-wrapper">
                  <img src={song.coverUrl} alt={song.title} className="card-img" />
                  <div className="play-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="black">
                      <path d="M7 6v12l10-6z"></path>
                    </svg>
                  </div>
                </div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            ))
          ) : (
            // Hiển thị khi không tìm thấy kết quả
            <div className="no-results">
              <p>No results found for "{searchQuery}"</p>
              <span>Please check your spelling or use different keywords.</span>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          3. CHÂN TRANG (SPOTIFY FOOTER)
          ========================================= */}
      <Footer />

    </div>
  );
};

export default MainContent;