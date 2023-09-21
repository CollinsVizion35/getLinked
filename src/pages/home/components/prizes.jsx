import React from "react";

import cup from "/cup.png";
import rewards from "/Rewards.png";
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from "/star4.png";
import star5 from "/star5.png";

function Prizes() {
  return (
    <div className="h-[100vh] max-w-[1440px] flex flex-row  px-[5vw] bg-[#110b20] relative">

        
            {/*  designs--------------------------------------------------------------------------- */}
            <div className="glow-circle absolute z-[0] left-[20vw] top-[30vh]"></div>
            <div className="glow-circle absolute bottom-[5vh] z-[0] right-[-10vw]"></div>
            <img src={satapu} className="absolute top-[5vh] left-[20%]" />
            <img src={star4} className="absolute top-[93vh] left-[74%]" />
            <img src={star5} className="absolute top-[40vh] left-[86%]" />
            <img src={star5} className="absolute top-[30vh] left-[52%]" />
            <img src={star5} className="absolute top-[90vh] left-[17%] " />
            <img src={satagra} className="absolute top-[19vh] left-[77%] z-[0]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}

      <div className="w-[40%] py-[5vh] flex items-baseline z-[999]">
        <img src={cup} alt="trophy" className="h-[70vh] mt-auto mb-[5vh]"/>
      </div>
      <div className="w-[60%] py-[5vh] flex flex-col items-center">
        <div>
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
        <img src={rewards} alt="reward" className="mt-[5vh] h-[60vh]"/>
      </div>
    </div>
  );
}

export default Prizes;