import React from 'react'

import manWoman from '/manWoman.png'
import pinkEllipse from '/pinkEllipse.png'
import satapu from '/star pu.png'
import star4 from "/star4.png";
import star5 from "/star5.png";

function Criteria () {
  return (
    <div className='lg:h-[100vh] h-[110vh] max-w-[1440px] lg:text-start text-center flex lg:flex-row flex-col items-center px-[5vw] border-b border-[#2c233e] relative'>

        
            {/*  designs--------------------------------------------------------------------------- */}
            <div className="glow-circle absolute z-[0] bottom-[10vh]"></div>
            <div className="glow-circle absolute bottom-[-10vh] z-[0] right-0"></div>
            <img src={satapu} className="absolute top-[6vh] left-[12vw]" />
            <img src={star4} className="absolute top-[50vh] left-[24vw]" />
            <img src={star5} className="absolute top-[80vh] left-[35vw]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}

      <div className='w-[50%] relative mt-[3vh] lg:mt-0'>
        <img src={manWoman} alt='man and woman' className='z-[9999]' />
        <img
          src={pinkEllipse}
          alt='pinkEllipse'
          className='absolute top-[-2vw] left-[4vw] z-[-99] hidden lg:block'
        />
      </div>
      <div className='lg:w-[50%] w-[90%] flex flex-col'>
        <div className='lg:text-[1.5rem] text-[1em] font-bold lg:mb-12 mb-6'>
          Judging Criteria
          <br />
          <span className='text-[#d434fe] w-[50%]'>Key attributes</span>
        </div>

        <div className='flex flex-col space-y-3 text-[0.8em]'>
          <div className=' mx-auto'>
            <span className='text-[#e223a7]'>Innovation and Creativity:</span>{' '}
            Evaluate the uniqueness and creativity of the<br className='hidden lg:block'/> solution. Consider
            whether it addresses a real-world problem in a novel<br className='hidden lg:block'/> way or
            introduces innovative features.
          </div>
          <div className=' mx-auto'>
            <span className='text-[#e223a7]'>Functionality:</span> Assess how
            well the solution works. Does it perform its<br className='hidden lg:block'/> intended functions
            effectively and without major issues? Judges would<br className='hidden lg:block'/> consider the
            completeness and robustness of the solution.
          </div>
          <div className=' mx-auto'>
            <span className='text-[#e223a7]'>Impact and Relevance:</span>{' '}
            Determine the potential impact of the solution<br className='hidden lg:block'/> in the real world.
            Does it address a significant problem, and is it relevant<br className='hidden lg:block'/> to the
            target audience? Judges would assess the potential social,<br className='hidden lg:block'/> economic,
            or environmental benefits.
          </div>
          <div className=' mx-auto'>
            <span className='text-[#e223a7]'>Technical Complexity:</span>{' '}
            Evaluate the technical sophistication of the solution.<br className='hidden lg:block'/> Judges would
            consider the complexity of the code, the use of advanced<br className='hidden lg:block'/>
            technologies or algorithms, and the scalability of the solution.
          </div>
          <div className=' mx-auto'>
            <span className='text-[#e223a7]'>
              Adherence to Hackathon Rules:
            </span>{' '}
            Judges will Ensure that the team adhered<br className='hidden lg:block'/> to the rules and guidelines
            of the hackathon, including deadlines, use of<br className='hidden lg:block'/> specific technologies
            or APIs, and any other competition-specific requirements.
          </div>
        </div>
        <button className='w-fit mt-12 mx-auto lg:mx-0'>Read More</button>
      </div>
    </div>
  )
}

export default Criteria
