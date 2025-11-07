import React from 'react';

export default function HeaderBrand() {
  return (
    <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-6">
      <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-gray-900 backdrop-blur-xl shadow-sm">
        <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
        <span>Studio Live</span>
      </div>

      <div className="pointer-events-auto hidden items-center gap-3 md:flex">
        <button className="rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-xl transition hover:bg-white">Contact</button>
        <button className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-black">Get Access</button>
      </div>
    </header>
  );
}
