import React from 'react'

import bigIdea from '/The big idea.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import arrow from '/arrow.png'

function Intro() {

    return (
        <div className='lg:min-h-[50vh] min-h-[100vh]  max-w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col items-center px-[5%] relative border-b border-[#2c233e]'>

            {/*  designs--------------------------------------------------------------------------- */}
            <img src={satagra} className="absolute top-[20vh] left-[5%]" />
            <img src={satapu} className="absolute top-[20vh] right-[10%]" />
            <img src={arrow} className="absolute top-[47vh] right-[65%] w-[5%]" />
            {/*  designs  ends--------------------------------------------------------------------------- */}

            <div className='lg:w-[50%] w-[100%] py-[5vh]'>
                <img src={bigIdea} alt='the big idea' className='lg:h-[50vh] h-[40vh] lg:ml-[10%] mx-auto'/></div>
            <div className='flex  flex-col py-[5vh] '>
                <div className='lg:text-[4.5vh] lg:text-start text-center font-bold mb-12 leading-tight tracking-tight'>Introduction to getlinked<br /><span className='text-[#d434fe]'>tech Hackathon 1.0</span></div>
                <div className='text-[80%] lg:text-start text-center leading-relaxed'>Our tech hackathon is a melting pot of<br className='block lg:hidden'/> visionaries, and its purpose is as <br className='hidden lg:block'/>
                    clear as<br className='block lg:hidden'/> day: to shape the future. Whether you're<br className='block lg:hidden'/> a coding genius, a <br className='hidden lg:block'/>
                    design maverick, or a<br className='block lg:hidden'/> concept wizard, you'll have the chance to<br className='block lg:hidden'/> transform <br className='hidden lg:block'/>
                    your ideas into reality. Solving<br className='block lg:hidden'/> real-world problems, pushing the boundaries <br/>
                    of technology, and creating solutions that can<br className='block lg:hidden'/> change the world,<br className='hidden lg:block'/>
                    that's what we're all about!</div>
            </div>
        </div>
    )
}

export default Intro
