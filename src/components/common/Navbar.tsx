import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Code2, Download } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { personalInfo } from '../../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-lg shadow-black/20 border-b border-purple-500/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono text-slate-100 group-hover:text-purple-300 transition-colors">
              {personalInfo.name}
              <span className="text-purple-400 animate-pulse">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-white/10 dark:border-white/10 border-slate-200">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={isHome ? item.href : `/${item.href}`}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white transition-colors rounded-full hover:bg-white/5 relative group"
              >
                {item.name}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Resume / Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-purple-300 hover:border-purple-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg glass-card text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg glass-card text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-purple-500/20 px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={isHome ? item.href : `/${item.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm shadow-md shadow-purple-600/25"
              >
                Contact Anandhan
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl glass-card text-slate-300 font-medium text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-purple-400" />
                Resume & Profile
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
