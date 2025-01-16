import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiSolidErrorCircle } from "react-icons/bi";


type props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ErrorModal: React.FC<props> = ({ showModal, setShowModal }) => {
  if (showModal) {
    return (
      <div className="flex fixed items-center justify-center top-0 bottom-0 left-0 right-0 backdrop-blur-sm">
        <section className="bg-[#F8F2F2] w-[25%] h-[35%] flex flex-col items-center justify-evenly text-center text-lg">
          <BiSolidErrorCircle className="text-[#FFCD0F] text-4xl" />
          <span className="font-light text-[#5D5C5C] px-10">
            You are unable to send money at this time!{" "}
          </span>
          <span className="text-red-500 px-10 ">
            You have an{" "}
            <span className="font-bold">outstanding bill of $9,235.42 !</span>
          </span>
        </section>
      </div>
    );
  }
};

export default ErrorModal;
