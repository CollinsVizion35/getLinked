import React from 'react'

function Nav () {
  return (
    <div className='h-[15vh] pt-[5vh] pb-[2vh] px-[5%] flex flex-row max-w-[1440px] w-[100%] items-center mx-auto border-b border-[#2c233e]'>
      <div className='w-[30vw] text-[2rem] font-bold tracking-tight'>
        get<span className='text-[#d434fe]'>linked</span>
      </div>
      <div className='w-[60vw] flex flex-row items-center'>
        <div className='w-[46vw] float-left flex justify-end'>
          <div className='flex flex-row space-x-20'>
            <div>Timeline</div>
            <div>Overview</div>
            <div>FAQs</div>
            <div>Contact</div>
          </div>
        </div>
        <div className='w-[8vw] ml-[6vw]'>
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
