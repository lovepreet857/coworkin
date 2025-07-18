import React, { useState } from "react";
import Workssvg1 from "../../../public/svg/workssvg1.svg";
import Workssvg2 from "../../../public/svg/workssvg2.svg";
import Askeddata from "../../json/asked.json";
const Asked = ({ Workhaeding, Workparagraph }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="container  pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]">
        <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
          <img className="hidden md:block" src={Workssvg1} alt="Workssvg1" />
          <h1 className="font-Inter font-semibold text-[22px] md:text-10 leading-[130%] text-black-black">
            {Workhaeding}
          </h1>
          <img className="hidden md:block" src={Workssvg2} alt="Workssvg2" />
        </div>

        <p className=" text-sm md:text-[20px] text-dark-grya leading-[130%] font-normal font-Inter text-center  mb-[30px] md:mb-[60px]">
          {Workparagraph}
        </p>
        <div className="pt-5 flex flex-col items-end gap-[30px]  ">
          {Askeddata.map((iteam, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="flex flex-col gap-5  md:p-0" key={index}>
                <div>
                  <div
                    onClick={() => handleClick(index)}
                    className="md:grid grid-cols-2 max-w-[1009px] w-full"
                  >
                    <h5
                      className={`cursor-pointer  max-w-[562px] font-Inter text-[12px] md:text-[20px] leading-[130%] font-medium text-black-black  pb-3 md:pb-5 transition-all ${
                        isOpen? "border-0 pb-0 ": index !== Askeddata.length - 1? "md:border-b delay-300": ""
                      }`}
                    >
                      {iteam.heading}
                    </h5>
                    <img
                      className={`cursor-pointer hidden md:flex justify-self-end transition-all duration-500 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      src={iteam.upsvg}
                      alt=""
                    />
                  </div>
                  <p
                    className={`max-w-[661px] w-full font-normal font-Inter text-[10px] md:text-base leading-[130%] text-dark-grya transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[42px] opacity-100"
                        : "md:max-h-0 md:opacity-0"
                    }`}
                  >
                    {iteam.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Asked;
