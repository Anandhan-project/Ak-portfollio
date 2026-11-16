import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { AmbientBackground } from '../components/common/AmbientBackground';

export const RootLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5] dark:bg-[#09090b] dark:text-[#f4f4f5] selection:bg-zinc-800 selection:text-white transition-colors duration-300">
      {/* Subtle Minimal Ambient Background */}
      <AmbientBackground />

      {/* Floating Dynamic Island Navigation & Top Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 md:pl-12 lg:pl-0 pb-16">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};
