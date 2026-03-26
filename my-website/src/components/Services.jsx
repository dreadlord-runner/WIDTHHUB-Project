import React from "react";
import {
  CalendarArrowUp,
  ScrollText,
  BarChart3,
  Clock,
  FolderCode,
  Clipboard,
  Briefcase,
} from "lucide-react";

const Services = () => {
  const serviceList = [
    {
      title: "Career Advice",
      desc: "Accumsan ligula tincidunt duis dolor netus urna luctus mauris.",
      icon: <Briefcase size={40} className="text-white" />,
    },
    {
      title: "Job Search Tips",
      desc: "Ridiculus posuere tristique dis sem arcu aenean urna mattis",
      icon: <Clock size={40} className="text-white" />,
    },
    {
      title: "Interview Preparation",
      desc: "Lobortis habitant litora netus elit odio curabitur etiam parturient.",
      icon: <Clipboard size={40} className="text-white" />,
    },
    {
      title: "Professional Growth",
      desc: "Morbi cras nulla lacus tincidunt commodo placerat maximus. ",
      icon: <CalendarArrowUp size={40} className="text-white" />,
    },
    {
      title: "Resume Writing",
      desc: "Cursus mauris vitae fusce posuere curae auctor; finibus pharetra. ",
      icon: <ScrollText size={40} className="text-white" />,
    },
    {
      title: "Skill Development",
      desc: "Velit hac praesent lectus ultricies commodo dignissim vitae.",
      icon: <FolderCode size={40} className="text-white" />,
    },
    {
      title: "Workforce Analytics",
      desc: "Varius quis dignissim ex diam morbi in montes. Interdum nisl cras.",
      icon: <BarChart3 size={40} className="text-white" />,
    },
  ];

  return (
    <section className="py-24 bg-deepNavy text-white">
      <div className="max-w-7xl mx-auto px-10">
        {/*Section Header */}

        <div className="text-center mb-16 space-y-4">
          <div className="border border-blue-400 inline-block bg-[#000924] pr-3 pl-3 pt-0.5 pb-0.5 rounded-lg">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Seamless Onboarding Experience
            </h4>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight ">
              Streaming Hiring, One Click At A Time
            </h2>
          </div>
        </div>

        {/*Services Flex Container */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {serviceList.map((services, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[21%] flex flex-col items-center text-center group"
            >
              <div className="mb-6 w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 border border-blue-400/30">
                {services.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{services.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-62.5">
                {services.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
