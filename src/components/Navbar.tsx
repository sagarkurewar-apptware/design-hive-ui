'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

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
    <nav className="bg-white p-4 text-[#1C1917] sticky top-0 z-50 shadow-lg">

      {/* --- Main Navigation Row --- */}
      <div className="max-w-[980px] mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/designHiveLogo.png"
            alt="Design Hive 2025 Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* --- Desktop Links & Button (md: and up) --- */}
        <div className="hidden md:flex flex-1 justify-between items-center space-x-8">
          <div className="hidden md:flex flex-1 justify-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1C1917] hover:text-[#831843] font-medium transition duration-150 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </div>
     
          <Button className='rounded-none px-8 hover:bg-[#831843] transition duration-150 ease-in-out'>
            Register Now
          </Button>
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
        className={`md:hidden absolute top-full left-0 w-full bg-white text-gray-800 shadow-xl overflow-hidden transition-[max-height] duration-500 ease-in-out ${isMenuOpen ? 'max-h-[300px]' : 'max-h-0'
          }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">

          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold hover:text-[#831843] w-full pb-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Register Now Button (Mobile) */}
          <Button onClick={() => { console.log('Register Clicked'); setIsMenuOpen(false); }} className='w-full rounded-none px-8 hover:bg-[#831843] transition duration-150 ease-in-out'>
            Register Now
          </Button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;