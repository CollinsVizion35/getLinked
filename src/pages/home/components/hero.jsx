import React, { useState, useEffect } from "react";

import vector4 from "/Vector 4.png";
import image1 from "/Image 1.png";
import boyAi from "/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import chain from "/chain.png";
import blast from "/blast.png";
import bulb1 from "/bulb1.png";
import star from "/star.png";
import star2 from "/star2.png";
import star3 from "/star3.png";

import { Fade, Slide } from "react-awesome-reveal";

import Deadline from "./deadline";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setDisplay("block");
    }, 3000);

    return () => clearTimeout(timeout1);
  }, []);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setDisplay("none");
    }, 5500);

    return () => clearTimeout(timeout2);
  }, []);

  return (
    <div className="lg:h-[85vh]  h-auto lg:mt-[15vh] mt-[0vh] mx-auto w-[100vw] flex lg:flex-row flex-col px-[5vw] border-b border-[#2c233e]">
      {/*  designs--------------------------------------------------------------------------- */}
      <div className="glow-circle absolute  left-[20vw] top-[20vh] "></div>
      <div className="glow-circle lg:block hidden absolute bottom-0  right-[20vw] top-[35vh] "></div>
      <img src={star} className="twink2 absolute top-[20vh] left-[20vw]" />
      <img src={star2} className="twink5 absolute top-[25vh] left-[55vw]" />
      <img src={star3} className="twink3 absolute bottom-[25vh] left-[35vw]" />
      {/*  designs  ends--------------------------------------------------------------------------- */}
      <div className="relative lg:hidden flex items-center">
        <div className="text-[1.5vh] flex items-center font-bold text-center mx-auto pt-[2vh]">
          Igniting a Revolution in HR innovation
        </div>
        <img
          src={vector4}
          className="absolute right-[25%] bottom-[-1vh] w-[30%]"
        />
      </div>
      <div className="lg:w-[50%] lg:h-full flex flex-col space-y-4 lg:pt-[20vh] z-[9] relative">
        <div
          style={{ display }}
          className="bulb  absolute lg:left-[65%] lg:top-[18vh] top-[-2vh] h-[3vh] left-[77%]"
        ></div>
        <img
          src={bulb1}
          className="lg:h-[7vh] absolute lg:left-[63%] lg:top-[16vh] top-[-2vh] h-[3vh] left-[77%]"
        />
        <Slide direction="left" duration={3000}>
          <div className="lg:text-[4rem] text-[2rem] text-center lg:text-start font-bold leading-tight tracking-tight">
            getlinked Tech
            <br />
            <div className="flex flex-row items-baseline  lg:justify-normal justify-center space-x-2">
              <div className="text-center">
                Hackathon <span className="text-[#d434fe]">1.0</span>
              </div>
              <div className="flex flex-row items-baseline">
                <img src={chain} className="lg:h-[4rem] h-[2rem]" />
                <img src={blast} className="lg:h-[4rem] h-[2rem]" />
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left" duration={3000} delay={500}>
          <div className=" text-center lg:text-start text-[0.8em] lg:text-[1em]">
            Participate in getlinked tech Hackathon 2023 stand
            <br />a chance to win a Big prize
          </div>
        </Slide>
        <Slide direction="left" duration={3000} delay={1000}>
          <div>
            <button
              className="button flex items-center mx-auto lg:mx-0 z-[99999999999]"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </Slide>

        {/* deadline ----------------------------------------------------------------------- */}
        <Slide direction="left" duration={3000} delay={1500}>
          <div className="lg:pt-[5vh] lg:mx-0  mx-auto">
            <Deadline />
          </div>
        </Slide>
      </div>
      <div className="lg:w-[50%] h-fit mt-[5vh] lg:mt-0">
        <div className="absolute w-full h-[85vh] hidden lg:block bg-[#150e28] z-[999999] right-0 opacity-10"></div>
        <div className="mb-[5vh] relative hidden lg:flex">
          <div className="text-[2.8vh] font-bold">
            Igniting a Revolution in HR innovation
          </div>
          <img
            src={vector4}
            className="toFro absolute right-[25%] bottom-[-1vh] w-[30%]"
          />
        </div>
        <div className="relative">
          <img
            src={image1}
            className="rotate1 absolute z-[99] opacity-90 right-[20%] top-[4vh] w-[70%]"
          />
          <img
            src={boyAi}
            className="static lg:absolute saturate-50 grayscale lg:h-[75.5vh] h-[47.5vh] lg:min-w-[110%] right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
