import React, { useState } from "react";

import menu from "/menu.png";
import back from "/back.png";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";

function Nav() {
  const navigate = useNavigate();

  // toggle color navbar
  const location = useLocation();

  const isPageInRoute = (route) => {
    return location.pathname === route;
  };

  // toggle menu
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="lgView fixed top-0 left-0 bg-[#150e28] bg-opacity-90 ml-0 w-[100%] border-b border-[#2c233e] z-[99999999999999]">
        <div className=" h-[15vh] hidden items-center  mx-auto  pt-[5vh] pb-[2vh] px-[5%] lg:flex flex-row">
          <div
            className="w-[30vw] text-[2rem] font-bold tracking-tight cursor-pointer"
            onClick={() => navigate("/")}
          >
            get<span className="text-[#d434fe]">linked</span>
          </div>
          <div className="w-[60vw] flex flex-row items-center">
            <div className="w-[46vw] float-left flex justify-end">
              <div className="flex flex-row space-x-20">
                <Fade direction="left" duration={3000}>
                  <div className=" cursor-pointer nav">Timeline</div>
                </Fade>
                <Fade direction="left" duration={3000} delay={500}>
                  <div className=" cursor-pointer nav">Overview</div>
                </Fade>
                <Fade direction="left" duration={3000} delay={1000}>
                  <div className=" cursor-pointer nav">FAQs</div>
                </Fade>
                <Fade direction="left" duration={3000} delay={1500}>
                  <div
                    className={`cursor-pointer nav ${
                      isPageInRoute("/contact_us")
                        ? "contact-gradient"
                        : "text-[#fcfcfc]"
                    }`}
                    onClick={() => navigate("/contact_us")}
                  >
                    Contact
                  </div>
                </Fade>
              </div>
            </div>
            <Fade direction="left" duration={3000} delay={2000}>
              <div className="w-[8vw] ml-[6vw]">
                {isPageInRoute("/register") ? (
                  <div>
                    <button
                      className="button cursor-pointer bg-none registering"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </button>
                  </div>
                ) : (
                  <button
                    className="button cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                )}
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="smView pt-[4vh] pb-[4vh] px-[5%] flex flex-row lg:hidden justify-between border-b border-[#2c233e]">
        <Link to="/Predict" className="text-[#ffffff]">
          <div className="text-[1rem] font-bold tracking-tight cursor-pointer">
            get<span className="text-[#d434fe]">linked</span>
          </div>
        </Link>

        <div
          onClick={toggleMenu}
          className="text-white transition duration-300 ease-in-out  z-[99999999999999]"
        >
          {isMenuVisible ? (
            <img
              src={back}
              alt="company Logo"
              className="h-[1rem] z-[99999999999999]"
            />
          ) : (
            <img src={menu} alt="company Logo" className="h-[1rem]" />
          )}
        </div>

        <ul
          className={`fixed top-0 left-0 flex flex-col rounded-[5px] space-y-4 p-3 px-12 pt-20 bg-[#150e28] z-[999] text-white transition duration-300 ease-in-out ${
            isMenuVisible
              ? "opacity-100 h-[50vh] w-[100%]"
              : "opacity-0 max-h-0"
          }`}
        >
          <Fade direction="left" duration={3000}>
            <li className="nav">Timeline</li>
          </Fade>
          <Fade direction="left" duration={3000} delay={500}>
            <li className="nav">Overview</li>
          </Fade>
          <Fade direction="left" duration={3000} delay={1000}>
            <li className="nav">FAQs</li>
          </Fade>
          <Fade direction="left" duration={3000} delay={1500}>
            <div
              className={`cursor-pointer nav ${
                isPageInRoute("/contact_us")
                  ? "contact-gradient"
                  : "text-[#fcfcfc]"
              }`}
              onClick={() => navigate("/contact_us")}
            >
              Contact
            </div>
          </Fade>
          <Fade direction="left" duration={3000} delay={2000}>
            <div className="w-[8vw]">
              {isPageInRoute("/register") ? (
                <div>
                  <button
                    className="button cursor-pointer bg-none registering"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </div>
              ) : (
                <button
                  className="button cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              )}
            </div>
          </Fade>
        </ul>
      </div>
    </>
  );
}

export default Nav;
