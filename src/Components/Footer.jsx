import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* Column 1: Company Info */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">Company Name</h3>
            <p>
              Your company tagline or a short description can go here.
            </p>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Social Media */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright Section */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
