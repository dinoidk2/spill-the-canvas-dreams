
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center items-center">
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
    </nav>
  );
};

export default Navigation;
