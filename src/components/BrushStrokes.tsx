
import React from 'react';

const BrushStrokes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left brush stroke */}
      <div className="brush-bg absolute -top-20 -left-20 w-80 h-80 rotate-45 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9B87F5" d="M45.7,-51.9C59.3,-41.5,70.9,-26.9,74.5,-10.1C78.2,6.8,74,25.9,63.3,39.2C52.6,52.6,35.5,60.2,17.8,65.5C0.1,70.8,-18.1,73.9,-32.9,67.1C-47.7,60.4,-59.1,43.8,-66,24.9C-72.9,6,-75.4,-15.1,-68.2,-32C-61,-48.9,-44.1,-61.6,-27,-67.2C-10,-72.8,7.2,-71.4,22.1,-65.3C37,-59.2,49.5,-48.3,45.7,-51.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Bottom right brush stroke */}
      <div className="brush-bg absolute -bottom-20 -right-20 w-96 h-96 -rotate-12 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD166" d="M48.2,-46.1C58.4,-33.3,60.4,-14.2,59.2,4.7C58,23.6,53.6,42.4,41.4,53.7C29.2,65,9.1,68.8,-8.2,65.3C-25.4,61.8,-39.9,51,-51.5,36.3C-63.1,21.7,-71.9,3.1,-69.2,-14.2C-66.5,-31.6,-52.4,-47.6,-36.6,-58.7C-20.8,-69.8,-3.3,-75.9,11.9,-72.7C27,-69.4,38,-58.8,48.2,-46.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Middle right brush stroke */}
      <div className="brush-bg absolute top-1/3 -right-24 w-80 h-80 rotate-45 opacity-15">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6BAED9" d="M56.4,-50.2C70.2,-35.9,77.1,-12.6,72.5,7.1C67.8,26.8,51.6,42.9,33.3,53.2C15,63.5,-5.4,68,-27.3,63.2C-49.1,58.3,-72.4,44.1,-79.6,24.2C-86.9,4.3,-78.1,-21.2,-63.1,-38.2C-48.1,-55.2,-27,-63.7,-3.5,-61C20,-58.3,42.5,-64.5,56.4,-50.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Middle left brush stroke */}
      <div className="brush-bg absolute top-2/3 -left-16 w-64 h-64 -rotate-12 opacity-25">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FEC6D6" d="M41.3,-35.1C52.4,-23.5,60,-7.9,58.4,6.8C56.8,21.5,46,35.3,31.9,44.1C17.8,52.9,0.5,56.7,-18.4,53.3C-37.2,49.9,-57.6,39.3,-65.3,22.6C-73,5.8,-68,-16.9,-56.1,-32.6C-44.2,-48.3,-25.4,-57,-7.7,-51.2C9.9,-45.4,30.2,-46.7,41.3,-35.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default BrushStrokes;
