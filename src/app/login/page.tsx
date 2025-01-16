"use client";
import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Image from "next/image";
import loginImg from "@/assets/login-page/login.png";
import logo from "@/assets/landing-page/logo.png";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Navbar from "../components/navbar";

const Page = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [motherName, setMotherName] = useState("");
  const [loveName, setLoveName] = useState("");
  const [importantName, setImportantName] = useState("");
  const [petName, setPetName] = useState("");
  const [toggleNextStep, setToggleNextStep] = useState(false);

  const handleNextStep = (e: any) => {
    e.preventDefault();
    if (username === "mikayla15267" && password === "Mikaylaloveschad24#") {
      setToggleNextStep(true);
    } else {
      toast.error("Password or username incorrect");
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (
      motherName === "Herrick" &&
      loveName === "Chad" &&
      importantName === "Darla's" &&
      petName === "Poochie"
    ) {
      router.push("/account");
    } else {
      toast.error("Incorrect details");
    }
  };

  const handleUserName = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleMotherName = (e: any) => {
    setMotherName(e.target.value);
  };
  const handleLoveName = (e: any) => {
    setLoveName(e.target.value);
  };
  const handleImportantName = (e: any) => {
    setImportantName(e.target.value);
  };
  const handlePetName = (e: any) => {
    setPetName(e.target.value);
  };

  return (
    <main className="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[#F8F2F2]">
      <section className="hidden lg:flex w-[55%]">
        <article className="z-10 text-white flex flex-col  mx-auto w-[60%]">
          <Image src={logo} alt="logo" height={200} width={200} className="" />
          <span className=" text-3xl mt-4">
            Stay One <br /> Step Ahead <br /> of Fraud.
          </span>
          <div className="bg-[#0000005e] p-4 rounded-xl mt-4">
            <p className="font-light  text-sm text-start items-start">
              Fraud can strike at any time, and raising awareness about fraud
              prevention is important each and every day. Help keep your
              personal or business accounts more secure by following these
              simple steps:
            </p>

            <div className="text-sm">
              <li>Use strong passwords and update them regularly</li>
              <li>Enable two-factor authentication for added security</li>
              <li>
                Beware of phishing emails or messages asking for personal
                information
              </li>
              <li>
                Monitor your account regularly for any unauthorized transactions
                and set up alerts
              </li>
              <li>
                Reset your password and contact us immediately if you suspect
                suspicious activity
              </li>
            </div>
          </div>
        </article>

        <Image
          src={loginImg}
          alt="login Image"
          className="z-0 absolute top-0 left-0 right-0 w-[700px]"
        />
      </section>
      <section className="w-[90%] lg:w-[45%] flex flex-col justify-center  gap-y-10 lg:gap-y-5">
        <span className="text-4xl text-[#2E9175] text-center">Login</span>
        <div className="flex flex-row w-full lg:w-[80%] mx-auto">
          <button className="p-2 px-4  bg-gradient-to-b to-[#007B55] from-[#459A3A] w-[50%] text-white text-xl">
            Personal
          </button>
          <button className="text-[#2E9175] p-1 px-4 border-[#2E9175] border w-[50%] text-xl">
            Business
          </button>
        </div>
        <form className="grid grid-rows-3 w-full lg:w-[80%] gap-y-8 mt-4 lg:mx-auto">
          <input
            placeholder="User Id"
            value={username}
            onChange={handleUserName}
            className="h-10 bg-transparent border border-[#5D5C5C] p-1"
          />
          <div className="flex flex-col">
            <input
              placeholder="Passcode"
              value={password}
              onChange={handlePassword}
              className="h-10 bg-transparent border border-[#5D5C5C] p-1"
            />
            <div className="flex items-center mt-1">
              <MdCheckBoxOutlineBlank />
              <span>Remember User ID</span>
            </div>
          </div>
          <button
            className="bg-gradient-to-b to-[#007B55] from-[#459A3A] flex items-center h-10 justify-center gap-x-2 rounded-lg text-white"
            onClick={handleNextStep}
          >
            {" "}
            <span className="">Next Step</span>
            <FaCircleArrowRight className="" />
          </button>
          {toggleNextStep && (
            <div className="w-screen min-h-screen backdrop-blur-[7px] bg-[#0D1012B2] absolute top-0 left-0 z-50 flex items-center justify-center">
              <div className="bg-white max-w-[500px] p-5 rounded-lg">
                <h3 className="text-2xl font-semibold mb-5">
                  Security Questions
                </h3>
                <div className="flex flex-col mb-5">
                  <label htmlFor="" className="">
                    1. What is your mother&apos;s maiden name?
                  </label>
                  <input
                    type="text"
                    value={motherName}
                    onChange={handleMotherName}
                    className="pl-2 border-[1px] border-black h-10 rounded-md mt-1"
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="">
                    2. What is the name of the current love of your life?
                  </label>
                  <input
                    type="text"
                    value={loveName}
                    onChange={handleLoveName}
                    className="pl-2 border-[1px] border-black h-10 rounded-md mt-1"
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="">
                    3. What is the name of the most important person to you?
                  </label>
                  <input
                    type="text"
                    value={importantName}
                    onChange={handleImportantName}
                    className="pl-2 border-[1px] border-black h-10 rounded-md mt-1"
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="">4. What is the name of your pet?</label>
                  <input
                    type="text"
                    value={petName}
                    onChange={handlePetName}
                    className="pl-2 border-[1px] border-black h-10 rounded-md mt-1"
                  />
                </div>
                <button
                  className="bg-gradient-to-b to-[#007B55] from-[#459A3A] flex items-center h-10 w-full justify-center gap-x-2 rounded-lg text-white"
                  onClick={handleLogin}
                >
                  {" "}
                  <span className="">Login</span>
                  <FaCircleArrowRight className="" />
                </button>
              </div>
            </div>
          )}
        </form>
        <div className="flex flex-col lg:w-[80%] lg:mx-auto">
          <span>Help with User ID or Passcode</span>
          <span className="text-[#2E9175]">Don’t have User ID?</span>
          <span>Enroll for M&T Online Banking</span>
        </div>
      </section>
    </main>
  );
};

export default Page;