"use client"
import React from "react";
import logo from "@/assets/landing-page/logo.png";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  const handleLogout = ()=>{
    router.push("/login")
  }
  return (
    <div className="bg-gradient-to-b to-[#007B55] from-[#459A3A] h-16 flex items-center px-4 justify-between">
      <Image src={logo} alt="logo" height={100} width={100} />
      <div className="p-2 px-4 rounded-xl bg-white text-[#2E9175] flex items-center gap-x-2 " onClick={handleLogout}>
        <span>Logout</span>
        <FaCircleArrowRight />
      </div>
    </div>
  );
};

export default Navbar;
