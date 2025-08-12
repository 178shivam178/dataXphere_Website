import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-6 px-10 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold">
          <img src="/src/assets/favicon-32x32.png" alt="Logo" />
        </span>
        <span className="text-sm">AIOTIC</span>
      </div>

      <div className="flex space-x-10 text-md">
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
