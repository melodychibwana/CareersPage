import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="border-t border-gray-400 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left */}
          <div className="font-bold text-xl">Logo</div>

          {/* Middle Links */}
          <div className="flex space-x-6">
            <div>
              <p className="font-semibold">Company</p>
              <ul className="space-y-1 mt-1">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          {/* Right social */}
          <div>
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-3 text-xl">
              <span>📸</span>
              <span>🐦</span>
              <span>💬</span>
              <span>📩</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 mt-8"></div>
        <p className="text-center mt-4 text-sm">
          © 2025 Precisconsult by Nivea Systems
        </p>
      </div>
    </footer>
  );
};

export default Footer;
