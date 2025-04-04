
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <nav className="nav-container mx-auto max-w-6xl px-4">
        <div className="backdrop-blur-md bg-white/70 rounded-full shadow-lg px-8 py-3 flex justify-center">
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `nav-link font-dancing text-2xl ${isActive ? 'active text-impression-purple' : 'text-gray-800 hover:text-impression-purple'}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  `nav-link font-dancing text-2xl ${isActive ? 'active text-impression-purple' : 'text-gray-800 hover:text-impression-purple'}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/hobbies" 
                className={({ isActive }) => 
                  `nav-link font-dancing text-2xl ${isActive ? 'active text-impression-purple' : 'text-gray-800 hover:text-impression-purple'}`
                }
              >
                Hobbies
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `nav-link font-dancing text-2xl ${isActive ? 'active text-impression-purple' : 'text-gray-800 hover:text-impression-purple'}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
