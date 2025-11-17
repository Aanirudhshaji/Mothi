import { FiChevronRight } from "react-icons/fi";

export default function FAQ() {
  const faqs = [
    {
      question: "What architectural styles do you specialize in?",
    },
    {
      question: "What is the typical timeline for completing a residential project?",
    },
    {
      question: "How much does an architectural design project cost?",
    },
    {
      question:
        "Do you provide both architectural and interior design services?",
    },
    {
      question: "How involved will I be in the design process?",
    },
  ];

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
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">
                  {faq.question}
                </span>

                <FiChevronRight className="text-2xl text-gray-500 group-hover:text-black transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
