import React from 'react';
import Footer from '../Footer/Footer';
import './Browse.css';
import '../MainContent/MainContent.css'; // Import thêm CSS của Card nhạc cho đẹp

const Browse = ({ searchQuery, onSongClick }) => {
  // 1. Dữ liệu các ô danh mục (Mặc định)
  const categories = [
    { id: 1, title: "Music", color: "#E91429", img: "https://picsum.photos/100/100?random=11" },
    { id: 2, title: "Podcasts", color: "#006450", img: "https://picsum.photos/100/100?random=12" },
    { id: 3, title: "Live Events", color: "#8400E7", img: "https://picsum.photos/100/100?random=13" },
    { id: 4, title: "Made For You", color: "#1E3264", img: "https://picsum.photos/100/100?random=14" },
    { id: 5, title: "New Releases", color: "#608108", img: "https://picsum.photos/100/100?random=15" },
    { id: 6, title: "Vietnamese Music", color: "#27856A", img: "https://picsum.photos/100/100?random=16" },
  ];

  // 2. Dữ liệu bài hát để tìm kiếm
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

  // 3. Logic lọc kết quả
  // Thêm dấu ? để tránh lỗi khi searchQuery bị undefined
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery?.toLowerCase() || '') || 
    song.artist.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="browse-scroll-container">
      <div className="browse-content">
        
        {/* NẾU CÓ CHỮ TÌM KIẾM -> HIỆN KẾT QUẢ BÀI HÁT */}
        {searchQuery ? (
          <div className="search-results-section">
            <h2 style={{ color: 'white', marginBottom: '24px' }}>Top results for "{searchQuery}"</h2>
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
                <p style={{ color: '#b3b3b3' }}>No results found for "{searchQuery}"</p>
              )}
            </div>
          </div>
        ) : (
          /* NẾU KHÔNG CÓ CHỮ -> HIỆN DANH MỤC BROWSE ALL MẶC ĐỊNH */
          <>
            <h2>Browse all</h2>
            <div className="browse-grid">
              {categories.map((cat) => (
                <div key={cat.id} className="browse-card" style={{ backgroundColor: cat.color }}>
                  <h3>{cat.title}</h3>
                  <div className="card-img-container">
                    <img src={cat.img} alt={cat.title} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default Browse;