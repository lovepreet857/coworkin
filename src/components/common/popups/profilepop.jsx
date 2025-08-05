import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "../../ui/Button"
const profilepop = () => {
    const Navigate = useNavigate();
  const [isSearchLoading, setIsSearchLoading] = useState(false);
     const handleCancel = () => {
    setShowModal(false);
  };
  return (
   <>
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
              <div className="bg-Flash-White flex pt-[50px] px-[45px] flex-col h-[244px] max-w-[414px] rounded-[12px]">
                <h1 className="font-Inter font-semibold text-[20px] leading-[130%]">
                  Log Out
                </h1>
                <p className="line-clamp-2 pt-[14px] text-black-black text-[20px] leading-[100%] font-Inter">
                  Are you sure you want to log out from your account?
                </p>
                <div className="flex gap-5 pt-[30px]">
                  <Button
                    loading={isSearchLoading}
                    onClick={() => {
                      setIsSearchLoading(true);
                      setTimeout(() => {
                        setIsSearchLoading(false);
                        Navigate("/login");
                      }, 2000);
                    }}
                    className="flex items-center gap-[10px] py-[18px] justify-center bg-natural-blue max-w-[156px] w-full rounded-[12px] text-white-white font-medium font-Inter text-base leading-[100%]"
                  >
                    Log Out
                  </Button>

                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-[10px] py-[18px] justify-center bg-Flash-White border max-w-[156px] w-full rounded-[12px] font-medium font-Inter text-base leading-[100%]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
   </>
  )
}

export default profilepop
