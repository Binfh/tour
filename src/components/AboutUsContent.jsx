import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const aboutUs = [
    {   
        icon:faCircleCheck,
        des:[
            '2000+ Our Worldwide Guide',
            '100% Trusted Tour Agency',
            '24+ Years of Experience',
            '100% Travelers are Happy'
        ]}
]

const AboutUsContent = () => {
  return (
    <div className='py-[48px] px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[750px] lg:max-w-[960px]'>
        <div className='mx-3 grid lg:grid-cols-2 bb:grid-cols-1 items-center'>
            <img className='rounded-lg max-w-full ' src={assets.about} alt='about'/>
            <div className='pr-3 pl-12 bb:mt-9'>
                <p className='text-main text-[32px] leading-[26px] font-greatVibes'>About Us</p>
                <h3 className='text-[38px] font-medium leading-[46px] font-Ubuntu '>Plan Your Trip with Tours</h3>
                <p className='leading-[26px] mt-[16px] text-[#8c8c8c]'>Plan your next adventure with Tours! Discover seamless travel planning, from customized itineraries to trusted travel advice. Let us take care of the details so you can focus on enjoying your journey.</p>
                <ul className='mt-6'>
                    {aboutUs.map((about, idx) => (
                        about.des.map((description, descriptionIdx) => (
                        <li key={`${idx}-${descriptionIdx}`}>
                            <FontAwesomeIcon className='mr-2 text-main' icon={about.icon} />
                            {description}
                        </li>
                        ))
                    ))}
                </ul>
                <Link to="/tour" className='bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1500ms] ease-in-out inline-block font-bold leading-[24px] mt-[48px] px-[28px] py-[10px] text-center'>Booking Now</Link>
            </div>
        </div>
    </div>
  )
}

export default AboutUsContent