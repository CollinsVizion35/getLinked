import React from "react";

import tick from "/tick.png";
import secure from "/secure.png";
import manLock from "/manLock.png";
import satagra from "/sata gra.png";
import satapu from "/star pu.png";
import star4 from "/star4.png";
import star5 from "/star5.png";
import { JackInTheBox, Slide } from "react-awesome-reveal";

function Privacy() {
  return (
    <div className="lg:h-[100vh] h-fit   max-w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col lg:text-start text-center items-center px-[5vw] py-[5vh] relative justify-around">
      {/* design ---------------------------------------------------- */}
      <div className="glow-circle absolute lg:bottom-[5vh] bottom-[80vh] z-[0] left-[15%]"></div>
      <img src={satapu} className="twink1 absolute top-[20vh] left-[45%]" />
      <img src={satagra} className="twink2 absolute top-[60vh] left-[62%]" />
      <img src={satagra} className="twink3 absolute top-[70vh] left-[2%]" />
      <img src={star5} className="twink4 absolute top-[22vh] right-[20%]" />
      <img src={star5} className="twink5 absolute top-[75vh] left-[54%]" />
      <img src={star4} className="twink6 absolute top-[13vh] left-[25%]" />
      <img src={star4} className="twink4 absolute top-[67vh] right-[18%]" />
      {/* design ends--------------------------------------------- */}

      <div className="lg:w-[50%] flex flex-col space-y-6">
        <div className="space-y-3">
          <Slide duration={5000} direction="left"><div className="text-[1.5rem] font-bold z-[999]">
            Privacy Policy and
            <br/>
            <span className="text-[#d434fe] w-[50%]">Terms</span>
          </div></Slide>
          <Slide duration={5000} direction="left"><div className="text-[1.5vh]">Last updated on September 12, 2023</div></Slide>
        </div>
        <Slide duration={5000} direction="left"><div className="text-[1.5vh]">
          Below are our privacy & policy, which outline a lot of goodies. <br className="hidden lg:block"/>
          it’s our aim to always take of our participant
        </div></Slide>
        <Slide duration={5000} direction="left"><div className="text-[1.5vh] flex flex-col border rounded-[5px] border-[#d434fe] w-[90%] space-y-6 p-10 mx-auto lg:mx-0">
          <div>
            At getlinked tech Hackathon 1.0, we value your privacy
            <br className="hidden lg:block"/>
            and are committed to protecting your personal information.
            <br className="hidden lg:block"/>
            This Privacy Policy outlines how we collect, use, disclose, <br className="hidden lg:block"/>
            and safeguard your data when you participate in our tech <br className="hidden lg:block"/>
            hackathon event. By participating in our event, you consent <br className="hidden lg:block"/>
            to the practices described in this policy.
          </div>
          <diV>
            <div className="text-[#d434fe]">Licensing Policy</div>
            <div>Here are terms of our Standard License:</div>
          </diV>
          <div className="space-y-6">
            <div className="flex flex-row items-start space-x-3">
              <img src={tick} className="mr-3" /> The Standard License grants
              you a non-exclusive right to
              <br className="hidden lg:block"/>
              navigate and register for our event
            </div>
            <div className="flex flex-row items-start space-x-3">
              <img src={tick} className="mr-3" /> You are licensed to use the
              item available at any free source
              <br className="hidden lg:block"/>
              sites, for your project developement
            </div>
          </div>
          <button className="w-fit flex items-center justify-center mx-auto">
            Read More
          </button>
        </div></Slide>
      </div>
      <div className="relative w-[50%] mt-[5vh] lg:mt-0">
        <JackInTheBox duration={5000}><img src={manLock} alt="man on lock" className="z-[99] lg:h-[80vh] h-[50vh] w-[70%] ml-[15%]" /></JackInTheBox>
        <img
          src={secure}
          alt="secure logo"
          className="absolute top-0 z-[-99] lg:h-[50vh] h-[25vh] w-[70%] ml-[15%]"
        />
      </div>
    </div>
  );
}

export default Privacy;
