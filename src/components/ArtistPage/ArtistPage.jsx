import React from 'react';
import Footer from '../Footer/Footer'; 
import './ArtistPage.css';

// 1️⃣ IMPORT TẤT CẢ ẢNH TỪ THƯ MỤC SRC
import monteroImg from '../../assets/covers/montero.jpg';
import oldTownRoadImg from '../../assets/covers/oldtownroad.jpg';
import industryBabyImg from '../../assets/covers/industrybaby.jpg';
import twiwImg from '../../assets/covers/twiw.jpg';
import artistCoverImg from '../../assets/covers/artistcover.jpg';
import aboutCoverImg from '../../assets/covers/cover.jpg';

const ArtistPage = () => {
  // 2️⃣ CẬP NHẬT: Thêm thuộc tính `img` sử dụng biến đã import cho danh sách bài hát
  const popularTracks = [
    { 
      id: 1, 
      title: 'INDUSTRY BABY (feat. Jack Harlow)', 
      plays: '2,303,650,630', 
      duration: '3:32', 
      explicit: true,
      img: industryBabyImg 
    },
    { 
      id: 2, 
      title: 'MONTERO (Call Me By Your Name)', 
      plays: '2,159,223,237', 
      duration: '2:17', 
      explicit: true,
      img: monteroImg 
    },
    { 
      id: 3, 
      title: 'Old Town Road (feat. Billy Ray Cyrus) - Remix', 
      plays: '1,692,723,254', 
      duration: '2:37', 
      explicit: false,
      img: oldTownRoadImg 
    },
    { 
      id: 4, 
      title: 'THATS WHAT I WANT', 
      plays: '1,206,906,385', 
      duration: '2:23', 
      explicit: true,
      img: twiwImg 
    },
    { 
      id: 5, 
      title: 'Old Town Road', 
      plays: '1,127,295,439', 
      duration: '1:53', 
      explicit: false,
      img: oldTownRoadImg 
    },
  ];

  const discography = [
    // SỬ DỤNG CÁC BIẾN ẢNH VỪA IMPORT
    { id: 1, title: 'MONTERO', year: '2021', type: 'Album', img: monteroImg },
    { id: 2, title: '7', year: '2019', type: 'Album', img: oldTownRoadImg },
    { id: 3, title: 'INDUSTRY BABY (feat. Jack Harlow)', year: '2021', type: 'Single', img: industryBabyImg },
    { id: 4, title: "STAR WALKIN' (League of Legends...", year: '2022', type: 'Single', img: twiwImg },
  ];

  return (
    <div className="artist-page">
      {/* --- Header Section --- */}
      <div className="artist-header">
        {/* SỬ DỤNG BIẾN LÀM BACKGROUND IMAGE */}
        <div className="artist-header-bg" style={{ backgroundImage: `url(${artistCoverImg})` }}></div>
        
        <div className="artist-header-content">
          <div className="verified-badge">
            <span className="check-icon">
              <svg role="img" height="16" width="16" viewBox="0 0 24 24" fill="#3D91F4"><path d="M12 21.6596l-3.38079 1.8543-1.84158-3.388-3.84662-.2595.28189-3.845-2.85322-2.593 2.593-2.85322-.2595-3.84662 3.845.28189 3.388-1.84158L12 1.8105l3.38079-1.8543 1.84158 3.388 3.84662.2595-.28189 3.845 2.85322 2.593-2.593 2.85322.2595 3.84662-3.845-.28189-3.388 1.84158z"></path><path d="M16.8637 7.41226l-6.6435 7.778-2.80421-3.2842-1.51862 1.306 4.31427 5.0434 8.16368-9.5542z" fill="#fff"></path></svg>
            </span>
            <span className="verified-text">Verified Artist</span>
          </div>
          <h1 className="artist-name">Lil Nas X</h1>
          <p className="monthly-listeners">19,139,805 monthly listeners</p>
        </div>
      </div>

      {/* --- Action Buttons --- */}
      <div className="artist-actions">
        <button className="play-btn">
          <svg role="img" height="24" width="24" viewBox="0 0 24 24" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
        </button>
        <button className="follow-btn">Following</button>
        <button className="more-btn">•••</button>
      </div>

      {/* --- Popular Tracks Section --- */}
      <div className="section-container">
        <h2 className="section-title">Popular</h2>
        <div className="popular-tracks">
          {popularTracks.map((track, index) => (
            <div className="track-item" key={track.id}>
              <div className="track-index">{index + 1}</div>
              {/* 3️⃣ CẬP NHẬT: Gắn biến track.img vào src */}
              <img className="track-img" src={track.img} alt="Track Cover" />
              <div className="track-info">
                <div className="track-title">{track.title}</div>
                <div className="track-badges">
                  {track.explicit && <span className="explicit-badge">E</span>}
                </div>
              </div>
              <div className="track-plays">{track.plays}</div>
              <div className="track-duration">{track.duration}</div>
            </div>
          ))}
        </div>
        <button className="see-more-btn">See more</button>
      </div>

      {/* --- Discography Section --- */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Discography</h2>
          <span className="show-all">Show all</span>
        </div>
        <div className="filter-chips">
          <button className="chip active">Popular releases</button>
          <button className="chip">Albums</button>
          <button className="chip">Singles and EPs</button>
        </div>
        <div className="cards-grid">
          {discography.map((album) => (
            <div className="card" key={album.id}>
              <div className="card-img-container">
                <img src={album.img} alt={album.title} />
              </div>
              <h3 className="card-title">{album.title}</h3>
              <p className="card-desc">{album.year} • {album.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- About Section --- */}
      <div className="section-container about-section">
        <h2 className="section-title">About</h2>
        {/* SỬ DỤNG BIẾN LÀM BACKGROUND IMAGE */}
        <div className="about-card" style={{ backgroundImage: `url(${aboutCoverImg})` }}>
          <div className="rank-badge">
            <span className="rank-number">#470</span>
            <span className="rank-text">in the world</span>
          </div>
          <div className="about-footer">
            19,139,805 monthly listeners
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistPage;