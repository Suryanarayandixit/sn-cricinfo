'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-pitch-800 border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center">
            <span className="font-display font-bold text-pitch text-sm">SN</span>
          </div>
          <span className="font-display font-bold text-xl text-white">
            SN<span className="text-gold">Cricinfo</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/matches', label: 'Matches' },
            { href: '/ipl', label: 'IPL 2024' },
            { href: '/teams', label: 'Teams' },
            { href: '/stats', label: 'Stats' },
            { href: '/fantasy', label: 'Fantasy' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            <span className="live-dot w-1.5 h-1.5 bg-white rounded-full inline-block" />
            LIVE
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-pitch-700 border-t border-gold/10 px-4 py-3 flex flex-col gap-3">
          {['Home', 'Matches', 'IPL 2024', 'Teams', 'Stats', 'Fantasy'].map(item => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-gold text-sm font-medium">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}