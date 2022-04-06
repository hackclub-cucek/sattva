import React, { useState, useEffect } from 'react'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'
import DesktopArrow from '../public/images/desk_arrow.svg';
import MobileArrow from '../public/images/mobile_arrow.svg';

export default function Banner() {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("April 11,2022").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).toString().slice(-2);
            const hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().slice(-2);
            const minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString().slice(-2);
            const seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).toString().slice(-2);
            if (distance < 0) {
                clearInterval(interval.current);
            }
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        });
    }

    useEffect(() => {
        startTimer();
    });

    return (
        <div className="bg-black text-light h-screen bg-center lg:bg-contain bg-cover bg-no-repeat" style={{ backgroundImage: `url(/images/banner.png)` }}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='flex lg:space-x-4 space-x-2 font-roboto '>
                    <div className='flex flex-col text-center lg:w-[171px] lg:h-[171px] w-20 h-20 bg-black bg-opacity-60 rounded-full justify-center items-center'>
                        <h2 className='lg:text-7xl text-4xl font-bold'>{days}</h2>
                        <p className='lg:text-xl text-xs font-normal uppercase'>days</p>
                    </div>
                    <div className='flex flex-col text-center lg:w-[171px] lg:h-[171px] w-20 h-20 bg-black bg-opacity-60 rounded-full justify-center items-center'>
                        <h2 className='lg:text-7xl text-4xl font-bold'>{hours}</h2>
                        <p className='lg:text-xl text-xs font-normal uppercase'>hours</p>
                    </div>
                    <div className='flex flex-col text-center lg:w-[171px] lg:h-[171px] w-20 h-20 bg-black bg-opacity-60 rounded-full justify-center items-center'>
                        <h2 className='lg:text-7xl text-4xl font-bold'>{minutes}</h2>
                        <p className='lg:text-xl text-xs font-normal uppercase'>minutes</p>
                    </div>
                    <div className='flex flex-col text-center lg:w-[171px] lg:h-[171px] w-20 h-20 bg-black bg-opacity-60 rounded-full justify-center items-center'>
                        <h2 className='lg:text-7xl text-4xl font-bold'>{seconds}</h2>
                        <p className='lg:text-xl text-xs font-normal uppercase'>seconds</p>
                    </div>
                </div>
                <div className='flex flex-col text-center lg:pt-14 pt-8'>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-plaster font-normal text-5xl lg:text-9xl'>Sattva’22</h1>
                        <p className='font-roboto font-normal text-sm lg:text-3xl uppercase tracking-wildestest'>Registration is now open</p>
                    </div>
                </div>
                <div className='flex flex-col absolute text-center object-bottom lg:bottom-10 bottom-2'>
                    <svg className='lg:flex hidden' width="36" height="76" viewBox="0 0 36 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0001 59.758L25.4251 52.333L27.5461 54.454L18.0001 64L8.4541 54.454L10.5751 52.333L18.0001 59.758Z" fill="white" />
                        <path d="M18.0001 39.758L25.4251 32.333L27.5461 34.454L18.0001 44L8.4541 34.454L10.5751 32.333L18.0001 39.758Z" fill="white" />
                        <path d="M18.0001 19.758L25.4251 12.333L27.5461 14.454L18.0001 24L8.4541 14.454L10.5751 12.333L18.0001 19.758Z" fill="white" />
                    </svg>
                    <svg className='flex lg:hidden' width="24" height="49" viewBox="0 0 24 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0002 38.172L16.9502 33.222L18.3642 34.636L12.0002 41L5.63623 34.636L7.05023 33.222L12.0002 38.172Z" fill="white" />
                        <path d="M12.0002 25.672L16.9502 20.722L18.3642 22.136L12.0002 28.5L5.63623 22.136L7.05023 20.722L12.0002 25.672Z" fill="white" />
                        <path d="M12.0002 13.172L16.9502 8.22198L18.3642 9.63598L12.0002 16L5.63623 9.63598L7.05023 8.22198L12.0002 13.172Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
