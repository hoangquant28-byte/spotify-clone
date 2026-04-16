import React from 'react';
import './BlurredCloseButton.css'; // Chúng ta sẽ tạo file CSS này ở Bước 2

const BlurredCloseButton = ({ onClick }) => {
  return (
    <button className="blurred-close-button" onClick={onClick} title="Close filters">
      {/* SVG dấu X sắc nét từ chuẩn Spotify */}
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.72 3.28a.75.75 0 0 0-1.06 0L8 6.94 4.34 3.28a.75.75 0 0 0-1.06 1.06L6.94 8l-3.66 3.66a.75.75 0 0 0 1.06 1.06L8 9.06l3.66 3.66a.75.75 0 0 0 1.06-1.06L9.06 8l3.66-3.66a.75.75 0 0 0 0-1.06z"></path>
      </svg>
    </button>
  );
};

export default BlurredCloseButton;