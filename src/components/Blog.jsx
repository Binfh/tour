import React from 'react'
import { blogs } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDarkMode } from './Context/DarkModeContext'



const Blog = () => {
    const { darkMode} = useDarkMode();
  return (
    <div className={`${darkMode ? 'bg-[#070e2a]' :'bg-[#f2f5f7]'} py-12 `}>
        <div className='py-12 px-[15px] mx-auto xl:max-w-[1200px] sm:max-w-[740px] lg:max-w-[960px]'>
            <div className='text-center mx-auto !max-w-[600px] mb-12'>
                <p className='text-main text-[32px] leading-[26px] font-greatVibes text-center'>Our Blog</p>
                <h3 className='text-[38px] font-medium leading-[46px] font-Ubuntu text-center '>Learn more from our latest Blog Posts</h3>
            </div>
            <div className='flex flex-wrap '>
                {blogs.map((blog,idx) =>(
                    <div key={idx} className='group lg:w-1/3 sm:w-1/2 sm:mx-auto sm:my-8 bb:w-full bb:my-6 px-3' >
                        <div className='overflow-hidden mx-[1px] cursor-auto h-full flex flex-col justify-between'>
                            <Link className='relative'  to={'/blog'}>
                                <div className='overflow-hidden rounded-t-lg'>
                                    <img className='block transition-transform duration-300 ease-linear w-full cursor-pointer group-hover:scale-105 ' src={blog.image} alt='/'/>
                                </div>
                                <div className="absolute top-0 right-0 rounded-tr-lg text-[13px] text-white px-[15px] pt-3 pb-[10px] leading-[1] font-semibold bg-main uppercase before:content-[''] before:absolute before:top-0 before:left-0 before:border-t-[19px] before:border-solid before:border-t-main before:border-x-[12px] before:translate-x-[-50%] before:border-x-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:border-b-[19px] after:border-solid after:border-b-main after:border-x-[12px] after:translate-x-[-50%] after:border-x-transparent ">{blog.coursePriceBadge}</div>
                            </Link>
                            <div className={`py-5 px-[15px] ${darkMode ? 'bg-[#0F183A]' :'bg-white'} rounded-b-[8px] border-t-transparent flex flex-col justify-between h-full`}>
                                <div className='mb-4'>
                                    <div className='mr-5 flex'>
                                        <Link className='group mr-4' to={'/'} >
                                            <span className='w-[18px] text-main mr-2'><FontAwesomeIcon icon={faUser} /></span>
                                            <span className='text-[15px] leading-6 text-[#8c8c8c] group-hover:text-main'>{blog.name}</span>
                                        </Link>
                                        <div className=' mr-4'  >
                                            <span className='w-[18px] text-main mr-2'><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className='text-[15px] leading-6 text-[#8c8c8c] '>{blog.tym}</span>
                                        </div>
                                        <div className=' mr-4'  >
                                            <span className='w-[18px] text-main mr-2'><FontAwesomeIcon icon={faCalendarDay} /></span>
                                            <span className='text-[15px] leading-6 text-[#8c8c8c] '>{blog.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link className={`text-[24px] font-semibold leading-[34px] ${darkMode ? 'text-white':'text-[#060606]'} cursor-pointer hover:text-main  `} to={'/blog_detail'}>
                                    {blog.title}
                                </Link>
                                <p className='mt-2 text-[16px] leading-[26px] text-[#8c8c8c]'>{blog.des}</p>
                                <Link className='mt-auto' to={'/blog_detail'}><button className=' mt-6 bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1800ms] ease-in-out inline-block font-bold leading-[24px] px-[28px] py-[10px] text-center'>Read more</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog