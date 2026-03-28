import React from "react";
import { FileText, PieChart } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const FeatureTwo = () => {
  return (
    <section className="pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* ----Left side content--- */}
        <div className="relative flex justify-center lg:justify-start order-last lg:order-first">
          {/* --------BLOB---------- */}
          <div className="pointer-events-none absolute inset-0 overflow-visible">
            <div className="feature-avatar-blob-wrapper absolute right-[-120px] top-25 hidden h-[500px] w-[500px] -translate-x-1/2 lg:block">
              <div className="feature-avatar-blob h-full w-full"></div>
            </div>
            <div className="feature-avatar-glow absolute right-[-80px] top-[18%] hidden h-[320px] w-[320px] lg:block"></div>
          </div>

          {/* --------avatar------------ */}
          <div className="relative z-10 w-full max-w-[650px]">
            <img
              src="../images/Home-3-Filler-img-2.png"
              alt="Working in chair"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* -------right side---------- */}
        <div className="space-y-8 order-first lg:order-last">
          <div className="mb-6 flex w-max items-center space-x-2 rounded-lg border border-blue-300 bg-blue-100 px-4 pb-0.5 text-sm font-semibold text-blue-600">
            <span>Innovation At Your Fingertips</span>
            <RxSlider size={16} className="stroke-1 mt-1" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Creating Cultures Of <br /> Engagement
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            Foster a workplace environment where employees thrive. Our tools
            help you measure satisfaction, encourage feedback, and build a
            culture that attracts top talent.
          </p>

          {/* -------ICONS--------- */}
          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-all">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                <FileText size={24} />
              </div>
              <h4 className="text-primary font-bold text-lg mb-2">
                Employee well-Being
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Track and improve the mental and physical health of your team
                with our dedicated wellness modules.
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-100 transition-all">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                <PieChart size={24} />
              </div>
              <h4 className="text-primary font-bold text-lg mb-2">
                Diversity and Inclusion
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ensure a fair and equitable workplace with advanced analytics
                that highlight diversity metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
