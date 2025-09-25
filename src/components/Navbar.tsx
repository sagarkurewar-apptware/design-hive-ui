'use client'; 

import React, { useState } from 'react';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'Perks', href: '#perks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Partners', href: '#partners' },
    { name: 'Agenda', href: '#agenda' },
  ];

  return (
    // ------------------------------------------------------------------
    // KEY CHANGE: Added 'sticky top-0' to the main nav element.
    // The z-index is also crucial to ensure it stays above other content.
    // ------------------------------------------------------------------
    <nav className="bg-white p-4 text-[#1C1917] sticky top-0 z-50 shadow-lg"> 
      
      {/* --- Main Navigation Row --- */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-xl font-extrabold tracking-wider">DESIGN HIVE 2025</div>
        </div>

        {/* --- Desktop Links & Button (md: and up) --- */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1C1917] hover:text-orange-400 font-medium transition duration-150 ease-in-out"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => console.log('Register Clicked')}
            className="bg-[#E94A49] hover:bg-[#c83a3a] text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-150 ease-in-out"
          >
            Register Now
          </button>
        </div>

        {/* --- Mobile Menu Button (Hamburger/X) --- */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>

      {/* --- Mobile Menu (Top-Toggle Dropdown) --- */}
      {/* Note: The mobile menu needs to be positioned absolute relative to the sticky nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white text-gray-800 shadow-xl overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[300px]' : 'max-h-0' 
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold hover:text-orange-600 w-full pb-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)} 
            >
              {link.name}
            </a>
          ))}
          
          {/* Register Now Button (Mobile) */}
          <button 
            onClick={() => {console.log('Register Clicked'); setIsMenuOpen(false);}}
            className="mt-4 bg-[#E94A49] hover:bg-[#c83a3a] text-white font-bold py-3 px-4 rounded-md w-full shadow-md transition duration-150 ease-in-out"
          >
            Register Now
          </button>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;