import React from "react";

import manWoman from "/manWoman.png";
import pinkEllipse from "/pinkEllipse.png";
import satapu from "/star pu.png";
import star4 from "/star4.png";
import star5 from "/star5.png";
import { Bounce, Fade, Hinge, Slide } from "react-awesome-reveal";

function Criteria() {
  return (
    <div className="lg:h-[100vh] h-fit py-6   mx-auto w-[100vw] lg:text-start text-center flex lg:flex-row flex-col items-center px-[5vw] border-b border-[#2c233e] relative">
      {/*  designs--------------------------------------------------------------------------- */}
      <div className="glow-circle absolute z-[0] lg:bottom-[10vh] top-[20vh] left-[25%] lg:left-auto"></div>
      <div className="glow-circle absolute lg:bottom-[-10vh] top-[90vh] z-[0] right-0"></div>
      <img src={satapu} className="twink1 absolute top-[6vh] left-[12vw]" />
      <img src={star4} className="twink5 absolute top-[50vh] left-[24vw]" />
      <img src={star5} className="twink2 absolute top-[80vh] left-[35vw]" />
      {/*  designs  ends--------------------------------------------------------------------------- */}

      <div className="w-[50%] relative mt-[3vh] lg:mt-0">
        
        <img
          src={pinkEllipse}
          alt="pinkEllipse"
          className="absolute top-[-2vw] left-[4vw] z-[0] hidden lg:block"
        />
        <Bounce duration={3000} triggerOnce>
          <img src={manWoman} alt="man and woman" className="z-[99999999]" />
        </Bounce>
      </div>
      <div className="lg:w-[50%] w-[90%] flex flex-col">
        <Fade duration={5000}>
          <div className="lg:text-[1.5rem] text-[1em] font-bold lg:mb-12 mb-6">
            Judging Criteria
            <br />
            <span className="text-[#d434fe] w-[50%]">Key attributes</span>
          </div>
        </Fade>

        <div className="flex flex-col space-y-3 text-[0.8em]">
          <Slide direction="right" duration={5000}>
            <div className=" mx-auto lg:mx-0">
              <span className="text-[#e223a7]">Innovation and Creativity:</span>{" "}
              Evaluate the uniqueness and creativity of the
              <br className="hidden lg:block" /> solution. Consider whether it
              addresses a real-world problem in a novel
              <br className="hidden lg:block" /> way or introduces innovative
              features.
            </div>
          </Slide>
          <Slide direction="right" duration={5000} delay={500}>
            <div className=" mx-auto lg:mx-0">
              <span className="text-[#e223a7]">Functionality:</span> Assess how
              well the solution works. Does it perform its
              <br className="hidden lg:block" /> intended functions effectively
              and without major issues? Judges would
              <br className="hidden lg:block" /> consider the completeness and
              robustness of the solution.
            </div>
          </Slide>
          <Slide direction="right" duration={5000} delay={700}>
            <div className=" mx-auto lg:mx-0">
              <span className="text-[#e223a7]">Impact and Relevance:</span>{" "}
              Determine the potential impact of the solution
              <br className="hidden lg:block" /> in the real world. Does it
              address a significant problem, and is it relevant
              <br className="hidden lg:block" /> to the target audience? Judges
              would assess the potential social,
              <br className="hidden lg:block" /> economic, or environmental
              benefits.
            </div>
          </Slide>
          <Slide direction="right" duration={5000} delay={900}>
            <div className=" mx-auto lg:mx-0">
              <span className="text-[#e223a7]">Technical Complexity:</span>{" "}
              Evaluate the technical sophistication of the solution.
              <br className="hidden lg:block" /> Judges would consider the
              complexity of the code, the use of advanced
              <br className="hidden lg:block" />
              technologies or algorithms, and the scalability of the solution.
            </div>
          </Slide>
          <Slide direction="right" duration={5000} delay={1100}>
            <div className=" mx-auto lg:mx-0">
              <span className="text-[#e223a7]">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered
              <br className="hidden lg:block" /> to the rules and guidelines of
              the hackathon, including deadlines, use of
              <br className="hidden lg:block" /> specific technologies or APIs,
              and any other competition-specific requirements.
            </div>
          </Slide>
        </div>
        <Fade duration={5000}>
          <button className="button w-fit mt-12 mx-auto lg:mx-0">Read More</button>
        </Fade>
      </div>
    </div>
  );
}

export default Criteria;
