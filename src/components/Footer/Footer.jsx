import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="spotify-footer">
      {/* =========================================
         1. LOGO PHÍA TRÊN
         ========================================= */}
      <div className="footer-logo">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.223.367-.704.484-1.07.262-2.822-1.723-6.375-2.114-10.562-1.157-.42.096-.84-.165-.935-.584-.095-.419.165-.84.584-.935 4.587-1.049 8.52-.596 11.66 1.32.368.225.484.706.263 1.072zm1.472-3.255c-.28.456-.879.604-1.335.324-3.23-1.986-8.155-2.564-11.974-1.405-.514.156-1.064-.132-1.22-.646-.156-.514.132-1.064.646-1.22 4.364-1.324 9.79-.675 13.559 1.643.456.28.604.88.324 1.334zm.135-3.374C15.228 8.443 8.783 8.228 5.018 9.37c-.596.18-1.23-.153-1.41-.749-.18-.596.153-1.23.749-1.41 4.314-1.31 11.436-1.062 16.035 1.668.536.318.714 1.008.396 1.544-.318.536-1.008.714-1.544.396z"></path>
        </svg>
        <span className="logo-text">Spotify</span>
      </div>

      {/* =========================================
         2. CÁC CỘT LIÊN KẾT & MẠNG XÃ HỘI
         ========================================= */}
      <div className="footer-top">
        <div className="footer-links-columns">
          {/* Cột 1 */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div className="footer-column">
            <h3>Communities</h3>
            <ul>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="footer-column">
            <h3>Useful links</h3>
            <ul>
              <li>Support</li>
              <li>Free Mobile App</li>
              <li>Popular by Country</li>
              <li>Import your music</li>
            </ul>
          </div>

          {/* Cột 4 */}
          <div className="footer-column">
            <h3>Spotify Plans</h3>
            <ul>
              <li>Premium Individual</li>
              <li>Premium Student</li>
              <li>Spotify Free</li>
            </ul>
          </div>
        </div>

        {/* Khối Social Icons */}
        <div className="footer-socials">
          <div className="social-icon" title="Instagram">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="social-icon" title="Twitter">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="social-icon" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* =========================================
         3. PHẦN PHÁP LÝ & BẢN QUYỀN
         ========================================= */}
      <div className="footer-bottom">
        <div className="legal-links">
          <span>Legal</span>
          <span>Safety & Privacy Center</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
          <span>About Ads</span>
          <span>Accessibility</span>
        </div>
        <div className="copyright">
          © 2026 Spotify AB
        </div>
      </div>
    </footer>
  );
};

export default Footer;