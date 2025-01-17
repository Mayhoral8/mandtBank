"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import { BiTransfer } from "react-icons/bi";
import { IoWallet } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxCaretRight } from "react-icons/rx";
import ErrorModal from "./errorModal";
import { PiHandDepositFill } from "react-icons/pi";

const Page = () => {
  function formatDate(date: Date) {
    const suffixes = ["th", "st", "nd", "rd"];
    const day = date.getDate();

    // Determine the suffix
    const suffix =
      day % 10 >= 1 && day % 10 <= 3 && (day < 10 || day > 20)
        ? suffixes[day % 10]
        : suffixes[0];

    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day}${suffix} ${month}, ${year}`;
  }

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  console.log(day);

  const today = new Date(year, month, day);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <main>
      <Navbar />
      <ErrorModal showModal={showModal} setShowModal={setShowModal} />
      <section className="flex flex-col gap-y-4 py-4 px-4">
        <span className="text-center">{formatDate(today)}</span>

        <article className="flex flex-col lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <span className="text-3xl">Hi, Mikayla Melendez</span>
            <span className="text-[#2E9175]">
              Here is a quick look into your account
            </span>
          </div>

          <div className="flex flex-col justify-center items-center bg-white rounded-xl border shadow-lg p-4 w-[90%] mx-auto">
            <span>Available Balance</span>
            <span className="text-5xl text-[#2E9175] font-bold">
              $594,612.86
            </span>
          </div>
        </article>

        <section className="flex flex-col lg:grid lg:grid-cols-2">
          <article className="lg:order-2">
            <article className="grid grid-cols-4 mt-4 lg:mt-0">
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={handleShowModal}
              >
                <BiTransfer className="text-[#2E9175] text-2xl" />
                <span>Transfer</span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={handleShowModal}
              >
                <IoWallet className="text-[#2E9175] text-2xl" />
                <span>Pay Bills</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <IoDocumentTextOutline className="text-[#2E9175] text-2xl" />
                <span>Statement</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <PiHandDepositFill className="text-[#2E9175] text-2xl" />
                <span>Deposit</span>
              </div>
            </article>
            <div className="h-64 border rounded-3xl mt-2 bg-[#F8F2F2] w-[90%] mx-auto shadow-md hidden lg:flex lg:flex-col">
              <div className="bg-[#2E9175] h-[30%] justify-center w-full rounded-t-3xl flex items-center text-center text-white">
                <span>Scheduled Activity</span>
              </div>
              <span className="text-center">No recent activity</span>
            </div>
          </article>

          <article className="flex flex-col gap-y-4 lg:order-1 mt-6 lg:mt-0">
            <div className="bg-white rounded-xl border shadow-lg w-[90%] mx-auto border-l-4 border-l-[#FFB300] h-28 py-1">
              <div className="bg-[#F8F2F2] h-[80%] px-2">
                <span>MyChoice Plus Checking w/int</span>
                <div className="flex justify-between">
                  <span className="text-[#2E9175]">(3632)</span>
                  <div className="flex flex-col">
                    <span className="text-3xl">$594,612.86</span>
                    <div className="text-[#2E9175] flex gap-x-2 items-center">
                      <span className="italic">Available Balance</span>
                      <RxCaretRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center h-[20%] flex items-center justify-center gap-x-2 italic">
                <span>Total Balance:</span>
                <span>$594,612.86</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border shadow-lg w-[90%] mx-auto border-l-4 border-l-[#FFB300] h-28 py-1">
              <div className="bg-[#F8F2F2] h-[80%] px-2">
                <span>EZChoice Checking</span>
                <div className="flex justify-between">
                  <span className="text-[#2E9175]">(9067)</span>
                  <div className="flex flex-col">
                    <span className="text-3xl">$0.00</span>
                    <div className="text-[#2E9175] flex gap-x-2 items-center">
                      <span className="italic">Available Balance</span>
                      <RxCaretRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center h-[20%] flex items-center justify-center gap-x-2 italic">
                <span>Total Balance:</span>
                <span>$0.00</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border shadow-lg w-[90%] mx-auto border-l-4 border-l-[#FFB300] h-28 py-1">
              <div className="bg-[#F8F2F2] h-[80%] px-2">
                <span>Savings</span>
                <div className="flex justify-between">
                  <span className="text-[#2E9175]">(3514)</span>
                  <div className="flex flex-col">
                    <span className="text-3xl">$0.00</span>
                    <div className="text-[#2E9175] flex gap-x-2 items-center">
                      <span className="italic">Available Balance</span>
                      <RxCaretRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center h-[20%] flex items-center justify-center gap-x-2 italic">
                <span>Total Balance:</span>
                <span>$0.00</span>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Page;
