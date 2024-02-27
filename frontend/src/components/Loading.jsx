// Loading.js
import React from 'react';
import '../Loading.css'; // Import the CSS file

const Loading = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="loader-container">
              <div className="loader"></div>
      </div>
    </div>
  
    </>
  );
};

export default Loading;
