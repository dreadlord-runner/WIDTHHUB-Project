import React from "react";

const Navbar = () => {
  return (
    <nav className="top-0 z-50 flex items-center justify-between bg-softGray px-10 py-5 shadow-md">
      <div className="text-2xl font-bold text-primary cursor-pointer">
        WIDTH<span className="text-accent">HUB</span>
      </div>

      <ul className="hidden md:flex space-x-8 font-semibold text-primary">
        <li className="cursor-pointer hover:text-accent">Home</li>
        <li className="cursor-pointer hover:text-accent">About Us</li>
        <li className="cursor-pointer hover:text-accent">Blog</li>
        <li className="cursor-pointer hover:text-accent">Services</li>
        <li className="cursor-pointer hover:text-accent">Pages</li>
        <li className="cursor-pointer hover:text-accent">Contact Us</li>
      </ul>

      <button className="rounded-full bg-primary px-6 py-2 font-bold text-white transition-all hover:opacity-90 cursor-pointer">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
