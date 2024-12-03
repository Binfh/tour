import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { assets } from '../assets/assets'
import { useDarkMode } from './Context/DarkModeContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useSign } from './Context/SignContext'

const Profile = () => {
  const {darkMode} = useDarkMode()
  const {setSignUp} = useSign()
  const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo'); 
        
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo)); 
        }
    }, []); 
  return (
    <>
      <Navbar/>
      <div className='mt-[90px] relative'>
        <img className='w-full object-cover h-[288px] ' src={assets.bg_profile}/>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#67697A] bg-opacity-50' : 'bg-transparent'} z-10`} />
        <div className='absolute lg:top-[110px] sm:top-[-150px] bb:top-[90px] bb:pl-4 sm:mx-20 w-full pr-[15px] lg:max-w-[1200px] sm:max-w-[540px] lg:pt-0 sm:pt-[30%] bb:ml-0 z-20'>
          <h4 className='mb-1 font-greatVibes text-[38px] pt-[48px]'>Profile</h4>
          <ul className='flex items-center'>
            <li className='font-bold text-[15px] capitalize hover:text-main hover:transition-all duration-500'><Link onClick={() => setSignUp(true)} to={'/'}>Home</Link></li>
            <li className='font-medium text-[15px] capitalize'><FontAwesomeIcon className='mx-2' icon={faArrowRight}/>Profile</li>
          </ul>
        </div>
      </div>
      <div className='my-6 w-[400px] mx-auto'>
        {userInfo && (
          <>
            <h2 className='text-[40px] font-Ubuntu'>Hello {userInfo.username}</h2>
            <p className='py-3'>Your Email: {userInfo.email}</p>
            <p>Your Phone Number: {userInfo.phone}</p>
          </>
        )}
        </div>
      <Footer/>
    </>
  )
}

export default Profile