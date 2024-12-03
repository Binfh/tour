import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDarkMode } from './Context/DarkModeContext'
import { useSign } from './Context/SignContext'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelopeOpenText, faMapMarkedAlt, faMobileAlt, } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'

const Contact = () => {
    const {darkMode} = useDarkMode()
    const {signUp,setSignUp} = useSign()

    const check = () => {
        if(signUp){
          setSignUp(true)
        }else{
          setSignUp(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Navbar/>
        <div className='relative h-[400px]' style={{ backgroundImage: `url('${assets.bg_about}')`, backgroundSize: 'cover', 
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat'}}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#67697A] bg-opacity-50' : 'bg-transparent'} z-10`} />
          <div className='absolute lg:top-[110px] sm:top-[-80px] bb:top-[90px] bb:pl-4 sm:mx-20 w-full pr-[15px] lg:max-w-[1200px] sm:max-w-[540px] lg:pt-0 sm:pt-[30%] bb:ml-0 z-20'>
            <h4 className='mb-1 font-greatVibes text-[38px] pt-[48px]'>Contact</h4>
            <ul className='flex items-center'>
              <li className='font-bold text-[15px] capitalize hover:text-main hover:transition-all duration-500'><Link onClick={check()} to={'/'}>Home</Link></li>
              <li className='font-medium text-[15px] capitalize'><FontAwesomeIcon className='mx-2' icon={faArrowRight}/>Contact</li>
            </ul>
          </div>
        </div>
        <div className='mt-[100px]'>
            <div className='max-w-[600px] mx-auto mb-12'>
                <p className='text-[32px] leading-[26px] font-greatVibes text-main text-center'>Contact Us</p>
                <h3 className='text-[38px] leading-10 font-Ubuntu text-center font-medium'>Get In Touch</h3>
            </div>
            <div className='py-12 px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[740px] lg:max-w-[960px] grid lg:grid-cols-3 bb:grid-cols-1 gap-5 items-center'>
                <div className={`flex ${darkMode ?'bg-[#0f183a]':'bg-white'} rounded-lg p-[30px] ${darkMode ?'shadow-custom':'shadow-custom1' } h-full `}>
                    <FontAwesomeIcon className='text-[40px] text-main' icon={faMapMarkedAlt}/>
                    <div className='ml-5'>
                        <h3 className='mb-2 text-[22px] font-bold'>Out Location</h3>
                        <p className='text-[16px] leading-[26px] text-[#8c8c8c]'>Tours, 10001, 5th Avenue, #06 lane street, NY - 62617.</p>
                    </div>
                </div>
                <div className={`flex ${darkMode ?'bg-[#0f183a]':'bg-white'} rounded-lg p-[30px] ${darkMode ?'shadow-custom':'shadow-custom1' } h-full `}>
                    <FontAwesomeIcon className='text-[40px] text-main' icon={faMobileAlt}/>
                    <div className='ml-5'>
                        <h3 className='mb-2 text-[22px] font-bold'>Give us a call</h3>
                        <Link to={'/tel:012 658 9874'} className={`text-[16px] leading-[26px] text-[#8c8c8c] ${darkMode ? 'hover:text-white':'hover:text-black'}`}>012 658 9874</Link>
                    </div>
                </div>
                <div className={`flex ${darkMode ?'bg-[#0f183a]':'bg-white'} rounded-lg p-[30px] ${darkMode ?'shadow-custom':'shadow-custom1' } h-full `}>
                    <FontAwesomeIcon className='text-[40px] text-main' icon={faEnvelopeOpenText}/>
                    <div className='ml-5'>
                        <h3 className='mb-2 text-[22px] font-bold'>Help Desk</h3>
                        <Link to={'/gmail'} className={`text-[16px] leading-[26px] text-[#8c8c8c] ${darkMode ? 'hover:text-white':'hover:text-black'}`}>dahav@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-[600px] mx-auto my-12'>
                <p className='text-[32px] leading-[26px] font-greatVibes text-main text-center'>Send your Queries</p>
                <h3 className='text-[38px] leading-10 font-Ubuntu text-center font-medium'>Drop Us Some Line</h3>
            </div>
            <form className='grid sm:grid-cols-2 bb:grid-cols-1 gap-5 max-w-[90%] mx-auto mb-12'>
                <input className={`px-[25px] border border-solid rounded-lg ${darkMode ? 'outline-1' : 'outline-main'} w-full h-[60px] ${darkMode ? 'bg-[#0f183a]' : '!bg-[#f2f5f7]'} text-[#060606] text-[16px]`} type="text" placeholder='Name' required />
                <input className={`px-[25px] border border-solid rounded-lg ${darkMode ? 'outline-1' : 'outline-main'} w-full h-[60px] ${darkMode ? 'bg-[#0f183a]' : '!bg-[#f2f5f7]'} text-[#060606] text-[16px]`} type="number" placeholder='Your Phone Number' required />
                <input className={`px-[25px] border border-solid rounded-lg ${darkMode ? 'outline-1' : 'outline-main'} w-full h-[60px] ${darkMode ? 'bg-[#0f183a]' : '!bg-[#f2f5f7]'} text-[#060606] text-[16px]`} type="email" placeholder='Email' required />
                <input className={`px-[25px] border border-solid rounded-lg ${darkMode ? 'outline-1' : 'outline-main'} w-full h-[60px] ${darkMode ? 'bg-[#0f183a]' : '!bg-[#f2f5f7]'} text-[#060606] text-[16px]`} type="text" placeholder='Subject' required />
            </form>
            <div className='h-[130px] max-w-[90%] mx-auto mt-[30px] mb-[100px]'>
                <textarea className={`w-full h-full rounded-lg resize-none border border-solid px-[25px] py-5 outline-none ${darkMode ? 'bg-[#0f183a] text-white caret-white focus:outline-1' : 'bg-[#f2f5f7] text-black caret-black focus:outline-main'} text-[#060606] text-[16px] `} placeholder='Message' required/>
                <Link className='mt-auto' to={'/abc'}><button className='float-right mt-6 bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1800ms] ease-in-out inline-block font-bold leading-[24px] px-[28px] py-[10px] text-center'>Submit now</button></Link>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact