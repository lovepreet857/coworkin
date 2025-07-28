import React, { useState } from 'react'
import Workssvg1 from "../../../public/svg/workssvg1.svg";
import Workssvg2 from "../../../public/svg/workssvg2.svg";
import Button from '../ui/Button';
const Profect = ({Workhaeding,Workparagraph}) => {
    const [isSearchLoading, setIsSearchLoading] = useState(false);
  
  return (
   <>
    <div className='container pt-[30px] md:pt-[60px] pb-[30px] md:pb-[60px]'>
         <div className="flex items-center justify-center gap-[26px] mb-3 md:mb-6">
                <img className='hidden md:block' src={Workssvg1} alt="Workssvg1" />
                <h1 className=" font-Inter font-semibold text-[22px] md:text-10 leading-[130%]  text-black-black">
                 { Workhaeding}
                </h1>
                <img  className='hidden md:block' src={Workssvg2} alt="Workssvg2" />
              </div>
        
              <p className="max-w-[669px] m-auto w-full text-sm md:text-[20px] text-dark-grya leading-[130%] font-normal font-Inter text-center  mb-[30px] md:mb-[60px]">
              {Workparagraph}
              </p>
              <div className='flex flex-col items-center gap-7  '>
                 <Button 
               size="lg"
                 loading={isSearchLoading}
                   onClick={() => {
                setIsSearchLoading(true);
                setTimeout(() => {
                  setIsSearchLoading(false);
                  navigate("/login");
                }, 2000);
              }}
            className="leading-[130%] cursor-pointer rounded-[12px] font-Inter font-normal" >
              Find a Workspace
             </Button>
                {/* <button className='cursor-pointer text-center py-3 md:py-[18px] bg-natural-blue rounded-[12px] max-w-[328px] text-white-white font-Inter  font-normal text-sm md:text-2xl leading-[130%] w-full'>Find a Workspace</button> */}
                <p className='font-medium text-sm md:text-[20px] leading-[130%] font-Inter text-dark-grya'>or <span className='text-natural-blue'>Learn How It Works</span></p>
              </div>
    </div>
   </>
  )
}

export default Profect
