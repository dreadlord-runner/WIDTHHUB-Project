import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { RxSlider } from "react-icons/rx";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How does the HR management platform work?",
      answer:
        "Our platform integrates all your HR needs into one dashboard. From onboarding to payroll processing, it automates daily tasks so your team can focus on strategic growth.",
    },
    {
      question: "2. Can I customize the software to fit my company?",
      answer:
        "Absolutely! We offer modular features allowing you to turn on only the tools you need, and you can custom-brand the employee portal to match your company's identity.",
    },
    {
      question: "3. Is my company's data secure on this platform?",
      answer:
        "We use bank-level 256-bit encryption, strict access controls, and regular third-party security audits to ensure your sensitive employee data is always protected.",
    },
    {
      question: "4. Do you offer customer support and training?",
      answer:
        "Yes, every plan includes 24/7 customer support and a dedicated onboarding specialist to train your team during the first 30 days.",
    },
    {
      question: "5. How long does it take to implement the system?",
      answer:
        "Most of our clients are fully set up and running within 1 to 2 weeks, depending on the size of your organization and the amount of historical data being imported.",
    },
    {
      question: "6. Can I integrate this with my existing payroll?",
      answer:
        "Yes. We have native integrations with major payroll providers like ADP, QuickBooks, and Gusto, plus an open API for custom software connections.",
    },
  ];
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-300 text-blue-600 px-4 pb-0.5 rounded-lg text-sm font-semibold mb-6 bg-blue-100 backdrop-blur-md">
            <RxSlider size={16} className="stroke-1 mt-0.5" />
            <span>Find Your Answers</span>
            <RxSlider size={16} className="stroke-1 mt-0.5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Explore Our HR Service FAQs
          </h2>
        </div>

        {/* --------FAQ Grid---------- */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? "border-blue-500 shadow-md bg-white" : "border-gray-200 bg-gray-50/50 hover:border-blue-300"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`font-bold text-lg pr-4 ${isOpen ? "text-blue-600" : "text-primary"}`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-blue-600 text-white" : "bg-white border border-gray-300 text-gray-500"}`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-500 leading-relaxed animate-[fadeIn_0.3s_ease-in-out]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
