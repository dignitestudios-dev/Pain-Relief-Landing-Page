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
      question: "What is a discount medical plan?",
      answer:
        "A discount medical plan (also known as a membership plan) provides access to discounted rates on healthcare services, including those related to pain management. It's not insurance; it's a membership that gives you pre-negotiated discounts with participating providers.",
    },
    {
      question: "How is a discount medical plan different from health insurance?",
      answer:
        "Health insurance covers a portion of your medical costs after you meet deductibles and copayments. A discount medical plan offers discounts on services, but you are responsible for paying the discounted fee directly to the provider. It does not pay for your care.",
    },
    {
      question: "What pain management services are typically discounted?",
      answer:
        "Discounts can vary, but often include services like chiropractic care, physical therapy, acupuncture, massage therapy, pain injections, and other services offered by our network providers.",
    },
    {
      question: "Who is a discount medical plan good for?",
      answer: "These plans can be beneficial for individuals who:",
      liData: [
        { list: "Have high deductibles or limited insurance coverage for pain management therapies." },
        { list: "Need services not covered by their insurance." },
        { list: "Are looking for ways to save money on out-of-pocket expenses." },
        { list: "Do not qualify for or cannot afford traditional health insurance." },
      ],
    },
    {
      question: "Are there any restrictions on using the discounts?",
      answer:
        "Yes, typically you must use providers within the plan's network. Discounts may also vary depending on the specific service. Refer to the Member Guide for further details on discounts and benefits.",
    },
    {
      question: "How much does a discount medical plan cost?",
      answer: `There are multiple options to choose from:\n
**Standard Plan**\n
- Individual: $59/year\n
- Couples: $79/year\n
- Family: $99/year\n
Includes:\n
• Access to network of licensed chiropractor professionals\n
• No limit on use or frequency on all standard services\n
• Flat $50 chiropractor visit includes manipulation, hot/cold pack, electric stimulation, and mechanical massage\n
• 30% discount on other services such as massage therapy, acupuncture, dietary and wellness services\n
• 24/7/365 access to secure web app for scheduling and communication\n
\n
**Premium Plan**\n
- Individual: $12.99/month or $149/year\n
- Couples: $15.99/month or $175/year\n
- Family: $19.99/month or $225/year\n
Includes everything in Standard plus:\n
• Access to Care Navigator for at-home support\n
• Virtual visits, guided exercises, training, and education\n
• Flat $100 chiropractor-led navigation program with personalized care\n
• Secure access to care plan web app`,
    },
    {
      question: "How do I find participating providers in my area?",
      answer:
        'Choose “Provider Search” tab from this web app. Enter your zip code, distance from zip code, and specialty type. You can also search for a specific provider by entering their name or their practice name.',
    },
    {
      question: "Can I use my discount card at any doctor's office?",
      answer:
        "No, you can only use your discount card with providers who are part of the plan's network.",
    },
    {
      question: "Are there limits on how often I can use the discounts?",
      answer:
        "There are no limits. Use as often as you like! You and your immediate family have unlimited access to the services offered by our network providers. Maintenance and well care is always offered during and after treatment.",
    },
    {
      question: "How do I use my discount membership at the doctor's office?",
      answer:
        "Simply log on to the secure web app and schedule an appointment with your preferred provider. Network providers will confirm your appointment via the web app. Present your Membership Card (digital or printed). The provider will apply the discounted rate, and you will pay the discounted fee directly.",
    },
    {
      question: "Are alternative therapies like acupuncture or massage therapy discounted?",
      answer:
        "Yes. All plans include discounts on complementary and alternative medicine (CAM) therapies often used for pain management, including sine wave stimulation, ultrasound, laser therapy, acupuncture, and massage therapy. Members receive 30% discounts on these services.",
    },
    {
      question: "If I have chronic pain, can I use a discount plan long-term?",
      answer:
        "Yes, as long as you maintain your membership, you can typically use the discounts as needed. However, remember it's not a substitute for comprehensive health insurance.",
    },
    {
      question: "Can I use a discount medical plan with my health insurance?",
      answer:
        "No, you cannot combine the discounts from a discount medical plan with your insurance benefits. You can choose to use either your insurance or the discount, whichever provides the greater savings.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="lg:text-[50px] md:text-[35px] text-[35px] font-[600] text-center mb-12">
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
                <p className="xl:text-[16px] text-[12px] text-gray-700 whitespace-pre-line">
                  {item.answer}
                </p>
                {item.liData && (
                  <ul className="list-disc pl-5 pt-2 text-[12px] xl:text-[16px] text-gray-700">
                    {item.liData.map((li, i) => (
                      <li key={i}>{li.list}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
