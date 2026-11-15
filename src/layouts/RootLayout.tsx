import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { PlasmaBackground } from '../components/plasma/PlasmaBackground';

export const RootLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* Dynamic Procedural Plasma Motion Background */}
      <PlasmaBackground
        showControls={true}
        intensity="ambient"
        initialPreset="cosmic-purple"
      />

      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
