import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home,User,Layers,FolderGit2,Briefcase,Mail,Sun,Moon,Menu,X} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { personalInfo } from '../../data/portfolioData';

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', name: 'Home', href: '#hero', icon: Home },
  { id: 'about', name: 'About', href: '#about', icon: User },
  { id: 'skills', name: 'Skills', href: '#skills', icon: Layers },
  { id: 'projects', name: 'Projects', href: '#projects', icon: FolderGit2 },
  { id: 'experience', name: 'Experience', href: '#experience', icon: Briefcase },
  { id: 'contact', name: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const islandRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === '/';
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
        setMobileDrawerOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0, 0.2, 0.5]
    };

    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    let observer: IntersectionObserver | null = null;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      sectionElements.forEach((el) => observer?.observe(el));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return (
    <>
      <div 
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
        className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-800/40 z-50 pointer-events-none"
      >
        <div 
          className="h-full bg-zinc-200 dark:bg-zinc-100 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel py-3 shadow-lg shadow-black/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-1 focus:ring-zinc-400 rounded-lg p-1"
            aria-label="Return to portfolio home"
          >
            <div className="flex flex-col">
              <span className="text-[30px]  text-zinc-600 uppercase tracking-wider">
                Portfolio
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-400">{personalInfo.availability}</span>
          </div>

          <div className="flex items-center gap-2.5">:)
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-400"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-800" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-all shadow-sm color:black"
            >
              <span>Get in Touch</span>
            </a>
            <button
              onClick={() => setMobileDrawerOpen((prev) => !prev)}
              aria-label={mobileDrawerOpen ? "Close menu" : "Open navigation menu"}
              className="p-2 rounded-full md:hidden border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {mobileDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/*Fixed Left-Center for Desktop */}
      <aside
        ref={islandRef}
        aria-label="Primary Navigation Dock"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center dynamic-island rounded-[28px] py-3.5 px-2.5 transition-[width,padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExpanded ? 'w-[190px]' : 'w-[58px]'
        }`}
      >
        <nav className="w-full flex flex-col gap-1.5" aria-label="Dynamic Island Navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.name}
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative flex items-center rounded-2xl transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 ${
                  isExpanded ? 'px-3 py-2 gap-3 justify-start' : 'p-2 justify-center'
                } ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-md font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] dark:hover:bg-white/[0.08]'
                }`}
              >
                {/* Icon */}
                <Icon 
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? 'text-zinc-950 dark:text-zinc-900' : 'text-current'
                  }`} 
                />

                <span
                  className={`text-xs tracking-tight whitespace-nowrap transition-all duration-200 ${
                    isExpanded 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 w-0 overflow-hidden -translate-x-1'
                  }`}
                >
                  {item.name}
                </span>

                {isActive && !isExpanded && (
                  <span className="absolute right-1 w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-900" />
                )}
              </a>
            );
          })}
        </nav>

        {/* <div className="w-full mt-3 pt-2.5 border-t border-zinc-800/60 dark:border-white/10 flex items-center justify-center">
          <button
            onClick={toggleTheme}
            aria-label={`Toggle theme: currently ${theme}`}
            className="w-full flex items-center justify-center gap-2 p-1.5 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-zinc-800 shrink-0" />
            )}
            <span
              className={`text-[11px] font-mono text-zinc-400 whitespace-nowrap transition-all duration-200 ${
                isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
              }`}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div> */}
      </aside>

      <nav
        aria-label="Mobile Bottom Island"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-1 px-3 py-2 rounded-full dynamic-island shadow-2xl"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={isHome ? item.href : `/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-label={item.name}
              className={`relative p-2.5 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {isActive && (
                <span className="sr-only">({item.name} - current section)</span>
              )}
            </a>
          );
        })}
      </nav>

      {mobileDrawerOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 md:hidden bg-zinc-950/90 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col justify-between p-6 pt-24"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              Navigation Menu
            </span>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 dark:bg-white dark:text-zinc-900'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5 text-current" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
              <span>{personalInfo.availability}</span>
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme in drawer"
              className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
