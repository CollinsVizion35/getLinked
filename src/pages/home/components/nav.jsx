import React from 'react'

function Nav() {
    return (
        <div className='h-[10vh] pt-[3vh] pb-[2vh] px-[5vw] flex flex-row max-w-[1440px] items-center justify-center mx-auto border-b border-[#2c233e]'>
            <div className='w-[35vw] text-[2rem] font-bold tracking-tight'>get<span className='text-[#d434fe]'>linked</span></div>
            <div className='w-[55vw] flex flex-row items-center justify-between'>
                <div>
                    <div className='flex flex-row space-x-20'>
                        <div>Timeline</div>
                        <div>Overview</div>
                        <div>FAQs</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
