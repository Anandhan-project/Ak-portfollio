import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-3xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/30">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-5xl font-extrabold text-white mb-2 font-mono">404</h1>
      <h2 className="text-2xl font-bold text-slate-200 mb-4">Signal Lost in Deep Space</h2>
      <p className="text-slate-400 max-w-md mb-8">
        The coordinate you are navigating to does not exist or has been shifted in hyperspace.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Portfolio Home</span>
      </Link>
    </div>
  );
};
