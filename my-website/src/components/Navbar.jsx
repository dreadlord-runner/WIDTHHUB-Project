import React from "react";
import {
  MapPin,
  PhoneCall,
  Mail,
  ChevronDown,
  ArrowUpRight,
  Badge,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full relative z-50">
      {/*-------- TOP BAR--------- */}
      <div className="bg-deepNavy text-white text-[0.875rem] py-3 px-10 hidden md:flex justify-between items-center font-medium">
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-blue-400 space-x-2" />
            <span>No.58 East Madison Road, USA 5004</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneCall size={14} className="text-blue-400 space-x-2" />
            <span>+00 123 456 789</span>
          </div>
        </div>
        <div className="flex space-x-8 items-center">
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-blue-400" />
            <span>sample@mail.com</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>English</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/*------------- Main Navbar----------- */}
      <nav className="flex items-center justify-between px-10 py-5 bg-blue-100">
        {/*----------logo-------- */}
        <div className="flex items-center space-x-2">
          <div className="text-primary animate-[spin_3s_linear_infinite]">
            <Badge size={40} />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-extrabold text-primary leading-none">
              WIDTH<span className="text-accent">HUB</span>
            </div>
            <span className="text-[10px] text-gray-600 font-semigold tracking-wider">
              Consulting Agency
            </span>
          </div>
        </div>

        {/*--------- LINKS---------- */}
        <ul className="hidden lg:flex items-center space-x-8 font-semibold text-primary uppercase">
          <li className="hover:bg-primary hover:text-white text-primary px-5 py-1 rounded-xl flex items-center space-x-1 cursor-pointer">
            <span>Home</span>
            <span>+</span>
          </li>
          <li className="hover:bg-primary hover:text-white text-primary px-5 py-1 rounded-xl flex items-center space-x-1 cursor-pointer">
            <span>About us</span>
          </li>
          <li className="hover:bg-primary hover:text-white text-primary  px-5 py-1 rounded-xl flex items-center space-x-1 cursor-pointer">
            <span>Blog</span>
            <span>+</span>
          </li>
          <li className="hover:bg-primary hover:text-white text-primary  px-5 py-1 rounded-xl flex items-center space-x-1 cursor-pointer">
            <span>Services</span>
            <span>+</span>
          </li>
          <li className="hover:bg-primary hover:text-white text-primary  px-5 py-1 rounded-xl flex items-center space-x-1 cursor-pointer">
            <span>Pages</span>
            <span>+</span>
          </li>
          <li className="hover:bg-primary hover:text-white text-primary  px-5 py-1 rounded-xl flex items-center space-x-1 cursor-pointer">
            <span>Contact us</span>
          </li>
        </ul>

        {/*--------- get started button---------- */}
        <button className="bg-primary text-white pl-6 pr-2 py-2 rounded-2xl font-bold flex items-center space-x-4 hover:bg-opacity-90 transition-all cursor-pointer uppercase border border-blue-400">
          <span className="text-sm">Get Started</span>
          <div className="bg-blue-600 p-2 rounded-xl">
            <ArrowUpRight size={16} className="stroke-4" />
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
