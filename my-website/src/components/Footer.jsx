import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/*Brand and Bio*/}
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              WIDTH<span className="text-accent">HUB</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Leading the way in modern HR solutions. We help businesses
              streamline their workflow and empower their workforce through
              innovative technology.
            </p>
            <div className="flex space-x-4">
              <FaFacebook
                size={20}
                className="text-gray-400 hover:text-accent cursor-pointer transition-colors"
              />
              <FaInstagram
                size={20}
                className="text-gray-400 hover:text-accent cursor-pointer transition-colors"
              />
              <FaXTwitter
                size={20}
                className="text-gray-400 hover:text-accent cursor-pointer transition-colors"
              />
              <FaLinkedin
                size={20}
                className="text-gray-400 hover:text-accent cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Get In touch with Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3 hover:text-accent cursor-pointer">
                <Mail size={18} />
                <span>support@widthhub.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-accent cursor-pointer">
                <PhoneCall size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} />{" "}
                <span>No.58 East Madison Road, USA 5004</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Impact
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Values
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Resources
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Videos
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Information</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Press Releases
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Mission & Vision
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                HR Policies
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Employee Portal
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Health & Safety
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Employee Benefits
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Recruitement</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Help Desk
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                IT Support
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Campus Recruitment
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Job Openings
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Application Process
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Internship Programs
              </li>
            </ul>
          </div>
        </div>

        {/*Bottom Bar*/}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 WidthHub. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
