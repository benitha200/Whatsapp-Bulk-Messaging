import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Updated navigation links for WhatsApp messaging platform
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/templates", label: "Templates" },
    { to: "/api", label: "API" },
    { to: "/contact", label: "Contact" }
  ];
  
  return (
    <header className="bg-emerald-950 shadow-lg fixed w-full z-10 border-b border-emerald-800/30 backdrop-blur-sm">
      <div className="w-full mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold text-white tracking-tight">
              <span className="text-emerald-400">Whats</span>Bulk
            </span>
          </Link>
          <button
            className="md:hidden bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-white font-medium hover:text-emerald-400 transition-colors ${link.to === currentPage ? "text-emerald-400" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Auth buttons */}
          <div className="flex items-center space-x-3 pl-6 border-l border-emerald-800">
            <Link
              to="/login"
              className="text-white hover:text-emerald-300 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-emerald-900/20"
            >
              Sign Up Free
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 py-2 bg-emerald-900/95 backdrop-blur-sm border border-emerald-800/50 rounded-md shadow-lg">
            <div className="flex flex-col space-y-1 px-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`text-white hover:text-emerald-400 transition-colors py-3 px-2 ${
                    link.to === currentPage ? "text-emerald-400 font-medium bg-emerald-800/30 rounded-md" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-emerald-800/50 my-2 pt-2 space-y-2">
                <Link
                  to="/login"
                  className="block text-white hover:text-emerald-400 transition-colors py-3 px-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-2 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up Free
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;