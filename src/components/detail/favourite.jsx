import React from "react";
import Favourite from "../../json/favourite.json"
const favourite = () => {
  return (
    <>
      <div className="container pt-5 md:pt-[50px]">
       
        <div className="flex justify-center mb-[85px] md:mb-0  items-center">
          <div className="">
            <div className="flex gap-3 justify-center  items-center ">
              <img src="public/svg/favouriteleftsvg.svg" alt="" />
              <h1 className="font-semibold font-Inter leading-[100%] py-2 md:py-0 text-[52px] md:text-[96px]">
                5.0
              </h1>
              <img src="public/svg/favouriterightsvg.svg" alt="" />
            </div>
            <div className=" text-center max-w-[415px] w-full mt-5 md:mt-[30px] ">
              <h5 className="font-Inter text-base md:text-[22px] font-medium leading-[100%]  pb-[10px] md:pb-3">
                Guest favourite
              </h5>
              <p className="font-Inter font-normal leading-[150%] sm:leading-[130%] text-xs sm:text-[22px] text-dark-grya">
                This home is a guest favourite based on rating, reviews and
                religibility
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex mt-[70px] pb-[50px] border-0 lg:border-b border-dark3-grya">

            <div className="  max-w-[190px] h-[140px] w-full">
              <div className="pr-3 w-full">
                <p className="leading-[100%] font-normal font-Inter text-sm">Overall rating</p>
                <div className="flex gap-[6px] items-center mt-[5px] mb-[10px]">
              <p className="leading-[100%] font-medium font-Inter text-xs">5</p>
                <span className="w-full h-[4px] bg-black flex rounded-[11px]"></span>
                </div>
                 <div className="flex gap-[6px] items-center mt-[5px]">
              <p className="leading-[100%] font-medium font-Inter text-xs">4</p>
                <span className=" w-full h-[4px] bg-dark5-grya flex rounded-[11px]"></span>
                </div>
                  <div className="flex gap-[6px] items-center mt-[5px]">
              <p className="leading-[100%] font-medium font-Inter text-xs">3</p>
                <span className="w-full h-[4px] bg-dark5-grya flex rounded-[11px]"></span>
                </div>  <div className="flex gap-[2px] items-center mt-[5px]">
              <p className="leading-[100%] font-medium font-Inter text-xs">2</p>
                <span className="w-full h-[4px] bg-dark5-grya flex rounded-[11px]"></span>
                </div>  <div className="flex gap-[6px] items-center mt-[5px]">
              <p className="leading-[100%] font-medium font-Inter text-xs">1</p>
                <span className=" w-full h-[4px] bg-dark5-grya flex rounded-[11px]"></span>
                </div>
              </div>
            </div>
            {
              Favourite.map((item, index)=>(

             <div key={index} className="max-w-[190px] h-[140px] w-full pl-[30px] border-l border-dark2-grya">
                <p className="pb-1 font-medium text-sm font-Inter leading-[100%]">{item.titel}</p>
                <p className="font-medium text-lg font-Inter leading-[100%]">{item.reting}</p>
            <img className="mt-[30px]" src={item.svg} alt="" />
             </div>
              ))
            }
        </div>
            
      </div>
    </>
  );
};

export default favourite;
