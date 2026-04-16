import React from 'react';
import './Signup.css';

const Signup = ({ onSignupSuccess, onGoHome, onGoToLogin }) => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        
        <div className="logo-container" onClick={onGoHome} title="Back to home">
          <svg viewBox="0 0 24 24" className="spotify-logo-only" fill="white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.381 4.26-1.26 11.28-1.02 15.72 1.621.54.3.781.96.481 1.5-.3.541-.96.721-1.68.42z"/>
          </svg>
        </div>

        <h1 className="signup-title">Sign up to<br />start listening</h1>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" placeholder="name@domain.com" />
        </div>

        <button className="next-btn" onClick={onSignupSuccess}>Next</button>

        <div className="divider-container">
          <span className="line"></span><span className="or-text">or</span><span className="line"></span>
        </div>

        <button className="social-btn">
          <svg viewBox="0 0 24 24" className="social-icon">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </button>

        <button className="social-btn">
          <svg viewBox="0 0 24 24" className="social-icon" fill="white">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.58-.8 1.58.02 2.81.65 3.61 1.77-3.01 1.83-2.52 6.04.5 7.23-.71 1.63-1.74 3.12-2.77 3.97zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.37-2.12 4.27-3.74 4.25z"/>
          </svg>
          Sign up with Apple
        </button>

        <div className="login-prompt">
          Already have an account? <span className="login-link" onClick={onGoToLogin}>Log in</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;