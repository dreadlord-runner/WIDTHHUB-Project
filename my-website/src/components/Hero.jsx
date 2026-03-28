import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-blue-200 min-h-[70vh] overflow-hidden pt-10">
      <div className="max-w-7xl mx-auto px-10 pb-20 relative">
        {/*----- Left Side 3D Avatars---------*/}
        <div className="hidden lg:block absolute bottom-0 -pb-80 -left-10 w-[45%] max-w-[650px] z-10 pointer-events-none">
          <img
            src="..\images\Home-3-Banner-img-01.png"
            alt="3D Characters"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>

        {/*-------Right Side 3D Hand----------------- */}

        <div className="hidden lg:block absolute top-5 -right-98 w-[60%] max-w-[800px] z-10 pointer-events-none">
          <img
            src="..\images\Home-3-Banner-03.png"
            alt="3D Avatar Hand"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>

        {/*-------- Center text content---------- */}

        <div className="relative z-20 w-full lg:w-[60%] lg:ml-auto lg:mr-12 flex flex-col items-center text-center pt-10">
          <div className="border border-blue-600 text-blue-600 px-4 pb-0.5 rounded-lg flex items-center space-x-2 text-sm font-semibold mb-6 bg-transparent backdrop-blur-md">
            <span>Discover, Engage, Empower</span>
            <RxSlider size={16} className="stroke-1 mt-0.5" />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight capitalize">
            Unlocking Potential, <br /> One Hire At a Time
          </h1>

          <p className="text-[#4a5568] text-lg max-w-md leading-relaxed mb-10">
            Transform your workplace with our innovative HR solutions! Empower
            your team with seamless recruitment, engagement, and developmentlg
            tools.
          </p>

          {/*----------Buttons--------- */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-b from-blue-600 to-blue-900 text-white pl-6 pr-2 py-2 rounded-xl font-bold flex items-center justify-between space-x-4 hover:bg-blue-400 transition-all shadow-lg shadow-blue-600/30 cursor-pointer">
              <span className="text-sm uppercase">Get a quote</span>
              <div className="bg-primary p-2 rounded-lg">
                <ArrowUpRight size={16} className="stroke-5" />
              </div>
            </button>

            <button className="bg-primary text-white pl-6 pr-2 py-2 rounded-xl font-bold flex items-center justify-between space-x-4 hover:bg-opacity-90 transition-all shadow-lg cursor-pointer border border-blue-400">
              <span className="text-sm uppercase">Explore Services</span>
              <div className="bg-blue-600 p-2 rounded-lg">
                <ArrowUpRight size={16} className="stroke-5" />
              </div>
            </button>
          </div>

          {/* ---Sponsored Section--- */}
          <div className="mt-10 w-[500px] overflow-hidden fade-edges">
            <h3 className="text-primary text-2xl font-bold mb-8 text-center">
              Your Trusted Allies In Growth
            </h3>
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-12 md:gap-24 px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-extrabold text-gray-800">
                  GrowTech
                </span>
                <span className="text-2xl font-bold text-gray-800 border-gray-800 pl-2">
                  Millandry
                </span>
                <span className="text-2xl font-serif italic font-bold text-gray-800">
                  Invest
                </span>
                <span className="text-2xl font-black tracking-tighter text-gray-800">
                  DW
                </span>
              </div>

              {/* Duplicate Set For Better Motion */}
              <div className="flex items-center gap-12 md:gap-24 px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-extrabold text-gray-800">
                  GrowTech
                </span>
                <span className="text-2xl font-bold text-gray-800  border-gray-800 pl-2">
                  Millandry
                </span>
                <span className="text-2xl font-serif italic font-bold text-gray-800">
                  Invest
                </span>
                <span className="text-2xl font-black tracking-tighter text-gray-800">
                  DW
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
