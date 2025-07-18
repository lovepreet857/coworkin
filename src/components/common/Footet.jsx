import React from "react";
import Hederlogo from "../../../public/svg/headerlogo.svg";
import Footerfacebook from "../../../public/svg/footer_facebook.svg";
import Footerinsta from "../../../public/svg/footer_instagram.svg";
import Footerlinkin from "../../../public/svg/footer_linkedin.svg";
import Footertwitter from "../../../public/svg/footer_twitter.svg";
import Footeryoutube from "../../../public/svg/footer_youtube.svg";
import { Link } from "react-router-dom";
const Footet = () => {
  const footerData = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", path: "/" },
      { text: "Browse Workspaces", path: "/workspaces" },
      { text: "How It Works", path: "/how-it-works" },
      { text: "Blog", path: "/blog" },
      { text: "Contact", path: "/contact" }
    ]
  },
  {
    title: "Explore",
    links: [
      { text: "For Freelancers", path: "/freelancers" },
      { text: "For Teams", path: "/teams" },
      { text: "Private Cabins", path: "/cabins" },
      { text: "Daily Passes", path: "/daily-passes" },
      { text: "Book by City", path: "/book-by-city" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "FAQ", path: "/faq" },
      { text: "Help Center", path: "/help-center" },
      { text: "Cancellation Policy", path: "/cancellation" },
      { text: "Privacy Policy", path: "/privacy-policy" },
      { text: "Terms & Conditions", path: "/terms" }
    ]
  }
];
  return (
    <>
      <div className="container pt-[30px] md:pt-[60px]">
        <div className=" flex gap-4 flex-col md:grid grid-cols-2  justify-between md:mb-[133px]">
          <div className="flex flex-col gap-3 md:gap-[30px] max-w-[485px] ">
            <div className="flex items-center gap-[10px]">
              <img src={Hederlogo} alt="Hederlogo" />
              <h5 className="font-Inter font-semibold text-[20px] md:text-2xl leading-[100%] text-black-black">
                Cowork Mate
              </h5>
            </div>
            <p className="font-Inter font-normal text-sm md:text-[20px] leading-[130%] text-dark-grya">
              CoWorkMate helps you find and book the perfect coworking space
              anywhere, anytime.
            </p>
            <div className="flex flex-col gap-3 md:gap-5">
              <p className="text-sm md:text-lgleading-[130%] text-dark-grya font-normal font-Inter">
                Email:
                <span className="text-pramery-blue">
                  {" "}
                  support@coworkmate.com
                </span>
              </p>
              <p className="text-sm md:text-lgleading-[130%] font-normal font-Inter text-dark-grya">
                Phone: +91 98765 43210{" "}
              </p>
              <p className=" text-sm md:text-lg leading-[130%] font-normal font-Inter text-dark-grya">
                Address : Mumbai, India
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:flex max-w-[618px] w-full justify-between">
            {footerData.map((section) => (
  <div className="flex flex-col gap-6 ">
    <h3 className=" text-sm md:text-lg font-Inter font-semibold leading-[130%]">{section.title}</h3>
    {section.links.map((link) => (
      <div className="flex flex-col gap-[14px] font-Inter font-normal text-xs md:text-base leading-[130%] hover:text-natural-blue">

        <Link to={link.path}>{link.text}</Link>
      </div>
    ))}
  </div>
))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:hidden max-w-[200px] w-full flex justify-between pt-[30px] md:pt-0 pb-[54px] cursor-pointer">
            <img src={Footerfacebook} alt="Footerfacebook" />
            <img src={Footerinsta} alt="Footerinsta" />
            <img src={Footertwitter} alt="Footertwitter" />
            <img src={Footeryoutube} alt="Footeryoutube" />
            <img src={Footerlinkin} alt="Footerlinkin" />
          </div>
        </div>
      </div>
      <div className="border-t border-dark-grya">

      <div className=" container md:flex items-center justify-between py-[26px] text-center md:text-start ">
        <div>
            <p className="font-Inter font-normal text-sm leading-[130%]">
          © 2025 CoWorkMate. All rights reserved.
        </p>
        </div>
           <div className=" hidden md:flex gap-5 cursor-pointer">
             <img src={Footerfacebook} alt="Footerfacebook" />
            <img src={Footerinsta} alt="Footerinsta" />
            <img src={Footertwitter} alt="Footertwitter" />
            <img src={Footeryoutube} alt="Footeryoutube" />
            <img src={Footerlinkin} alt="Footerlinkin" />

           </div>
      </div>
      </div>
    </>
  );
};

export default Footet;
