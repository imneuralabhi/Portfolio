import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setTrail(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(followCursor);
    };
    const frame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(frame);
  }, [position]);

  return (
    <>
      <div 
        className="cursor-trail"
        style={{ 
          transform: `translate(${trail.x - 10}px, ${trail.y - 10}px)` 
        }}
      />
      <div 
        className="cursor-dot"
        style={{ 
          left: position.x, 
          top: position.y 
        }}
      />
    </>
  );
};
