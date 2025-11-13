import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-300 border-top border-white/10" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h2 className="text-white font-semibold text-lg">DataXphere</h2>
            <p className="text-sm text-gray-400">Turning data into decisions.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold">Company</h3>
            <nav className="flex flex-col gap-1 text-sm">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/careers" className="hover:text-white">Careers</Link>
              <a href="#blog" className="hover:text-white">Blog</a>
            </nav>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold">Resources</h3>
            <nav className="flex flex-col gap-1 text-sm">
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold">Get in touch</h3>
            <p className="text-sm text-gray-400">hello@DataXphere.com</p>
            <p className="text-sm text-gray-400">New Delhi, India</p>
          </div>
        </div>

        <div className="mt-8 pt-6 text-xs text-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p>© {year} DataXphere. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
