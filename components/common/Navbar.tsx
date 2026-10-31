'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  activeNav?: 'buy' | 'rent' | 'sell' | 'saved';
  onNavClick?: (nav: 'buy' | 'rent' | 'sell' | 'saved') => void;
}

export default function Navbar({ activeNav = 'buy', onNavClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: 'buy' | 'rent' | 'sell' | 'saved'; label: string; href: string }> = [
    { id: 'buy', label: 'Buy', href: '#' },
    { id: 'rent', label: 'Rent', href: '#' },
    { id: 'sell', label: 'Sell', href: '#' },
    { id: 'saved', label: 'Saved Homes', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-nordic-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-nordic-dark flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="material-icons text-white text-lg">apartment</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-nordic-dark">
              LuxeEstate
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick?.(item.id)}
                  className={`text-sm font-medium px-1 py-1 transition-all cursor-pointer ${
                    isActive
                      ? 'text-mosque border-b-2 border-mosque'
                      : 'text-nordic-dark/70 hover:text-nordic-dark hover:border-b-2 hover:border-nordic-dark/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              type="button"
              aria-label="Search"
              className="text-nordic-dark hover:text-mosque transition-colors cursor-pointer"
            >
              <span className="material-icons text-xl">search</span>
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="text-nordic-dark hover:text-mosque transition-colors relative cursor-pointer"
            >
              <span className="material-icons text-xl">notifications_none</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-background-light"></span>
            </button>

            <button
              type="button"
              aria-label="User Profile"
              className="flex items-center gap-2 pl-2 border-l border-nordic-dark/10 ml-2 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden ring-2 ring-transparent hover:ring-mosque transition-all relative">
                <Image
                  alt="Profile"
                  width={36}
                  height={36}
                  unoptimized
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAWhQZ663Bd08kmzjbOPmUk4UIxYooNONShMEFXLR-DtmVi6Oz-TiaY77SPwFk7g0OobkeZEOMvt6v29mSOD0Xm2g95WbBG3ZjWXmiABOUwGU0LOySRfVDo-JTXQ0-gtwjWxbmue0qDm91m-zEOEZwAW6iRFB1qC1bAU-wkjxm67Sbztq8w7srHkFT9bVEC86qG-FzhOBTomhAurNRmx9l8Yfqabk328NfdKuVLckgCdaPsNFE3yN65MeoRi05GA_gXIMwG4YDIeA"
                />
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-nordic-dark hover:text-mosque transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-icons text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden border-t border-nordic-dark/5 bg-background-light overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 py-2' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick?.(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'text-mosque bg-mosque/10'
                    : 'text-nordic-dark hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
