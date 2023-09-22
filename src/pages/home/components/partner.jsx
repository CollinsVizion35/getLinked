import React from "react";

import paybox from '/Paybox.png';
import vizual from '/Vizual Plus.png'
import winwise from '/Winwise logo White colour 1.png'
import wisper from '/wisper logo white.png'
import liberty from '/Liberty company logo white colour.png'
import libertyPay from '/Liberty company logo white.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from "/star4.png";
import star5 from "/star5.png";

function Partner() {
  return (
    <div className="lg:h-[100vh] max-w-[1440px] flex flex-col items-center px-[5vw] py-[5vh] border-b border-[#2c233e] relative">
        {/* design ---------------------------------------------------- */}
            <div className="glow-circle absolute z-[0] left-[10vw] top-[20vh]"></div>
            <div className="glow-circle absolute bottom-[5vh] z-[0] right-0"></div>
            <img src={satagra} className="absolute top-[20vh] left-[20%]" />
            <img src={satagra} className="absolute top-[30vh] left-[53%]" />
            <img src={star5} className="absolute top-[62vh] left-[53%]" />
            
        <div className="bar lg:h-[15vh] h-[10vh] absolute min-w-[0.2%] left-[42%] top-[34vh] lg:top-[36vh]"></div>
            <div className="bar lg:h-[15vh] h-[10vh] absolute min-w-[0.2%] right-[42%] top-[34vh] lg:top-[36vh]"></div>
            <div className="bar lg:h-[15vh] h-[10vh] absolute min-w-[0.2%] left-[42%] top-[48vh] lg:top-[58vh]"></div>
            <div className="bar lg:h-[15vh] h-[10vh] absolute min-w-[0.2%] right-[42%] top-[48vh] lg:top-[58vh]"></div>
            <div className="bar w-[12%] absolute min-h-[0.2%] left-[28%] top-[46vh] lg:top-[54.5vh]"></div>
            <div className="bar w-[12%] absolute min-h-[0.2%] top-[46vh] lg:top-[54.5vh]"></div>
            <div className="bar w-[12%] absolute min-h-[0.2%] right-[28%] top-[46vh] lg:top-[54.5vh]"></div>
        {/* design ends ---------------------------------------------------- */}
      <div className="flex flex-col items-center text-center mb-[12vh]">
        <div className="font-bold text-[3vh] mb-[2vh]">Partners and Sponsors</div>
        <div className="text-[1.5vh]">
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </div>
      </div>

      <div className="flex flex-row lg:py-[15vh] py-[5vh] lg:px-[15vw] px-[5vw] border rounded-[2%] border-[#d434fe] space-x-[12%]  items-center justify-start">
      <div className="flex flex-col items-center space-y-[10vh] w-[100%]">
        <img src={liberty} alt="Liberty assured logo" className="w-[60%] h-[6vh]"/>
        <img src={wisper} alt="whispersms logo" className="w-[60%] h-[6vh]"/>
      </div>
      <div className="flex flex-col items-center space-y-[10vh] w-[100%]">
        <img src={libertyPay} alt="liberty pay logo" className="w-[60%] h-[6vh]"/>
        <img src={paybox} alt="paybox logo" className="w-[60%] h-[6vh]"/>
        </div>
        
      <div className="flex flex-col items-center space-y-[10vh] w-[100%]">
        <img src={winwise} alt="winwise logo" className="w-[60%] h-[6vh]"/>
        <img src={vizual} alt="Vuzual plus logo" className="w-[60%] h-[6vh]"/>
        </div>
        </div>
    </div>
  );
}

export default Partner;
