// components/LandingPage.jsx
import React from 'react';
import '../components/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Wave effects */}
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      
      {/* Main content */}
      <div className="content">
        <h1>IT Deliberation starts here. For both commercial and personal</h1>
        <button className="get-start-btn">Get Start</button>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">↓</div>
    </div>
  );
};

export default LandingPage;