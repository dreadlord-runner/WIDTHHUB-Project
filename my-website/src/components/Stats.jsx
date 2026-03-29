import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const Stats = () => {
  const statData = [
    {
      title: "Benefits Manager",
      info: "29 Open positions",
      image: "../images/Hrhub-carrer-img1-alt.png",
      imageAlt: "Benefits Manager",
    },
    {
      title: "Recruitment",
      info: "24 Open positions",
      image: "../images/Hrhub-carrer-img-alt.png",
      imageAlt: "Recruitment",
    },
    {
      title: "HR Compliance",
      info: "10 Open positions",
      image: "../images/Hrhub-carrer-img1-alt.png",
      imageAlt: "HR Compliance",
    },
    {
      title: "Payroll Specialist",
      info: "20 Open positions",
      image: "../images/Hrhub-carrer-img2-alt.png",
      imageAlt: "Payroll Specialist",
    },
    {
      title: "Sourcing HR",
      info: "40 Open positions",
      image: "../images/Hrhub-carrer-img4-alt.png",
      imageAlt: "Sourcing HR",
    },
    {
      title: "Talent Acquisition",
      info: "73 Open positions",
      image: "../images/Hrhub-carrer-img5-alt.png",
      imageAlt: "Talent Acquisition",
    },
  ];

  return (
    <section className="border-b border-[#d8e6f8] bg-[#edf5ff] py-16 lg:py-20">
      <div className="mx-auto max-w-[1840px] px-6 sm:px-10 lg:px-12">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-3 rounded-lg border border-[#93c5fd] bg-[#ddecff] px-4 pb-0.5 text-sm font-semibold text-[#2563eb]">
              <span>Dream Big, Achieve Bigger</span>
              <RxSlider className="stroke-1 mt-1" />
            </span>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-[3rem] lg:leading-[1.08]">
              Find Your Passion, Fuel Your Success
            </h1>
          </div>

          <button className="flex w-fit items-center justify-between gap-4 self-start rounded-2xl border border-[#3b82f6] bg-gradient-to-b from-[#2f7bff] to-[#2348c5] py-1 pl-6 pr-1 text-white cursor-pointer">
            <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
              View Jobs
            </span>
            <span className="rounded-2xl bg-[#071a57] p-3 sm:p-3.5">
              <ArrowUpRight size={22} className="stroke-[3]" />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {statData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 rounded-[2rem] border border-[#d7e4f5] bg-white p-5 shadow-[0_14px_30px_rgba(148,163,184,0.08)] sm:p-6"
            >
              <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-[#bed7ff] to-[#98bbff]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-[0.25em] text-[#4f7ddd]">
                    PNG
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h2 className="text-xl font-semibold tracking-tight text-black">
                  {item.title}
                </h2>
                <p className="mt-2 text-[#0f172a]">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
