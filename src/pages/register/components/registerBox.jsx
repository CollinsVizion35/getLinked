import React from 'react'

import manSit from '/manSit.png'
import walkinpeople from '/walkinpeople.png'
import circle from '/circle.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from '/star4.png'
import star5 from '/star5.png'
import ConfirmModal from './confirmModal'

function RegisterBox () {
  const inputStyles = {
    fontSize: '0.6rem',
    verticalAlign: 'top',
    backgroundColor: 'transparent'
  }

  return (
    <div className='lg:h-[85vh] h-[87vh] w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col items-center px-[10vw]'>
      {/* design ---------------------------------------------------- */}
      <div className='glow-circle absolute left-[5%] top-[20vh] z-[-99]'></div>
      <div className='glow-circle absolute bottom-[5vh] right-0 z-[-99]'></div>
      {/* <img src={circle} className='absolute top-[15vh] left-[10%] lg:hidden' /> */}
      <img src={satagra} className='absolute top-[25vh] left-[10%]' />
      <img src={satapu} className='absolute top-[80vh] left-[48%]' />
      <img src={star5} className='absolute top-[90vh] right-[10%]' />
      <img src={star4} className='absolute top-[16vh] right-[10%]' />
      {/* design ends ---------------------------------------------------- */}

      <div className='text-[#d434fe]  w-[100%] pt-3 lg:hidden mx-auto font-bold text-[1.5em]'>
        Register
      </div>

      <div className='lg:w-[50%] w-[100%] mx-auto flex space-y-3'>
        <img src={manSit} alt='man sitting down' />
      </div>

      <div className=' w-[100%] lg:w-[50%] h-[90%] lg:p-4 p-2 lg:py-24 flex items-center rounded-[5px] lg:bg-[#8f8a99] bg-none lg:bg-opacity-10'>
        <div className='lg:w-[70%] w-[90%] mx-auto  flex flex-col space-y-3'>
          <div className='text-[#d434fe] lg:block hidden w-[100%] mx-auto font-bold text-[1.5em]'>
            Register
          </div>
          <div className='text-[0.6em] flex flex-row items-baseline'>
            Be part of this movement!
            <img src={walkinpeople} alt='walking people' />
          </div>
          <div className='w-[100%] mx-auto text-[1em] font-bold'>
            CREATE YOUR ACCOUNT
          </div>
          <form className='flex flex-col lg:space-y-4'>
            <div className='flex lg:flex-row flex-col lg:space-x-3 lg:space-y-0 space-y-2'>
              <div className='flex flex-col space-y-2 w-[100%]'>
                <label className='text-[0.6em]' htmlFor="Team's Name">
                  Team's Name
                </label>
                <input
                  type='text'
                  className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-3 pr-3'
                  placeholder='Enter the name of your group'
                  style={inputStyles}
                />
              </div>
              <div className='flex flex-col space-y-2 w-[100%]'>
                <label className='text-[0.6em]' htmlFor='Phone'>
                  Phone
                </label>
                <input
                  type='text'
                  className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-3 pr-3'
                  placeholder='Enter your phone number'
                  style={inputStyles}
                />
              </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:space-x-3 lg:space-y-0 space-y-2 mt-2'>
              <div className='flex flex-col space-y-2 w-[100%]'>
                <label className='text-[0.6em]' htmlFor='Email'>
                  Email
                </label>
                <input
                  type='text'
                  className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-3 pr-3'
                  placeholder='Enter your email address'
                  style={inputStyles}
                />
              </div>
              <div className='flex flex-col space-y-2 w-[100%]'>
                <label className='text-[0.6em]' htmlFor='Project Topic'>
                  Project Topic
                </label>
                <input
                  type='text'
                  className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-3 pr-3'
                  placeholder='What is your group project topic'
                  style={inputStyles}
                />
              </div>
            </div>

            <div className='flex flex-row space-x-3 mt-2 lg:mt-auto'>
              <div className='flex flex-col space-y-2 lg:w-[100%] w-[120%]'>
                <label className='text-[0.6em]' htmlFor='Category'>
                  Category
                </label>
                <select className=' bg-transparent border rounded-[2px] text-[0.6em] border-[#918d99] w-[100%] mx-auto p-3'>
                  <option value='Select your category'>
                    Select your category
                  </option>

                  <option value='Select your category'>
                    Select your category
                  </option>
                </select>
              </div>
              <div className='flex flex-col space-y-2 lg:w-[100%] w-[80%]'>
                <label className='text-[0.6em]' htmlFor='Group Size'>
                  Group Size
                </label>
                <select className=' bg-transparent border rounded-[2px] text-[0.6em] border-[#918d99] w-[100%] mx-auto p-3'>
                  <option value='Select'>Select</option>

                  <option value='Select'>Select</option>
                </select>
              </div>
            </div>
          </form>
          <div className='text-[#d434fe]  text-[0.6em]'>
            Please review your registration details before submitting
          </div>
          <div className='text-[0.6em] flex flex-row items-center space-x-2'>
            <input type='checkbox' />
            <div>
              I agreed with the event terms and conditions and privacy policy
            </div>
          </div>

          <button className='mb-3'>Submit</button>
        </div>
      </div>

      <ConfirmModal className='hidden'/>
    </div>
  )
}

export default RegisterBox
