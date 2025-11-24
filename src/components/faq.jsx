import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What architectural styles do you specialize in?",
      answer:
        "We specialize in contemporary, minimalist, traditional, and modern luxury designs. Our approach is flexible and tailored to your lifestyle and preferences.",
    },
    {
      question:
        "What is the typical timeline for completing a residential project?",
      answer:
        "Most residential projects take between 3 to 12 months, depending on complexity. Concept design takes a few weeks, with additional time for drawings, approvals, and construction.",
    },
    {
      question: "How much does an architectural design project cost?",
      answer:
        "Costs vary depending on project size and scope. We provide custom quotes that cover concept design, drawings, 3D visuals, and supervision based on the selected package.",
    },
    {
      question: "Do you provide both architectural and interior design services?",
      answer:
        "Yes, we offer complete architectural and interior design services, ensuring seamless coordination between exterior and interior elements.",
    },
    {
      question: "How involved will I be in the design process?",
      answer:
        "We follow a collaborative approach where your involvement is encouraged in concept discussions, design reviews, and material selections. You stay updated without feeling overwhelmed.",
    },
  ];

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#FAF7ED] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE — TITLE */}
        <div>
          <h2 className="text-[36px] md:text-[48px] font-semibold text-black">
            FAQ
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-md leading-relaxed">
            Here are the answers to the most frequently asked questions.
          </p>
        </div>

        {/* RIGHT SIDE — FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">
                  {faq.question}
                </span>

                <FiChevronRight
                  className={`text-2xl text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90 text-black" : "group-hover:text-black"
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
