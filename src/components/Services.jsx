import { faDiscourse } from '@fortawesome/free-brands-svg-icons'
import { faDragon, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDarkMode } from './Context/DarkModeContext'

const services = [
    {
        icon: faDragon,
        title: 'Wildlife Tours',
        des: 'Embark on unforgettable wildlife adventures, exploring stunning natural habitats with expert guides and unforgettable experiences '
    },
    {
        icon: faPlaneDeparture,
        title: 'Adventure Tours',
        des: 'Experience the thrill of adventure with our carefully curated tours, designed for adrenaline seekers and nature lovers alike.'
    },
    {
        icon: faDiscourse,
        title: 'Trip Planning',
        des: 'Let us help you plan the perfect trip with personalized itineraries, expert advice, and seamless travel arrangements.'
    }
]

const Services = () => {
    const { darkMode} = useDarkMode();
  return (
    <div className='py-12'>
        <div className='py-[48px] px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[740px] lg:max-w-[960px] '>
            <div className='mx-auto !max-w-[600px] text-center mb-12'>
                <p className='text-main text-[32px] leading-[26px] font-greatVibes '>Our Services</p>
                <h3 className='text-[38px] font-medium leading-[46px] font-Ubuntu  '>Our Amazing Services for your Travel</h3>
            </div>
            <div className='flex flex-wrap justify-between '>
                {services.map((service, idx) => (
                    <div key={idx} className=' my-5 px-3 lg:w-1/3 sm:w-1/2 sm:mx-auto bb:w-full bb:mx-0 bb:mt-3'>
                        <div className={`py-12 px-8  h-full border-solid border-[1px] text-center border-transparent rounded-lg ${darkMode ? 'bg-[#070e2a]' :'bg-[#f2f5f7]'} ${darkMode ? 'hover:bg-[#0F183A] transition-all duration-[1300ms] ease-in-out' :'hover:bg-white transition-all duration-[1300ms] ease-in-out '} hover:border-[#f2f5f7] `}>
                            <div>
                                <FontAwesomeIcon className='p-[18px] bg-main rounded-[50%] text-white text-[26px]' icon={service.icon} />
                                <h3 className='my-4 text-[26px] leading-[35px] font-semibold font-Ubuntu'>{service.title}</h3>
                                <p className='text-[#8c8c8c]'>{service.des}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
