import React, { useState, useEffect } from 'react';
import vector4 from "/Vector 4.png";
import image1 from "/Image 1.png";
import boyAi from "/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import chain from "/chain.png";
import blast from "/blast.png";
import bulb1 from "/bulb1.png";
import star from "/star.png";
import star2 from "/star2.png";
import star3 from "/star3.png";

import Deadline from "./deadline";

function Hero() {
    const [display, setDisplay] = useState('block');

    useEffect(() => {
        const timeout = setTimeout(() => {
          setDisplay('none');
        }, 2500);
    
        return () => clearTimeout(timeout);
      }, []);

  return (
    <div className="h-[90vh] max-w-[1440px] flex flex-row px-[5vw] border-b border-[#2c233e]">

        {/*  designs--------------------------------------------------------------------------- */}
      <div className="glow-circle absolute z-[0] left-[20vw] top-[20vh]"></div>
      <div className="glow-circle absolute bottom-0 z-[0] right-[20vw] top-[35vh]"></div>
      <img src={star} className="absolute top-[20vh] left-[20vw]"/>
      <img src={star2} className="absolute top-[25vh] left-[55vw]"/>
      <img src={star3} className="absolute bottom-[25vh] left-[35vw]"/>
        {/*  designs  ends--------------------------------------------------------------------------- */}


      <div className="w-[50vw] h-full flex flex-col space-y-4 pt-[20vh] z-[9] relative">
        <div style={{ display }} className="bulb absolute right-[9vw] top-[18vh]"></div>
        <img src={bulb1} className="h-[4rem] absolute right-[8vw] top-[15vh]"/>
        <div className="text-[4rem] font-bold leading-tight tracking-tight">
          getlinked Tech
          <br />
          <div className="flex flex-row items-baseline space-x-2">
            
            <div>
              Hackathon <span className="text-[#d434fe]">1.0</span>
            </div>
            <div className="flex flex-row items-baseline">
              <img src={chain} className="h-[4rem]" />
              <img src={blast} className="h-[4rem]" />
            </div>
          </div>
        </div>
        <div>
          Participate in getlinked tech Hackathon 2023 stand
          <br />a chance to win a Big prize
        </div>
        <div>
          <button>Register</button>
        </div>
        <div className="pt-[10vh]">
          <Deadline />
        </div>
      </div>
      <div className="w-[50vw] h-full z-[9]">
        <div className="absolute w-full h-full bg-[#150e28] z-[999999] right-[5px] opacity-10"></div>
        <div className="mb-[5vh] relative">
          <div className="text-[1.5rem] font-bold">
            Igniting a Revolution in HR innovation
          </div>
          <img
            src={vector4}
            className="absolute right-32 bottom-[-5px] w-[10vw]"
          />
        </div>
        <div className="relative">
          <img
            src={image1}
            className="absolute z-[99] opacity-90 right-[5vw] top-[4vh]"
          />
          <img
            src={boyAi}
            className="absolute saturate-50 grayscale h-[81.2vh] min-w-[45vw] right-[-15px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
