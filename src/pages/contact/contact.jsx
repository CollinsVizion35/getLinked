import React from 'react'
import Nav from '../home/components/nav'
import ContactBox from './components/contactBox'

function Contact() {
  return (
    <div className='mx-auto flex flex-col items-center justify-center'>
      <Nav/>
      <ContactBox/>
    </div>
  )
}

export default Contact
