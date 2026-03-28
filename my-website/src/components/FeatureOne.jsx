import React from "react";
import { CheckCircle2 } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const FeatureOne = () => {
  const features = [
    "Affordable Price",
    "Expert Advice & Help",
    "Quick And Effective",
    "Secure Information",
    "24/7 Support Team",
    "Easy To Use System",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 border border-blue-300 text-blue-600 px-4 pb-0.5 rounded-lg text-sm font-semibold mb-6 bg-blue-100 backdrop-blur-md">
              <RxSlider size={15} className="stroke-1 mt-0.5" />
              Empowering Global Success
              <RxSlider size={15} className="stroke-1 mt-0.5" />
            </span>
          </div>

          <h2 className="max-w-5xl text-4xl font-semibold leading-tight text-black md:text-5xl lg:text-[56px]">
            Our Team of experts offer custom <br />
            solution to empower global growth
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 pl-3 pr-3 shadow-sm">
            <button className="-m-1 -ml-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-700 px-12 py-5 font-medium text-white shadow-md transition-all cursor-pointer">
              REMOTE WORKFORCE
            </button>

            <button className="-m-1 -ml-2 rounded-2xl px-12 py-5 font-medium text-blue-700 transition-all cursor-pointer">
              MARKET EXPANSION
            </button>
          </div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="mb-6 flex w-max items-center space-x-2 rounded-lg border border-blue-300 bg-blue-100 px-4 pb-0.5 text-sm font-semibold text-blue-600">
              <span>Dedicated To Your Success</span>
              <RxSlider size={16} className="stroke-1 mt-1" />
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
              Partners In Progress And <br /> Innovation
            </h2>

            <p className="max-w-lg text-lg leading-relaxed text-gray-500">
              We understand the challenges of modern businesses. Our
              comprehensive tools are designed to streamline your workflow and
              empower your team to achieve global growth with innovative
              technology.
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-4 pt-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2
                    className="flex-shrink-0 text-blue-600"
                    size={20}
                  />
                  <span className="font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[620px] justify-center lg:justify-end">
            <div className="pointer-events-none absolute inset-0 overflow-visible">
              <div className="feature-avatar-blob-wrapper absolute right-[-280px] bottom-10 hidden h-[500px] w-[500px] -translate-x-1/2 lg:block">
                <div className="feature-avatar-blob h-full w-full"></div>
              </div>
              <div className="feature-avatar-glow absolute right-[-80px] top-[18%] hidden h-[320px] w-[320px] lg:block"></div>
            </div>

            <div className="relative z-10 w-full max-w-[720px] lg:translate-x-12 xl:translate-x-16">
              <img
                src="../images/Home-3-Filler-img-1.png"
                alt="Working at desk"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
