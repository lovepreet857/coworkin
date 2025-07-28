import React from 'react';

const Workspaces = () => {
  return (
   <>
    <div className='container flex flex-col items-center pt-[22px] md:pt-[60px] pb-[50px] md:pb-[100px]'>
    <h1 className='font-Inter font-semibold text-[26px] md:text:-10 lg:text-[64px] leading-[100%] text-black-black pb-[26px] md:pb-[32px]'>Browse Workspaces</h1>
    <p className='font-Inter hidden md:block font-normal text-[22px] leading-[100%] text-dark-grya pb-[50px]'>Find the perfect coworking space for you</p>
    <div className='flex max-w-[800px]   bg-Flash-White rounded-[12px]'>
      <div className='flex py-[10px] md:py-[30px] gap-[42px]  pl-5 pr-3 border-r border-dark2-grya'>
        <p className='font-Inter font-normal text-[10px]  md:text-lg leading-[100%]'>Enter city or location</p>
        <img  className='hidden lg:block' src="public/svg/browse_arrow_down.svg" alt="" />
      </div>
       <div className='flex py-[10px] md:py-[30px] gap-[42px]  px-[10px] lg:pl-5 lg:pr-3 border-r border-dark2-grya'>
        <p className='font-Inter font-normal text-[10px] md:text-lg leading-[100%]'>Price range</p>
        <img className='hidden lg:block' src="public/svg/browse_arrow_down.svg" alt="" />
      </div>
       <div className='flex py-[10px] md:py-[30px]  gap-[42px]  px-[10px]  lg:pl-5 lg:pr-[57px] border-r border-dark2-grya'>
        <p className='font-Inter font-normal text-[10px] md:text-lg leading-[100%]'>Price range</p>
      </div>
      <div className=' px-[10px] flex items-center rounded-r-[12px]  md:px-10 bg-natural-blue '>

       <p className=' text-white-white font-Inter font-normal text-[10px] md:text-[20px] '>Search</p>
      </div>
    </div>
    </div> 
   </>
  );
}

export default Workspaces;
