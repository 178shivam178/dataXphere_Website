import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-2 px-10 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold">
          <img src="/src/assets/logo1.png" alt="Logo" height='50' width={'50'} className="rounded-full object-cover" />
        </span>
        <span className="text-sm">DataXSphere</span>
      </div>

      <div className="flex space-x-10 text-md">
        <Link to="/" className="hover:text-blue-400">
          HOME
        </Link>
        <a href="#" className="hover:text-blue-400">
          DATABRICKS PARTNERSHIP
        </a>
        <a href="#" className="hover:text-blue-400">
          AI SUCCESS STORIES
        </a>
        <a href="#" className="hover:text-blue-400">
          BLOG
        </a>
        <div className="relative group">
          <button className="hover:text-white-400">COMPANY ▼</button>
          <div className="hidden absolute group-hover:block z-10 bg-white text-gray-700 hover:text-blue-500 px-2 w-full">
            <a href="#" className="line-clamp-1 text-sm py-2">
              About Us
            </a>
            <a href="#" className="line-clamp-1 text-sm py-2">
              Careers
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
