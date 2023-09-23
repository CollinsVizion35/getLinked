import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';


import { ColorRing, MutatingDots } from "react-loader-spinner";

import manSit from '/manSit.png'
import walkinpeople from '/walkinpeople.png'
import satagra from '/sata gra.png'
import satapu from '/star pu.png'
import star4 from '/star4.png'
import star5 from '/star5.png'
import ConfirmModal from './confirmModal'
import { AppPass } from '../../../contexts/AppContext';

function RegisterBox() {
  
  const {confirmedRef} = AppPass()

  // category get --------------------------------------------------------------------------------------------------
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://backend.getlinked.ai/hackathon/categories-list',
        headers: {
          'Content-Type': 'application/json'
        },
        data: ''
      };

      try {
        const response = await axios(config);
        console.log('Response:', JSON.stringify(response.data));
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);


  // Registration POST API --------------------------------------------------------------------------------------------
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [team_name, setTeam_name] = useState('')
  const [group_size, setGroup_size] = useState(0)
  const [project_topic, setProject_topic] = useState('')
  const [category, setCategory] = useState(1)
  const [privacy_policy_accepted, setPrivacy_policy_accepted] = useState(true)



  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = JSON.stringify({
      "email": email,
      "phone_number": phone_number,
      "team_name": team_name,
      "group_size": group_size,
      "project_topic": project_topic,
      "category": category,
      "privacy_policy_accepted": privacy_policy_accepted,
    });

    console.log(data)

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://backend.getlinked.ai/hackathon/registration',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    try {
      const response = await axios(config);
      confirmedRef.current.style.display = "flex";
      console.log('Registration successful!', response.data);
    } catch (error) {
      console.error('Error response data:', error.response ? error.response.data : 'No response data');
      alert('Registration Failed!')
    }
  };


  const inputStyles = {
    fontSize: '0.6rem',
    verticalAlign: 'top',
    backgroundColor: 'transparent'
  }

  return (
    <div className='lg:h-[85vh] h-[87vh] lg:mt-[15vh] w-[100vw] lg:max-w-[1440px] flex lg:flex-row flex-col items-center px-[10vw]'>
      {/* design ---------------------------------------------------- */}
      <div className='glow-circle absolute left-[5%] top-[20vh] z-[-99]'></div>
      <div className='glow-circle absolute bottom-[5vh] right-0 z-[-99]'></div>
      {/* <img src={circle} className='absolute top-[15vh] left-[10%] lg:hidden' /> */}
      <img src={satagra} className='twink5 absolute top-[25vh] left-[10%]' />
      <img src={satapu} className='twink1 absolute top-[80vh] left-[48%]' />
      <img src={star5} className='twink2 absolute top-[90vh] right-[10%]' />
      <img src={star4} className='twink6 absolute top-[16vh] right-[10%]' />
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
          <form className='flex flex-col lg:space-y-4' onSubmit={handleSubmit}>
            <div className='flex lg:flex-row flex-col lg:space-x-3 lg:space-y-0 space-y-2'>
              <div className='flex flex-col space-y-2 w-[100%]'>
                <label className='text-[0.6em]' htmlFor="Team's Name">
                  Team's Name
                </label>
                <input
                  type='text'
                  className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-3 pr-3'
                  placeholder='Enter the name of your group'
                  name="team_name"
                  id="team_name"
                  value={team_name}
                  onChange={(event) =>
                    setTeam_name(event.target.value)
                  }
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
                  name="phone_number"
                  id="phone_number"
                  value={phone_number}
                  onChange={(event) =>
                    setPhone_number(event.target.value)
                  }
                />
              </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:space-x-3 lg:space-y-0 space-y-2 mt-2'>
              <div className='flex flex-col space-y-2 w-[100%]'>
                <label className='text-[0.6em]' htmlFor='Email'>
                  Email
                </label>
                <input
                  className=' bg-transparent border rounded-[2px] text-[0.8em] border-[#918d99] w-[100%] mx-auto p-3 pr-3'
                  placeholder='Enter your email address'
                  style={inputStyles}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
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
                  name="project_topic"
                  id="project_topic"
                  value={project_topic}
                  onChange={(event) =>
                    setProject_topic(event.target.value)
                  }
                />
              </div>
            </div>

            <div className='flex flex-row space-x-3 mt-2 lg:mt-auto'>
              <div className='flex flex-col space-y-2 lg:w-[100%] w-[120%]'>
                <label className='text-[0.6em]' htmlFor='Category'>
                  Category
                </label>
                <select className=' bg-transparent border rounded-[2px] text-[0.6em] border-[#918d99] w-[100%] mx-auto p-3'
                  id="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }>
                  <option className='bg-[#150e28]' value='Select your category'>
                    Select your category
                  </option>
                  {
                    categories.length > 0 ? (
                      categories.map((category, index) => (
                        <option className='bg-[#150e28]' key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <div>
                        <h3 className="text-2xl text-[#0A8453] font-Nunito fixed top-1/2 left-1/2 p-10 z-[1000]"
                          style={{ transform: "translate(-50%, -50%)" }}>
                          <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#d434fe', '#150e28']}
                          />
                        </h3>
                      </div>
                    )
                  }
                </select>
              </div>
              <div className='flex flex-col space-y-2 lg:w-[100%] w-[80%]'>
                <label className='text-[0.6em]' htmlFor='Group Size'>
                  Group Size
                </label>
                <select className=' bg-transparent border rounded-[2px] text-[0.6em] border-[#918d99] w-[100%] mx-auto p-3'
                  id="group_size"
                  value={group_size}
                  onChange={(event) =>
                    setGroup_size(parseInt(event.target.value, 10))
                  }>
                  <option className='bg-[#150e28]' value='Select'>Select</option>

                  <option className='bg-[#150e28]' value='1'>1</option>
                  <option className='bg-[#150e28]' value='2'>2</option>
                  <option className='bg-[#150e28]' value='3'>3</option>
                  <option className='bg-[#150e28]' value='4'>4</option>
                  <option className='bg-[#150e28]' value='5'>5</option>
                  <option className='bg-[#150e28]' value='6'>6</option>
                  <option className='bg-[#150e28]' value='7'>7</option>
                  <option className='bg-[#150e28]' value='8'>8</option>
                  <option className='bg-[#150e28]' value='9'>9</option>
                  <option className='bg-[#150e28]' value='10'>10</option>
                </select>
              </div>
            </div>

            <div className='text-[#d434fe]  text-[0.6em]'>
              Please review your registration details before submitting
            </div>
            <div className='text-[0.6em] flex flex-row items-center space-x-2'>
              <input type="checkbox"
                name="privacy_policy_accepted"
                id="privacy_policy_accepted"
                value={privacy_policy_accepted}
                onChange={(event) =>
                  setPrivacy_policy_accepted(event.target.value)
                } />
              <div>
                I agreed with the event terms and conditions and privacy policy
              </div>
            </div>

            <button className='mb-3' onClick={handleSubmit}>Submit</button>
          </form>

        </div>
      </div>

      <ConfirmModal/>
    </div>
  )
}

export default RegisterBox
