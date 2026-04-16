import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Player from './components/Player/Player';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Notifications from './components/Notifications/Notifications';
import Browse from './components/Browse/Browse';
import InstallApp from './components/InstallApp/InstallApp';
import FriendsModal from './components/FriendsModal/FriendsModal';
import './App.css';

// Nếu Quân chưa làm trang ArtistsView, hãy tạm comment dòng import này lại
// import ArtistsView from './components/ArtistsView/ArtistsView'; 

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedSong, setSelectedSong] = useState(null); 

  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [rightSidebarWidth, setRightSidebarWidth] = useState(300);
  const [resizingLeft, setResizingLeft] = useState(false);
  const [resizingRight, setResizingRight] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startResizingLeft = () => !isMobile && setResizingLeft(true);
  const startResizingRight = () => !isMobile && setResizingRight(true);
  
  const stopResizing = useCallback(() => {
    setResizingLeft(false);
    setResizingRight(false);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (resizingLeft) {
      const newWidth = e.clientX;
      if (newWidth > 150 && newWidth < 450) setSidebarWidth(newWidth);
    }
    if (resizingRight) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 200 && newWidth < 500) setRightSidebarWidth(newWidth);
    }
  }, [resizingLeft, resizingRight]);

  useEffect(() => {
    if (resizingLeft || resizingRight) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopResizing);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resizingLeft, resizingRight, onMouseMove, stopResizing]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
    setSelectedSong(null);
    setSearchQuery('');
  };

  if (currentView === 'signup') return <Signup onSignupSuccess={handleLoginSuccess} onGoHome={() => setCurrentView('home')} onGoToLogin={() => setCurrentView('login')} />;
  if (currentView === 'login') return <Login onLoginSuccess={handleLoginSuccess} onGoHome={() => setCurrentView('home')} onGoToSignup={() => setCurrentView('signup')} />;

  return (
    <div className={`spotify-container ${isMobile ? 'is-mobile' : ''}`}>
      <Header 
        isLoggedIn={isLoggedIn} 
        currentView={currentView} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
        onSignupClick={() => setCurrentView('signup')} 
        onLoginClick={() => setCurrentView('login')}
        onLogout={handleLogout}
        onHomeClick={() => setCurrentView('home')}
        onSearchClick={() => setCurrentView('search')} 
        onNotificationClick={() => {
          setCurrentView(currentView === 'notifications' ? 'home' : 'notifications');
        }}
        onInstallClick={() => setCurrentView('install')}
        onFriendsClick={() => setIsFriendsModalOpen(true)}
      />
      
      <div className="spotify-main">
        {!isMobile && (
          <div className="column-wrapper" style={{ width: `${sidebarWidth}px` }}>
            <Sidebar 
              onArtistsClick={() => setCurrentView('artists')} 
              currentView={currentView} 
              onHomeClick={() => setCurrentView('home')}
              onSearchClick={() => setCurrentView('search')}
            />
          </div>
        )}

        {!isMobile && <div className="resizer" onMouseDown={startResizingLeft} />}

        <div className="main-view-container">
          {/* Đã xóa comment rác ở đây để không bị lỗi syntax */}
          {currentView === 'install' ? (
            <InstallApp /> 
          ) : currentView === 'notifications' ? (
            <Notifications /> 
          ) : currentView === 'search' ? (
            <Browse searchQuery={searchQuery} onSongClick={(song) => setSelectedSong(song)} /> 
          ) : currentView === 'artists' ? (
            <div style={{color: 'white', padding: '20px'}}>Artists View (Đang xây dựng...)</div>
          ) : (
            <MainContent searchQuery={searchQuery} onSongClick={(song) => setSelectedSong(song)} />
          )}
        </div>

        {!isMobile && selectedSong && (
          <>
            <div className="resizer" onMouseDown={startResizingRight} />
            <div className="column-wrapper" style={{ width: `${rightSidebarWidth}px` }}>
              <RightSidebar 
                song={selectedSong} 
                onClose={() => setSelectedSong(null)} 
              />
            </div>
          </>
        )}
      </div>

      <Player currentSong={selectedSong} />

      {isMobile && (
        <div className="mobile-bottom-nav">
          <div className={`nav-item ${currentView === 'home' ? 'active' : ''}`} onClick={() => setCurrentView('home')}>
            <span className="nav-icon">
               <svg role="img" height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>
            </span>
            <span>Home</span>
          </div>
          <div className={`nav-item ${currentView === 'search' ? 'active' : ''}`} onClick={() => setCurrentView('search')}>
            <span className="nav-icon">
               <svg role="img" height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.27893C5.35215 1.27893 1.12366 5.41987 1.12366 10.5579C1.12366 15.6959 5.35215 19.8368 10.533 19.8368C12.8712 19.8368 15.014 18.9886 16.666 17.5925L20.9328 21.8593L21.9935 20.7986L17.7267 16.5318C19.261 14.8624 20.19 12.8021 20.19 10.5579C20.19 5.41987 15.7139 1.27893 10.533 1.27893ZM2.62366 10.5579C2.62366 6.24151 6.13322 2.77893 10.533 2.77893C14.9328 2.77893 18.69 6.24151 18.69 10.5579C18.69 14.8743 14.9328 18.3368 10.533 18.3368C6.13322 18.3368 2.62366 14.8743 2.62366 10.5579Z"></path></svg>
            </span>
            <span>Search</span>
          </div>
        </div>
      )}

      <FriendsModal isOpen={isFriendsModalOpen} onClose={() => setIsFriendsModalOpen(false)} />
    </div>
  );
}

export default App;