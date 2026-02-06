import React, { useState, useEffect, useCallback } from 'react';
import { NavItem } from '../types';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import NHSASTLogo from './NHSASTLogo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Study Guide', path: '/study-guide' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-space-900/90 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <NHSASTLogo size="md" className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 relative group py-2 ${location.pathname === item.path ? 'text-accent-cyan' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-accent-cyan transition-colors z-[60]"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
              <Menu size={24} />
            </span>
            <span className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
              <X size={24} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-space-900 backdrop-blur-xl z-[55] md:hidden transition-transform duration-300 ease-out border-l border-white/10 shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          {/* Close button inside panel */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-xl font-display font-bold py-3 px-4 rounded-xl transition-all duration-200 ${location.pathname === item.path
                  ? 'text-accent-cyan bg-accent-cyan/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-gray-500">
              <Rocket size={18} className="text-accent-cyan" />
              <span className="text-xs">Explore the future of autonomous systems</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;