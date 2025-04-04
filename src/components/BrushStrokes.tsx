
import React from 'react';

const BrushStrokes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Top right brush stroke */}
      <div className="absolute top-14 right-[10%] w-64 h-20 transform -rotate-12">
        <svg 
          viewBox="0 0 200 50" 
          className="w-full h-full opacity-5"
          aria-hidden="true"
        >
          <path d="M10,25 Q50,5 100,25 T190,25" 
                stroke="#9B87F5" 
                strokeWidth="12" 
                fill="none" 
                strokeLinecap="round" 
                className="animate-brush-rotate" />
        </svg>
      </div>
      
      {/* Bottom left brush stroke */}
      <div className="absolute bottom-24 left-[5%] w-72 h-24 transform rotate-6">
        <svg 
          viewBox="0 0 240 60" 
          className="w-full h-full opacity-5"
          aria-hidden="true"
        >
          <path d="M20,30 Q60,10 120,40 T220,20" 
                stroke="#FFD166" 
                strokeWidth="16" 
                fill="none" 
                strokeLinecap="round" 
                className="animate-brush-rotate" />
        </svg>
      </div>
      
      {/* Middle right brush stroke */}
      <div className="absolute top-1/3 right-[8%] w-48 h-16 transform -rotate-20">
        <svg 
          viewBox="0 0 180 40" 
          className="w-full h-full opacity-5"
          aria-hidden="true"
        >
          <path d="M10,20 Q45,35 90,15 T170,20" 
                stroke="#6BAED9" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round" 
                className="animate-brush-rotate" />
        </svg>
      </div>
      
      {/* Middle left short brush stroke */}
      <div className="absolute top-2/3 left-[12%] w-32 h-12 transform rotate-15">
        <svg 
          viewBox="0 0 120 30" 
          className="w-full h-full opacity-5"
          aria-hidden="true"
        >
          <path d="M5,15 Q30,5 60,20 T115,10" 
                stroke="#FEC6D6" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round" 
                className="animate-brush-rotate" />
        </svg>
      </div>
    </div>
  );
};

export default BrushStrokes;
