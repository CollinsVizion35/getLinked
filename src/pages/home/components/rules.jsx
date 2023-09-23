import React from 'react'

import womanSit from '/womanSit.png'
import star4 from "/star4.png";
import star5 from "/star5.png";
import Ellipse1 from  "/Ellipse 1.png"

function Rules() {

    return (
        <div className='min-h-[50vh]  max-w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col-reverse items-center px-[5%] py-[5vh] lg:py-0 relative border-b border-[#2c233e]'>

            {/*  designs--------------------------------------------------------------------------- */}
            <div className="glow-circle absolute z-[0] left-[20vw] top-[10vh]"></div>
            <div className="glow-circle absolute bottom-[-2vh] z-[0] right-[-5vw]"></div>
            <img src={star4} className="absolute top-[15vh] left-[20vw]" />
            <img src={star5} className="absolute top-[45vh] left-[35vw]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}


            <div className='flex  flex-col ml-[5%]'>
                <div className='lg:text-[4.5vh] lg:text-start text-center  font-bold lg:mb-12 mb-3 leading-tight tracking-tight'>Rules and<br /><span className='text-[#d434fe]'>Guidelines</span></div>
                <div className='text-[80%] lg:text-start text-center leading-relaxed'>Our tech hackathon is a melting pot of<br className='block lg:hidden'/> visionaries, and its purpose is as <br className='hidden lg:block'/>
                    clear as day:<br className='block lg:hidden'/> to shape the future. Whether you're a coding<br className='block lg:hidden'/> genius, a <br className='hidden lg:block'/>
                    design maverick, or a concept<br className='block lg:hidden'/> wizard, you'll have the chance to transform <br/>
                    your ideas into reality. Solving real-world<br className='block lg:hidden'/> problems, pushing the boundaries <br className='hidden lg:block'/>
                    of<br className='block lg:hidden'/> technology, and creating solutions that can<br className='block lg:hidden'/> change the world,<br className='hidden lg:block'/>
                    that's what we're all about!</div>
            </div>
            <div className='lg:w-[50%] w-[100%] py-[5vh] relative'>
                <img src={womanSit} alt='woman sitting'  className='h-[50vh] lg:ml-[5%] w-[90%] lg:h-[50vh] mx-auto'/>
                <img src={Ellipse1} alt='pink circle'  className='absolute w-[12%] top-[11vh] right-[27%] z-[-99]'/></div>
        </div>
    )
}

export default Rules
