import React from 'react';

export default function GradientLeft() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient surface reserved for login UI */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#eef2ff] to-[#f4f7ff]" />

      {/* Subtle lavender/soft blue accents */}
      <div
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(147, 197, 253, 0.35), rgba(147, 197, 253, 0))',
        }}
      />
      <div
        className="absolute -right-16 bottom-16 h-96 w-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(196, 181, 253, 0.35), rgba(196, 181, 253, 0))',
        }}
      />

      {/* Soft glossy sweep */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0) 100%)',
        }}
      />
    </div>
  );
}
