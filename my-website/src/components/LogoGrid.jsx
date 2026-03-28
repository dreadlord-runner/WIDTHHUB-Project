import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const LogoGrid = () => {
  const partners = [
    "Campana",
    "Asana",
    "Slack",
    "Spotify",
    "Figma",
    "Netflix",
    "THINK",
    "Meta",
    "Stripe",
    "Zoom",
    "Patreon",
    "Python",
    "Airtable",
    "Discord",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#eaf4ff] overflow-hidden">
      <div className="max-w-5xl mx-auto px-10 flex flex-col items-center">
        <div className="mb-6 flex w-max items-center space-x-2 rounded-lg border border-blue-300 bg-blue-100 px-4 pb-0.5 text-sm font-semibold text-blue-600">
          <RxSlider size={16} className="stroke-1 mt-0.5" />
          <span>Together, We Achieve More</span>
          <RxSlider size={16} className="stroke-1 mt-0.5" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-16 text-center">
          Collaboration For Excellence <br /> Partners In Every Endeavor
        </h2>

        {/*-----------LOGOS------------ */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white px-8 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center font-bold text-gray-500 border border-white min-w-[200px] cursor-pointer"
            >
              <img
                src={`../images/${partner.toLowerCase()}.png`}
                alt={partner}
                className="h-15 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <button className="bg-gradient-to-b from-blue-600 to-blue-900 text-white p-2 pl-6 rounded-2xl font-bold flex items-center space-x-4 hover:bg-opacity-90 transition-all cursor-pointer uppercase">
          <span className="text-sm">Lets Collaborate</span>
          <div className="bg-primary p-4 rounded-xl">
            <ArrowUpRight size={16} className="stroke-4" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default LogoGrid;
