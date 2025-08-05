import React from "react";

const myboocking = () => {
  return (
    <>
      <div className=" mt-10 md:mt-[50px]">
        <h1 className="font-semibold font-Inter text-[22px] leading-[130%] pb-5 md:pb-[22px]">
          My Booking
        </h1>
        <div className="grid grid-cols-4 md:flex gap-0 md:gap-[60px] pt-5 md:pl-6  bg-white-white md:bg-Flash-White rounded-t-[12px] max-w-[869px] w-full  md:border-b border-dark-black pb-3 sm:pb-[22px]">
          <h1 className=" font-medium font-Inter text-xs md:text-[20px] leading-[130%]  md:pr-[64px]">
            Workspace Name
          </h1>
          <h1 className=" font-medium font-Inter text-xs md:text-[20px] leading-[130%] pr-[14px] md:p-0">
            Date/time
          </h1>
          <h1 className=" font-medium font-Inter text-xs md:text-[20px] leading-[130%] pr-4 md:p-0">
            Location
          </h1>
          <h1 className=" font-medium font-Inter text-xs md:text-[20px] leading-[130%]">
            Status
          </h1>
        </div>
        <div className="bg-Flash-White rounded-[12px] md:rounded-t-[0px] ">
          <div className="grid grid-cols-5 md:flex justify-between items-center p-[10px] md:pl-6 md:pr-[164px] ">
            <img src="public/svg/myprofile_svg.svg" alt="" />

            <div className="pl-[9px] md:pl-[14px] md:pr-[60px]">
              <h1 className="font-Inter font-medium text-[10px] sm:text-[20px] leading-[130%]">
                CowerKly
              </h1>
              <p className="text-dark-grya leading-[130%] text-[10px] sm:text-base font-Inter font-normal pt-2 md:pt-3">
                Mumbai
              </p>
            </div>
            <div className="pl-[10px] md:pr-[45px]">
              <h1 className="font-Inter font-medium  text-[10px] sm:text-lg leading-[130%]">
                25 Jun.
              </h1>
              <h1 className="font-Inter font-medium pt-2 md:pt-3 text-[10px] sm:text-lg leading-[130%]">
                9:00 AM
              </h1>
            </div>
            <div className="">
              <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] md:pr-[74px]">
                Mumbai
              </h1>
            </div>
            <div>
              <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] text-natural-blue">
                Confirmed
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default myboocking;
