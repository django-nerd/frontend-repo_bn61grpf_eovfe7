import React from 'react';
import Spline from '@splinetool/react-spline';

// This component renders the right side: a realistic minimal mannequin rotating like a product showcase.
// For optimal interaction and performance, the Spline canvas fills its container.

export default function MannequinShowcase() {
  return (
    <div className="relative h-full w-full">
      <Spline
        scene="https://prod.spline.design/yU1Yqk7F-3d-sample/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Soft rim light overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-1/2 w-1/3 rounded-l-full bg-gradient-to-l from-white/30 to-transparent blur-2xl" />
        <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full" style={{
          background: 'radial-gradient(closest-side, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0))'
        }} />
      </div>
    </div>
  );
}
