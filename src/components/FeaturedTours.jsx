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
            640: {
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
              <div className="h-full flex flex-col justify-between mx-[1px] border border-gray-200 rounded-lg overflow-hidden group">
                <Link to={`/tour/${tour.id}`}>
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      className="block transition-transform duration-300 ease-linear w-full cursor-pointer group-hover:scale-105 rounded-t-lg"
                      src={tour.image}
                      alt={tour.title}
                    />
                  </div>
                </Link>
                <div className="flex-grow flex flex-col justify-between py-5 px-[15px] bg-white rounded-b-lg">
                  <ul className="mb-2 flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <li key={i}>
                        <FontAwesomeIcon className="mr-1 text-yellow-400" icon={faStar} />
                      </li>
                    ))}
                    <li>
                      <FontAwesomeIcon className="mr-1 text-yellow-400" icon={faStarHalfStroke} />
                    </li>
                    <li className="ml-1 text-gray-500">{tour.rating}</li>
                  </ul>

                  <Link
                    to={`/tour/${tour.id}`}
                    className="text-xl font-semibold text-gray-800 leading-6 group-hover:text-main mb-2"
                  >
                    <div className="min-h-[48px] flex items-center">{tour.title}</div>
                  </Link>

                  <p className="mt-1 text-sm text-gray-600 flex items-center">
                    <FontAwesomeIcon className="text-main mr-1" icon={faLocationDot} />
                    {tour.location}
                  </p>

                  <div className="mt-4">
                    <span className="text-sm text-gray-500 mr-1">From</span>
                    <span className="text-main text-2xl font-bold">{tour.price}</span>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <p className="text-sm text-gray-500 flex items-center">
                      <FontAwesomeIcon className="text-main mr-1" icon={faClock} />
                      {tour.duration}
                    </p>
                    <Link
                      to={`/tour/${tour.id}`}
                      className="text-main font-semibold text-sm"
                    >
                      Explore <FontAwesomeIcon icon={faRightLong} />
                    </Link>
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
