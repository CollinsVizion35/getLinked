import React from "react";

import linkedIn from "/linkedIn.png";
import insta from "/insta.png";
import x from "/x.png";
import facebook from "/facebook.png";
import locate from "/locate.png";
import call from "/call.png";
import satagra from "/sata gra.png";
import satapu from "/star pu.png";
import star4 from "/star4.png";
import star5 from "/star5.png";
import { Fade, JackInTheBox } from "react-awesome-reveal";

function Footer() {
  return (
    <JackInTheBox duration={5000}>
      <div className="  mx-auto w-[100vw] lg:max-w-[1440px] flex flex-col items-center py-[5vh] space-y-[6vh] px-[5vw] bg-[#110b20] relative z-[-99]">
        {/*  designs--------------------------------------------------------------------------- */}
        <img src={satagra} className="absolute top-[30vh] left-[45%]" />
        <img src={star4} className="twink5 absolute top-[9vh] left-[68%]" />
        <img src={star5} className="twink4 absolute top-[10vh] left-[2%]" />
        <img src={star5} className="twink3 absolute top-[25vh] left-[86%]" />
        {/*  designs  ends--------------------------------------------------------------------------- */}

        <div className="flex lg:flex-row flex-col items-start justify-evenly w-[100%]">
          <div className="lg:w-[50%] w-[100%]">
            <div className="w-[35vw] text-[2rem] font-bold tracking-tight mb-3">
              get<span className="text-[#d434fe]">linked</span>
            </div>
            <div className="text-[1.5vh] mb-12">
              Getlinked Tech Hackathon is a technology innovation program{" "}
              <br className="hidden lg:block" />
              established by a group of organizations with the aim of showcasing{" "}
              <br className="hidden lg:block" />
              young and talented individuals in the field of technology
            </div>
            <div className="text-[1.5vh] mb-12 lg:mb-0">
              Terms of Use <span className="text-[#d434fe]">|</span> Privacy
              Policy
            </div>
          </div>

          <div className="text-[1.5vh] space-y-[1vh] w-[25%]">
            <div className="text-[#d434fe]">Useful Links</div>
            <div>Overview</div>
            <div>Timeline</div>
            <div>FAQs</div>
            <div>Register</div>
            <div className="flex flex-row space-x-2 items-center w-[100vw] lg:w-auto">
              <div className="text-[#d434fe] ">Follow us</div>
              <img src={insta} alt="insta logo" className="h-[1.5vh]" />
              <img src={x} alt="x logo" className="h-[1.5vh]" />
              <img src={facebook} alt="facebook logo" className="h-[1.5vh]" />
              <img src={linkedIn} alt="linked logo" className="h-[1.5vh]" />
            </div>
          </div>

          <div className="text-[1.5vh] space-y-[1vh] lg:w-[25%] mt-12 lg:mt-0">
            <div className="text-[#d434fe]">Contact Us</div>
            <div className="flex flex-row space-x-3 items-center">
              <img src={call} className="h-[1vh]" />
              <div>+234 6707653444</div>
            </div>
            <div className="flex flex-row space-x-3">
              <img src={locate} className="h-[1vh]" />
              <div>
                27,Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </div>
            </div>
          </div>
        </div>
        <div className="text-[0.8em] lg:text-[1em] pb-[5vh]">
          All rights reserved. © getlinked Ltd.
        </div>
      </div>
    </JackInTheBox>
  );
}

export default Footer;
