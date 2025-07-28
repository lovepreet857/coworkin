import React, { useState } from "react";
import Locatin from "../../../public/svg/banner_location.svg";
import Bannermaiimg from "../../../public/img/bannetimg1.png";

import User from "../../../public/svg/banner_user.svg";
import Date from "../../../public/svg/banner_date.svg";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const banner = () => {
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="container flex flex-col-reverse md:gap-[59px] lg:gap-0 md:grid  grid-cols-2  pb-[30px] md:pb-[68px]  ">
        <div className="max-w-[659px]">
          <h1 className="font-medium text-black-black text-[32px] xl:text-[64px] leading-[120%] pb-3 md:pb-6 font-Inter">
            Find Your Perfect Workspace, Anytime.
          </h1>
          <p className="text-dark-grya text-sm md:text-2xl leading-[130%] font-Inter font-normal pb-[30px] md:pb-10">
            Discover and book coworking spaces that match your style and needs.
          </p>
          <div className="flex flex-col gap-5 md:gap-[28px] border-x border-t p-5 md:pt-[30px] md:pl-[24px] md:pb-[36px] rounded-t-[24px] md:pr-[54px]">
            <div className="flex gap-5 md:gap-[32px]">
              {/* City or Area Input */}
              <div className="cursor-pointer max-w-[228px] w-full flex items-center gap-[10px] py-3 px-[14px] lg:px-6 bg-Flash-White rounded-[10px]">
                <img src={Locatin} alt="Location" />
                <input
                  type="text"
                  placeholder="Enter city or area"
                  className="cursor-pointer text-[10px] lg:text-lg font-Inter font-normal leading-[130%] w-full bg-transparent outline-none"
                />
              </div>

              <div className="cursor-pointer max-w-[255px] w-full bg-Flash-White px-[14px] lg:px-6 py-[13px] flex items-center gap-[10px] rounded-[10px]">
                <img src={Date} alt="Date" />
                <input
                  type="date"
                  className="cursor-pointer text-[10px] lg:text-lg font-Inter font-normal leading-[130%] w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
              </div>
            </div>

            <div className="flex gap-5 md:gap-10">
              <div className="max-w-[343px] w-full py-3 px-[14px] lg:px-6 rounded-[10px] flex items-center gap-[10px] bg-Flash-White cursor-pointer">
                <img src={User} alt="User" />
                <select className="cursor-pointer appearance-none text-[10px] lg:text-lg font-Inter font-normal leading-[130%] w-full bg-transparent outline-none">
                  <option value="1">1 person</option>
                  <option value="2">2 persons</option>
                  <option value="3">3 persons</option>
                  <option value="4">4 persons</option>
                </select>
              </div>
              <Button
                size="sm"
                className="leading-[130%] cursor-pointer font-Inter font-normal"
                onClick={handleClick}
                loading={isLoading}
              >
                Search
              </Button>
            </div>
          </div>
          <div className=" hidden md:flex gap-[32px] mt-5 lg:mt-10">
            <Button
              size="md"
              className="leading-[130%] cursor-pointer font-normal font-Inter"
            >
              Explore Workspaces
            </Button>
            <Button
              size="md"
              loading={isSearchLoading}
              className="leading-[130%] cursor-pointer font-Inter font-normal"
              onClick={() => {
                setIsSearchLoading(true);
                setTimeout(() => {
                  setIsSearchLoading(false);
                  navigate("/login");
                }, 2000);
              }}
            >
              Log In
            </Button>
          </div>
        </div>
        <div className="pb-6 md:pb-0 ">
          <img
            src={Bannermaiimg}
            alt="Bannermaiimg"
            className="cursor-pointer lg:ml-[60px] md:max-w-[666px] w-full rounded-[12px] md:rounded-tr-none md:rounded-br-none 
      transform transition-transform duration-500 ease-in-out hover:scale-[102%]"
          />
        </div>
      </div>
    </>
  );
};

export default banner;
