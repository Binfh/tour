import React from 'react'
import Navbar from './Navbar'
import { abc, assets, blogC } from '../assets/assets'
import { useDarkMode } from './Context/DarkModeContext'
import { useSign } from './Context/SignContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faArrowRight, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const BlogDetail = () => {
    const {darkMode} = useDarkMode()
    const {signUp,setSignUp} = useSign()

    const check = () => {
        if(signUp){
          setSignUp(true)
        }else{
          setSignUp(false)
        }
    }
    const icons = [faFacebook,faTwitter,faInstagram]
  return (
    <>
        <Navbar/>
        <div className='relative h-[400px]' style={{ backgroundImage: `url('${assets.bg_about}')`, backgroundSize: 'cover', 
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat'}}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#67697A] bg-opacity-50' : 'bg-transparent'} z-10`} />
          <div className='absolute lg:top-[110px] sm:top-[-80px] bb:top-[90px] bb:pl-4 sm:mx-20 w-full pr-[15px] lg:max-w-[1200px] sm:max-w-[540px] lg:pt-0 sm:pt-[30%] bb:ml-0 z-20'>
            <h4 className='mb-1 font-greatVibes text-[38px] pt-[48px]'>Blog</h4>
            <ul className='flex items-center'>
              <li className='font-bold text-[15px] capitalize hover:text-main hover:transition-all duration-500'><Link onClick={check()} to={'/'}>Home</Link></li>
              <li className='font-medium text-[15px] capitalize'><FontAwesomeIcon className='mx-2' icon={faArrowRight}/>Blog</li>
            </ul>
          </div>
        </div>
        <div className='my-[100px]'>
            <div className='flex flex-wrap w-[90%] mx-auto justify-between'>
                <div className='lg:w-3/4 bb:w-full bb:mb-6'>
                    <img className='rounded-md' src={assets.blog4}/>
                    <div className='my-4'>
                        <div className='mr-5 flex'>
                            <Link className='group mr-4' to={'/'} >
                                <span className='w-[18px] text-main mr-2'><FontAwesomeIcon icon={faUser} /></span>
                                <span className='text-[15px] leading-6 text-[#8c8c8c] group-hover:text-main'>John</span>
                            </Link>
                            <div className=' mr-4'  >
                                <span className='w-[18px] text-main mr-2'><FontAwesomeIcon icon={faHeart} /></span>
                                <span className='text-[15px] leading-6 text-[#8c8c8c] '>23</span>
                            </div>
                            <div className=' mr-4'  >
                                <span className='w-[18px] text-main mr-2'><FontAwesomeIcon icon={faCalendarDay} /></span>
                                <span className='text-[15px] leading-6 text-[#8c8c8c] '>Dec 06, 2021</span>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-[24px] leading-[34px] font-semibold hover:text-main'>Travel the Most Beautiful Places in the World</h2>
                    <p className='text-[16px] mt-3 leading-[26px] text-[#8996c9]'>
                        <span className='text 18px font-semibold'>Bora Bora</span> <br />
                        When it comes to breathtaking beauty, few places can rival the stunning allure of Bora Bora. Nestled in the heart of the South Pacific, this idyllic island is often referred to as the &quot;Pearl of the Pacific&quot; and is renowned for its unparalleled landscapes, crystal-clear waters, and luxurious resorts.
                    </p>
                    <p className='text-[16px] mt-4 leading-[26px] text-[#8996c9]'>
                        Bora Bora is characterized by its dramatic volcanic mountains and vibrant coral reefs. The centerpiece of the island is Mount Otemanu, an extinct volcano that rises majestically from the lagoon, surrounded by lush greenery and cascading waterfalls. The contrast between the emerald mountains and the turquoise waters creates a postcard-perfect scene that captivates every visitor.
                    </p>
                    <p className='text-[16px] mt-4 leading-[26px] text-[#8996c9]'>
                        Bora Bora is home to some of the most luxurious resorts in the world, many of which offer overwater bungalows that provide direct access to the lagoon. Imagine waking up to the sound of waves lapping against your bungalow and stepping out onto your private deck to take in the breathtaking views. Resorts like the Four Seasons and St. Regis offer unparalleled service, exquisite dining, and spa treatments that will make your stay truly unforgettable.
                    </p>
                    <p className='text-[16px] mt-4 leading-[26px] text-[#8996c9]'>
                        Bora Bora stands out as one of the most beautiful places in the world, offering a perfect blend of natural beauty, luxury, and cultural richness. Whether you&#39;re seeking a romantic getaway, an adventurous escape, or simply a place to relax and soak in the sun, Bora Bora has something to offer everyone. It&#39;s a destination that will leave you breathless and create memories to last a lifetime. So, pack your bags and get ready to experience the magic of this tropical paradise!
                    </p>
                    <h2 className='text-[24px] leading-[34px] font-semibold font-Ubuntu mt-[40px]'>Maybe You are Interested in</h2>
                    <div className='flex flex-wrap justify-between my-[15px]'>
                        <div className='sm:w-1/2 bb:w-full flex flex-col items-start'>
                            <img className='rounded object-cover mb-3 w-[95%]' src={assets.blog1} alt="" />
                            <h4 className='cursor-pointer text-[20px] hover:text-main font-semibold leading-[26px] mb-2'>
                                Travel Inspiration
                            </h4>
                            <p className='text-[#8996c9]'>Discover Unique Destinations</p>
                        </div>
                        <div className='sm:w-1/2 bb:w-full flex flex-col items-start'>
                            <img className='rounded object-cover mb-3 w-[95%]' src={assets.blog3} alt="" />
                            <h4 className='cursor-pointer text-[20px] hover:text-main font-semibold leading-[26px] mb-2'>
                                Design Perspectives
                            </h4>
                            <p className='text-[#8996c9]'>Learn from Industry Experts</p>
                        </div>
</div>

                    <p className='text-[16px] mt-[30px] leading-[26px] text-[#8996c9]'>
                        Exploring unique destinations can transform your travels. Discovering hidden gems and connecting with local cultures enriches your journey, offering unforgettable adventures and insights.
                    </p>
                    <p className='text-[16px] mt-4 leading-[26px] text-[#8996c9]'>
                        Staying updated on design trends is vital for any creative professional. Engaging with industry insights can inspire innovative solutions and elevate your projects.
                    </p>
                    <div className='flex items-center my-[30px]'>
                        <h2 className='text-[20px] leading-[26px] font-Ubuntu font-semibold mr-10 '>Share this post:</h2>
                        <ul className='flex'>
                            {icons.map((icon,idx) =>(
                                <li key={idx} className='mr-2 mb-[10px] mt-3 '><Link className={`block w-[30px] h-[30px] rounded ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} text-[15px] leading-[30px] text-center text-white hover:bg-main hover:transition-all duration-500` }to={'#facebook'}><FontAwesomeIcon className={`text-[15px] leading-[32px] text-center ${darkMode ? 'text-white' : 'text-black'}` } icon={icon}/></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='lg:w-1/4 lg:pl-4 bb:w-full'>
                    <h4 className='text-[22px] leading-[32px] mb-[25px] font-Ubuntu font-bold'>Categories</h4>
                    <ul className='mb-[50px]'>
                        {blogC.map((blog,idx) =>(
                            <li key={idx} className={`border-solid border-b ${darkMode ? 'border-white' : 'border-black'} list-none mb-[10px] pb-[10px] flex items-center justify-between`}>
                            <Link className={`${darkMode ? 'text-white' : 'text-black'} leading-[25px] text-[17px] hover:text-main transition-all duration-500 ease-in`} to={''}>{blog.title}</Link>
                            <label className='px-2 py-1 rounded bg-main text-white text-[14px]'>{blog.num}</label>
                            </li>
                        ))}
                    </ul>
                    <h4 className='text-[22px] leading-[32px] mb-[25px] font-Ubuntu font-bold'>Recent Posts</h4>
                    {abc.map((ab,idx) => (
                        <div className='flex h-[80px] mb-[15px]' key={idx}>
                            <img className='rounded' src={ab.img} alt="" />
                            <div className='w-[140px] ml-[25px]'>
                                <h4 className='text-[18px] font-semibold leading-7 hover:text-main transition-all duration-500 ease-in'>{ab.title}</h4>
                                <p className='text-[#3F4661]'>{ab.date}</p>
                            </div>
                        </div>
                    ))}
                    <h4 className='text-[22px] leading-[32px] my-[25px] font-Ubuntu font-bold'>Tags</h4>
                    <div className='flex mb-4'>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded mr-4 `}>Travels</p>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded`}>Packages</p>
                    </div>
                    <div className='flex mb-4'>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded mr-4 `}>Tours</p>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded`}>Trip</p>
                    </div>
                    <div className='flex mb-4'>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded mr-4 `}>Beautiful</p>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded`}>World</p>
                    </div>
                    <div className='flex mb-4'>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded mr-4 `}>Destination</p>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded`}>Place</p>
                    </div>
                    <div className='flex mb-4'>
                        <p className={`py-2 px-6 ${darkMode ? 'bg-[#07052a]':'bg-[#f2f5f7]'} hover:bg-main cursor-pointer ${darkMode ? 'text-white' : 'text-black'} text-[16px] leading-[26px] font-medium rounded mr-4 `}>Adventure</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default BlogDetail