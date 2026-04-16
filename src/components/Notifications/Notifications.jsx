import React from 'react';
import Footer from '../Footer/Footer'; // Import component dùng chung
import './Notifications.css';

const Notifications = () => {
  // 1. Dữ liệu thông báo để map cho sạch code
  const notifications = [
    {
      id: 1,
      title: "MONTAGEM RADICATE",
      artist: "ASKL hon",
      meta: "EP • 2 weeks ago",
      img: "https://picsum.photos/140?random=200"
    },
    {
      id: 2,
      title: "World of Walker, Season One: Rise of the Drones",
      artist: "Alan Walker",
      meta: "Album • 3 weeks ago",
      img: "https://picsum.photos/140?random=201"
    }
  ];

  return (
    <div className="notifications-scroll-container">
      <div className="notifications-content-inner">
        
        {/* =========================================
           1. TIÊU ĐỀ (HEADER)
           ========================================= */}
        <div className="notifications-header">
          <h1>What's New</h1>
          <p>The latest releases from artists, podcasts, and shows you follow.</p>
        </div>

        {/* =========================================
           2. BỘ LỌC (FILTERS)
           ========================================= */}
        <div className="notifications-filters">
          <button className="notif-filter-btn active">Music</button>
          <button className="notif-filter-btn">Podcast & Shows</button>
        </div>

        {/* =========================================
           3. DANH SÁCH THÔNG BÁO (EARLIER)
           ========================================= */}
        <section className="notif-section">
          <h2>Earlier</h2>
          <div className="notif-divider"></div>

          {notifications.map((item) => (
            <div className="notif-item" key={item.id}>
              <img src={item.img} alt={item.title} className="notif-img" />
              
              <div className="notif-info">
                <div className="notif-text">
                  <h3>{item.title}</h3>
                  <p className="notif-artist">{item.artist}</p>
                  <p className="notif-meta">{item.meta}</p>
                </div>

                <div className="notif-actions-row">
                  {/* Nút Thêm vào Thư viện */}
                  <span className="notif-add-btn" title="Add to Library">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </span>
                  
                  {/* Nút Play trắng đen */}
                  <div className="notif-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.14v14l11-7-11-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* =========================================
         4. FOOTER ĐỒNG BỘ (SHARED COMPONENT)
         ========================================= */}
      {/* ❌ Đã xóa toàn bộ code <footer> thủ công */}
      {/* ✅ Thay bằng component duy nhất để đồng bộ với các trang khác */}
      <Footer />
      
    </div>
  );
};

export default Notifications;