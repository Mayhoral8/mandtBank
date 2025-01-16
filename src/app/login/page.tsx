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
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username === "mikayla15267" && password === "Mikaylaloveschad24#") {
      router.push("/account");
    } else {
      toast.error("Password or username incorrect");
    }
  };

  const handleUserName = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
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
            onClick={handleLogin}
          >
            {" "}
            <span className="">Login</span>
            <FaCircleArrowRight className="" />
          </button>
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
