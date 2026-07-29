import React from 'react';

export default function BackgroundParticles() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Cyan Ambient Glow Blob */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Purple Ambient Glow Blob */}
      <div
        style={{
          position: 'absolute',
          top: '55%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
}
