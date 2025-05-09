import { useState } from "react";
import { PlusIcon } from "../../../../assets/export";
import { HiOutlineMinus } from "react-icons/hi";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question:
        "Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum el texto de relleno de las Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum el texto de relleno de las Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum el texto de relleno de las Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum el texto de relleno de las Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum el texto de relleno de las Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem Ipsum es simplemente el texto de relleno de las Lorem Ipsum el texto de relleno de las Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="lg:text-[50px] md:text-[35px] text-[35px] font-[600]  text-center mb-12">
        Frequently Asked <span className="text-[#3CBFCE]">Questions</span>
      </h2>

      <div className="space-y-0">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="xl:text-[18px] text-[14px] font-medium text-gray-900">
                {item.question}
              </span>
              <span className="ml-6 flex-shrink-0 text-[12px]">
                {openIndex === index ? (
                  <HiOutlineMinus />
                ) : (
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-[12px] h-[12px]"
                  />
                )}
              </span>
            </button>

            {openIndex === index && (
              <div className="pb-5">
                <p className="xl:text-[16px] text-[12px] text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
