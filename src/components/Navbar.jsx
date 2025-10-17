import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-blue-900 bg-opacity-95" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-white font-bold text-xl">Logo</div>
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>Home</li>
          <li>Services</li>
          <li>Opportunities</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-white text-blue-900 px-4 py-2 rounded">Login</button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">Sign Up</button>
          <div className="flex items-center text-white cursor-pointer">
            🌐 <span className="ml-1">EN ▼</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
