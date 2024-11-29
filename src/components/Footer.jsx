import { faFacebook, faGithub, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from './Context/DarkModeContext'

const icons = [faFacebook,faLinkedin,faTwitter,faGooglePlus,faGithub]
const options = [
    {
        title:'Quick Links',
        opt :['About Us','Services','Work with us','Contact Us','Rewards'],
        href :['#about','#services','#workwithus','#contact','#rewards']
    },
    {
        title:'Explore',
        opt :['Blog Posts','Privacy policy','Our Partners','License & uses','Events'],
        href :['#blogposts','#policy','#ourpartners','#licenseuses','#events']
    }
]

const Footer = () => {
    const { darkMode} = useDarkMode();
  return (
    <div className={` py-12 ${darkMode ?'bg-[#0d132c]' :'bg-[#0e2244]'}`}>
        <div className='px-[15px] pt-12 pb-2 mx-auto xl:max-w-[1200px] sm:max-w-[740px] lg:max-w-[960px]'>
            <div className='flex flex-wrap'>
                <div className='flex-none max-w-full px-3 sm:w-1/2 lg:w-1/3 '>
                    <h6 className='mb-6 text-[20px] leading-[30px] font-semibold text-white'>Contact Info </h6>
                    <p className='pr-12 pb-1 mb-2 text-[15px] text-[#ababab]'>Address : Tours, 10001, 5th Avenue, #06 lane street, NY - 62617.
                    </p>
                    <p className='pb-1 mb-2 text-[15px] text-[#ababab]'>Phone Number : 
                        <Link className='hover:text-white transition-all duration-500' to={'tel:+1(21) 234 4567'}>+1(21) 234 4567</Link>
                    </p>
                    <p className='pr-12 pb-1 mb-2 text-[15px] text-[#ababab]'> Email : 
                        <Link className='hover:text-white transition-all duration-500' to={'mailto:info@example.com'}>info@example.com</Link>
                    </p>
                    <div className='mt-6'>
                        <ul className='flex'>
                            {icons.map((icon,idx) =>(
                                <li key={idx} className='mr-2 mb-[10px] '><Link className='block w-[30px] h-[30px] rounded-[50%] bg-white text-[15px] leading-[30px] text-center text-[#060606] hover:text-main hover:transition-all duration-500' to={'#facebook'}><FontAwesomeIcon className='text-[15px] leading-[32px] text-center ' icon={icon}/></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                {options.map((option,idx) =>(
                    <div key={idx} className={`flex-none flex flex-col max-w-full px-3 md:w-1/4 sm:w-1/2 lg:w-1/6 ${
                    idx === 1 ? 'pl-12' : ''
                    }`}>
                        <h6 className='mb-6 text-[20px] leading-[30px] font-semibold text-white'>{option.title} </h6>
                        <p className='flex flex-col text-[15px] text-[#ababab]'>
                            {option.opt.map((opt,idx) =>(
                                <Link key={idx} className='pb-1 mb-2 hover:text-white transition-all duration-500' to={option.href}>
                                    {opt}
                                </Link>
                            ))}
                        </p>
                    </div>
                ))}
                <div className=' max-w-full lg:pr-3 lg:pl-12 lg:mt-0 sm:w-1/2 sm:mt-8 sm:pl-0 lg:w-1/3 '>
                    <h6 className='mb-6 text-[20px] leading-[30px] font-semibold text-white'>Subscribe </h6>
                    <form method='post' action='#' >
                        <input className='text-center bg-white w-full py-[14px] px-[20px] outline-none border-none rounded-[30px] text-[#060606]' type='email' placeholder='Email Address'/>
                        <button className='mt-2 border-2 px-7 pt-[10px] pb-[11px] bg-main w-full border-main rounded-[30px] text-base font-bold text-white hover:text-main hover:bg-transparent transition-all duration-[1500ms] ease-in-out'>Subscribe</button>
                    </form>
                    <p className='mt-4 pb-1 text-[15px] text-[#ababab] leading-[26px]'>Subscribe to our mailing list and get updates to your email inbox.</p>
                </div>
            </div>
            <div className='mt-12'>
                <p className='pt-4 text-[15px] text-white tracking-half text-center'>
                © 2021 Tours. All rights reserved. Design by <Link className='text-main hover:text-[#4581ed] hover:transition-all duration-500' to={''}>SonBinhKhong</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer