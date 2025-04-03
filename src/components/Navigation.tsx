
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center items-center">
      {isMobile ? (
        <div className="relative">
          <button 
            onClick={toggleMenu}
            className="backdrop-blur-md bg-white/60 rounded-full p-3 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          
          {menuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 backdrop-blur-md bg-white/90 rounded-xl p-4 shadow-lg min-w-48">
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/profile" 
                    className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/hobbies" 
                    className={`nav-link ${location.pathname === '/hobbies' ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Hobbies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="backdrop-blur-md bg-white/60 rounded-full px-6 py-3 shadow-lg">
          <ul className="flex space-x-4 sm:space-x-8">
            <li>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/hobbies" className={`nav-link ${location.pathname === '/hobbies' ? 'active' : ''}`}>
                Hobbies
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
