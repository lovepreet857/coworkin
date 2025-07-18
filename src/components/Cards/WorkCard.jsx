import React from "react";

const WorkCard = ({ logo, tetel, text }) => {
  return (
      <div className="bg-Flash-White max-w-[410px] h-[223px]  border border-Flash-White2  w-full rounded-[24px] p-5 lg:p-[30px] shadow-sm">
        <img src={logo} alt={logo} />
        <h5 className="lg:pb-4 py-5 lg:pt-[30px] font-Inter font-medium text-base md:text-[24px] leading-[130%]">
          {tetel}
        </h5>
        <p className="text-dark-grya  text-sm lg:text-lg leading-[130%] font-Inter font-medium line-clamp-2">
          {text}
        </p>
      </div>
  );
};

export default WorkCard;
