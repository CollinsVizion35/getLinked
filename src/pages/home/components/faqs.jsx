import React, { useState } from 'react'

import ques from '/ques.png'
import ques2 from '/ques2.png'
import manThink from '/manThink.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from "/star4.png";
import star5 from "/star5.png";


const faqData = [
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer: 'No, you have to start up a new project for this Hackathon.',
  },
  {
    question: 'What happens if I need help during the hackathon?',
    answer: 'You can contact us through any of our social media page, our direct message is always open.',
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: 'You can check the internet for a good inspiration.',
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: 'You need a team to start the Hackathon, you can join 1 or startup yours.',
  },
  {
    question: "What happens after the hackathon ends",
    answer: 'Awards will be given to the best 3.',
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: 'No, you have to start up a new project for this Hackathon.',
  },
];

function Faqs () {

  const [openIndex, setOpenIndex] = useState(null);


  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <div className='lg:h-[100vh] h-[140vh] max-w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col items-center px-[5vw] border-b border-[#2c233e] relative'>

         {/*  designs--------------------------------------------------------------------------- */}
            <img src={satapu} className="absolute top-[10vh] left-[2%]" />
            <img src={star4} className="absolute top-[48vh] left-[50%]" />
            <img src={star5} className="absolute top-[85vh] left-[81%]" />
            <img src={satagra} className="absolute top-[25vh] left-[55%]" />
            <img src={satagra} className="absolute top-[10vh] left-[67%]" />
            <img src={ques} className="absolute bottom-[40vh] lg:top-[9vh] left-[22%] lg:left-[53%] h-[8vh]" />
            <img src={ques2} className="absolute bottom-[42vh] lg:top-[5vh] left-[40%] lg:left-[61%] h-[8vh]" />
            <img src={ques} className="absolute bottom-[39vh] lg:top-[10vh] left-[53%] lg:left-[73%] h-[8vh]" />
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
        {faqData.map((item, index) => (
        <div key={index} className={`flex flex-col faq-item border-b border-[#d434fe] ${openIndex === index ? 'active' : ''}`}>
          <div className="flex flex-row justify-between items-center p-2 text-sm" onClick={() => toggleAnswer(index)}>
            <div>{item.question}</div>
            <div className="text-[#d434fe] cursor-pointer">
              {openIndex === index ? '-' : '+'}
            </div>
          </div>
          <div className={`answer text-[0.7em] transition-opacity  ${openIndex === index ? 'opacity-100 p-2 duration-500' : 'opacity-0 h-0 p-0 duration-0'}`}>
            {item.answer}
          </div>
        </div>
      ))}
        </div>
      </div>
      <div className='w-[60vw]'>
        <img src={manThink} alt='man Thinking' className='lg:h-[75vh] h-[40vh] ml-[5%] mt-[17.5vh] lg:mt-0 w-[90%]' />
      </div>
    </div>
  )
}

export default Faqs
