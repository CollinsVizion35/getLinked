import React from 'react'

import ques from '/ques.png'
import ques2 from '/ques2.png'
import manThink from '/manThink.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from "/star4.png";
import star5 from "/star5.png";

function Faqs () {
  return (
    <div className='lg:h-[100vh] h-[110vh] max-w-[1440px] flex lg:flex-row flex-col items-center px-[5vw] border-b border-[#2c233e] relative'>

         {/*  designs--------------------------------------------------------------------------- */}
            <img src={satapu} className="absolute top-[10vh] left-[2%]" />
            <img src={star4} className="absolute top-[48vh] left-[50%]" />
            <img src={star5} className="absolute top-[85vh] left-[81%]" />
            <img src={satagra} className="absolute top-[25vh] left-[55%]" />
            <img src={satagra} className="absolute top-[10vh] left-[67%]" />
            <img src={ques} className="absolute top-[9vh] left-[53%] h-[8vh]" />
            <img src={ques2} className="absolute top-[5vh] left-[61%] h-[8vh]" />
            <img src={ques} className="absolute top-[10vh] left-[73%] h-[8vh]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}
      <div className='lg:w-[40vw]  ml-[5%]'>
        <div className='lg:text-[1.5rem] text-[1em] font-bold lg:mb-6 mb-3 lg:text-start text-center mt-[3vh] lg:mt-0'>
          Frequently Ask
          <br />
          <span className='text-[#d434fe] w-[50%]'>Question</span>
        </div>
        <div className='mb-6 lg:text-start text-center text-[0.8em] lg:text-[1em]'>
          We got answers to the questions that you might
          <br  className='hidden lg:block'/>
          want to ask about getlinked Hackathon 1.0
        </div>
        <div className='flex flex-col space-y-3'>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em] w-[80%] mx-auto'>
            <div>Can I work on a project I started before the hackathon?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em] w-[80%]  mx-auto lg:mx-0'>
            <div>What happens if I need help during the hackathon?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em] w-[80%]  mx-auto lg:mx-0'>
            <div>What happens if I don't have an idea for a project?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em] w-[80%]  mx-auto lg:mx-0'>
            <div>Can I join a team or do I have to come with one?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em] w-[80%]  mx-auto lg:mx-0'>
            <div>What happens after the hackathon ends</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em] w-[80%]  mx-auto lg:mx-0'>
            <div>Can I work on a project I started before the hackathon?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
        </div>
      </div>
      <div className='w-[60vw]'>
        <img src={manThink} alt='man Thinking' className='lg:h-[75vh] h-[40vh] ml-[5%] mt-[7vh] lg:mt-0 w-[90%]' />
      </div>
    </div>
  )
}

export default Faqs
