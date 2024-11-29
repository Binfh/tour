import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faMoneyBillWave,  } from '@fortawesome/free-solid-svg-icons'

const reasons = [
    {   
        icon:faCertificate,
        title:'Professional and Certified',
        des:'We offer expert services with certified professionals, ensuring quality and reliability for your every journey.'
    },
    {
        icon:faMoneyBillWave,
        title:'Get Instant Tour Bookings',
        des:'Enjoy quick and hassle-free tour bookings with our seamless and reliable service.'
    },
]

const Reasons = () => {
  return (
    <div className='pt-2 pb-12 mx-auto xl:max-w-[1200px] sm:max-w-[740px] lg:max-w-[960px]'>
        <div className='px-[15px] pb-12 grid lg:grid-cols-2 bb:grid-cols-1 items-center '>
            <div >
                <img className='rounded-lg max-w-full' src={assets.about2} alt='about'/>
            </div>
            <div className='pr-3 lg:pl-12 bb:mt-8 bb:pl-2 '>
                <p className='text-main text-[32px] leading-[26px] font-greatVibes'>Our Features</p>
                <h3 className='text-[38px] font-medium leading-[46px] font-Ubuntu '>Why Choose Tours!</h3>
                <p className='leading-[26px] mt-[16px] text-[#8c8c8c]'>Discover seamless travel planning with our easy booking process, customized itineraries, and trusted services. Let us make your journey unforgettable!</p>
                {reasons.map((reason, idx) => (
                    <div className='mt-12' key={idx}>
                            <div className='grid grid-flow-col justify-start gap-5' >
                                <FontAwesomeIcon className='mr-2 text-main leading-[65px] text-[26px] p-[20px] bg-[#336dd514] rounded-[50%]' icon={reason.icon} />
                                <div>
                                    <h4 className='text-[22px] leading-[32px] font-bold mb-[6px]'>{reason.title}</h4>
                                    <p className='m-0 p-0 text-[16px] leading-[26px] text-[#8c8c8c]'>{reason.des}</p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reasons