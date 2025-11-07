import React from 'react';
import { User, Lock } from 'lucide-react';

export default function LoginPanel() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-md rounded-2xl border border-white/50 bg-white/60 p-8 backdrop-blur-xl shadow-xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Welcome back</h1>
        <p className="mt-1 text-sm text-gray-500">Sign in to continue your session</p>
      </div>

      <form className="space-y-4">
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
            <User size={18} />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-gray-200 bg-white/80 py-3 pl-10 pr-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Lock size={18} />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-200 bg-white/80 py-3 pl-10 pr-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Sign in
        </button>

        <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-700">Forgot password?</a>
          <a href="#" className="hover:text-gray-700">Create account</a>
        </div>
      </form>
    </div>
  );
}
