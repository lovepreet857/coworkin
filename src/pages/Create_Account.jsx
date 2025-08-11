import React, { useState } from "react";
import axios from "axios";
import Loginsvg from "../../public/svg/login_arrow-left.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

const Create_Account = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert("Please fill in both First Name and Last Name.");
      return;
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill in both Email and Password.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept the terms.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/create", {
        firstname: formData.firstName,
        lastname: formData.lastName,
       email: formData.email,
        password: formData.password,
      });

      if (response.status === 201 || response.status === 200) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      alert(error.response?.data?.message || "Failed to register.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex flex-col-reverse md:grid grid-cols-2 md:gap-[32px] ">
      <div>
        <Link to={"/"}>
          <img className=" hidden md:block w-[24px]" src={Loginsvg} alt="Loginsvg" />
        </Link>
        <h1 className=" py-5 md:py-10 text-[20px] md:text-[40px] text-black-black leading-[130%] font-semibold font-Inter">
          Create Account
        </h1>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-[32px] max-w-full">
            <Input
              name="firstName"
              placeholder="First Name"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <Input
            name="email"
            placeholder="Enter your E-mail"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            name="password"
            placeholder="Create Password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex items-center gap-2">
            <Input
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label
              className="text-xs md:text-base font-normal font-Inter leading-[130%]"
              htmlFor="agree"
            >
              I agree with <span className="text-natural-blue border-b">terms</span> and{" "}
              <span className="text-natural-blue border-b">privacy policy</span>
            </label>
          </div>

          <Button
            onClick={handleClick}
            loading={isLoading}
            size="cutom1"
            className="text-center max-w-full w-full leading-[130%] font-Inter font-normal"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </Button>

          <div className="justify-center items-center gap-5 flex py-5 text-base font-Inter font-normal leading-[100%]">
            <span className="max-w-[120px] w-full border-dark2-grya h-0 border md:hidden "></span>
            Or
            <span className="max-w-[120px]  w-full border-dark2-grya h-0 border md:hidden "></span>
          </div>

          <div className="py-[10px] md:py-[21px] bg-Flash-White items-center flex justify-center gap-5 rounded-[12px]">
            <img src={"http://localhost:3000/upload/ashish1754891300543.svg"} alt="Google" />
            <h5 className="font-Inter font-medium text-xs md:text-[20px] leading-[130%]">
              Sign up With Google
            </h5>
          </div>

          <p className="font-Inter text-center font-normal text-sm md:text-base leading-[100%] pt-[14px]">
            Already have an Account?{" "}
            <span className="text-natural-blue">
              <Link to={"/login"}>Log in</Link>
            </span>
          </p>
        </form>
      </div>

      <div className="relative">
        <Link to={"/"}>
          <img className=" absolute md:hidden w-[24px]" src={Loginsvg} alt="Loginsvg" />
        </Link>
                   <img src={"http://localhost:3000/upload/ashish1753160504473.png"} alt="Main Visual" />

      </div>
    </div>
  );
};

export default Create_Account;
