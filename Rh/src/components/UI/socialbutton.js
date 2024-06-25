import React from 'react';

const SocialIconsButton = () => {
  const iconStyle = {
    fontSize: '24px', // Adjust icon size
    color: '#333', // Adjust icon color
    marginLeft: '10px', // Adjust spacing between icons
    textDecoration: 'none', // Remove underline from anchor tags
  };

  const containerStyle = {
    position: 'fixed',
    top: '20px', // Adjust as needed
    right: '20px', // Adjust as needed
    zIndex: '1000', // Ensure it's above other content
  };

  return (
    <div style={containerStyle} className="social-icons-button-container">
      <a href="/your-social-link" style={iconStyle}>
        {/* Example with Bootstrap Icons */}
        <i className="bi bi-facebook"></i>
      </a>
      <a href="/your-social-link" style={iconStyle}>
        <i className="bi bi-twitter"></i>
      </a>
      <a href="/your-social-link" style={iconStyle}>
        <i className="bi bi-instagram"></i>
      </a>
      {/* Add more icons as needed */}
    </div>
  );
};

export default SocialIconsButton;
