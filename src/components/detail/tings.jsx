import React from "react";
import Tingsdata from "../../json/tingsdata.json";
import HOstdata from "../../json/hostdata.json";
const tings = () => {
  return (
    <>
      <div className="container py-5 sm:pb-[56px] sm:pt-[50px]">
        <h1 className="mb-[30px] font-Inter font-medium text-[22px] leading-[100%]">
          Meet your host
        </h1>
        <div className=" border-b border-dark4-grya md:flex gap-[112px] mb-[50px]">
          <div className="">
            <div className="rounded-[12px] shadow-lg py-[30px] px-10 md:pt-[30px] md:pr-[50px] md:pb-[41px] md:pl-[72px] flex gap-[50px] md:gap-[77px] max-w-[419px] w-full ">
              <div className="flex flex-col items-center">
                <div className="relative max-w-[120px] w-full mb-[10px] ">
                  <img src="public/img/tings_profile.png" alt="" />
                  <img
                    className="absolute bottom-0 right-[4px]"
                    src="public/svg/tings_certificate.svg"
                    alt=""
                  />
                </div>
                <h1 className="font-semibold font-Inter text-[22px] sm:text-[32px] leading-[100%]">
                  Pritpal
                </h1>
                <p className="font-normal font-Inter text-xs leading-[100%] pt-[6px] text-dark-grya">
                  Superhost
                </p>
              </div>
              <div className="flex flex-col gap-[23px] ">
                <div className="border-b pr-[52px]">
                  <h1 className="pb-1 font-Inter font-medium text-[22px] leading-[100%]">
                    10
                  </h1>
                  <p className="text-xs font-medium font-Inter leading-[100%]">
                    Reviews
                  </p>
                </div>
                <div className="border-b pr-[52px]">
                  <h1 className="pb-1 font-Inter font-medium text-[22px] leading-[100%]">
                    10
                  </h1>
                  <p className="text-xs font-medium font-Inter leading-[100%]">
                    Reviews
                  </p>
                </div>
                <div className="border-b pr-[52px]">
                  <h1 className=" pb-1 font-Inter font-medium text-[22px] leading-[100%]">
                    10
                  </h1>
                  <p className="text-xs font-medium font-Inter leading-[100%]">
                    Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] py-5 md:py-[50px]">
              {HOstdata.map((item, index) => (
                <div className="flex gap-[21px] items-center " key={index}>
                  <img src={item.shortsvg} alt="" />
                  <p className="font-medium text-base leading-[150%] font-Inter">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col md:gap-[30px] max-w-[638px] w-full">
            <div className="mb-[22px] md:mb-0">
              <h1 className="pb-[17px] font-medium text-lg font-Inter leading-[150%]">
                Pritpal is a Superhost
              </h1>
              <p className="text-dark-grya leading-[150%] text-base font-Inter font-normal">
                Superhosts are experienced, highly rated host who are committed
                to providing great stay for guests.
              </p>
            </div>
            <div className=" md:border-b border-dark4-grya">
              <h1 className="pb-[17px] font-medium text-lg font-Inter leading-[150%]">
                Host details
              </h1>
              <p className="text-dark-grya leading-[150%] text-base font-Inter font-normal">
                Response rate: 100% <br />
                Response within an hour
              </p>
              <div className="flex justify-center md:justify-start">
                
              <button className="py-4 px-5 bg-Flash-White rounded-[12px] md:mt-[50px] my-[30px] mb-[30px] ">
                Message host
              </button>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-5 md:mb-0">
              <img src="public/svg/tings_removebg.svg" alt="" />
              <p className="text-dark-grya font-normal font-Inter text-xs leading-[100%]">
                To help protect our payment, always use Cowork Mate to send
                money and commnuicate with hosts.
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-Inter font-medium text-[22px] leading-[100%] mb-10">
          Tings to Know
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]  ">
          {Tingsdata.map((section, index) => (
            <div
              key={index}
              className=" flex flex-col gap-[25px] max-w-[280px]  w-full"
            >
              <h3 className="font-Inter font-medium text-base leading-[100%]">
                {section.section}
              </h3>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-base font-normal font-Inter list-none  leading-[100%]"
                >
                  {item}
                </li>
              ))}
              <div className="flex items-end gap-1">
                <p className="mt-2 font-medium text-base leading-[100%] underline cursor-pointer">
                  Show more{" "}
                </p>
                <span>
                  <img src="public/svg/tings_arrow-right.svg" alt="" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default tings;
