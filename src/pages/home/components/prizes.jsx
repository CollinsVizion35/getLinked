import React from "react";

import cup from "/cup.png";
import rewards from "/Rewards.png";
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from "/star4.png";
import star5 from "/star5.png";
import { JackInTheBox } from "react-awesome-reveal";

function Prizes() {
  return (
    <JackInTheBox duration={5000}><div className="lg:h-[100vh] py-6 max-w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col px-[5vw] bg-[#110b20] relative">

        
            {/*  designs--------------------------------------------------------------------------- */}
            <div className="glow-circle absolute z-[0] left-[20vw] top-[30vh]"></div>
            <div className="glow-circle absolute bottom-[5vh] z-[0] right-[-10vw]"></div>
            <img src={satapu} className="twink1 absolute top-[5vh] left-[20%]" />
            <img src={star4} className="twink3 absolute top-[93vh] left-[74%]" />
            <img src={star5} className="twink1 absolute top-[40vh] left-[86%]" />
            <img src={star5} className="twink6 absolute top-[30vh] left-[52%]" />
            <img src={star5} className="twink4 absolute top-[90vh] left-[17%] " />
            <img src={satagra} className="twink5 absolute top-[19vh] left-[77%] z-[0]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}
            <div className="block lg:hidden text-center items-center">
          <div className="text-[1.5rem] font-bold mb-6 z-[999]">
            Prizes and
            <br />
            <span className="text-[#d434fe] w-[50%]">Rewards</span>
          </div>
          <div>
            Highlight of the prizes or rewards for winners and
            <br />
            for participants.
          </div>
        </div>

      <div className="lg:w-[40%] py-[5vh] flex items-baseline z-[999]">
        <img src={cup} alt="trophy" className="lg:h-[70vh] h-[30vh] mt-auto lg:mb-[5vh] mx-auto"/>
      </div>
      <div className="lg:w-[60%] lg:py-[5vh] flex flex-col items-center">
        <div className="lg:block hidden">
          <div className="text-[1.5rem] font-bold mb-6 z-[999]">
            Prizes and
            <br />
            <span className="text-[#d434fe] w-[50%]">Rewards</span>
          </div>
          <div>
            Highlight of the prizes or rewards for winners and
            <br />
            for participants.
          </div>
        </div>
        <img src={rewards} alt="reward" className="lg:mt-[5vh] lg:h-[60vh] h-[30vh]"/>
      </div>
    </div></JackInTheBox>
  );
}

export default Prizes;
