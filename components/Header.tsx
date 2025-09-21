import React, { useState } from 'react';
import { View } from '../types';

// Using lucide-react icon names for mapping
const iconMap: { [key in View]?: string } = {
  [View.Chat]: 'MessageSquare',
  [View.Booking]: 'Calendar',
  [View.Resources]: 'BookOpen',
  [View.PeerSupport]: 'Users',
  [View.Dashboard]: 'LayoutDashboard',
};

// SVG definitions for icons to avoid full library dependency
const LucideIcons = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <g id="MessageSquare">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </g>
      <g id="Calendar">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
      </g>
      <g id="BookOpen">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </g>
      <g id="Users">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </g>
      <g id="LayoutDashboard">
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
      </g>
      <g id="Menu">
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </g>
      <g id="X">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </g>
    </defs>
  </svg>
);

const NavIcon = ({ viewName }: { viewName: View }) => {
  const iconId = iconMap[viewName];
  if (!iconId) return null;
  return (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <use href={`#${iconId}`} />
    </svg>
  );
};

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems: View[] = [View.Chat, View.Booking, View.Resources, View.PeerSupport, View.Dashboard];

  const handleNavClick = (view: View) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <LucideIcons />
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick(View.Landing)}
                className="font-bold text-xl text-primary transition-opacity hover:opacity-80"
                aria-label="Go to homepage"
                type="button"
              >
                MindWell
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeView === item
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <NavIcon viewName={item} />
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <use href={isMobileMenuOpen ? '#X' : '#Menu'} />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeView === item
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <NavIcon viewName={item} />
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
