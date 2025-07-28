import React, { useState } from "react";
import Detaildata from "../../json/detaildata.json";
import Detaildata2 from "../../json/detaildata2.json";
import Button from "../ui/Button";
const detailWorkspace = () => {
    const [isSearchLoading, setIsSearchLoading] = useState(false);
  
  return (
    <>
      <div className="container">
        {Detaildata.map((item, index) => (
          <div key={index}>
            <h1 className="hidden md:block font-Inter font-bold text-[26px] leading-[100%] mb-[30px] lg:mb-[60px]">
              {item.titel}
            </h1>
            <div className="md:flex gap-4 lg:gap-[32px] max-w-full">
              <div className="rounded-r-[12px] md:rounded-r-0 overflow-hidden">
                <img src={item.mainimg} alt="" />
                <h1 className=" md:hidden font-Inter font-medium pb-3 pt-[20px] text-[20px] leading-[100%] ">
                  {item.titel}
                </h1>
              </div>
              <div className=" hidden md:grid grid-cols-2 gap-4 lg:gap-[32px]">
                {item.images.map((img, i) => (
                  <img key={i} src={img} alt={`images ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-x-[30px] mt-10">
          <div>
            <h5 className="hidden md:block font-Inter font-medium leading-[100%] text-[22px] pb-2 ">
              Delhi Filed Office,India
            </h5>
            <p className="font-Inter font-normal text-[20px] leading-[150%] text-dark-grya">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="py-[30px] md:mt-[50px] md:border rounded-[12px]  md:mb-10 grid grid-cols-3 md:flex justify-between max-w-[757px] w-full md:px-10">
              <span className="md:hidden flex flex-col items-center gap-2 border-r border-Flash-White2 text-lg leading-[120%] font-Inter font-medium pr-[42px] md:pr-0">
                5.0
                <img src="public/svg/fivestar.svg" alt="" />
              </span>
              <h5 className=" text-center text-lg leading-[120%] font-Inter font-medium md:pr-[50px]">
                Guest <br />
                Favourite
              </h5>
              <p className="font-Inter font-medium text-sm xl:text-base leading-[120%] hidden lg:block ">
                One of the most loved homes on Cowork Mate, according to guests
              </p>
              <span className="hidden md:flex flex-col items-center gap-2 border-r border-Flash-White2 text-lg leading-[120%] font-Inter font-medium pr-[42px] md:pr-[30px]">
                5.0
                <img src="public/svg/fivestar.svg" alt="" />
              </span>
              <span className="flex flex-col items-center gap-2 border-l border-Flash-White2 md:border-l-0  text-lg leading-[120%] font-Inter font-medium pl-[42px] md:pl-[30px] ">
                5.0
                <p className="text-[12px] leading-[120%] text-dark-grya font-Inter font-medium">
                  Reviews
                </p>
              </span>
            </div>
            <div className="flex gap-[18px] py-[18px] pl-5 md:pl-0 md:pb-5 md:pt-0 border-y md:border-t-0 border-dark3-grya md:mb-10">
              <img src="public/svg/detailprofile.svg" alt="" />
              <div className="flex flex-col ">
                <h5 className="font-Inter font-medium text-sm leading-[100%] pb-2">
                  Stay with Rahul
                </h5>
                <p className="font-Inter font-normal text-xs leading-[150%] text-dark-grya">
                  Superhost 2 months hosting
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:pb-10 pb-[43px] pt-6 pl-5 md:p-0 border-b border-dark4-grya">
              {Detaildata2.map((item, index) => (
                <div className="flex items-center gap-[27px] " key={index}>
                  <img src={item.svg} alt="" />
                  <div className="flex flex-col gap-2">
                    <h5 className="font-Inter font-medium text-sm leading-[100%]">
                      {item.text}
                    </h5>
                    <p className="font-Inter font-normal text-sm leading-[150%] text-dark-grya">
                      {item.pragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[39px] p-[30px] hidden md:block  rounded-[12px] h-[366px] shadow-lg">
            <h1 className="mb-[38px] font-Inter font-medium text-[22px] leading-[150%]">
              Add dates for price
            </h1>
            <div className="rounded-[12px] border border-dark2-grya">
              <div className="grid grid-cols-2 border-b border-dark2-grya">

                 <div className="py-[18px] pl-[16px] max-w-[174px] border-r border-dark2-grya">
                   <h5 className="text-[10px] font-Inter font-medium leading-[150%] pb-[3px]">CHECK-IN</h5>
                   <h5 className="text-sm font-Inter font-medium leading-[150%]">Add date</h5>
                 </div>
                  <div className="py-[18px] pl-[16px] w-[174px]">
                   <h5 className="text-[10px] font-Inter font-medium leading-[150%] pb-[3px]">CHECK-IN</h5>
                   <h5 className="text-sm font-Inter font-medium leading-[150%]">Add date</h5>
                 </div>
              </div>
              <div>
                 <div className="py-[18px] pl-[16px] flex justify-between items-center pr-[26px] ">
                  <div>

                   <h5 className="text-[10px] font-Inter font-medium leading-[150%] pb-[3px]">CHECK-IN</h5>
                   <h5 className="text-sm font-Inter font-medium leading-[150%]">Add date</h5>
                  </div>
                  <img src="public/svg/detail_arrow-down-2.svg" alt="" />
                 </div>
              </div>
            </div>

            <Button
              size="custom2"
              className="max-w-[316px] w-full m-auto mt-[30px]"
              loading={isSearchLoading}
               onClick={() => {
                setIsSearchLoading(true);
                setTimeout(() => {
                  setIsSearchLoading(false);
                  navigate("/login");
                }, 2000);
              }}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default detailWorkspace;
