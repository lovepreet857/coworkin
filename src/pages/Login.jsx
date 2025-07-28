import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Loginsvg from "../../public/svg/login_arrow-left.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import ForgotTick from "../../public/svg/forgot_charm_tick.svg";
import CancelIcon from "../../public/svg/forgot_multiply.svg";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agree: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    if (!formData.email.trim() || !formData.password.trim()) {
      return alert("Please fill in both Email and Password.");
    }
 if (!formData.agree) {
      return alert("Please accept the Remember Me checkbox.");
    }
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed!");
    } finally {
      setIsLoading(false);
    }
  };
 const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container flex flex-col-reverse md:grid grid-cols-2 md:gap-[32px]">
        <div>
          <Link to="/">
            <img className="hidden md:block w-[24px]" src={Loginsvg} alt="Back" />
          </Link>

          <h1 className="py-5 md:py-10 text-[20px] md:text-[40px] text-black-black leading-[130%] font-semibold font-Inter">
            Log in
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="email"
              id="email"
              placeholder="Enter your E-mail"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              id="password"
              placeholder="Enter Password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label
                  className="text-xs md:text-base font-normal font-Inter leading-[130%]"
                  htmlFor="agree"
                >
                  Remember me
                </label>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-natural-blue"
              >
                Forgot Password
              </button>
            </div>

            {showModal && (
              <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
                <div className="bg-Flash-White flex pt-[50px] px-[45px] flex-col h-[244px] max-w-[414px] rounded-[12px]">
                  <p className="line-clamp-2 text-center text-black-black text-[20px] leading-[100%] font-Inter">
                    Are you sure you want to forgot your password?
                  </p>
                  <div className="flex gap-5 pt-[30px]">
                    <Button
                      loading={isSearchLoading}
                      onClick={() => {
                        setIsSearchLoading(true);
                        setTimeout(() => {
                          setIsSearchLoading(false);
                          navigate("/forgotpass");
                        }, 2000);
                      }}
                      className="flex items-center gap-[10px] py-[18px] justify-center bg-natural-blue max-w-[156px] w-full rounded-[12px] text-white-white font-medium font-Inter text-base leading-[100%]"
                    >
                      <img src={ForgotTick} alt="Confirm" />
                      Confirm
                    </Button>

                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-[10px] py-[18px] justify-center bg-Flash-White border max-w-[156px] w-full rounded-[12px] font-medium font-Inter text-base leading-[100%]"
                    >
                      <img src={CancelIcon} alt="Cancel" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <Button
              type="submit"
              loading={isLoading}
              size="cutom1"
              className="text-center mb-5 max-w-full w-full leading-[130%] font-Inter font-normal"
            >
              Log in
            </Button>

            <p className="font-Inter mb-[30px] text-center font-normal text-sm md:text-base leading-[100%]">
              Don’t have an Account?{" "}
              <Link to="/createaccount">
                <span className="text-natural-blue">Create account</span>
              </Link>
            </p>

            <div className="justify-center items-center gap-5 flex mb-[30px]">
              <span className="max-w-[90px] sm:max-w-[120px] w-full border-dark2-grya h-0 border md:hidden"></span>
              <p className="text-[14px] md:text-base font-Inter font-normal leading-[100%]">
                Or Continue with
              </p>
              <span className="max-w-[90px] sm:max-w-[120px] w-full border-dark2-grya h-0 border md:hidden"></span>
            </div>

            <div className="justify-between m-auto flex max-w-[427px]">
              <img className="h-[30px]" src={"http://localhost:3000/upload/Lovepreet1753169314019.svg"} alt="Google" />
              <img src={"http://localhost:3000/upload/Lovepreet1753168756638.svg"} alt="Facebook" />
              <img src={"http://localhost:3000/upload/Lovepreet1753169187365.svg"} alt="Apple" />
              <img src={"http://localhost:3000/upload/Lovepreet1753169033370.svg"} alt="Twitter" />
            </div>
          </form>
        </div>

        <div className="relative">
          <Link to="/">
            <img
              className="absolute md:hidden w-[24px]"
              src={Loginsvg}
              alt="Back"
            />
          </Link>
          <img src={"http://localhost:3000/upload/Lovepreet1753167708294.png"} alt="Main Visual" />
        </div>
      </div>
    </>
  );
};

export default Login;
