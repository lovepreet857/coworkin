import React, { useState } from "react";
import Workssvg1 from "../../../public/svg/workssvg1.svg";
import Workssvg2 from "../../../public/svg/workssvg2.svg";
import Button from "../ui/Button";
import Featureddata from "../../json/featured.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
const Featured = ({ Workhaeding, Workparagraph }) => {
  const [loadingId, setLoadingId] = useState(null);
  const Navigate = useNavigate();
  const handleClick = (id) => {
    setLoadingId(id);

    setTimeout(() => {
      setLoadingId(null);
      Navigate("/browse");
      // reset after loading
    }, 2000);
  };
  return (
    <>
      <div className="container py-[30px] md:pt-[60px] md:pb-[66px]">
        <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
          <img className="hidden md:block" src={Workssvg1} alt="Workssvg1" />
          <h1 className="font-Inter font-semibold text-[22px] md:text-10 leading-[130%] text-black-black">
            {Workhaeding}
          </h1>
          <img className="hidden md:block" src={Workssvg2} alt="Workssvg2" />
        </div>

        <p className="max-w-[487px] m-auto w-full text-sm md:text-[20px] text-dark-grya leading-[130%] font-normal font-Inter text-center  mb-[30px] md:mb-[60px]">
          {Workparagraph}
        </p>
        <Swiper
          spaceBetween={32}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.5,
            },
            750: {
              slidesPerView: 1.6,
            },
            768: {
              slidesPerView: 2,
            },
            1124: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {Featureddata.map((iteam, index) => (
            <SwiperSlide
              key={index}
              className="rounded-3xl overflow-hidden bg-Flash-White max-w-[335px] w-full sm:max-w-[419px] max-h-[528px]"
            >
              <img src={iteam.mainimg} alt="mainimg" />
              <h1 className="px-[20px] pt-6 text-black-black font-medium font-Inter text-[20px] sm:text-[22px] leading-[130%]">
                {iteam.titel}
              </h1>
              <div className="px-[20px] pt-3 pb-[30px] flex flex-col gap-[21px]">
                <div className="flex gap-[10px]">
                  <img src={iteam.locationsvg} alt="" />
                  <p className="text-dark-grya text-base font-normal font-Inter leading-[130%]">
                    {iteam.locationname}
                  </p>
                </div>
                <div className="flex justify-between">
                  <h1 className="bg-white-white  rounded-[12px] text-black-black py-2 px-4 text-[10px] sm:text-xs leading-[130%] font-Inter font-normal">
                    {iteam.text1}
                  </h1>
                  <h1 className="bg-white-white  rounded-[12px] text-black-black py-2 px-4 text-[10px] sm:text-xs  leading-[130%] font-Inter font-normal">
                    {iteam.text2}
                  </h1>
                  <h1 className="bg-white-white  rounded-[12px] text-black-black py-2 px-4 text-[10px] sm:text-xs  leading-[130%] font-Inter font-normal">
                    {iteam.text3}
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-[10px]">
                    <img src={iteam.stersvg} alt="" />
                    <p className="text-dark-grya leading-[130%] text-base font-Inter font-normal">
                      {iteam.reviews}
                    </p>
                  </div>
                  <p className="text-natural-orange font-Inter font-normal text-base leading-[130%]">
                    {iteam.price}
                  </p>
                </div>
                <Button
                  size="xl"
                  onClick={() => handleClick(index)}
                  loading={loadingId === index}
                >
                  View Details
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Featured;
