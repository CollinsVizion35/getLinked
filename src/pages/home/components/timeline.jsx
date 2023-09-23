import React from "react";

import satapu from "/star pu.png";
import star4 from "/star4.png";
import star5 from "/star5.png";

function Timeline() {
  return (
    <div className="min-h-[170vh]  max-w-[100vw] lg:max-w-[1440px] flex flex-col items-center px-[5vw] py-[5vh] relative">
      {/*  designs--------------------------------------------------------------------------- */}

      <img src={satapu} className="absolute top-[28vh] left-[30%]" />
      <img src={star4} className="absolute top-[155vh] left-[22%]" />
      <img src={star5} className="absolute top-[78vh] left-[75%]" />
      <div className="bar h-[10vh] lg:h-[18vh] left-[20%] lg:left-auto absolute min-w-[5px] top-[22vh] lg:top-[19vh]"></div>
      <div className="bar h-[10vh] lg:h-[15vh] left-[20%] lg:left-auto absolute min-w-[5px] top-[42vh] lg:top-[45vh]"></div>
      <div className="bar h-[10vh] lg:h-[15vh] left-[20%] lg:left-auto absolute min-w-[5px] top-[62vh] lg:top-[68vh]"></div>
      <div className="bar h-[12vh] lg:h-[15vh] left-[20%] lg:left-auto absolute min-w-[5px] top-[82vh] lg:top-[91vh]"></div>
      <div className="bar h-[10vh] lg:h-[15vh] left-[20%] lg:left-auto absolute min-w-[5px] top-[102vh] lg:top-[115vh]"></div>
      <div className="bar h-[10vh] lg:h-[15vh] left-[20%] lg:left-auto absolute min-w-[5px] top-[122vh] lg:top-[139vh]"></div>
      {/*  designs ends--------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center text-center mb-[8vh]">
        <div className="font-bold text-[3vh]">Timeline</div>
        <div className="text-[1.5vh]">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </div>
      </div>

      <div className="lg:hidden text-start w-[70%]">
        <div className="flex flex-col mb-[5vh] h-[15vh] justify-between">
          <div className="ml-[10%]">
            <div className="text-[#d434fe] font-bold mb-[1vh] text-[0.7em]">
              Hackathon Announcement
            </div>
            <div className="text-[1.5vh]">
              The getlinked tech hackathon 1.0 is formally announced
            
              to the general public and teams begin to get ready to register
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-[1vh] items-center">
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              1
            </div>
            <div className="text-[#d434fe] font-bold">November 18, 2023</div>
          </div>
        </div>

        <div className="flex flex-col mb-[5vh] h-[15vh] justify-between">
          <div className="ml-[10%]">
            <div className="text-[#d434fe] font-bold mb-[1vh] text-[0.7em]">
            Teams Registration begins
            </div>
            <div className="text-[1.5vh]">
              Interested teams can now show their interest in the
            
              getlinked tech hackathon 1.0 2023 by proceeding to register
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-[1vh] items-center">
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              2
            </div>
            <div className="text-[#d434fe] font-bold">November 18, 2023</div>
          </div>
        </div>

        <div className="flex flex-col mb-[5vh] h-[15vh] justify-between">
          <div className="ml-[10%]">
            <div className="text-[#d434fe] font-bold mb-[1vh] text-[0.7em]">
              Teams Registration ends
            </div>
            <div className="text-[1.5vh]">
              Interested Participants are no longer Allowed to
            
              register
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-[1vh] items-center">
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              3
            </div>
            <div className="text-[#d434fe] font-bold">November 18, 2023</div>
          </div>
        </div>

        <div className="flex flex-col mb-[5vh] h-[15vh] justify-between">
          <div className="ml-[10%]">
            <div className="text-[#d434fe] font-bold mb-[1vh] text-[0.7em]">
              Announcement of the accepted teams
            
              and ideas
            </div>
            <div className="text-[1.5vh]">
              All teams whom idea has been accepted into getlinked tech
            
              hackathon 1.0 2023 are formally announced
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-[1vh] items-center">
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              4
            </div>
            <div className="text-[#d434fe] font-bold">November 18, 2023</div>
          </div>
        </div>

        <div className="flex flex-col mb-[5vh] h-[15vh] justify-between">
          <div className="ml-[10%]">
            <div className="text-[#d434fe] font-bold mb-[1vh] text-[0.7em]">
              Getlinked Hackathon 1.0 Offically Begins
            </div>
            <div className="text-[1.5vh]">
              Accepted teams can now proceed to build their
            
              ground breaking skill driven solutions
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-[1vh] items-center">
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              5
            </div>
            <div className="text-[#d434fe] font-bold">November 18, 2023</div>
          </div>
        </div>

        <div className="flex flex-col mb-[5vh] h-[15vh] justify-between">
          <div className="ml-[10%]">
            <div className="text-[#d434fe] font-bold mb-[1vh] text-[0.7em]">
              Demo Day
            </div>
            <div className="text-[1.5vh]">
              The getlinked tech hackathon 1.0 is formally announced
            
              to the general public and teams begin to get ready to register
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-[1vh] items-center">
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              6
            </div>
            <div className="text-[#d434fe] font-bold">November 18, 2023</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-[100%] text-[1.5vh]">
        <div className="w-[100%] mt-[15vh]">
          <div className="flex flex-row space-x-6 items-center justify-around">
            <div className=" w-[40%] text-end">
              <div className="text-[#d434fe] font-bold mb-[1vh]">Hackathon Announcement</div>
              <div className="text-[1.5vh]">
                Teams get the opportunity to pitch their projects to judges.
                <br />
                The winner of the hackathon will also be announced on
                <br />
                this day
              </div>
            </div>
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              1
            </div>
            <div className="text-[#d434fe] w-[40%] font-bold">
              November 18, 2023
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[15vh]">
          <div className="flex flex-row space-x-6 items-center justify-around">
            <div className=" w-[40%] text-end">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                November 18, 2023
              </div>
            </div>
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              2
            </div>
            <div className="w-[40%] text-start">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                Teams Registration begins
              </div>
              <div className="text-[1.5vh]">
                Interested teams can now show their interest in the
                <br />
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[15vh]">
          <div className="flex flex-row space-x-6 items-center justify-around">
            <div className=" w-[40%] text-end">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                Teams Registration ends
              </div>
              <div className="text-[1.5vh]">
                Interested Participants are no longer Allowed to
                <br />
                register
              </div>
            </div>
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              3
            </div>
            <div className="text-[#d434fe] w-[40%] font-bold">
              November 18, 2023
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[15vh]">
          <div className="flex flex-row space-x-6 items-center justify-around">
            <div className=" w-[40%] text-end">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                November 18, 2023
              </div>
            </div>
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              4
            </div>
            <div className="w-[40%] text-start">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                Announcement of the accepted teams
                <br />
                and ideas
              </div>
              <div className="text-[1.5vh]">
                All teams whom idea has been accepted into getlinked tech
                <br />
                hackathon 1.0 2023 are formally announced
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[15vh]">
          <div className="flex flex-row space-x-6 items-center justify-around">
            <div className=" w-[40%] text-end">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                Getlinked Hackathon 1.0 Offically Begins
              </div>
              <div className="text-[1.5vh]">
                Accepted teams can now proceed to build their
                <br />
                ground breaking skill driven solutions
              </div>
            </div>
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              5
            </div>
            <div className="text-[#d434fe] w-[40%] font-bold">
              November 18, 2023
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[15vh]">
          <div className="flex flex-row space-x-6 items-center justify-around">
            <div className=" w-[40%] text-end">
              <div className="text-[#d434fe] font-bold mb-[1vh]">
                November 18, 2023
              </div>
            </div>
            <div className="num w-[2.5vh] h-[2.5vh] p-2 flex items-center justify-center">
              6
            </div>
            <div className="w-[40%] text-start">
              <div className="text-[#d434fe] font-bold mb-[1vh]">Demo Day</div>
              <div className="text-[1.5vh]">
                Teams get the opportunity to pitch their projects to judges.
                <br />
                The winner of the hackathon will also be announced on
                <br />
                this day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
