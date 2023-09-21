import React from "react";

import paybox from '/Paybox.png';
import vizual from '/Vizual Plus.png'
import winwise from '/Winwise logo White colour 1.png'
import wisper from '/wisper logo white.png'
import liberty from '/Liberty company logo white colour.png'
import libertyPay from '/Liberty company logo white.png'

function Partner() {
  return (
    <div className="h-[100vh] max-w-[1440px] flex flex-col items-center px-[5vw] py-[5vh] border-b border-[#2c233e] relative">
      <div className="flex flex-col items-center text-center mb-[8vh]">
        <div className="font-bold text-[3vh] mb-[2vh]">Partners and Sponsors</div>
        <div className="text-[1.5vh]">
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </div>
      </div>

      <div className="grid grid-cols-3 py-[10vh] px-[10vw] border rounded-[2%] border-[#d434fe]  items-center justify-start">
        <img src={liberty} alt="Liberty assured logo" className="w-[15vw] mb-[10vh] px-[15%]"/>
        <img src={libertyPay} alt="liberty pay logo" className="w-[15vw] mb-[10vh] px-[15%]"/>
        <img src={winwise} alt="winwise logo" className="w-[15vw] mb-[10vh] px-[15%]"/>
        <img src={wisper} alt="whispersms logo" className="w-[15vw]  px-[15%] m-0"/>
        <img src={paybox} alt="paybox logo" className="w-[15vw]  px-[15%]"/>
        <img src={vizual} alt="Vuzual plus logo" className="w-[15vw]  px-[15%]"/>
      </div>
    </div>
  );
}

export default Partner;
