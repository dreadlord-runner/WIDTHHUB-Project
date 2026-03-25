import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary min-h-[90vh] flex items-center px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content*/}
        <div className="text-white space-y-6">
          <h4 className="text-accent font-bold tracking-widest capitalize text-sm">
            Discover, Engage, Empower
          </h4>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight capitalize">
            Unlocking Potential, <br /> One Hire At a Time
          </h1>
          <p className="text-gray-300 text-lg max-w-lg">
            Transform your workplace with our innovative HR solutions! Empower
            your team with seamless recruitment, engagement, and development
            tools.
          </p>
          <div className="flex space-x-4">
            <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 cursor-pointer">
              Get a Quote
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 cursor-pointer">
              Explore Services
            </button>
          </div>
        </div>

        {/*Simple Decorative*/}
        <div className="hidden md:flex justify-end">
          <div className="w-96 h-96 bg-accent rounded-2xl border-2 border-accent/30 flex items-center justify-center">
            <div className="w-86 h-80 bg-white/50 rounded-2xl -rotate-6 border border-white/10 shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
