import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {assets} from '../assets/assets'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {Link} from 'react-router-dom'
import { useDarkMode } from './Context/DarkModeContext';

const Slider = () => {
  const { darkMode} = useDarkMode();

  const sliders = [
    {img:assets.banner1,title:'Travel & Adventures',des:'Discover amzaing places at exclusive deals'},
    {img:assets.banner3,title:'Live your Adventure',des:'Take advantage of this amazing exclusive offers'},
    {img:assets.banner2,title:'Love and Travel',des:'Discover amzaing places at exclusive deals'},
    {img:assets.banner4,title:'Your Journey Begins',des:'Take advantage of this amazing exclusive offers'},
  ]
  return (
      <div className='mt-[90px] relative'>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Navigation, Pagination]}
          navigation ={ {clickable:true}}
          pagination={{ clickable: true }}
        >
          {sliders.map((slider,index) =>(
            <SwiperSlide key={index} className='relative'>
                <img src={slider.img} alt="Banner 1" className="w-screen h-height-slider object-cover" />
                <div className={`absolute inset-0 ${darkMode ? 'bg-[#67697A] bg-opacity-50' : 'bg-transparent'} z-10`} />
                <div className='absolute top-[120px] sm:mx-20 w-full px-[15px] lg:max-w-[1200px] sm:max-w-[540px] lg:pt-0 sm:pt-[30%] bb:ml-0 z-20'>
                  <h3 className='lg:text-[75px] font-medium lg:leading-[85px] font-greatVibes bb:text-[45px] bb:leading-[55px]'>{slider.title} </h3>
                  <p className='text-[18px] leading-[26px]'>{slider.des}</p>
                  <Link to="/tour" className='bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1500ms] ease-in-out inline-block font-bold leading-[24px] mt-[48px] px-[28px] py-[10px] text-center'>Explore More</Link>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
  );
};

export default Slider;
