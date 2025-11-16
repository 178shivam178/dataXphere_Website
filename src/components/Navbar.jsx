import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { }
  };

  // Close mobile menu on route/hash change
  useEffect(() => { setMenuOpen(false); }, [location.pathname, location.hash]);

  return (
    <nav className="text-white sticky top-0 z-50 shadow bg-gradient-to-b from-[#0a1630] via-[#0d1f3a] to-[#0b1730]">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            aria-label="DataXSphere home"
            className="flex items-center gap-2 group"
            onClick={() => { scrollToTop(); setMenuOpen(false); }}
          >
            <img
              src={logo}
              alt="DataXSphere logo"
              className="block h-10 sm:h-12 w-auto object-contain"
              decoding="async"
              loading="eager"
              style={{ height: 40, width: "auto" }}
            />
            {/* <span className="text-sm font-semibold tracking-wide leading-none hidden sm:inline">DataXSphere</span> */}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-blue-400" onClick={scrollToTop}>Home</Link>
            <a href="/#solution" className="hover:text-blue-400">Solutions</a>
            <a href="/#success" className="hover:text-blue-400">Success Stories</a>
            <a href="/#insight" className="hover:text-blue-400">Insights</a>

            <div className="relative">
              <button
                className="hover:text-blue-400 inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={companyOpen}
                onClick={() => setCompanyOpen(v => !v)}
              >
                COMPANY
                <span aria-hidden>▼</span>
              </button>
              {/* Dropdown */}
              <div
                className={`${companyOpen ? "block" : "hidden"} absolute right-0 mt-2 w-48 rounded-md bg-[#0d1f3a] text-gray-100 shadow-lg ring-1 ring-white/10`}
                role="menu"
                onMouseLeave={() => setCompanyOpen(false)}
              >
                <a href="/#about" className="block px-3 py-2 text-sm hover:bg-white/10" role="menuitem">About Us</a>
                <a href="/#careers" className="block px-3 py-2 text-sm hover:bg-white/10" role="menuitem">Careers</a>
                <Link to="/contact" className="block px-3 py-2 text-sm hover:bg-white/10" role="menuitem" onClick={() => setCompanyOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-controls="primary-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="sr-only">Open menu</span>
            {/* Simple hamburger */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="primary-menu" className={`${menuOpen ? "block" : "hidden"} md:hidden border-top border-white/10`} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="px-4 py-3 space-y-2 text-sm">
          <Link to="/" className="block py-1 hover:text-blue-400" onClick={() => { scrollToTop(); setMenuOpen(false); }}>Home</Link>
          <a href="/#solution" className="block py-1 hover:text-blue-400">Solutions</a>
          <a href="/#success" className="block py-1 hover:text-blue-400">Success Stories</a>
          <a href="/#insight" className="block py-1 hover:text-blue-400">Insights</a>

          <details className="group">
            <summary className="cursor-pointer py-1 list-none flex items-center justify-between">
              <span>COMPANY</span>
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="pl-3 pt-1 space-y-1">
              <a href="/#about" className="block py-1 hover:text-white">About Us</a>
              <a href="/#careers" className="block py-1 hover:text-white">Careers</a>
              <Link to="/contact" className="block py-1 hover:text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
