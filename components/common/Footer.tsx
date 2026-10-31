import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-nordic-dark/10 bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-nordic-dark flex items-center justify-center">
              <span className="material-icons text-white text-base">apartment</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-nordic-dark">
              LuxeEstate
            </span>
            <span className="text-nordic-muted text-xs ml-2">
              © 2026 Luxe Estate Inc. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-nordic-muted">
            <Link href="#" className="hover:text-mosque transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-mosque transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-mosque transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
