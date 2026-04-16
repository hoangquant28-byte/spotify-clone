import React, { useState } from 'react';
import './Header.css';
import logoSpotify from '../../assets/logo.jpg'; 

const Header = ({ 
  isLoggedIn, 
  currentView, 
  searchQuery, 
  setSearchQuery, 
  onSignupClick, 
  onLoginClick, 
  onLogout, 
  onHomeClick, 
  onSearchClick, 
  onNotificationClick,
  onInstallClick, 
  onFriendsClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = () => {
    setIsMenuOpen(false);
    onLogout();
  };

  return (
    <div className="header">
      
      {/* --- CỘT TRÁI: LOGO --- */}
      <div className="header-left">
        <img 
          src={logoSpotify} 
          alt="Spotify" 
          className="spotify-icon" 
          onClick={onHomeClick} 
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* --- CỘT GIỮA: HOME & SEARCH --- */}
      <div className="header-center">
        
        <div 
          className={`home-button ${currentView === 'home' ? 'active' : ''}`} 
          onClick={onHomeClick}
        >
          <svg viewBox="0 0 24 24" className="svg-icon" fill={currentView === 'home' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>

        <div className="search-container">
          <svg viewBox="0 0 24 24" className="svg-icon search-icon" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input 
            type="text" 
            placeholder="What do you want to play?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSearchClick();
              }
            }}
          />

          {searchQuery && (
            <svg 
              viewBox="0 0 24 24" 
              className="svg-icon clear-icon" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              onClick={() => setSearchQuery("")} 
              style={{ cursor: 'pointer', marginRight: '8px' }}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}

          <div className="divider"></div>
          
          <svg 
            viewBox="0 0 24 24" 
            className={`svg-icon box-icon ${currentView === 'search' ? 'active' : ''}`} 
            fill={currentView === 'search' ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2"
            onClick={onSearchClick} 
            style={{ cursor: 'pointer' }}
          >
            <path d="M4 8v11a2 2 0 002 2h12a2 2 0 002-2V8M2 4h20v4H2z"></path>
            <circle cx="12" cy="15" r="1.5"></circle>
          </svg>
        </div>
      </div>

      {/* --- CỘT PHẢI: ACTIONS & PROFILE --- */}
      <div className="header-right">
        <div className="install-app" onClick={onInstallClick} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" className="svg-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Install App
        </div>
        
        {isLoggedIn ? (
          <div className="logged-in-group">
            <div className="header-icons">
              <span className={`icon-badge ${currentView === 'notifications' ? 'active' : ''}`} onClick={onNotificationClick}>
                <svg viewBox="0 0 24 24" className="svg-icon" fill={currentView === 'notifications' ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </span>

              <span className="icon-badge" onClick={onFriendsClick}>
                <svg viewBox="0 0 24 24" className="svg-icon" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
            </div>
            
            <div className="profile-wrapper">
              <div className="profile-avatar" onClick={handleAvatarClick} style={{ cursor: 'pointer' }}>
                <img src="https://picsum.photos/32?random=10" alt="Profile" />
              </div>

              {isMenuOpen && (
                <div className="profile-dropdown">
                  <ul>
                    <li>
                      <span>Account</span> 
                      <svg className="external-icon" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v10h10V9H14v4.75a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                        <path d="M9.5 2V3.5h2.44L4.47 10.97l1.06 1.06L13 4.56v2.44H14.5V2H9.5z"></path>
                      </svg>
                    </li>
                    <li><span>Profile</span></li>
                    <li><span>Settings</span></li>
                    <div className="dropdown-divider"></div>
                    <li onClick={handleLogoutClick}><span>Log out</span></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="signup-btn" onClick={onSignupClick}>Sign up</button>
            <button className="login-btn" onClick={onLoginClick}>Log in</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Header;