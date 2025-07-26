import React from "react";
import { MdOutlineMenu } from "react-icons/md";
export default function Header() {
  return (
    <div className="z-30 w-full bg-[#2D6187] h-[80px] shadow-2xl text-[#A8DDA8] fixed top-0 left-0 right-0 ">
      <input
        type="checkbox"
        className="peer opacity-0 absolute left-5 top-5 z-50 md:hidden"
      />
      <label className=""></label>
      <MdOutlineMenu className="absolute left-5 top-5 z-40 md:hidden" />
      <div className="md:px-24 shadow-2xl max-[767px]:hidden peer-checked:flex max-[767px]:-translate-y-[100%] peer-checked:translate-y-0 transition-all duration-200 flex  items-center justify-between w-full md:h-[80px] flex-col md:flex-row bg-[#2D6187]">
        <h1 className=" max-[767px]:absolute max-[767px]:right-5 max-[767px]:top-5">
          HADIS MOMENI
        </h1>
        <ul className=" pt-20 md:pt-0 flex flex-col md:flex-row items-center justify-center gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Education</li>
        </ul>
      </div>
    </div>
  );
}
