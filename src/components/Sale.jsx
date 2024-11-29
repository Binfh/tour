import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay, faWindows } from '@fortawesome/free-brands-svg-icons'
import { useDarkMode } from './Context/DarkModeContext'

const Sale = () => {
    const { darkMode} = useDarkMode();
  return (
    <div className='my-12'>
        <div className='mx-auto px-[15px] py-[24px] xl:max-w-[1200px] sm:max-w-[740px] lg:max-w-[960px]'>
            <div className='mx-3 grid lg:grid-cols-2 bb:grid-cols-1 items-center'>
                <img className='max-w-full rounded-[8px] m-auto lg:order-1 bb:mt-8 bb:order-2' src={assets.sale} alt='/'/>
                <div className='pr-3 pl-12 lg:order-2 bb:order-1'>
                    <h6 className={`text-[14px] leading-6 uppercase ${darkMode ?'text-white':'text-[#060606]'} font-Ubuntu font-medium`}>For 30% Discount</h6>
                    <h4 className='mt-[6px] mb-[20px] uppercase text-[30px] leading-10 font-semibold font-Ubuntu'>Get Our Promocode</h4>
                    <p className='text-[#8c8c8c] text-base leading-[26px] mb-4'>Unlock savings with our special promo code! Enjoy exclusive discounts on your next adventure and make your trip even more memorable.</p>
                    <div>
                        <div className='mb-[10px]'>
                            <label className={`text-[16px] leading-[26px] font-semibold ${darkMode ?'text-white':'text-[#060606]'}`}>Never Miss a Deal !</label>
                        </div>
                        <form className='flex items-center ml-2  '>
                            <input className='px-3 pt-3 pb-[11px] rounded-tl-[30px] rounded-bl-[30px] outline-none border-[#EEEEEE] border-[1px] border-r-0 w-[70%] ' placeholder='Enter your email id'/>
                            <button type='submit' className='p-[13px] w-[160px] shadow-none text-center font-semibold text-[15px] text-white bg-main rounded-tr-[30px] rounded-br-[30px]'>Get Promocode</button>
                        </form>
                        <p className='pt-2 mt-6 text-[15px] leading-[26px] text-[#b7b7b7]'>(Or) To Get Our Mobile Apps</p>
                        <div>
                            <ul className='flex items-center mt-4'>
                                <li><Link className='mr-[10px] text-[28px] font-normal text-main' to={'/'}><FontAwesomeIcon icon={faApple}/></Link></li>
                                <li><Link className='mr-[10px] text-[28px] font-normal text-main' to={'/'}><FontAwesomeIcon icon={faGooglePlay}/></Link></li>
                                <li><Link className='mr-[10px] text-[28px] font-normal text-main' to={'/'}><FontAwesomeIcon icon={faWindows}/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sale