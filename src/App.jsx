import React from 'react';
import GradientLeft from './components/GradientLeft';
import LoginPanel from './components/LoginPanel';
import MannequinShowcase from './components/MannequinShowcase';
import HeaderBrand from './components/HeaderBrand';

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-gray-900">
      <HeaderBrand />
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
        {/* LEFT: clean gradient surface reserved for login */}
        <section className="relative flex items-center justify-center p-6 md:p-10">
          <GradientLeft />
          <div className="relative z-10 w-full max-w-lg">
            <LoginPanel />
          </div>
        </section>

        {/* RIGHT: mannequin rotating product showcase */}
        <section className="relative hidden md:block">
          <MannequinShowcase />

          {/* Soft vignette and shadow for depth without blocking pointer events */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent" />
        </section>
      </div>
    </div>
  );
}
