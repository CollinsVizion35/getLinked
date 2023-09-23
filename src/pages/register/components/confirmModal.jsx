import React from "react";

import successMan from "/successful-man.png";
import successTick from "/successfully-done.png";
import wink from "/wink.png";
import satagra from "/sata gra.png";
import satapu from "/star pu.png";
import star4 from "/star4.png";
import star5 from "/star5.png";
import { AppPass } from "../../../contexts/AppContext";

function ConfirmModal() {
  const { confirmedRef } = AppPass();

  const handleClose = () => {
    confirmedRef.current.style.display = "none";
  };

  return (
    <div
      ref={confirmedRef}
      className="h-[100vh] w-[100vw] bg-[#150e28]  flex flex-row items-center fixed ml-0 bg-opacity-80  top-1/2 left-1/2 p-10 z-[1000]"
      style={{ transform: "translate(-50%, -50%)", display: "none" }}
    >
      {/* design ---------------------------------------------------- */}
      <img src={satagra} className="absolute top-[25vh] left-[10%]" />
      <img src={satapu} className="absolute top-[80vh] left-[48%]" />
      <img src={star5} className="absolute top-[90vh] right-[10%]" />
      {/* design ends ---------------------------------------------------- */}

      <div className="lg:w-fit w-[80%] lg:px-24 px-6 lg:py-6 py-6 rounded-[2px] mx-auto lg:h-[80vh] border-[#d434fe] border flex items-center flex-col text-center lg:space-y-3 space-y-5">
        <div className="lg:h-[40vh] h-[22vh] lg:w-[70%] w-[100%] relative flex flex-row">
          <img
            src={successTick}
            alt="tick success"
            className="absolute lg:left-[15%] left-[7%] lg:h-[40vh] h-[20vh] lg:w-[50%] w-[60%]"
          />
          <img
            src={successMan}
            alt="man success"
            className="absolute lg:right-[15%] right-[7%] lg:h-[45vh] h-[22vh] lg:w-[50%] w-[60%]"
          />
        </div>
        <div className="lg:text-[1.5em]  font-bold text-white lg:mt-auto mt-[-5vh]">
          Congratulations
          <br />
          you have successfully
          <br className="lg:hidden block" /> Registered!
        </div>
        <div className="flex flex-row  text-[0.8em] space-x-2">
          <div>
            Yes, it was easy and you did it!
            <br />
            check your mail box for next step
          </div>
          <img src={wink} alt="wink" className="h-[50%] mt-auto" />
        </div>
        <button className="button  w-full" onClick={handleClose}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;
