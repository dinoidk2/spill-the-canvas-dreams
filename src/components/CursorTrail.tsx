
import React, { useEffect, useState } from 'react';

const CursorTrail: React.FC = () => {
  const [positions, setPositions] = useState<{id: number, x: number, y: number, color: string}[]>([]);
  const [mainCursor, setMainCursor] = useState({ visible: false, x: 0, y: 0 });
  const colors = ['#9B87F5', '#FFD166', '#6BAED9', '#7ECBA1', '#FEC6D6', '#FFA07A'];
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0, time: Date.now() });
  
  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      // Update main cursor
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      
      const cursorX = e.clientX + scrollX;
      const cursorY = e.clientY + scrollY;
      
      setMainCursor({
        visible: true,
        x: e.clientX,
        y: e.clientY
      });
      
      const now = Date.now();
      
      // Only add trail dots if the cursor has moved enough or enough time has passed
      if (
        Math.abs(cursorX - lastPosition.x) > 10 || 
        Math.abs(cursorY - lastPosition.y) > 10 ||
        now - lastPosition.time > 100
      ) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
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

    // Clean up trails after a certain number
    if (positions.length > 50) {
      setPositions(positions.slice(positions.length - 50));
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    document.body.addEventListener('mouseleave', mouseLeaveHandler);
    document.body.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.body.removeEventListener('mouseleave', mouseLeaveHandler);
      document.body.removeEventListener('mouseenter', mouseEnterHandler);
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
