import React from 'react'

export default function ResultBanner() {

    return (
        <div className="bg-black text-light h-screen lg:bg-right bg-center lg:bg-contain bg-cover bg-no-repeat" style={{ backgroundImage: `url(/images/banner3.png)` }}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='flex flex-col text-center lg:pt-14 pt-8'>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='font-plaster font-normal text-5xl lg:text-7xl'>Sattva’22</h1>
                        <p className='font-roboto font-bold text-5xl lg:text-7xl'>Results</p>
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
