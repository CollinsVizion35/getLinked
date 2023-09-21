import React from 'react'

import womanSit from '/womanSit.png'
import star4 from "/star4.png";
import star5 from "/star5.png";

function Rules() {

    return (
        <div className='min-h-[50vh] w-[100%] flex flex-row items-center px-[5vw] relative border-b border-[#2c233e]'>

            {/*  designs--------------------------------------------------------------------------- */}
            <div className="glow-circle absolute z-[0] left-[20vw] top-[10vh]"></div>
            <div className="glow-circle absolute bottom-[-2vh] z-[0] right-[-5vw]"></div>
            <img src={star4} className="absolute top-[15vh] left-[20vw]" />
            <img src={star5} className="absolute top-[45vh] left-[35vw]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}


            <div className='flex  flex-col'>
                <div className='text-[1.5rem] font-bold mb-12'>Rules and<br /><span className='text-[#d434fe] w-[50%]'>Guidelines</span></div>
                <div>Our tech hackathon is a melting pot of visionaries, and its purpose is as<br />
                    clear as day: to shape the future. Whether you're a coding genius, a <br />
                    design maverick, or a concept wizard, you'll have the chance to transform <br />
                    your ideas into reality. Solving real-world problems, pushing the boundaries<br />
                    of technology, and creating solutions that can change the world,<br />
                    that's what we're all about!</div>
            </div>
            <div className='w-[50%] h-[90%]'>
                <img src={womanSit} alt='the big idea' /></div>
        </div>
    )
}

export default Rules
