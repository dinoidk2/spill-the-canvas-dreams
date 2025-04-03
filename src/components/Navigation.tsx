
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Determine if we're in static HTML mode
  const isStaticHtml = typeof window !== 'undefined' && window.location.pathname.endsWith('.html');
  
  // Create navigation links based on mode
  const navLinks = [
    { path: isStaticHtml ? './home.html' : '/', label: 'Home' },
    { path: isStaticHtml ? './profile.html' : '/profile', label: 'Profile' },
    { path: isStaticHtml ? './hobbies.html' : '/hobbies', label: 'Hobbies' },
    { path: isStaticHtml ? './gallery.html' : '/gallery', label: 'Gallery' },
    { path: isStaticHtml ? './contact.html' : '/contact', label: 'Contact' }
  ];

  // Helper to determine if link is active
  const isActive = (path: string) => {
    if (isStaticHtml) {
      const currentPage = window.location.pathname.split('/').pop() || '';
      return path.includes(currentPage);
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center items-center">
      {isMobile ? (
        <div className="relative">
          <button 
            onClick={toggleMenu}
            className="backdrop-blur-md bg-white/60 rounded-full p-2 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          
          {menuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 backdrop-blur-md bg-white/90 rounded-xl p-4 shadow-lg min-w-32">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {isStaticHtml ? (
                      <a 
                        href={link.path} 
                        className={`nav-link ${window.location.pathname.endsWith(link.path.split('/').pop() || '') ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.path} 
                        className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="backdrop-blur-md bg-white/60 rounded-full px-6 py-3 shadow-lg">
          <ul className="flex space-x-4 sm:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                {isStaticHtml ? (
                  <a 
                    href={link.path} 
                    className={`nav-link ${window.location.pathname.endsWith(link.path.split('/').pop() || '') ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
