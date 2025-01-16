import Image from "next/image";
import Navbar  from "./components/navbar";
// import DesktopNavbar from "./account/navbar";
import heroImage from "@/assets/landing-page/hero-image.png";
import card1 from "@/assets/landing-page/card.png";
import card2 from "@/assets/landing-page/card2.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-[#F8F2F2] w-full">
      <Navbar />
      <section className="flex lg:flex-row flex-col lg:items-center">
        <div className="order-2  lg:ml-32 flex flex-col gap-y-6 text-[#2E9175]">
          <h2 className="text-4xl text-center lg:text-start">
            Today's great rates & tomorrow's savings
          </h2>
          <p className="text-sm text-center lg:text-start">
            Your trusted partner in financial growth and security. Whether
            you’re saving for the future, managing your day-to-day finances, or
            exploring investment opportunities, we’re here to make banking
            seamless, secure, and personalized for you.
          </p>
          <button className="py-1 px-2 border block mr-auto rounded-lg mx-auto lg:mx-0">
            Learn more...
          </button>
        </div>
        <div className=" order-1 lg:order-2 z-0 right-0 mt-16">
          <Image
            src={heroImage}
            alt="heroImage"
            height={3000}
            width={3000}
            className=" "
          />
        </div>
      </section>
      <section className=" flex lg:flex-row flex-col lg:w-[60%] w-[90%] items-center mx-auto shadow-lg justify-between lg:px-10 px-4 border lg:h-72 h-[350px] border-t-[#FFB300] lg:absolute left-0 right-0 lg:mt-[-56] mt-10 bg-white border-t-4 gap-x-4">
        <article className="items-center lg:w-[50%] text-[#2E9175] ">
          <div className="flex flex-col gap-y-4">
            <span className="text-4xl">
              More Choices, <br /> More Possibilities
            </span>
            <p className="text-sm">
              Explore products and services innovated to help bring your dreams
              to reality
            </p>
          </div>
        </article>
        <article className="lg:w-[50%]">
          <div className="grid grid-cols-3 text-sm text-center text-[#2E9175]">
            <div className="border border-t-0 border-l-0 flex items-center justify-center h-20 flex-col">
              <LiaDigitalTachographSolid className="text-2xl"/>
              <span className="text-sm">Cheques</span>
            </div>
            <div className="border border-t-0 flex flex-col items-center justify-center">
              <FaPiggyBank className="text-2xl" />
              <span className="text-sm">Savings & CDs</span>
            </div>
            <div className="border border-t-0 border-r-0 flex flex-col items-center justify-center">
              <CiCreditCard1 className="text-2xl" />
              <span className="text-sm">Card Service</span>
            </div>
            <div className="border border-b-0 border-l-0 flex flex-col items-center justify-center">
              <RiCoinsFill className="text-2xl" />
              <span className="text-sm">Financial Education Centre</span>
            </div>
            <div className="border border-b-0 flex flex-col items-center justify-center">
              <BsBank className="text-xl" />
              <span className="text-sm">Investments & Insurance</span>
            </div>
            <div className="border border-b-0 border-r-0 flex  flex-col items-center justify-center h-20">
              <MdOutlinePayments className="text-2xl"/>
              <span className="text-sm">Digital Banking</span>
            </div>
          </div>
        </article>
      </section>
      <section className="flex lg:mx-[252px] lg:flex-row flex-col  lg:h-56 lg:w-[60%] w-[90%] justify-center mx-auto lg:mt-72 mt-20 gap-x-4">
        <article className="bg-gradient-to-b to-[#007B55] from-[#459A3A] lg:h-full lg:w-[50%] h-72 flex flex-col px-6 text-white py-4 justify-between">
          <span>Help Center</span>
          <span className="text-3xl">What can we help you with today?</span>
          <div>
            <input
              placeholder="Search"
              className="border-b focus:outline-none w-full bg-none bg-transparent"
            />
          </div>
        </article>
        <article className="lg:w-[50%]  items-center justify-between px-4 text-[#2E9175] flex flex-col gap-y-4">
          <div className="  text-xs flex flex-col justify-center items-center gap-y-4">
            <span className="font-medium text-base">BANKING WITH M&T</span>
            <p className=" text-center">
              "Small business is the heartbeat of a community. M&T Bank is
              definitely committed to independent businesses. They really worked
              with us from the beginning. They are just as committed to our
              business as we are."
            </p>
            <div className="flex flex-col text-center">
              <span className="font-medium">LAURA AND DAVID ALIMA </span>
              <span>OWNERS OF THE CHARMERY</span>
            </div>
          </div>
          <div className="flex gap-x-2 justify-center">
            <Image src={card2} alt="card2" height={50} width={50} />
            <Image src={card1} alt="card1" height={50} width={50} />
          </div>
        </article>
      </section>

      <section className="bg-white lg:w-full  mt-10 lg:px-[252px] py-4 gap-y-10 flex flex-col w-full mx-auto px-4">
        <article className="flex flex-col justify-center items-center text-[#2E9175] gap-y-2">
          <span className="text-3xl">Why Bank with M&T?</span>
          <p className="lg:text-xl text-base text-center">
            We understand what's important. That's why we've built a <br />{" "}
            banking experience with you in mind.
          </p>
        </article>
        <article className="flex lg:flex-row flex-col lg:justify-center gap-y-10 items-center  text-[#2E9175] lg:items-center">
          <div className="flex flex-col  text-center  gap-y-2  lg:w-[33%]">
            <span className="lg:text-xl text-2xl">$34.9 million</span>
            <span className="text-xs">IN LOCAL GRANTS</span>
          </div>
          <div className="flex flex-col  lg:border-l-2 lg:border-r-2 text-center  gap-y-2  lg:w-[33%] ">
            <span className="lg:text-xl text-2xl">$1.6 billion</span>
            <span className="text-xs">IN LOCAL GRANTS</span>
          </div>
          <div className="flex flex-col  text-center  gap-y-2  lg:w-[33%]">
            <span className="lg:text-xl text-2xl">{">"}50,000</span>
            <span className="text-xs">IN LOCAL GRANTS</span>
          </div>
        </article>
      </section>

      <section className=" flex lg:flex-row flex-col gap-y-4 py-4   justify-evenly px-4 items-center text-center text-sm w-full  ">
        <div className="flex items-center gap-x-1">
          <FaRegCopyright />
          <span>{currentYear}</span>
          <span>M&T Bank. All rights Reserved</span>
        </div>
        <span>1-800-724-2440</span>
        <span>About M&T Bank</span>
        <span>Careers</span>
        <span>Investor Relations</span>
        <span>Security</span>
        <div className="flex items-center">
          <FaFacebook />
          <FaXTwitter />
        </div>
      </section>
    </main>
  );
}