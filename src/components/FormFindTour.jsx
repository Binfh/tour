import React from 'react'
import { formFields } from '../assets/assets'
import { useDarkMode } from './Context/DarkModeContext';


const FormFindTour = () => {
    const { darkMode} = useDarkMode();

    return (
        <div className='py-12'>
            <div className='mx-auto px-[15px] py-[48px] xl:max-w-[1200px] sm:max-w-[750px] lg:max-w-[960px]'>
                <form
                    className={`grid lg:grid-cols-5 sm:grid-cols-3 bb:grid-cols-1 grid-rows-[82px] gap-[18px] items-center rounded-[4px] shadow-[0px_16px_48px_0px] ${darkMode ? 'shadow-[#0B122C]' : 'shadow-[#f5f3f3]'} leading-[24px] p-[50px]`}
                    action='#' method='post'
                >
                    {formFields.map((field, index) => (
                        <div key={index}>
                            <label className={` ${darkMode ? 'text-white' : 'text-text-color'} font-bold leading-6 `}>
                                {field.label}
                            </label>
                            {field.type === "date" ? (
                                <input
                                    className={`${darkMode ? '!bg-[#070E2A]' : '!bg-[#f2f5f7]'} ${darkMode ? '!text-white' : '!text-text-color'} px-[15px] text-[16px] h-[50px] w-full leading-6 rounded-[30px] mt-2 border-solid border-[1px] outline-none`}
                                    type='date' required
                                />
                            ) : (
                                <span className='bg-[#f2f5f7] rounded-[30px] border-solid'>
                                    <select
                                        className={`${darkMode ? 'bg-[#070E2A]' : '!bg-[#f2f5f7]'} ${darkMode ? '!text-white' : '!text-text-color'} px-[15px] mt-2 text-[16px] h-[50px] w-full leading-6 rounded-[30px] border-solid border-[1px] ${darkMode ? 'border-[#3F4661]' : 'border-[#EEEEEE]'} cursor-pointer outline-none ${darkMode ? '!hover:text-[#212529]' : 'hover:text-transparent'}`}
                                        required
                                    >
                                        {field.options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </span>
                            )}
                        </div>
                    ))}
                <div>
                    <button className='bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1800ms] ease-in-out inline-block font-bold leading-[24px] px-[28px] pt-[10px] pb-[11px] w-full text-center'>Find Tour</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormFindTour