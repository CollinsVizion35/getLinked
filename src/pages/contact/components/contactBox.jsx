import React from 'react'

import linkedIn from '/linkedIn.png'
import insta from '/insta.png'
import x from '/x.png'
import facebook from '/facebook.png'
import circle from '/circle.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from '/star4.png'
import star5 from '/star5.png'

function ContactBox () {
  const inputStyles = {
    fontSize: '0.8rem',
    verticalAlign: 'top',
    backgroundColor: 'transparent'
  }

  return (
    <div className='lg:h-[85vh] h-[87vh] w-[100vw] lg:max-w-[1440px] flex flex-row items-center px-[10vw]'>
      {/* design ---------------------------------------------------- */}
      <div className='glow-circle absolute left-[5%] top-[20vh] z-[-99]'></div>
      <div className='glow-circle absolute bottom-[5vh] right-0 z-[-99]'></div>
      <img src={circle} className='absolute top-[15vh] left-[10%] lg:hidden' />
      <img src={satagra} className='absolute top-[25vh] left-[10%]' />
      <img src={satapu} className='absolute top-[80vh] left-[48%]' />
      <img src={star5} className='absolute top-[90vh] right-[10%]' />
      <img src={star4} className='absolute top-[16vh] right-[10%]' />
      {/* design ends ---------------------------------------------------- */}

      
      <div className='w-[50%] hidden lg:flex flex-col space-y-3'>
        <div className='text-[#d434fe] text-[1.5em] font-bold'>
          Get in touch
        </div>
        <div className='text-[0.8em]'>
          Contact
          <br />
          Information
        </div>
        <div className='text-[0.8em]'>
          27,Alara Street
          <br />
          Yaba 100012
          <br />
          Lagos State
        </div>
        <div className='text-[0.8em]'>Call Us : 07067981819</div>
        <div className='text-[0.8em]'>
          we are open from Monday-Friday
          <br />
          08:00am - 05:00pm
        </div>
        <div className='flex flex-col space-y-2'>
          <div className='text-[#d434fe] '>Share on</div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={insta} alt='insta logo' className='h-[1.5vh]' />
            <img src={x} alt='x logo' className='h-[1.5vh]' />
            <img src={facebook} alt='facebook logo' className='h-[1.5vh]' />
            <img src={linkedIn} alt='linked logo' className='h-[1.5vh]' />
          </div>
        </div>
      </div>

      <div
        className='lgView w-[100%] lg:w-[50%] h-[80%] p-4 py-24 hidden lg:flex items-center rounded-[5px]'
        style={{ backgroundColor: 'rgba(143, 138, 153, 0.1)' }}
      >
        <div className='w-[70%] mx-auto  flex flex-col space-y-4'>
          <div className='text-[#d434fe]  w-[100%] mx-auto font-bold text-[0.8em]'>
            Questions or need assistance?
            <br />
            Let us know about it!
          </div>
          <form className='flex flex-col space-y-6'>
            <input
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2'
              placeholder='First Name'
              style={inputStyles}
            />
            <input
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2'
              placeholder='Mail'
              style={inputStyles}
            />
            <textarea
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2 h-[20vh]'
              placeholder='Message'
              style={inputStyles}
            />
          </form>

          <button className='w-fit mx-auto'>Submit</button>
        </div>
      </div>

      <div className='smView w-[100%] lg:w-[50%] h-[80%] p-4 py-6 flex lg:hidden items-center rounded-[5px]'>
        <div className='w-[90%] mx-auto  flex flex-col space-y-4'>
          <div className='text-[#d434fe]  w-[100%] mx-auto font-bold text-[1em]'>
            Questions or need
            <br /> assistance?
            <br />
            Let us know about it!
          </div>

          <div className='text-[0.8em]'>
            Email us below to any question related <br />
            to our event
          </div>
          <form className='flex flex-col space-y-6'>
            <input
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2'
              placeholder="Team's Name"
              style={inputStyles}
            />

            <input
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2'
              placeholder='Topic'
              style={inputStyles}
            />
            <input
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2'
              placeholder='Email'
              style={inputStyles}
            />
            <textarea
              type='text'
              className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-2 h-[20vh]'
              placeholder='Message'
              style={inputStyles}
            />
          </form>

          <button className='w-fit mx-auto'>Submit</button>

          <div className='flex flex-col space-y-3 items-center mt-[3vh]'>
            <div className='text-[#d434fe] text-[0.8em]'>Share on</div>
            <div className='flex flex-row space-x-2 items-center'>
              <img src={insta} alt='insta logo' className='h-[1.5vh]' />
              <img src={x} alt='x logo' className='h-[1.5vh]' />
              <img src={facebook} alt='facebook logo' className='h-[1.5vh]' />
              <img src={linkedIn} alt='linked logo' className='h-[1.5vh]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBox