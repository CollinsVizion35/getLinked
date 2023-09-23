import React from 'react'
import Nav from '../home/components/nav'
import RegisterBox from './components/registerBox'

function Register() {
  return (
    <div  className='mx-auto  flex flex-col items-center justify-center'>
      <Nav/>
      <RegisterBox/>
    </div>
  )
}

export default Register
