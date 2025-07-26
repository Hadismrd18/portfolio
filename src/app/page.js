"use client";

import Header from "@/components/Header";
import Image from "next/image";
import rect from "../../public/Group 11.png";
import me from "../../public/Group 20.svg";
import cssL from "../../public/css.svg";
import htmlL from "../../public/html.svg";
import js from "../../public/js.svg";
import mongo from "../../public/mongo.svg";
import mui from "../../public/mui.svg";
import next from "../../public/next.svg";
import node from "../../public/node.svg";
import react from "../../public/react.svg";
import redux from "../../public/redux.svg";
import sql from "../../public/sql.svg";
import tailwind from "../../public/tailwind.svg";
import git from "../../public/git.svg";
import pelle from "../../public/pelle.png";
import aps from "../../public/aps.png";
import uni from "../../public/uni.png";
import LogoLight from "../../public/LogoLight.png";
import greenRect from "../../public/greenRect.svg";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".home-text-section", {
        duration: 2,
        x: "-100vw",
      })
      .from(
        ".home-img-section",
        {
          duration: 1,
          opacity: 0,
        },
        1
      );

    gsap.from(".about", {
      x: "-100vh",
      duration: 2,
      scrollTrigger: {
        start: 400,
      },
      stagger: 2,
    });
  }, []);

  // the stagger property will help delay elements one by one instead of a general delay
  return (
    <ReactLenis root>
      <div className="font-[Poppins] bg-[#2D6187] w-full relative min-h-[100vh]">
        <Header />
        {/* home */}
        <div className="md:h-[100vh] home-section px-14 md:px-24 pt-48 mb-48 md:mb-0  flex-col md:flex-row flex w-full items-center justify-between">
          <div className="home-text-section flex flex-col items-start justify-start gap-5 md:gap-10">
            <h2 className="font-bold  md:text-2xl text-[#28ABB9] ">
              Hello, I’m Hadis,
            </h2>
            <h2 className="font-bold text-5xl md:text-7xl text-stroke">
              Software <br /> Developer
            </h2>
            <span className="text-[#EFFAD3] text-md md:text-2xl">Based in Tehran</span>
            <a
              href="pdfs/cv.pdf"
              download="cv.pdf"
              className="relative hover:scale-105 transition-all duration-150"
            >
              <Image src={rect} alt="rect" />
              <span className="absolute left-14 top-5">MY CV</span>
            </a>
          </div>
          <Image
            className="home-img-section w-full mt-10 md:mt-0 md:w-1/3 "
            src={me}
            alt="me"
          />
        </div>
        {/* about */}
        <div className=" px-14 md:px-24 mt-20 text-[#EFFAD3]">
          <h3 className="font-bold text-2xl sm:text-5xl md:text-7xl  about">about.</h3>
          <p className="w-full md:w-1/2 mt-8 about text-lg md:text-2xl">
            Creative Front-end Web developer with a strong eye for design and
            creating responsive,reusable components who is always looking out
            for bringing a designer’s idea into living code.
          </p>
        </div>
        {/* skills */}
        <div className=" px-14 md:px-24 mt-20 text-[#A8DDA8]">
          <h3 className="font-bold text-2xl sm:text-5xl md:text-7xl  ">skills.</h3>
          <div className="pl-7 min-[400px]:pl-20 gap-10  lg:pl-52 grid grid-cols-2 md:grid-cols-3 grid-rows-6 md:grid-rows-4 w-full mt-16">
            <Image src={next} alt="next" className="size-10" />
            <Image src={tailwind} alt="tailwind" className="size-10" />
            <Image src={node} alt="node" className="size-10" />
            <Image src={react} alt="react" className="size-10" />
            <Image src={mui} alt="mui" className="size-10" />
            <Image src={mongo} alt="mongo" className="size-10" />
            <Image src={redux} alt="redux" className="size-10" />
            <Image src={cssL} alt="css" className="size-10" />
            <Image src={sql} alt="sql" className="size-10" />
            <Image src={js} alt="js" className="size-10" />
            <Image src={htmlL} alt="html" className="size-10" />
            <Image src={git} alt="git" className="size-10" />
          </div>
        </div>
        {/* experience */}
        <div className=" px-14 md:px-24 mt-20 text-[#A8DDA8]">
          <h3 className="font-bold text-2xl sm:text-5xl md:text-7xl  ">Experience.</h3>
          <div className="mt-10">
            {/* aps */}
            <div className="flex flex-col items-start justify-center gap-5 w-full mt-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                <div className="flex items-center justify-center gap-2">
                  <Image src={aps} alt="aps" width={30} />
                  <h3 className="font-semibold text-md md:text-2xl">
                    APSignals , London | Co-mentor
                  </h3>
                </div>
                <span className="block">July 2025 - Present</span>
              </div>
              <p>
                APSignals is an IT company based in UK that holds online
                web-development bootcamps
              </p>
              <span className="font-semibold text-xl">TECHNOLOGIES</span>
              <div className=" ml-10 grid grid-cols-2 md:flex md:items-center md:justify-center gap-5">
                <Image width={30} src={next} alt="next" />
                <Image width={30} src={react} alt="react" />
                <Image width={30} src={redux} alt="redux" />
                <Image width={30} src={tailwind} alt="tailwind" />
                <Image width={30} src={mui} alt="mui" />
                <Image width={30} src={node} alt="node" />
                <Image width={30} src={mongo} alt="mongo" />
                <Image width={30} src={git} alt="git" />
              </div>
            </div>
            {/* rayan */}
            <div className="flex flex-col items-start justify-center gap-5 w-full mt-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                <div className="flex items-center justify-center gap-2">
                  <Image src={LogoLight} alt="LogoLight" width={30} />
                  <h3 className="font-semibold text-md md:text-2xl">
                    RayanPost , Tehran | Front-end Developer
                  </h3>
                </div>
                <span className="block">April 2024 - November 2024</span>
              </div>
              <p>
                Rayan Post is an online logistics platform that aims to
                streamline and automate transportation processes in Iran.
              </p>
              <span className="font-semibold text-xl">TECHNOLOGIES</span>
              <div className="ml-10 grid grid-cols-2 md:flex md:items-center md:justify-center gap-5">
                <Image width={30} src={next} alt="next" />
                <Image width={30} src={react} alt="react" />
                <Image width={30} src={redux} alt="redux" />
                <Image width={30} src={tailwind} alt="tailwind" />
              </div>
            </div>
          </div>
        </div>
        {/* education */}
        <div className=" px-14 md:px-24 mt-20 text-[#A8DDA8]">
          <h3 className="font-bold text-2xl sm:text-5xl md:text-7xl  ">Education.</h3>
          <div className="mt-10">
            {/* aps */}
            <div className="flex flex-col items-start justify-center gap-5 w-full mt-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                <div className="flex items-center justify-center gap-2">
                  <Image src={aps} alt="aps" width={30} />
                  <h3 className="font-semibold text-md md:text-2xl">
                    AP Signals Pre-Advance Bootcamp
                  </h3>
                </div>
                <span className="block"> August 2024 - July 2025</span>
              </div>
              <span className="font-semibold text-xl">Skills I gained:</span>
              <div className="flex items-center flex-col md:flex-row gap-2 justify-between w-full">
                <div className="ml-10 grid grid-cols-2 md:flex md:items-center md:justify-center gap-5">
                  <Image width={30} src={next} alt="next" />
                  <Image width={30} src={react} alt="react" />
                  <Image width={30} src={redux} alt="redux" />
                  <Image width={30} src={tailwind} alt="tailwind" />
                  <Image width={30} src={mui} alt="mui" />
                  <Image width={30} src={node} alt="node" />
                  <Image width={30} src={mongo} alt="mongo" />
                  <Image width={30} src={git} alt="git" />
                </div>
                <div className="relative hover:scale-105 transition-all duration-150">
                  <Image src={greenRect} alt="greenRect" />
                  <a href="pdfs/aps.jpg" download="aps.jpg">
                    {" "}
                    <span className="text-black absolute left-7 md:left-14  top-5">
                      Certificate
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* rayan */}
            <div className="flex flex-col items-start justify-center gap-5 w-full mt-20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                <div className="flex items-center justify-center gap-2">
                  <Image src={pelle} alt="pelle" width={30} />
                  <h3 className="font-semibold text-md md:text-2xl">
                    Pelle be Pelle web-development Bootcamp
                  </h3>
                </div>
                <span className="block">October 2023 - February 2024</span>
              </div>

              <span className="font-semibold text-xl">Skills I gained:</span>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-between w-full">
                <div className="ml-10 grid grid-cols-2 md:flex md:items-center md:justify-center gap-5">
                  <Image width={30} src={js} alt="js" />
                  <Image width={30} src={cssL} alt="css" />
                  <Image width={30} src={htmlL} alt="html" />
                  <Image width={30} src={git} alt="git" />
                </div>
                <div className="relative hover:scale-105 transition-all duration-150">
                  <Image src={greenRect} alt="greenRect" />
                  <a href="pdfs/pelle.pdf" download="pelle.pdf">
                    {" "}
                    <span className="text-black absolute left-7 md:left-14  top-5">
                      Certificate
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className=" px-14 md:px-24 bg-[#EFFAD3] mt-20 text-[#A8DDA8] py-20">
          <h3 className="font-bold text-2xl sm:text-5xl md:text-7xl  green-stroke">Contact.</h3>
          <div className="flex flex-col items-start justify-center gap-2 mt-10">
            {/* gmail */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <SiGmail />
                <span>MY EMAIL : </span>
              </div>
              <Link className="underline" href="mailto:\hadismraad@gmail.com">
                hadismraad@gmail.com
              </Link>
            </div>
            {/* linkedin */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <div className="flex items-center justify-center gap-1">
                <FaLinkedin />
                <span>MY LINKEDIN : </span>
              </div>
              <a
                className="underline"
                href="https://linkedin.com/in/hadis-momeni"
              >
                hadis-momeni
              </a>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
