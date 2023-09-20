import React from 'react'
import vector4 from '/Vector 4.png'
import image1 from '/Image 1.png'
import manAi from '/man-wearing-smart-glasses-touching-virtual-screen 1.png'

function Hero() {
    return (
        <div className='h-[85vh] max-w-[1440px] flex flex-row px-[5vw]'>
        <div className='glow-circle absolute z-[0] left-[20vw] top-[20vh]'></div>
        <div className='glow-circle absolute bottom-0 z-[0] right-[20vw] top-[35vh]'></div>
            <div className='w-[50vw] h-full flex flex-col space-y-4 pt-[20vh] z-[9]'>
                <div className='text-[4rem] font-bold'>getlinked Tech<br />Hackathon <span className='text-[#d434fe]'>1.0</span></div>
                <div>Participate in getlinked tech Hackathon 2023 stand<br/>
                    a chance to win a Big prize</div>
                <div className='mb-[10vh]'><button>Register</button></div>
                <div>00H 00m 00s</div>
            </div>
            <div className='w-[50vw] h-full z-[9]'>
                <div className='absolute w-full h-full bg-[#150e28] z-[999999] right-[5px] opacity-10'></div>
                <div className='mb-[5vh] relative'>
                    <div className='text-[1.5rem] font-bold'>Igniting a Revolution in HR innovation</div>
                    <img src={vector4} className='absolute right-32 bottom-[-5px] w-[10vw]'/>
                </div>
                <div className='relative'>
                    <img src={image1} className='absolute z-[99] opacity-90 right-[5vw] top-[4vh]' />
                    <img src={manAi} className='absolute saturate-50 grayscale h-[77.5vh] min-w-[45vw] right-[-15px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero
