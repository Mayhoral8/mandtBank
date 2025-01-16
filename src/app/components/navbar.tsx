"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/landing-page/logo.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter()
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const login = ()=>{
    setShowNav(false)
    router.push("/login")
  }
  return (
    <main className="h-16 w-full bg-gradient-to-b to-[#007B55] from-[#459A3A]  grid grid-cols-3  items-center justify-center px-10 text-white fixed z-10">
      <article
        className={`lg:flex lg:flex-row lg:relative absolute mt-52 lg:mt-0 lg:items-center lg:justify-center gap-x-4 flex flex-col bg-[#007B55] lg:bg-transparent w-full px-10 lg:px-0 ${
          showNav
            ? "h-36 opacity-100"
            : "h-0 opacity-0 lg:block lg:h-full lg:opacity-100"
        } lg:h-0 justify-evenly transition-all`}
      >
        <span>Personal</span>
        <span>Business</span>
        <span>Platinum</span>
        <div className="p-1 px-2 rounded-xl bg-white text-[#2E9175] flex items-center gap-x-2 lg:hidden w-[30%]" onClick={login}>
          <span>Login</span>
          <FaCircleArrowRight />
        </div>
      </article>
      <div className="flex justify-center">
        <Link href="/">
        <Image src={logo} alt="logo" height={200} width={200} className="" />
        </Link>
      </div>
      <article className="hidden lg:flex items-center gap-x-4  justify-center">
        <div>Help ?</div>
        <div className="p-2 px-4 rounded-xl bg-white text-[#2E9175] flex items-center gap-x-2 " onClick={login}>
          <span>Login</span>
          <FaCircleArrowRight />
        </div>
        <div className="p-2 px-4 rounded-xl hidden lg:flex items-center gap-x-2 border ">
          <CiSearch />
          <span>Search</span>
        </div>
      </article>
      {showNav ? (
        <FaXmark
          className="lg:hidden block ml-44 cursor-pointer"
          onClick={handleShowNav}
        />
      ) : (
        <GiHamburgerMenu
          className="lg:hidden block ml-44 cursor-pointer"
          onClick={handleShowNav}
        />
      )}
    </main>
  );
};

export default Navbar;
