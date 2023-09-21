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
    <div className='h-[100vh] max-w-[1440px] flex flex-row items-center px-[5vw] border-b border-[#2c233e] relative'>

         {/*  designs--------------------------------------------------------------------------- */}
            <img src={satapu} className="absolute top-[15vh] left-[2%]" />
            <img src={star4} className="absolute top-[50vh] left-[45%]" />
            <img src={star5} className="absolute top-[85vh] left-[76%]" />
            <img src={satagra} className="absolute top-[25vh] left-[52%]" />
            <img src={satagra} className="absolute top-[10vh] left-[62%]" />
            <img src={ques} className="absolute top-[9vh] left-[48%] h-[8vh]" />
            <img src={ques2} className="absolute top-[5vh] left-[56%] h-[8vh]" />
            <img src={ques} className="absolute top-[10vh] left-[68%] h-[8vh]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}
      <div className='w-[40vw]'>
        <div className='text-[1.5rem] font-bold mb-6'>
          Frequently Ask
          <br />
          <span className='text-[#d434fe] w-[50%]'>Question</span>
        </div>
        <div className='mb-6'>
          We got answers to the questions that you might
          <br />
          want to ask about getlinked Hackathon 1.0
        </div>
        <div className='flex flex-col space-y-3'>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em]'>
            <div>Can I work on a project I started before the hackathon?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em]'>
            <div>What happens if I need help during the hackathon?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em]'>
            <div>What happens if I don't have an idea for a project?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em]'>
            <div>Can I join a team or do I have to come with one?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em]'>
            <div>What happens after the hackathon ends</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
          <div className='border-b border-[#d434fe] p-2 flex flex-row justify-between text-[0.8em]'>
            <div>Can I work on a project I started before the hackathon?</div>
            <div className='text-[#d434fe] float-right flex'>+</div>
          </div>
        </div>
      </div>
      <div className='w-[60vw]'>
        <img src={manThink} alt='man Thinking' className='h-[70vh] w-full' />
      </div>
    </div>
  )
}

export default Faqs
