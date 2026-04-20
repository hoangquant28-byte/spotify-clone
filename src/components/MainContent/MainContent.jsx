import React from 'react';
import Footer from '../Footer/Footer';
import './MainContent.css';

const MainContent = ({ onSongClick, searchQuery, onNavigateToArtist }) => {
  // 🔍 Lấy Base URL từ Vite (Ví dụ: /spotify-clone/)
  const base = import.meta.env.BASE_URL;

  const songs = [
    { id: 1, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", coverUrl: `${base}assets/dwas.jpg`, type: "song" },
    { id: 2, title: "Birds of a Feather", artist: "Billie Eilish", coverUrl: `${base}assets/boaf.jpg`, type: "song" },
    { id: 3, title: "APT.", artist: "ROSÉ, Bruno Mars", coverUrl: `${base}assets/apt.jpg`, type: "song" },
    { id: 4, title: "Moonlight", artist: "Kali Uchis", coverUrl: `${base}assets/ml.jpg`, type: "song" },
    { id: 5, title: "Sweater Weather", artist: "The Neighbourhood", coverUrl: `${base}assets/sw.jpg`, type: "song" },
    { id: 6, title: "505", artist: "Arctic Monkeys", coverUrl: `${base}assets/am.jpg`, type: "song" },
    { id: 7, title: "Glimpse of Us", artist: "Joji", coverUrl: `${base}assets/gou.jpg`, type: "song" },
    { id: 8, title: "Sơn Tùng M-TP", artist: "Sơn Tùng M-TP", coverUrl: `${base}assets/sontung.jpg`, type: "artist" },
    { id: 9, title: "Alan Walker", artist: "Alan Walker", coverUrl: `${base}assets/alan.jpg`, type: "artist" },
    { id: 10, title: "Justin Bieber", artist: "Justin Bieber", coverUrl: `${base}assets/justin.jpg`, type: "artist" },
    { id: 11, title: "Lil Nas X", artist: "Lil Nas X", coverUrl: `${base}assets/lil.jpg`, type: "artist" },
    { id: 12, title: "Lôi Choi", artist: "Wren Evans", coverUrl: `${base}assets/loichoi.jpg`, type: "song" },
  ];

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes((searchQuery || '').toLowerCase()) || 
    song.artist.toLowerCase().includes((searchQuery || '').toLowerCase())
  );

  // 🛠️ HÀM MỚI: Xử lý khi click vào Card
  const handleCardClick = (item) => {
    // Nếu bấm vào card Lil Nas X, gọi hàm chuyển trang
    if (item.title === "Lil Nas X" && onNavigateToArtist) {
      onNavigateToArtist('artist_lilnasx');
    } else {
      // Nếu là bài hát bình thường, gọi hàm phát nhạc
      onSongClick(item);
    }
  };

  return (
    <div className="main-content red-theme">
      <div className="content-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Music</button>
        <button className="filter-btn">Podcasts</button>
      </div>

      <section className="card-section">
        <div className="section-header">
          <div className="section-title">
            <span className="subtitle">{searchQuery ? "Search results" : "More like..."}</span>
            <h2>{searchQuery ? `Showing results for "${searchQuery}"` : "Recommended for you"}</h2>
          </div>
        </div>
        
        <div className="cards-grid">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div 
                className="spotify-card" 
                key={song.id} 
                onClick={() => handleCardClick(song)} /* Gắn sự kiện click mới vào đây */
              >
                <div className="card-img-wrapper">
                  <img 
                    src={song.coverUrl} 
                    alt={song.title} 
                    // Nếu là Artist thì thêm class làm tròn ảnh (bạn có thể CSS thêm class .rounded-full { border-radius: 50% })
                    className={`card-img ${song.type === 'artist' ? 'rounded-full' : ''}`} 
                    style={song.type === 'artist' ? { borderRadius: '50%' } : {}}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Error'; }} 
                  />
                  <div className="play-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="black">
                      <path d="M7 6v12l10-6z"></path>
                    </svg>
                  </div>
                </div>
                <h3>{song.title}</h3>
                <p>{song.type === 'artist' ? 'Artist' : song.artist}</p>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainContent;