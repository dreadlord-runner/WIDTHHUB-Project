import React from "react";
import {
  CalendarArrowUp,
  ScrollText,
  BarChart3,
  LampDesk,
  Clock,
  FolderCode,
  Clipboard,
} from "lucide-react";

const Services = () => {
  const serviceList = [
    {
      title: "Career Advice",
      desc: "Accumsan ligula tincidunt duis dolor netus urna luctus mauris.",
      icon: <LampDesk size={40} className="text-white" />,
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
          <div className="border border-blue-400 inline-block bg-blue-950 pr-3 pl-3 pt-0.5 pb-0.5 rounded-lg">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">
              Seamless Onboarding Experience
            </h4>
          </div>
          <h2 className="text-4xl font-extrabold text-white">
            Streaming Hiring, One Click At A Time
          </h2>
        </div>

        {/*Serices Grid */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {serviceList.map((services, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-blue-500 rounded-xl inline-block">
                {services.icon}
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {services.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{services.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
