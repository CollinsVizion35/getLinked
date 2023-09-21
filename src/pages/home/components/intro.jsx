import React from 'react'

import bigIdea from '/The big idea.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import arrow from '/arrow.png'

function Intro() {

    return (
        <div className='min-h-[40vh] w-[100%] flex flex-row items-center px-[5vw] relative border-b border-[#2c233e]'>

            {/*  designs--------------------------------------------------------------------------- */}
            <img src={satagra} className="absolute top-[20vh] left-[5vw]" />
            <img src={satapu} className="absolute top-[20vh] right-[10vw]" />
            <img src={arrow} className="absolute top-[47vh] left-[30vw]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}

            <div className='w-[50%] py-[5vh] '>
                <img src={bigIdea} alt='the big idea' /></div>
            <div className='flex  flex-col py-[5vh] '>
                <div className='text-[1.5rem] font-bold mb-12'>Introduction to getlinked<br /><span className='text-[#d434fe] w-[50%]'>tech Hackathon 1.0</span></div>
                <div>Our tech hackathon is a melting pot of visionaries, and its purpose is as<br />
                    clear as day: to shape the future. Whether you're a coding genius, a <br />
                    design maverick, or a concept wizard, you'll have the chance to transform <br />
                    your ideas into reality. Solving real-world problems, pushing the boundaries<br />
                    of technology, and creating solutions that can change the world,<br />
                    that's what we're all about!</div>
            </div>
        </div>
    )
}

export default Intro
