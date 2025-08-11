import React, { useState } from "react";
import Myprofile from "../json/myprofile.json";
import Logout from "../../public/svg/myprofile_logout.svg";
import Profilepop from "../components/common/popups/profilepop";
import Profileinfo from "../components/mainprofile/profileinfo";
import Myboocking from "../components/mainprofile/myboocking";
import Profileworkspace from "../components/mainprofile/profilrworkspace";
import ProfileSettings from "../components/mainprofile/ProfileSettings";
import Boockingpage from "../components/mainprofile/boockingpage";
import Settings from "../components/mainprofile/Settings";
const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="container justify-center flex gap-[32px] pt-5">
        <div className=" xl:block hidden max-w-[419px] w-full bg-Flash-White py-[60px] rounded-[6px] h-[867px]">
          <h1 className="text-center font-Inter font-semibold text-[36px] leading-[100%]">
            CoWork Mate
          </h1>
          <div className="h-[90px]"></div>
          {Myprofile.map((item, index) => (
            <div key={index}>
              <div
                className={`flex w-full py-5 pl-10 items-center gap-4 
        ${step === index + 1 ? "bg-pramery-blue" : "hover:bg-gray-100"}
      `}
                onClick={() => setStep(index + 1)} // Optional: make it clickable
              >
                <img src={item.myimgs} alt="myimgs" />
                <p className="leading-[130%] text-[22px] font-Inter font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          <div className="h-[298px]"></div>
          <div
            onClick={() => setShowModal(true)}
            className="hover:bg-pramery-blue flex w-full py-5 pl-10 items-center gap-4 "
          >
            <img src={Logout} alt="Logout" />
            <p className="leading-[130%] text-[24px] font-Inter font-medium">
              Logout
            </p>
          </div>
          {showModal && <Profilepop />}
        </div>
        <div className="max-w-[869px] w-full">
          {step === 1 && (
            <div className="">
              <Profileinfo />
              <Myboocking />
              <Profileworkspace />
              <ProfileSettings />
            </div>
          )}
          {step === 2 && (
            <div>
              <Boockingpage />
            </div>
          )}
            {step === 3  && (
            <div>
              
            </div>
          )}
           {step === 4  && (
            <div>
              <Settings/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
