import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-cards";
import { tours } from '../assets/assets'
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faRightLong, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useDarkMode } from './Context/DarkModeContext';


const FeaturedTours = () => {
  const { darkMode} = useDarkMode();
  return (
    <div className={`pt-6 pb-12 ${darkMode ? 'bg-[0F183A]' : 'bg-[#EEEEEE]'}`}>
      <div className='py-12 px-3'>
        <div className='mb-12'>
          <p className='font-greatVibes text-[32px] leading-[26px] text-center text-main'>Featured tours</p>
          <h3 className='font-Ubuntu text-[38px] leading-[46px] font-medium text-center'>Most Popular Tours</h3>
        </div>
        <Swiper
          effect="cards"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            320: { 
              slidesPerView: 1, 
            },
            768: { 
              slidesPerView: 2, 
              spaceBetween: 15, 
            },
            1024: { 
              slidesPerView: 4, 
              spaceBetween: 20, 
            },
          }}
        >
          {tours.map((tour, idx) => (
            <SwiperSlide key={idx}>
              <div className='overflow-hidden mx-[1px] group cursor-auto'>
                <Link to={`/tour/${tour.id}`}>
                  <img className='block transition-transform duration-300 ease-linear rounded-t-lg w-full cursor-pointer group-hover:scale-105' src={tour.image} alt={tour.title} />
                </Link>
                <div className='py-5 px-[15px] bg-white rounded-b-[8px] border-t-transparent'>
                  <ul className='mb-2 flex items-center'>
                    {[...Array(4)].map((_, i) => (
                      <li key={i}><FontAwesomeIcon className='mr-1 z-10 text-yellow-400' icon={faStar} /></li>
                    ))}
                    <li><FontAwesomeIcon className='mr-1 z-10 text-yellow-400' icon={faStarHalfStroke} /></li>
                    <li className='ml-1 text-[#8c8c8c]'>{tour.rating}</li>
                  </ul>
                  <Link to={`/tour/${tour.id}`} className='text-xl leading-7 font-semibold text-text-color cursor-pointer group-hover:text-main'>{tour.title}</Link>
                  <p className='mt-1 text-base leading-[26px] text-[#8c8c8c]'><FontAwesomeIcon className='!text-main mr-1' icon={faLocationDot} />{tour.location}</p>
                  <div className='mt-2'>
                    <label className='text-[#8c8c8c] mr-1'>From</label>
                    <span className='text-main text-2xl font-bold'>{tour.price}</span>
                  </div>
                  <div className='mt-6 flex justify-between items-center'>
                    <p className='text-[15px] leading-[26px] text-[#8c8c8c]'><FontAwesomeIcon icon={faClock} className='!text-main mr-1' />{tour.duration}</p>
                    <Link to={`/tour/${tour.id}`} className='text-main font-semibold leading-6 cursor-pointer'>Explore <FontAwesomeIcon icon={faRightLong} /></Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedTours;
