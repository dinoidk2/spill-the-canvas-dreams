
import React, { useEffect, useState } from 'react';

const CursorTrail: React.FC = () => {
  const [positions, setPositions] = useState<{id: number, x: number, y: number, color: string}[]>([]);
  const [mainCursor, setMainCursor] = useState({ visible: false, x: 0, y: 0 });
  const colors = ['#9B87F5', '#FFD166', '#6BAED9', '#7ECBA1', '#FEC6D6', '#FFA07A'];

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      // Update main cursor
      setMainCursor({
        visible: true,
        x: e.clientX,
        y: e.clientY
      });

      // Add a new position to the trail on mouse click
      if (e.buttons === 1) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setPositions(prev => [...prev, {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          color: randomColor
        }]);
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
  }, [positions]);

  // Remove trails after animation
  useEffect(() => {
    const clearTrails = setInterval(() => {
      setPositions(prev => {
        if (prev.length > 0) {
          const [, ...rest] = prev;
          return rest;
        }
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(clearTrails);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ 
          opacity: mainCursor.visible ? 1 : 0,
          left: mainCursor.x, 
          top: mainCursor.y
        }}
      />
      {positions.map(pos => (
        <div
          key={pos.id}
          className="cursor-trail"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundColor: pos.color
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
