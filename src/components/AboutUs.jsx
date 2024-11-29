import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDarkMode } from './Context/DarkModeContext'
import { assets,agents } from '../assets/assets'
import Map from './Map'
import Reasons from './Reasons'
import Sale from './Sale'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useSign } from './Context/SignContext'

const AboutUs = () => {
    const {darkMode} = useDarkMode()
    const {signUp,setSignUp} = useSign()

    const check = () => {
        if(signUp){
          setSignUp(true)
        }else{
          setSignUp(false)
        }
    }
  return (
    <>
        <Navbar/>
        <div className='relative h-[400px]' style={{ backgroundImage: `url(${assets.bg_about})`, backgroundSize: 'cover', 
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat'}}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#67697A] bg-opacity-50' : 'bg-transparent'} z-10`} />
          <div className='absolute lg:top-[110px] sm:top-[-80px] bb:top-[90px] bb:pl-4 sm:mx-20 w-full pr-[15px] lg:max-w-[1200px] sm:max-w-[540px] lg:pt-0 sm:pt-[30%] bb:ml-0 z-20'>
            <h4 className='mb-1 font-greatVibes text-[38px] pt-[48px]'>About us</h4>
            <ul className='flex items-center'>
              <li className='font-bold text-[15px] capitalize hover:text-main hover:transition-all duration-500'><Link onClick={check()} to={'/'}>Home</Link></li>
              <li className='font-medium text-[15px] capitalize'><FontAwesomeIcon className='mx-2' icon={faArrowRight}/>About us</li>
            </ul>
          </div>
        </div>
        <div className='py-12'>
            <div className='py-[48px] px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[750px] lg:max-w-[960px]'>
                <div className='mx-3 grid lg:grid-cols-2 bb:grid-cols-1 items-center'>
                    <img className='object-cover rounded-lg h-full' src={assets.about3}/>
                    <div className='lg:pl-12 bb:pl-0 bb:pt-7'>
                        <p className='font-greatVibes text-[32px] text-main'>About Us</p>
                        <h3 className='text-[38px] leading-[46px] font-medium font-Ubuntu'>World Best Travel Agency</h3>
                        <p className='mt-6 text-[#3F4661] text-[16px] leading-[26px]'> We are dedicated to creating unforgettable travel experiences that take you to the world&lsquo;s most exciting destinations. Our team is passionate about making your dream vacations come true, whether you&lsquo;re seeking a relaxing getaway or an adventurous journey.
    
                        We offer a wide range of services tailored to meet your individual travel preferences. With years of expertise in the travel industry, we ensure that every trip is seamlessly planned and executed, leaving you with memories that last a lifetime.
    
                        Let us guide you through the process of exploring new horizons and discovering the wonders of the world. Our commitment to quality, customer satisfaction, and innovation sets us apart as the leading travel agency in the world.</p>
                        <button className='mt-[48px] bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1800ms] ease-in-out inline-block font-bold leading-[24px] px-[28px] py-[10px] text-center'>Explore More </button>
                    </div>
                </div>
            </div>
        </div>
        <Map/>
        <div className='my-12'>
          <p className='text-main text-center font-greatVibes text-[32px] leading-[26px]'>Our Team</p>
          <h3 className='text-center font-Ubuntu text-[38px] leading-[46px]'>Meet our Tours Agents</h3>
          <div className='py-[48px] px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[750px] lg:max-w-[960px]'>
            <div className='mx-3 grid gap-3 lg:grid-cols-4 sm:grid-cols-2 bb:grid-cols-1 items-center'>
              {agents.map((agent,idx) =>(
                <div className='group' key={idx}>
                  <img className='rounded-t-[8px] w-full ' src={agent.img} />
                  <div className={`text-center text-[20px] w-full border-[1px] border-solid rounded-b-[8px] border-t-transparent font-semibold pt-5 pb-[15px] ${darkMode ? 'border-[#c0bfbf]' : ''} ${darkMode ? 'bg-[#070e2a]' :'bg-[#f2f5f7]'} ${darkMode ? 'hover:bg-[#0f183a]' :'hover:bg-[#fff]'} ${darkMode ? 'shadow-none':'shadow-custom1'}`}>
                    <div className='group-hover:text-main'>{agent.name}</div>
                    <div className='mt-4'>
                      <FontAwesomeIcon className='p-[15px] bg-main text-white rounded-[30px] text-[15px] mr-2 hover:bg-black hover:transition-all ease-in-out cursor-pointer duration-[1800ms]' icon={faFacebook}/>
                      <FontAwesomeIcon className='p-[15px] bg-main text-white rounded-[30px] text-[15px] mr-2 hover:bg-black hover:transition-all ease-in-out cursor-pointer duration-[1800ms]' icon={faTwitter}/>
                      <FontAwesomeIcon className='p-[15px] bg-main text-white rounded-[30px] text-[15px]  hover:bg-black hover:transition-all ease-in-out cursor-pointer duration-[1800ms]' icon={faLinkedin}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Reasons/>
        <div className='mt-[-40px]'/>
        <Sale/>
        <Footer/>
    </>
  )
}

export default AboutUs