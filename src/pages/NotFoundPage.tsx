import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-4 max-w-md">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          404 // NOT FOUND
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white editorial-title">
          Page Not Located
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The requested coordinate or article could not be resolved in this publication.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
