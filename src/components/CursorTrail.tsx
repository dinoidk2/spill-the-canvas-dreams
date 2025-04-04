
import React, { useEffect, useState } from 'react';

const CursorTrail: React.FC = () => {
  const [positions, setPositions] = useState<{id: number, x: number, y: number, color: string}[]>([]);
  const [mainCursor, setMainCursor] = useState({ visible: false, x: 0, y: 0 });
  const colors = ['#9B87F5', '#FFD166', '#6BAED9', '#7ECBA1', '#FEC6D6', '#FFA07A'];
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0, time: Date.now() });
  
  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      // Get scroll position
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate absolute position considering scroll
      const cursorX = e.clientX + scrollX;
      const cursorY = e.clientY + scrollY;
      
      // Update main cursor position
      setMainCursor({
        visible: true,
        x: e.clientX,
        y: e.clientY
      });
      
      const now = Date.now();
      
      // Always add trail dots when mouse moves
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      if (
        Math.abs(cursorX - lastPosition.x) > 5 || 
        Math.abs(cursorY - lastPosition.y) > 5 ||
        now - lastPosition.time > 40
      ) {
        setPositions(prev => [...prev, {
          id: now,
          x: cursorX,
          y: cursorY,
          color: randomColor
        }]);
        
        setLastPosition({ x: cursorX, y: cursorY, time: now });
      }
    };

    const mouseLeaveHandler = () => {
      setMainCursor(prev => ({ ...prev, visible: false }));
    };

    const mouseEnterHandler = () => {
      setMainCursor(prev => ({ ...prev, visible: true }));
    };
    
    const clickHandler = (e: MouseEvent) => {
      // Create a burst effect on click
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      const clickX = e.clientX + scrollX;
      const clickY = e.clientY + scrollY;
      
      // Generate multiple dots in a circle pattern
      const burstCount = 12; // Number of particles in the burst
      const radius = 40; // Radius of the burst
      
      const newDots = [];
      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2;
        const distance = Math.random() * radius;
        const dotX = clickX + Math.cos(angle) * distance;
        const dotY = clickY + Math.sin(angle) * distance;
        
        newDots.push({
          id: Date.now() + i,
          x: dotX,
          y: dotY,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setPositions(prev => [...prev, ...newDots]);
    };

    // Clean up trails after a certain number
    if (positions.length > 50) {
      setPositions(positions.slice(positions.length - 50));
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    document.body.addEventListener('mouseleave', mouseLeaveHandler);
    document.body.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.body.removeEventListener('mouseleave', mouseLeaveHandler);
      document.body.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('click', clickHandler);
    };
  }, [positions, lastPosition]);

  // Remove trails after animation
  useEffect(() => {
    const clearTrails = setInterval(() => {
      setPositions(prev => {
        if (prev.length > 30) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 50);

    return () => {
      clearInterval(clearTrails);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot fixed z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" 
        style={{ 
          opacity: mainCursor.visible ? 1 : 0,
          left: mainCursor.x, 
          top: mainCursor.y
        }}
      />
      {positions.map(pos => (
        <div
          key={pos.id}
          className="cursor-trail absolute z-[9998] pointer-events-none"
          style={{
            left: pos.x - 7.5,
            top: pos.y - 7.5,
            backgroundColor: pos.color
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
