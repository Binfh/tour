import React, { useEffect, useMemo, useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faMedal, faRoute, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'


const Map = () => {

    const counters = useMemo(() => {
        return [
            { icon: faRoute, to: 200, speed: 1500, des: 'Total Destinations' },
            { icon: faFaceSmile, to: 100, speed: 1500, des: 'Happy People' },
            { icon: faMedal, to: 30, speed: 1500, des: 'Awards Won' },
            { icon: faUmbrellaBeach, to: 130, speed: 1500, des: 'Stunning Places' },
        ];
    }, []);
    
    
    const [startCounting, setStartCounting] = useState(false);
    const counterRef = useRef(null);
    
    // Quan sát khi div xuất hiện trên màn hình
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartCounting(true); // Kích hoạt đếm khi div hiển thị
                    observer.unobserve(entry.target); // Ngừng quan sát sau khi kích hoạt
                }
            });
        }, { threshold: 0.5 }); // Kích hoạt khi 50% của div xuất hiện
    
        // Store the ref value in a local variable for stability
        const currentRef = counterRef.current;
    
        if (currentRef) {
            observer.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Use the stored `currentRef` in cleanup
            }
        };
    }, []);
    
    const [counts, setCounts] = useState(counters.map(() => 0));
    
    useEffect(() => {
        if (!startCounting) return;
        
        const timers = counters.map((counter, index) => {
            const incrementInterval = counter.speed / counter.to;
            
            const timer = setInterval(() => {
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < counter.to) {
                        newCounts[index] += 1;
                    } else {
                        clearInterval(timer);
                    }
                    return newCounts;
                });
            }, incrementInterval);
            
            return timer;
        });
    
        return () => timers.forEach(clearInterval);
    }, [startCounting, counters]);

    return (
        <div className="relative py-12 h-height-map">
            <div className="absolute inset-0 bg-[#0e2244] z-[0]"></div>
            <img className='absolute w-full object-cover h-full top-[1px]' src={assets.map} alt='' />
            <div className='absolute w-full px-[15px] py-12 mx-auto'>
                <div className='max-w-[600px] mb-12 mx-auto text-center'>
                    <p className='text-[32px] font-greatVibes text-main'>Statistics</p>
                    <h3 className='font-Ubuntu text-[38px] leading-[46px] text-white'>We have over 10 years Experience</h3>
                </div>
                <div ref={counterRef} className='py-6 flex flex-wrap items-center justify-center mx-auto'>
                    {counters.map((counter, index) => (
                        <div key={index} className='px-3 sm:w-1/4 bb:w-1/2 bb:pt-4 text-center'>
                            <FontAwesomeIcon className='text-white text-[32px] font-black leading-[80px] p-[25px] rounded-[50%] bg-[#ffffff2b]' icon={counter.icon} />
                            <div className='text-5xl font-bold leading-[72px] text-white'>{counts[index]}<span>+</span></div>
                            <div className='text-[#fbfbfb] text-lg font-normal'>{counters[index].des}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Map