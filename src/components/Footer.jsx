import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/2">
          <img src="/src/assets/logo1.png" alt="Logo" height='50' width={'50'} />
          <p className="text-md  font-semibold italic">
            At DataXSphere, we’ve been at the forefront of AI solutions since
            2018—pioneering <br /> advancements five years ahead in terms of team
            expertise and solution excellence.
          </p>
          <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
            Privacy Policy
          </a>
        </div>

        {/* Right Section (Solutions, Resources, Aidetic) */}
        <div className="md:w-1/2 flex flex-col sm:flex-row justify-between gap-8">
          {/* Solutions */}
          <div>
            <h4 className="font-bold text-2xl mb-2">Solutions</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Gen AI</li>
              <li>Computer Vision</li>
              <li>NLP</li>
              <li>Data Engineering</li>
              <li>Machine Learning</li>
              <li>Big Data Solutions</li>
              <li>MLOps</li>
              <li>Business Intelligence</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-2xl mb-2">Resources</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Success Stories</li>
              <li>Blogs</li>
              <li>Databricks Expertise</li>
            </ul>
          </div>

          {/* DataXSphere */}
          <div>
            <h4 className="font-bold text-2xl mb-2">DataXSphere</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Our Journey</li>
              <li>Hiring</li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6">
        <p className="text-xs text-gray-400">
          © 2025 dataxsphere. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-blue-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {null}
    </footer>
  );
};

export default Footer;
