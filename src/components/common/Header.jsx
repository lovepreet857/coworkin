import React, { useState } from "react";
import Hederlogo from "../../../public/svg/headerlogo.svg";
import Headerbell from "../../../public/svg/header_bell.svg";
import Headersearsh from "../../../public/svg/header_search.svg";
import Headeruser from "../../../public/svg/header_user.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container flex items-center justify-between py-[35px] relative">
        <div className="flex items-center gap-[10px]">
          <img src={Hederlogo} alt="Hederlogo" />
          <h5 className="font-Inter font-semibold text-base md:text-[20px] leading-[100%] text-black-black">
            Cowork Mate
          </h5>
        </div>
        <div className="hidden md:flex items-center list-none gap-[30px] font-Inter font-medium text-base lg:text-lg leading-[100%]  text-black-black cursor-pointer">
          <Link to={"/"}><li className="hover:text-natural-blue">Home</li></Link>
          <li className="hover:text-natural-blue">About</li>
          <li className="hover:text-natural-blue">How It Works</li>
          <li className="hover:text-natural-blue">Blog</li>
          <li className="hover:text-natural-blue">Contact</li>
        </div>
        <div className="hidden lg:flex items-center gap-[30px] cursor-pointer">
          <img className=" rounded-full p-1 hover:bg-Flash-White" src={Headerbell} alt="" />
          <Link to={"/profile"}> <img className=" rounded-full p-1 hover:bg-Flash-White" src={Headeruser} alt="" /></Link>
          <img className=" rounded-full p-1 hover:bg-Flash-White" src={Headersearsh} alt="" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-6 h-6 flex items-center justify-center group"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
        <div
          className={`absolute z-52 top-[90px] transition-all duration-500 ease-in-out transform right-[20px] pb-[52px] pl-5 pt-[30px] max-w-[339px] w-full bg-Flash-White rounded-[12px] lg:hidden  ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
         <Link to={"/"}> <h1  onClick={() => setIsOpen(!isOpen)} className="font-Inter text-[20px] font-normal leading-[140%] border-b border-Flash-White3 pb-[20px] mb-4 hover:text-natural-blue">
            Home
          </h1></Link>
          <h1 className="font-Inter text-[20px] font-normal leading-[140%] border-b border-Flash-White3 pb-[20px] mb-4 hover:text-natural-blue">
            About
          </h1>
          <h1 className="font-Inter text-[20px] font-normal leading-[140%] border-b border-Flash-White3 pb-[20px] mb-4 hover:text-natural-blue">
            How it Works
          </h1>
          <h1 className="font-Inter text-[20px] font-normal leading-[140%] border-b border-Flash-White3 pb-[20px] mb-4 hover:text-natural-blue">
            Blog
          </h1>
          <h1 className="font-Inter text-[20px] font-normal leading-[140%] border-b border-Flash-White3 pb-[20px] mb-4 hover:text-natural-blue">
            Contact
          </h1>
          <h1 className="font-Inter text-[20px] font-normal leading-[140%]  border-Flash-White3 pb-[20px] mb-4">
            My Account
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
