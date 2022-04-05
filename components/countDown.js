import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

export default function CountDown() {
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
        <div className="bg-black text-white overflow-hidden h-screen">
            <div className='flex flex-col xl:space-y-16 space-y-7 relative items-center font-montserrat z-50 lg:absolute xl:px-20 px-4 xl:pt-36 pt-24'>
                <div className='flex lg:space-x-4 space-x-2'>
                    <div className='flex-col space-y-2 xl:py-6 py-3 xl:px-8 px-4 border xl:w-[168px] xl:h-[168px] w-20 h-20 rounded-sm border-white text-center'>
                        <h2 className='font-bold xl:text-7xl sm:text-4xl text-2xl'>{days}</h2>
                        <p className='font-normal xl:text-xl text-[9px]'>Days</p>
                    </div>
                    <div className='flex-col space-y-2 xl:py-6 py-3 xl:px-8 px-4 border xl:w-[168px] xl:h-[168px] w-20 h-20 rounded-sm border-white text-center'>
                        <h2 className='font-bold xl:text-7xl sm:text-4xl text-2xl'>{hours}</h2>
                        <p className='font-normal xl:text-xl text-[9px]'>Hours</p>
                    </div>
                    <div className='flex-col space-y-2 xl:py-6 py-3 xl:px-8 px-4 border xl:w-[168px] xl:h-[168px] w-20 h-20 rounded-sm border-white text-center'>
                        <h2 className='font-bold xl:text-7xl sm:text-4xl text-2xl'>{minutes}</h2>
                        <p className='font-normal xl:text-xl text-[9px]'>Minutes</p>
                    </div>
                    <div className='flex-col space-y-2 xl:py-6 py-3 xl:px-8 px-4 border xl:w-[168px] xl:h-[168px] w-20 h-20 rounded-sm border-white text-center'>
                        <h2 className='font-bold xl:text-7xl sm:text-4xl text-2xl'>{seconds}</h2>
                        <p className='font-normal xl:text-xl text-[9px]'>Seconds</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex-col space-y-4 text-center items-center justify-center'>
                        <h1 className='font-ahsing uppercase xl:text-9xl md:text-8xl sm:text-7xl text-5xl'>sattva&apos;22</h1>
                        <p className='font-montserrat xl:text-xl text-sm font-normal tracking-wildest'>Registration Open</p>
                        <div className='flex font-montserrat xl:text-xl text-sm font-normal text-center items-center justify-center'>
                            <span>
                                <ArrowDownSLineIcon className='w-6 h-6' />
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full h-screen z-10">
                <Image
                    src="/images/countdown_bg.png"
                    alt="Countdown"
                    layout="fill"
                    objectFit="contain"
                    className='lg:object-right object-right-bottom'
                />
            </div>
            <div className="w-full hidden xl:flex h-screen">
                <Image
                    src="/images/overlayer_bg.png"
                    alt="Countdown"
                    layout="fill"
                    objectFit="contain"
                    className='object-left'
                />
            </div>
        </div>
    )
}
