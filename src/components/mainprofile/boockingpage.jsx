import React, { useState, useRef, useEffect } from "react";

const BookingTabs = () => {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const tabRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const tabs = ["Upcoming", "Past", "Cancelled"];

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setStep(index + 1); // step will be 1, 2, 3
  };

  return (
    <>
      <h1 className="font-semibold font-Inter text-[22px] leading-[130%] pb-[30px] md:pb-[41px] mt-5 md:mt-[60px] ">
        My Booking
      </h1>

      {/* Tabs */}
      <div className="relative border-b border-dark-grya">
        <div className="flex gap-[50px] relative">
          {tabs.map((tab, index) => (
            <h1
              key={tab}
              ref={(el) => (tabRefs.current[tab] = el)}
              onClick={() => handleTabClick(tab, index)}
              className={`cursor-pointer pb-3 text-[16px] font-medium transition-all duration-300 ${
                activeTab === tab ? "text-natural-orange" : ""
              }`}
            >
              {tab}
            </h1>
          ))}

          {/* Animated bottom border indicator */}
          <div
            className="absolute bottom-0 h-[2px] bg-natural-orange transition-all duration-300"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          ></div>
        </div>
      </div>

      {/* Table Headings */}
      <div className="grid grid-cols-4 md:flex gap-0 md:gap-[60px] max-w-[869px] w-full pt-[30px] md:pt-[42px] pb-3 md:pb-10 ">
        <h1 className="font-medium font-Inter text-xs md:text-[20px] leading-[130%] md:pr-[64px]">
          Workspace Name
        </h1>
        <h1 className="font-medium font-Inter text-xs md:text-[20px] leading-[130%] pr-[14px] md:p-0">
          Date/time
        </h1>
        <h1 className="font-medium font-Inter text-xs md:text-[20px] leading-[130%] pr-4 md:p-0">
          Location
        </h1>
        <h1 className="font-medium font-Inter text-xs md:text-[20px] leading-[130%]">
          Status
        </h1>
      </div>

      {/* Step 1: Upcoming */}
      {step === 1 && (
        <div>

      <div className="bg-Flash-White rounded-t-[12px]  ">
        <div className="grid grid-cols-6 md:flex justify-between items-center p-[10px] md:pl-6 md:pr-[30px] ">
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
          <div className="mr-[33px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] ">
              Mumbai
            </h1>
          </div>
          <div>
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] text-natural-blue">
              Confirmed
            </h1>
          </div>
          <div className="w-[24px]">
            <img src="public/svg/browser_arrow-right-2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-Flash-White border-t border-dark6-grya ">
        <div className="grid grid-cols-6 md:flex justify-between items-center p-[10px] md:pl-6 md:pr-[30px] ">
          <img src="public/svg/myprofile_svg.svg" alt="" />

          <div className="pl-[9px] md:pl-[14px] md:pr-[60px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-[20px] leading-[130%]">
              WorkNest
            </h1>
            <p className="text-dark-grya leading-[130%] text-[10px] sm:text-base font-Inter font-normal pt-2 md:pt-3">
              Delhi
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
          <div className="mr-[37px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] ">
              Bangalore
            </h1>
          </div>
          <div>
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] text-natural-blue">
              Confirmed
            </h1>
          </div>
          <div className="w-[24px]">
            <img src="public/svg/browser_arrow-right-2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-Flash-White border-t rounded-b-[12px] border-dark6-grya ">
        <div className="grid grid-cols-6 gap-5 md:flex justify-between items-center p-[10px] md:pl-6 md:pr-[30px] ">
          <img src="public/svg/myprofile_svg.svg" alt="" />

          <div className="pl-[9px] md:pl-[14px] md:pr-[60px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-[20px] leading-[130%]">
              NovaDesk
            </h1>
            <p className="text-dark-grya leading-[130%] text-[10px] sm:text-base font-Inter font-normal pt-2 md:pt-3">
              Hyderabad
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
          <div className="mr-[27px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] ">
              Hyderabad
            </h1>
          </div>
          <div>
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] text-natural-blue">
              Confirmed
            </h1>
          </div>
          <div className="w-[24px]">
            <img src="public/svg/browser_arrow-right-2.svg" alt="" />
          </div>
        </div>
      </div>
      </div>
      )}

      {/* Step 2: Past */}
      {step === 2 && (
         <div className="bg-Flash-White rounded-t-[12px]  ">
        <div className="grid grid-cols-6 md:flex justify-between items-center p-[10px] md:pl-6 md:pr-[30px] ">
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
          <div className="mr-[33px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] ">
              Mumbai
            </h1>
          </div>
          <div>
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] text-green-600">
              successfull
            </h1>
          </div>
          <div className="w-[24px]">
            <img src="public/svg/browser_arrow-right-2.svg" alt="" />
          </div>
        </div>
      </div>
      )}

      {/* Step 3: Cancelled */}
      {step === 3 && (
               <div className="bg-Flash-White rounded-t-[12px]  ">
        <div className="grid grid-cols-6 md:flex justify-between items-center p-[10px] md:pl-6 md:pr-[30px] ">
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
          <div className="mr-[33px]">
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] ">
              Mumbai
            </h1>
          </div>
          <div>
            <h1 className="font-Inter font-medium text-[10px] sm:text-lg leading-[130%] text-red-500">
              cancel
            </h1>
          </div>
          <div className="w-[24px]">
            <img src="public/svg/browser_arrow-right-2.svg" alt="" />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default BookingTabs;
