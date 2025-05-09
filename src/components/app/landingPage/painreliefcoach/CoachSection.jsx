import React from "react";
import {
  Access,
  CarePlan,
  MultilingualApp,
  VideoExercise,
  VirtualVisits,
  VisionTechnology,
} from "../../../../assets/export";
import Button from "../Inputs/Button";

const CoachSection = () => {
  const programList = [
    "Injury prevention and recovery – designed to assist a variety of professions to mitigate workplace related injuries, physical risk, and recovery if injured",
    "Pain Management – specific protocol for over 15 body areas supporting muscular and joint pain recovery designed to reduce acute and chronic pain, improve physical function – all with the goal of eliminating pain!",
    "Rehabilitation and Education - Focused on recovery post-injury or surgery, including knee, hip, and back rehabilitation, ensuring safe and effective healing processes. Designed to empower and educate members on outcomes, expectations, and preparation both pre and post surgery.",
  ];
  const CardProfessionalCare = [
    {
      title: "One-on-One Virtual Visits",
      img: VirtualVisits,
    },
    {
      title: "Personalized Care Plans",
      img: CarePlan,
    },
    {
      title: "Video Guided Exercises",
      img: VideoExercise,
    },
    {
      title: "Multilingual App",
      img: MultilingualApp,
    },
    {
      title: "Computer Vision Technology",
      img: VisionTechnology,
    },
    {
      title: "24-7-365 Access",
      img: Access,
    },
  ];

  return (
    <div className="xl:w-[80%] lg:w-[90%] w-[90%] mx-auto space-y-6 mt-10 my-10">
      <h2 className="xl:text-[50px] lg:text-[35px] md:text-[25px] text-[22px] font-[600]">
        Certified Health{" "}
        <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
          Coach
        </span>
      </h2>

      <p className="lg:text-[18px] text-[16px]  text-[#212121]">
        What is a Certified Health Coach? Our certified health coaches are
        credentialed professionals trained to help guide you in identifying and
        implementing lifestyle changes and support programs to assist you in
        your journey to live a pain free life. They can assist you in wellness
        and diet recommendations as well as register you in our at-home exercise
        support program.
      </p>

      <p className="lg:text-[18px] text-[16px]  text-[#212121]">
        Not all network providers are registered as Pain Relief Coaches.
        Registration requires additional training and support programs. Premium
        plan members can easily schedule an appointment with a Pain Relief Coach
        via our appointment scheduling app who will then assist you to set up a
        care pathway designed for your personal needs.
      </p>

      <h2 className="xl:text-[50px] lg:text-[35px] md:text-[25px] text-[22px] font-[600]">
        Care Pathway{" "}
        <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
          Platform
        </span>
      </h2>

      <p className="lg:text-[18px] text-[16px]  text-[#212121]">
        This is a virtual support program accessible across multiple platforms,
        including smartphones, tablets, and desktop computers, delivering
        convenient access anytime and anywhere. Members have unlimited access to
        comprehensive programs that deliver personalized exercise, clinical
        support and guidance, education and well-being. Programs include:
      </p>

      <ul className="list-disc pl-5 space-y-2 ">
        {programList.map((item, index) => (
          <li
            key={index}
            className="lg:text-[18px] text-[16px]  text-[#212121]"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 className="xl:text-[50px] lg:text-[35px] md:text-[25px] text-[22px] font-[600]">
        Technology Combined with{" "}
        <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
          Professional Care
        </span>
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 justify-center ">
        {CardProfessionalCare.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 h-[350px] flex flex-col justify-center items-center rounded-[8px] text-center"
          >
            <img
              src={item.img}
              className="h-[170px] w-[255px] object-contain"
              alt=""
            />
            <h2 className="text-[20px] font-[600] text-[#212121] mt-4">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
        <div className=" flex justify-center">
        <div className="xl:w-[249px] lg:w-[200px] md:w-[150px]  w-[160px]  my-10 ">
          <Button text={"Get Started Now"} />
        </div>

        </div>
    </div>
  );
};

export default CoachSection;
