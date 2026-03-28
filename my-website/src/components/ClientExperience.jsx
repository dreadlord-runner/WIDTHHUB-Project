import React from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const ClientExperience = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-blue-900 pt-24 overflow-hidden flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-10 w-full mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* -----Left side------- */}
          <div className="space-y-8 text-white">
            <div className="mb-6 flex w-max items-center space-x-2 rounded-lg border border-blue-600 bg-primary px-4 pb-0.5 text-sm font-semibold text-white">
              <span>What they say</span>
              <RxSlider size={16} className="stroke-1 mt-1" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Client Experience
            </h2>

            {/* ------Star Rating------ */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
              "This platform has completely transformed how we handle our
              workforce. The seamless integration, intuitive design, and
              incredible support team make managing our agency a breeze. Highly
              recommended!"
            </p>

            {/* --------Client Info--------- */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-white/10 gap-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-500 rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src="https://i.pravatar.cc/150?img=44"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sarah Jenkins</h4>
                  <p className="text-blue-400 text-sm">HR Director,TechCorp</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white cursor-pointer">
                  <ArrowLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all text-white shadow-lg shadow-blue-600/30 cursor-pointer">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-[80%] m-w-[400px]">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-b from-blue-900 to-blue-400 flex items-center justify-center text-blue-300 backdrop-blur-sm">
                <img
                  src="./images/H3-testimonial-img-1.png"
                  alt="Thumbs Up Gesture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------bottom blue banner------ */}

      <div className="bg-gradient-to-b from-blue-600 to-blue-900 w-full py-8 px-10 flex flex-col md:flex-row items-center justify-between text-white font-bold text-lg lg:text-5xl">
        <div className="flex animate-scroll whitespace-nowrap duration-500">
          <div className="flex-1 text-center md:text-left xl:pl-20">
            Leading Change, Inspiring Growth
          </div>

          <div className="hidden md:flex items-center justify-center px-7 pb-4">
            <div className="w-20 h-10 rounded backdrop-blur-md flex items-center justify-center text-xs font-normal">
              <img
                src="../images/Home-2-amination-text-img-02.png"
                alt="Hand Sign"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-right xl:pr-20 md:mt-0 tracking-wide px-7">
            Empowering People, Elevating Organizations
          </div>

          <div className="hidden md:flex items-center justify-center px-7">
            <div className="w-20 h-10 rounded backdrop-blur-md flex items-center justify-center text-xs font-normal">
              <img
                src="../images/Home-2-amination-text-img-01.png"
                alt="Hand Sign"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-right xl:pr-20 md:mt-0 tracking-wide px-7">
            Together We Rise
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;
