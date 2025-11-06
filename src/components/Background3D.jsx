import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Fullscreen background Spline with scroll-linked rotation
export default function Background3D() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(docHeight - winHeight, 1);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Map scroll progress to subtle rotation values (in degrees)
      const rotX = -5 + progress * 10; // -5deg to 5deg
      const rotZ = progress * 12; // 0deg to 12deg
      const rotY = Math.sin(progress * Math.PI) * 8; // slight sway
      setRotation({ x: rotX, y: rotY, z: rotZ });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transformStyle = {
    transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
    transition: 'transform 0.08s linear',
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 will-change-transform"
        style={transformStyle}
      >
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark gradient overlays to boost contrast; don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
}
